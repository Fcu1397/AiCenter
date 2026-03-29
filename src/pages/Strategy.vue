<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-primary mb-4">三大落地實施策略</h1>
    </div>

    <a-tabs v-model:activeKey="activeKey" centered size="large">
      <a-tab-pane key="1" tab="策略一：設置AI管理委員會與制度規章">
        <div class="bg-white p-8 rounded-xl shadow-lg mt-4">
          <h2 class="text-2xl font-bold text-primary mb-6">設置AI管理委員會與制度規章</h2>
          <ul class="space-y-4 text-gray-700 leading-relaxed text-lg">
            <li class="flex items-start"><span class="text-accent mr-3 mt-1">✔</span>規範資安、個資與AI應用之相關管理措施</li>
            <li class="flex items-start"><span class="text-accent mr-3 mt-1">✔</span>委員會組成涵蓋臨床、資訊、法規及倫理專家</li>
            <li class="flex items-start"><span class="text-accent mr-3 mt-1">✔</span>明確訂定審查權責及決議執行流程</li>
          </ul>
        </div>
      </a-tab-pane>

      <a-tab-pane key="2" tab="策略二：強化透明性與揭露原則">
        <div class="bg-white p-8 rounded-xl shadow-lg mt-4">
          <h2 class="text-2xl font-bold text-primary mb-6">強化透明性與揭露原則</h2>
          <p class="text-lg text-gray-700 mb-6">所有AI系統提供運作邏輯、數據來源與風險說明，並嚴格遵守九大透明性原則：</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="p in NINE_PRINCIPLES" :key="p.no" class="p-4 bg-gray-50 rounded border border-gray-200">
              <span class="font-bold text-primary">{{ p.no }}. {{ p.name }}</span>
            </div>
          </div>
        </div>
      </a-tab-pane>

      <a-tab-pane key="3" tab="策略三：建立AI生命週期管理機制">
        <div class="bg-white p-8 rounded-xl shadow-lg mt-4">
          <h2 class="text-2xl font-bold text-primary mb-6">建立AI生命週期管理機制</h2>
          <ul class="space-y-4 text-gray-700 leading-relaxed text-lg">
            <li class="flex items-start"><span class="text-accent mr-3 mt-1">✔</span>AI落地後持續監測效能</li>
            <li class="flex items-start"><span class="text-accent mr-3 mt-1">✔</span>透過本地資料定期測試與重新訓練</li>
            <li class="flex items-start"><span class="text-accent mr-3 mt-1">✔</span>再驗證週期：每 6～12 個月執行一次</li>
            <li class="flex items-start"><span class="text-accent mr-3 mt-1">✔</span>未達標準時啟動模型調校或停用程序</li>
          </ul>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NINE_PRINCIPLES } from '@/constants/transparency'

const activeKey = ref('1')
</script>
