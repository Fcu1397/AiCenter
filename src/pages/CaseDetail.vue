<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-if="product">
    <!-- 麵包屑 -->
    <a-breadcrumb class="mb-4">
      <a-breadcrumb-item><router-link to="/" class="text-primary hover:text-primary-hover">AI中心</router-link></a-breadcrumb-item>
      <a-breadcrumb-item><router-link to="/cases" class="text-primary hover:text-primary-hover">AI實例</router-link></a-breadcrumb-item>
      <a-breadcrumb-item class="text-text-primary">{{ product.product_name }}</a-breadcrumb-item>
    </a-breadcrumb>

    <!-- Tab 切換 -->
    <a-tabs v-model:activeKey="activeKey" size="large" class="bg-background-card p-4 rounded-xl shadow-sm border border-line">
      <!-- Tab 1: 介紹文章 -->
      <a-tab-pane key="1" tab="介紹文章">
        <div class="p-4 space-y-8">
          <h2 class="text-2xl font-bold text-text-primary">{{ product.product_name }}</h2>
          <p class="text-lg text-text-secondary"><strong>適用科別：</strong>{{ product.department }}</p>
          <Placeholder type="image" text="📷 請提供：產品截圖或示意圖" />
          <h3 class="text-xl font-bold text-text-primary border-b border-line pb-2">AI表現指標成果</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div class="bg-background-page p-4 rounded-lg border border-line">
              <div class="text-text-secondary">導入AI件數</div>
              <div class="text-2xl font-bold text-text-primary">【請填入】</div>
            </div>
            <div class="bg-background-page p-4 rounded-lg border border-line">
              <div class="text-text-secondary">使用場域</div>
              <div class="text-2xl font-bold text-text-primary">【請填入】</div>
            </div>
            <div class="bg-background-page p-4 rounded-lg border border-line">
              <div class="text-text-secondary">服務人數</div>
              <div class="text-2xl font-bold text-text-primary">【請填入】</div>
            </div>
            <div class="bg-background-page p-4 rounded-lg border border-line">
              <div class="text-text-secondary">診斷正確率提升</div>
              <div class="text-2xl font-bold text-primary">【請填入】%</div>
            </div>
            <div class="bg-background-page p-4 rounded-lg col-span-2 border border-line">
              <div class="text-text-secondary">診斷周轉時間縮短</div>
              <div class="text-2xl font-bold text-primary">【請填入】分鐘/小時</div>
            </div>
             <div class="bg-background-page p-4 rounded-lg col-span-2 border border-line">
              <div class="text-text-secondary">其他使用效益</div>
              <div class="text-2xl font-bold text-text-primary">【請填入】</div>
            </div>
          </div>
        </div>
      </a-tab-pane>

      <!-- Tab 2: AI實例影片 -->
      <a-tab-pane key="2" tab="AI實例影片">
        <div class="p-4 space-y-4">
          <Placeholder type="video" text="🎬 請提供：YouTube網址或影片檔" />
          <p class="text-text-secondary">【請填入：影片簡介】</p>
        </div>
      </a-tab-pane>

      <!-- Tab 3: 九大透明性原則定義表 -->
      <a-tab-pane key="3" tab="九大透明性原則定義表">
        <div class="p-4">
          <a-table
            :dataSource="transparencyData"
            :columns="transparencyColumns"
            :pagination="false"
            bordered
            rowKey="no"
          />
        </div>
      </a-tab-pane>

      <!-- Tab 4: 可解釋性分析報告 -->
      <a-tab-pane key="4" tab="可解釋性分析報告">
        <div class="p-4 space-y-4">
          <Placeholder type="report" text="📄 請提供：可解釋性分析報告（PDF）" />
          <p class="text-text-secondary">需呈現模型決策依據，例如 SHAP 值、熱力圖、特徵重要性排序。</p>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>

  <div v-else class="text-center py-16">
    <a-spin size="large" />
    <p class="mt-4 text-text-secondary">資料載入中...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { MOCK_PRODUCTS } from '@/mock/products'
import type { Product } from '@/types'
import Placeholder from '@/components/shared/Placeholder.vue'
import { NINE_PRINCIPLES } from '@/constants/transparency'

const route = useRoute()
const activeKey = ref('1')
const product = ref<Product | null>(null)

onMounted(() => {
  const id = Number(route.params.id)
  product.value = MOCK_PRODUCTS.find(p => p.product_id === id) || null
})

const transparencyColumns = [
  { title: '#', dataIndex: 'no', key: 'no', width: 50 },
  { title: '透明性原則', dataIndex: 'name', key: 'name' },
  { title: '本產品之對應說明', dataIndex: 'description', key: 'description' },
]

const transparencyData = computed(() => {
  return NINE_PRINCIPLES.map(p => ({
    ...p,
    description: '【請填入】'
  }))
})
</script>
