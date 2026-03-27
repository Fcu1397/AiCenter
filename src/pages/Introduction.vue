<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">

    <!-- 說明段落 -->
    <section class="text-center max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-6 text-gray-900">負責任AI執行中心簡介</h1>
      <p class="text-lg text-gray-600 leading-relaxed">
        隨著醫療AI落地應用愈發普及，如何有效管控風險、保護資料隱私並維持決策的可解釋性，是本中心成立的首要目標。我們集結了跨領域的專業人才，從技術、法規、臨床到資安，全面建構可信任的醫療AI治理體系。
      </p>
    </section>

    <!-- 團隊4格卡片 -->
    <section>
      <h2 class="text-2xl font-bold mb-6 text-center">跨領域專家團隊</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <a-card hoverable class="text-center">
          <template #cover>
            <div class="h-32 bg-blue-100 flex items-center justify-center text-blue-500 text-5xl">
              <MedicineBoxOutlined />
            </div>
          </template>
          <a-card-meta title="臨床醫師群">
            <template #description>確認AI於實際醫療場域的適用性、工作流程整合與安全性評估。</template>
          </a-card-meta>
        </a-card>

        <a-card hoverable class="text-center">
          <template #cover>
            <div class="h-32 bg-green-100 flex items-center justify-center text-green-500 text-5xl">
              <CodeOutlined />
            </div>
          </template>
          <a-card-meta title="AI工程師與資料科學家">
            <template #description>負責模型效能驗證、演算法穩定性監控及持續優化。</template>
          </a-card-meta>
        </a-card>

        <a-card hoverable class="text-center">
          <template #cover>
            <div class="h-32 bg-purple-100 flex items-center justify-center text-purple-500 text-5xl">
              <SafetyCertificateOutlined />
            </div>
          </template>
          <a-card-meta title="法規與資安專家">
            <template #description>確保AI應用符合醫療法規及個資保護規範要求，並進行弱點掃描。</template>
          </a-card-meta>
        </a-card>

        <a-card hoverable class="text-center">
          <template #cover>
            <div class="h-32 bg-orange-100 flex items-center justify-center text-orange-500 text-5xl">
              <TeamOutlined />
            </div>
          </template>
          <a-card-meta title="醫管及專案管理師">
            <template #description>管控AI專案進度、資源協調並推動教育訓練與政策佈達。</template>
          </a-card-meta>
        </a-card>
      </div>
    </section>

    <!-- 三大職責列表 -->
    <section class="bg-gray-50 p-8 rounded-xl border border-gray-200">
      <h2 class="text-2xl font-bold mb-8 text-center">中心核心職責</h2>
      <a-list item-layout="horizontal" :data-source="responsibilities">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta :description="item.desc">
              <template #title>
                <span class="text-xl font-semibold text-gray-800">{{ item.title }}</span>
              </template>
              <template #avatar>
                <a-avatar :style="{ backgroundColor: item.color, verticalAlign: 'middle' }" size="large">
                  {{ item.num }}
                </a-avatar>
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </section>

  </div>
</template>

<script setup lang="ts">
import {
  MedicineBoxOutlined,
  CodeOutlined,
  SafetyCertificateOutlined,
  TeamOutlined
} from '@ant-design/icons-vue'

const responsibilities = [
  { num: '1', title: '全生命週期監管與稽核', desc: '制定AI軟體的開發、測試、上線及退場規範。監控上線後的模型偏移（Data Drift）與成效衰退問題。', color: '#1890ff' },
  { num: '2', title: '法規遵循與風險評估', desc: '審查AI系統是否符合醫療器材軟體（SaMD）相關法規要求。執行臨床風險分級、資安與個人隱私保護評估。', color: '#52c41a' },
  { num: '3', title: '教育訓練與透明度推廣', desc: '推廣「負責任AI」理念，針對醫護人員提供AI素養培訓。建立透明的AI產品成效公告平台，降低黑箱疑慮。', color: '#722ed1' }
]
</script>
