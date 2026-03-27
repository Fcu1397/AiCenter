<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
    <!-- Hero Banner -->
    <div class="text-center py-16 bg-blue-50 rounded-2xl">
      <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
        負責任AI執行中心緣起
      </h1>
      <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
        建立可信任的醫療AI服務，確保醫療安全與病患權益
      </p>
    </div>

    <!-- 宗旨段落 -->
    <section>
      <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">成立宗旨</h2>
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6 text-lg leading-relaxed text-gray-700">
          有鑑於人工智慧技術在醫療領域的快速發展與應用，為了確保AI系統在輔助臨床診療時的安全性、有效性與符合倫理規範，本院特設立「負責任AI執行中心」。我們致力於建立完善的AI生命週期管理機制，從模型開發、驗證、導入到持續監控，提供全面的評估與建議，保障病患隱私與數據安全，並協助醫療人員在知情且可解釋的前提下，善用AI工具提升整體醫療服務品質。
        </div>
      </div>
    </section>

    <!-- 醫療AI面臨的七大風險 (SEVEN_RISKS) -->
    <section>
      <h2 class="text-3xl font-bold text-center mb-8">防範醫療AI的七大倫理風險</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <a-card
          v-for="risk in SEVEN_RISKS"
          :key="risk.key"
          class="hover:shadow-lg transition-shadow"
          :style="{ borderTop: '4px solid ' + risk.color }"
        >
          <template #title>
            <span :style="{ color: risk.color }" class="text-xl font-bold">
              {{ risk.label }}
            </span>
          </template>
          <p class="text-gray-600">{{ risk.desc }}</p>
        </a-card>
      </div>
    </section>

    <!-- 法規遵循 -->
    <section>
      <h2 class="text-3xl font-bold text-center mb-8">遵循國家法規與指南框架</h2>
      <a-tabs v-model:activeKey="activeKey" centered type="card">
        <a-tab-pane key="1" tab="《人工智慧基本法》草案與《負責任AI實施指南》">
          <div class="p-6 bg-white border border-gray-200 rounded-b-lg">
            <h3 class="text-xl font-bold mb-4">《人工智慧基本法》草案與衛福部指南</h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              配合行政院《人工智慧基本法》草案與衛福部《負責任AI實施指南》，本中心致力於提高AI在臨床應用的透明度、可解釋性與公平性，增進公眾信任，確保所有系統的開發與應用皆符合最高倫理標準。
            </p>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="醫療器材管理法">
          <div class="p-6 bg-white border border-gray-200 rounded-b-lg">
            <h3 class="text-xl font-bold mb-4">醫療器材管理法 (醫療器材軟體 SaMD)</h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              AI醫療軟體若符合醫療器材定義，必須依法進行查驗登記。本中心將協助確認AI產品之風險分級（Class I~III），並確保其開發與測試流程符合相關查驗登記指引要求。
            </p>
          </div>
        </a-tab-pane>
        <a-tab-pane key="3" tab="個人資料保護法">
          <div class="p-6 bg-white border border-gray-200 rounded-b-lg">
            <h3 class="text-xl font-bold mb-4">個人資料保護法</h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              開發與運作AI模型所需之訓練與驗證資料，必須落實去識別化與匿名化機制，並取得必要之合法授權與同意，嚴格防範資料外洩，保障病患個人隱私不受侵犯。
            </p>
          </div>
        </a-tab-pane>
        <a-tab-pane key="4" tab="醫療法">
          <div class="p-6 bg-white border border-gray-200 rounded-b-lg">
            <h3 class="text-xl font-bold mb-4">醫療法</h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              AI系統僅作為臨床醫療之「輔助」工具，最終診斷與處置決定權及責任仍歸屬於臨床醫師。應用AI不得違反醫療常規，且醫療機構負有督導管理之責。
            </p>
          </div>
        </a-tab-pane>
      </a-tabs>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SEVEN_RISKS } from '@/constants/risks'

const activeKey = ref('1')
</script>
