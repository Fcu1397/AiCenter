<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
    <div class="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">AI 產品案例展示</h1>
        <p class="text-gray-500 mt-2">瀏覽全院已導入且穩定運行之優良 AI 專案</p>
      </div>
      <div class="mt-4 md:mt-0 flex items-center space-x-4">
        <span class="font-medium text-gray-700">科別篩選：</span>
        <a-select
          v-model:value="selectedDept"
          style="width: 200px"
          :options="departmentOptions"
          placeholder="全部科別"
          allowClear
        />
      </div>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <a-card
        v-for="product in filteredProducts"
        :key="product.product_id"
        hoverable
        class="flex flex-col h-full rounded-xl overflow-hidden shadow-sm"
        @click="goToDetail(product.product_id)"
      >
        <div class="mb-4 flex justify-between items-start">
          <a-tag color="blue">{{ product.department }}</a-tag>
          <RiskBadge :level="product.risk_level" />
        </div>
        <h2 class="text-xl font-bold mb-2 text-gray-900">{{ product.product_name }}</h2>
        <p class="text-gray-600 flex-grow line-clamp-3 mb-4">
          {{ product.description }}
        </p>
        <div class="pt-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
          <span>版本：{{ product.version }}</span>
          <span>上線日：{{ product.launch_date }}</span>
        </div>
      </a-card>

      <!-- Empty state -->
      <div v-if="filteredProducts.length === 0" class="col-span-full text-center py-12 text-gray-500 bg-white rounded-xl border border-gray-100">
        無符合篩選條件的產品。
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { MOCK_PRODUCTS } from '@/mock/products'
import RiskBadge from '@/components/shared/RiskBadge.vue'

const router = useRouter()
const selectedDept = ref<string | undefined>(undefined)

const departmentOptions = computed(() => {
  const depts = new Set(MOCK_PRODUCTS.map(p => p.department))
  return [{ value: undefined, label: '全部科別' }, ...Array.from(depts).map(d => ({ value: d, label: d }))]
})

const filteredProducts = computed(() => {
  if (!selectedDept.value) return MOCK_PRODUCTS
  return MOCK_PRODUCTS.filter(p => p.department === selectedDept.value)
})

const goToDetail = (id: number) => {
  router.push(`/cases/${id}`)
}
</script>
