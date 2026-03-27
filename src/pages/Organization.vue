<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
    <h1 class="text-4xl font-bold text-center text-gray-900">組織架構</h1>

    <!-- 組織圖佔位框 -->
    <section>
      <h2 class="text-2xl font-bold mb-6">中心組織架構圖</h2>
      <Placeholder text="在此放置醫院實際的 AI 中心層級與附屬各組別組織架構圖" />
    </section>

    <!-- 雙欄基石卡片 -->
    <section>
      <h2 class="text-2xl font-bold mb-6">治理基石</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <a-card title="資訊安全治理" :bordered="false" class="shadow-sm border-t-4 border-blue-500">
          <p class="text-gray-700 leading-relaxed mb-4">
            AI治理建立在堅實的資訊安全基礎上。本院實施嚴格的資安防護等級規範，從網路架構加密、伺服器隔離到零信任存取控制，並定期執行弱點掃描及滲透測試，以防止惡意攻擊與機敏資料外洩，確保AI演算法及模型參數的完整性。
          </p>
        </a-card>
        <a-card title="資料治理" :bordered="false" class="shadow-sm border-t-4 border-green-500">
          <p class="text-gray-700 leading-relaxed mb-4">
            全面採用 <strong>FHIR (Fast Healthcare Interoperability Resources)</strong> 與 <strong>TW Core IG</strong> 國際標準的資料互通架構。我們確保所有用於AI模型訓練與推論的醫療數據，皆具備高標準的品質、正確性與一致性，並落實病患個資去識別化。
          </p>
        </a-card>
      </div>
    </section>

    <!-- 5項管理辦法 ACollapse -->
    <section>
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">重要管理辦法與規範</h2>
        <!-- PDF下載按鈕 -->
        <a-button type="primary">
          <template #icon><DownloadOutlined /></template>
          下載完整規範手冊 (PDF)
        </a-button>
      </div>

      <a-collapse v-model:activeKey="activeKey" accordion>
        <a-collapse-panel key="1" header="1. 醫療AI軟體採購與導入評估辦法">
          <p>規範各科部在引進外部AI產品或套件前，必須先提報完整的使用情境、預期效益與初步風險評估報告，由工作小組進行法規與資安初審。</p>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="2. 自行開發AI系統管理規範">
          <p>針對院內自行研發之模型，從數據收集、標註、清洗到模型訓練與驗證，皆需符合醫學倫理與個資法規範，並需將效能指標列入審查。</p>
        </a-collapse-panel>
        <a-collapse-panel key="3" header="3. AI臨床風險分級與審查機制">
          <p>依據預期用途之「醫療決策重要程度」及「病患狀況嚴重程度」，將AI軟體分為 1 至 4 級。3級以上屬高風險，需送交IRB或特別委員會審議。</p>
        </a-collapse-panel>
        <a-collapse-panel key="4" header="4. 透明性揭露與使用宣導規範">
          <p>明定上線的AI產品必須對臨床人員揭露九大透明度原則（如介入目的、效能指標、警示超範圍等），防止對AI產生過度依賴。</p>
        </a-collapse-panel>
        <a-collapse-panel key="5" header="5. 上線後持續監管與退場機制">
          <p>AI系統上線後需定期（如每季）監控預測準確率與實際成效。若發生嚴重偏移或危安事件，應啟動緊急停用與退場重訓流程。</p>
        </a-collapse-panel>
      </a-collapse>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DownloadOutlined } from '@ant-design/icons-vue'
import Placeholder from '@/components/shared/Placeholder.vue'

const activeKey = ref('1')
</script>
