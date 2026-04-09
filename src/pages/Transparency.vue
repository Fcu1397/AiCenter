<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
    <div class="bg-background-card p-8 rounded-xl shadow-sm border border-line flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        <h1 class="text-3xl font-bold text-text-primary">透明性實時查詢介面</h1>
        <p class="text-text-secondary mt-2">查詢本院使用中 AI 產品之九大透明性原則揭露聲明</p>
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
      class="bg-background-card rounded-xl shadow-sm border border-line"
      :pagination="{ pageSize: 10 }"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'risk_level'">
          <RiskBadge :level="record.risk_level" />
        </template>
        <template v-if="column.key === 'is_active'">
          <a-tag :color="record.is_active ? '#10b981' : '#3b82f6'">
            {{ record.is_active ? '運行中' : '已停用' }}
          </a-tag>
        </template>
        <template v-if="column.key === 'action'">
          <a-button type="link" @click="showDrawer(record)" :icon="h(FileSearchOutlined)" class="text-primary hover:text-primary-hover">
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
      class="bg-background-card text-text-primary"
    >
      <template #extra>
        <a-button type="primary" @click="exportPDF" class="bg-accent hover:bg-accent-hover border-none text-white">
          匯出 PDF / 列印
        </a-button>
      </template>
      <div v-if="selectedProduct" class="space-y-6" id="transparency-report">
        <div class="bg-background-page p-4 rounded-lg flex justify-between items-center border border-line">
          <div>
            <div class="text-sm text-text-secondary">負責科別</div>
            <div class="font-bold text-text-primary">{{ selectedProduct.department }}</div>
          </div>
          <div>
            <div class="text-sm text-text-secondary">更新日期</div>
            <div class="font-bold text-text-primary">{{ selectedProduct.updated_at }}</div>
          </div>
        </div>

        <div>
          <h3 class="font-bold text-lg mb-4 border-b border-line pb-2 text-text-primary">九大透明性原則揭露</h3>
          <div v-for="rule in NINE_PRINCIPLES" :key="rule.no" class="mb-6">
            <h4 class="font-semibold text-text-primary mb-2">
              <span class="text-primary">{{ rule.no }}.</span> {{ rule.name }}
            </h4>
            <div class="bg-background-page p-4 rounded text-text-secondary text-sm leading-relaxed border border-line">
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
  const contents: Record<number, string> = {
    1: '本AI模型旨在透過深度學習技術，輔助臨床醫師快速判讀心電圖（ECG），協助辦識心律不整、心肌梗塞等心血管疾病的潛在風險，減少人工判讀的誤差並提升醫療效率。',
    2: '系統接收標準的12導程心電圖數據（數位格式），透過卷積神經網絡（CNN）進行分析，最終輸出各類心律異常的機率分布，並標示可能的異常波段供醫師參考。',
    3: '本系統僅作為臨床醫師決策之輔助工具，不得單獨作為最終診斷依據。不適用於18歲以下兒童的心電圖分析，且在心電圖訊號雜訊過大時，可能會產生誤判。',
    4: '模型訓練資料由超過50萬筆經過去識別化的歷史心電圖數據組成，輸入特徵涵蓋了各導程的電壓變化與時間序列資料。使用深度學習框架開發。',
    5: '訓練數據來源涵蓋了不同性別、年齡層與多種慢性病史的患者，以降低模型在特定人口群體中產生偏誤。同時在開發過程中加入均等誤差率評測，確保對各群體具備同等靈敏度。',
    6: '本模型經過多間醫學中心進行跨院的聯合驗證，對超過5萬份獨立測試心電圖資料進行回溯性驗證。結果顯示其敏感度與特異度均達到90%以上，符合臨床預期。',
    7: '依據內部與外部測試結果，模型對於心房顫動(AFib)的檢測 AUC 達0.95，對急性心肌梗塞(STEMI)的靈敏度為 92%，特異度為 94%。',
    8: '系統部署於院內醫療系統中，由醫療資訊部門進行每月的例行維護與效能監控。若出現運作異常或判讀偏差超過閾值，系統會自動發布警示以供人工介入檢修。',
    9: '本院預計每半年收集新產生的去識別化臨床心電圖數據，對模型進行持續監控與驗證。針對新資料集的效能與公平性評估，皆需通過委員會審議。'
  }
  return contents[no] || '目前尚無相關說明'
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
