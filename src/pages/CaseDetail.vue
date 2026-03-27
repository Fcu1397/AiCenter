<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-if="product">

    <!-- 標題與基本資訊 -->
    <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8 relative">
      <a-button @click="router.back()" class="absolute top-4 right-4">
        <template #icon><ArrowLeftOutlined /></template>返回
      </a-button>
      <div class="flex items-center space-x-4 mb-4">
        <h1 class="text-4xl font-bold text-gray-900">{{ product.product_name }}</h1>
        <RiskBadge :level="product.risk_level" />
        <a-tag :color="product.is_active ? 'green' : 'red'">{{ product.is_active ? '運行中' : '已停用' }}</a-tag>
      </div>
      <div class="flex flex-wrap gap-4 text-gray-500 mb-6">
        <span><strong>科別：</strong>{{ product.department }}</span>
        <span><strong>版本：</strong>{{ product.version }}</span>
        <span><strong>上線日期：</strong>{{ product.launch_date }}</span>
        <span><strong>最後更新：</strong>{{ product.updated_at }}</span>
      </div>
      <p class="text-lg text-gray-700 leading-relaxed">{{ product.description }}</p>
    </div>

    <!-- 四大素材區塊 -->
    <div class="space-y-8">

      <!-- 區塊 1 & 2: 影片與成效指標 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- 影片區塊 -->
        <section class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <h2 class="text-2xl font-bold mb-4 flex items-center"><PlayCircleOutlined class="mr-2 text-blue-500"/> 使用情境介紹</h2>
          <div class="flex-grow">
            <Placeholder v-if="!product.video_url" text="產品介紹影片/操作 Demo" />
            <div v-else class="aspect-w-16 aspect-h-9 w-full h-64 bg-gray-900 rounded-lg flex items-center justify-center text-white">
              <FileOutlined class="text-4xl" />
              <span class="ml-2">此處應嵌入 {{ product.video_url }}</span>
            </div>
          </div>
        </section>

        <!-- 成效指標 -->
        <section class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 class="text-2xl font-bold mb-4 flex items-center"><LineChartOutlined class="mr-2 text-green-500"/> 臨床成效指標</h2>
          <div class="space-y-6">
            <div class="grid grid-cols-2 gap-4 text-center">
              <div class="bg-blue-50 p-4 rounded-lg">
                <div class="text-gray-500 mb-1">累積處理案例數</div>
                <div class="text-2xl font-bold text-blue-600">{{ MOCK_METRICS.total_cases.toLocaleString() }}</div>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <div class="text-gray-500 mb-1">輔助服務次數</div>
                <div class="text-2xl font-bold text-green-600">{{ MOCK_METRICS.service_count.toLocaleString() }}</div>
              </div>
            </div>

            <div>
              <h3 class="font-bold mb-2">準確率改善 (導入前 vs 導入後)</h3>
              <a-progress :percent="MOCK_METRICS.accuracy_before" stroke-color="#d9d9d9" :format="(p: number) => `前 ${p}%`" />
              <a-progress :percent="MOCK_METRICS.accuracy_after" stroke-color="#52c41a" class="mt-2" :format="(p: number) => `後 ${p}%`" />
            </div>

            <div>
              <h3 class="font-bold mb-2">平均處理時間 (TAT) 改善</h3>
              <div class="flex justify-between items-center text-gray-700">
                <span>導入前：{{ MOCK_METRICS.tat_before_min }} 分鐘</span>
                <ArrowRightOutlined class="text-gray-400" />
                <span class="text-green-600 font-bold">導入後：{{ MOCK_METRICS.tat_after_min }} 分鐘</span>
              </div>
            </div>
            <div class="text-right text-xs text-gray-400">數據更新日期：{{ MOCK_METRICS.record_date }}</div>
          </div>
        </section>
      </div>

      <!-- 區塊 3: 九大透明原則 -->
      <section class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 class="text-2xl font-bold mb-4 flex items-center"><FileSearchOutlined class="mr-2 text-purple-500"/> 透明度及可解釋性揭露</h2>
        <a-descriptions bordered :column="1">
          <a-descriptions-item v-for="t in MOCK_TRANSPARENCY" :key="t.principle_no" :label="`${t.principle_no}. ${t.principle_name}`">
            {{ t.content }}
          </a-descriptions-item>
        </a-descriptions>
      </section>

      <!-- 區塊 4: IRB或相關文件PDF佔位 -->
      <section class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 class="text-2xl font-bold mb-4 flex items-center"><SafetyCertificateOutlined class="mr-2 text-orange-500"/> IRB 核准與相關認證文件</h2>
        <Placeholder text="PDF 預覽區塊：放置該專案之倫理審查或資安報告結果" />
      </section>

    </div>
  </div>

  <div v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center text-gray-500">
    <h2 class="text-2xl mb-4">找不到該專案</h2>
    <a-button type="primary" @click="router.push('/cases')">返回列表</a-button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { MOCK_PRODUCTS } from '@/mock/products'
import { MOCK_METRICS } from '@/mock/metrics'
import { MOCK_TRANSPARENCY } from '@/mock/transparency'
import RiskBadge from '@/components/shared/RiskBadge.vue'
import Placeholder from '@/components/shared/Placeholder.vue'
import {
  ArrowLeftOutlined,
  PlayCircleOutlined,
  LineChartOutlined,
  FileSearchOutlined,
  SafetyCertificateOutlined,
  FileOutlined,
  ArrowRightOutlined
} from '@ant-design/icons-vue'

const route = useRoute()
const router = useRouter()

const product = computed(() => {
  const id = Number(route.params.id)
  return MOCK_PRODUCTS.find(p => p.product_id === id)
})
</script>
