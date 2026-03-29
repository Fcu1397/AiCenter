<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
    <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        <h1 class="text-3xl font-bold text-primary">透明性實時查詢介面</h1>
        <p class="text-gray-500 mt-2">查詢本院使用中 AI 產品之九大透明性原則揭露聲明</p>
      </div>
      <div class="flex gap-4">
        <a-input-search
          v-model:value="searchQuery"
          placeholder="搜尋產品名稱..."
          style="width: 250px"
        />
        <a-select
          v-model:value="filterDept"
          :options="departmentOptions"
          placeholder="全部科別"
          style="width: 150px"
          allowClear
        />
      </div>
    </div>

    <!-- 產品列表表格 -->
    <a-table
      :dataSource="filteredData"
      :columns="columns"
      rowKey="product_id"
      class="bg-white rounded-xl shadow-sm border border-gray-100"
      :pagination="{ pageSize: 10 }"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'risk_level'">
          <RiskBadge :level="record.risk_level" />
        </template>
        <template v-if="column.key === 'is_active'">
          <a-tag :color="record.is_active ? 'green' : 'red'">
            {{ record.is_active ? '運行中' : '已停用' }}
          </a-tag>
        </template>
        <template v-if="column.key === 'action'">
          <a-button type="link" @click="showDrawer(record)" :icon="h(FileSearchOutlined)">
            檢視原則
          </a-button>
        </template>
      </template>
    </a-table>

    <!-- 九大原則抽屜 (Drawer) -->
    <a-drawer
      v-model:open="drawerVisible"
      :title="selectedProduct?.product_name || '透明度報告'"
      placement="right"
      width="600"
    >
      <template #extra>
        <a-button type="primary" @click="exportPDF">
          匯出 PDF / 列印
        </a-button>
      </template>
      <div v-if="selectedProduct" class="space-y-6" id="transparency-report">
        <div class="bg-blue-50 p-4 rounded-lg flex justify-between items-center">
          <div>
            <div class="text-sm text-gray-500">負責科別</div>
            <div class="font-bold">{{ selectedProduct.department }}</div>
          </div>
          <div>
            <div class="text-sm text-gray-500">更新日期</div>
            <div class="font-bold">{{ selectedProduct.updated_at }}</div>
          </div>
        </div>

        <div>
          <h3 class="font-bold text-lg mb-4 border-b pb-2 text-primary">九大透明性原則揭露</h3>
          <div v-for="rule in NINE_PRINCIPLES" :key="rule.no" class="mb-6">
            <h4 class="font-semibold text-primary mb-2">
              {{ rule.no }}. {{ rule.name }}
            </h4>
            <div class="bg-gray-50 p-4 rounded text-gray-700 text-sm leading-relaxed border border-gray-200">
              {{ getMockContent(rule.no) }}
            </div>
          </div>
        </div>
      </div>
    </a-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, h } from 'vue'
import { MOCK_PRODUCTS } from '@/mock/products'
import type { Product } from '@/types'
import RiskBadge from '@/components/shared/RiskBadge.vue'
import { FileSearchOutlined } from '@ant-design/icons-vue'
import { NINE_PRINCIPLES } from '@/constants/transparency'

const searchQuery = ref('')
const filterDept = ref<string | undefined>(undefined)

const drawerVisible = ref(false)
const selectedProduct = ref<Product | null>(null)

const columns = [
  { title: '產品名稱', dataIndex: 'product_name', key: 'product_name' },
  { title: '科別', dataIndex: 'department', key: 'department', width: 120 },
  { title: '風險等級', dataIndex: 'risk_level', key: 'risk_level', width: 100, align: 'center' as const },
  { title: '狀態', dataIndex: 'is_active', key: 'is_active', width: 100, align: 'center' as const },
  { title: '最後更新日', dataIndex: 'updated_at', key: 'updated_at', width: 120 },
  { title: '透明度報告', key: 'action', width: 120, align: 'center' as const }
]

const departmentOptions = computed(() => {
  const depts = new Set(MOCK_PRODUCTS.map(p => p.department))
  return Array.from(depts).map(d => ({ value: d, label: d }))
})

const filteredData = computed(() => {
  return MOCK_PRODUCTS.filter(p => {
    const matchName = p.product_name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchDept = filterDept.value ? p.department === filterDept.value : true
    return matchName && matchDept
  })
})

const showDrawer = (product: Product) => {
  selectedProduct.value = product
  drawerVisible.value = true
}

const getMockContent = (no: number) => {
  return `此處為原則 ${no} 的對應說明內容...`
}

const exportPDF = () => {
  window.print()
}
</script>

<style scoped>
@media print {
  body * {
    visibility: hidden;
  }
  #transparency-report, #transparency-report * {
    visibility: visible;
  }
  #transparency-report {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
