<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">策略規劃</h1>
      <p class="text-xl text-gray-600">從發展、透明度到全生命週期的三大核心策略</p>
    </div>

    <!-- 3策略 ASteps (Vertical) -->
    <section>
      <h2 class="text-2xl font-bold mb-6">發展策略藍圖</h2>
      <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <a-steps direction="vertical" :current="3">
          <a-step title="第一階段：設置AI管理委員會與制度規章">
            <template #description>
              <div class="mt-2 mb-4 text-gray-600">
                規範資安、個資與AI應用之相關管理措施，全面盤點院內既有AI專案，並建立統一的風險分級與審查申請流程。
              </div>
            </template>
          </a-step>
          <a-step title="第二階段：強化透明性與揭露原則">
            <template #description>
              <div class="mt-2 mb-4 text-gray-600">
                所有AI系統上線皆應提供運作邏輯、數據來源與風險說明，嚴格遵守「九大透明性原則」，並透過臨床驗證確保AI效能。
              </div>
            </template>
          </a-step>
          <a-step title="第三階段：建立AI生命週期管理機制">
            <template #description>
              <div class="mt-2 mb-4 text-gray-600">
                AI落地後需持續監測效能指標，透過本地真實世界數據(RWD)定期測試、動態監控與重新訓練，確保長期的準確度與公平性。
              </div>
            </template>
          </a-step>
        </a-steps>
      </div>
    </section>

    <!-- NINE_PRINCIPLES表格 -->
    <section>
      <h2 class="text-2xl font-bold mb-6">策略一核心：落實九大透明性原則</h2>
      <a-table
        :dataSource="NINE_PRINCIPLES"
        :columns="columns"
        :pagination="false"
        bordered
        rowKey="no"
        class="bg-white"
      />
    </section>

    <!-- ATimeline (生命週期) -->
    <section>
      <h2 class="text-2xl font-bold mb-6">策略二核心：AI 產品全生命週期管理</h2>
      <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <a-timeline>
          <a-timeline-item color="blue">
            <p class="font-bold text-lg">階段 1: 規劃與可行性評估</p>
            <p class="text-gray-600">定義臨床需求、資料來源盤點、初步法規與倫理風險評估。</p>
          </a-timeline-item>
          <a-timeline-item color="blue">
            <p class="font-bold text-lg">階段 2: 系統開發與內部驗證</p>
            <p class="text-gray-600">資料清理、特徵工程、模型訓練，及使用歷史資料之效能驗證。</p>
          </a-timeline-item>
          <a-timeline-item color="orange">
            <p class="font-bold text-lg">階段 3: 臨床驗證與查驗評估</p>
            <p class="text-gray-600">跨院/外部資料驗證、擬定臨床操作標準(SOP)與備援方案。</p>
          </a-timeline-item>
          <a-timeline-item color="green">
            <p class="font-bold text-lg">階段 4: 部署導入與教育訓練</p>
            <p class="text-gray-600">整合HIS系統、針對臨床使用者進行透明性揭露與操作訓諫。</p>
          </a-timeline-item>
          <a-timeline-item color="red">
            <p class="font-bold text-lg">階段 5: 監控與維護 (持續優化/退場)</p>
            <p class="text-gray-600">追蹤績效指標與模型偏移，必要時啟動預警、重新訓練或終止使用機制。</p>
          </a-timeline-item>
        </a-timeline>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { NINE_PRINCIPLES } from '@/constants/transparency'

const columns = [
  { title: '編號', dataIndex: 'no', key: 'no', width: '80px', align: 'center' },
  { title: '原則名稱', dataIndex: 'name', key: 'name', width: '250px' },
  { title: '目的綱要', dataIndex: 'desc', key: 'desc' }
]

// Add description mapping internally for presentation
const principlesWithDesc = NINE_PRINCIPLES.map(p => {
  let desc = ''
  switch(p.no) {
    case 1: desc = '清楚說明AI介入的方法與最終輸出的格式，避免誤解'; break;
    case 2: desc = '界定AI工具的具體目標與臨床效益'; break;
    case 3: desc = '明列系統不適用的情境，防止越權或誤用'; break;
    case 4: desc = '揭露模型使用的核心變數與演算機制基礎'; break;
    case 5: desc = '說明如何避免對少數或特定族群產生偏見'; break;
    case 6: desc = '提供由獨立資料集進行的驗證測試結果'; break;
    case 7: desc = '公開準確率、靈敏度、特異度等關鍵數據'; break;
    case 8: desc = '說明系統維護、軟體更新與錯誤通報機制'; break;
    case 9: desc = '制定評估效能是否隨時間老化的定期檢驗計畫'; break;
  }
  return { ...p, desc }
})
Object.assign(NINE_PRINCIPLES, principlesWithDesc)
</script>
