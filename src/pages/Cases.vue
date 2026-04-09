<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
    <div class="flex flex-col md:flex-row justify-between items-center bg-background-card p-6 rounded-xl shadow-sm border border-line">
      <div>
        <h1 class="text-3xl font-bold text-text-primary">AI實例總覽</h1>
        <p class="text-text-secondary mt-2">瀏覽全院已導入且穩定運行之優良 AI 專案</p>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <a-card
        v-for="product in REAL_PRODUCTS"
        :key="product.product_id"
        hoverable
        class="bg-background-card flex flex-col h-full rounded-xl overflow-hidden shadow-sm transition-transform transform hover:-translate-y-1 border-line hover:shadow-md"
        @click="goToDetail(product.product_id)"
      >
        <div class="mb-4 flex justify-between items-start">
          <a-tag :color="product.is_active ? '#10b981' : '#3b82f6'" class="text-sm">
            {{ product.is_active ? '使用中' : '再驗證中' }}
          </a-tag>
        </div>
        <h2 class="text-2xl font-bold mb-4 text-text-primary">{{ product.product_name }}</h2>
        <p class="text-text-secondary">{{ product.department }}</p>
        <div class="flex-grow"></div>
      </a-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToDetail = (id: number) => {
  router.push(`/cases/${id}`)
}

const REAL_PRODUCTS = [
  {
    product_id: 1,
    product_name: 'AI心電圖輔助判讀',
    department: '內科',
    is_active: true,
  },
]
</script>
