<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
    <!-- 區塊一：智慧醫療委員會 -->
    <section>
      <h2 class="text-3xl font-bold text-text-primary mb-6 text-center">智慧醫療委員會</h2>
      <div class="bg-background-card shadow-sm border border-line rounded-lg p-8">
        <!-- 隱藏委員名單 -->
        <!-- <h3 class="text-xl font-bold text-text-primary mb-4 border-b border-line pb-2">委員名單</h3>
        <a-table :dataSource="committeeMembers" :columns="columns" :pagination="false" class="mb-8" /> -->

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 class="text-xl font-bold text-text-primary mb-4 border-b border-line pb-2">職掌</h3>
            <p class="text-text-secondary leading-relaxed">
              負責本院 AI 醫療應用之政策制定、風險審查、法規遵循督導，以及重大爭議事件之仲裁。確保所有 AI 專案皆符合《負責任 AI 實施指南》之要求。
            </p>
          </div>
          <div>
            <h3 class="text-xl font-bold text-text-primary mb-4 border-b border-line pb-2">功能小組</h3>
            <ul class="space-y-2 text-text-secondary leading-relaxed list-disc list-inside">
              <li><strong>AI治理小組：</strong>負責AI模型之透明性、公平性及效能監測。</li>
              <li><strong>資安防護小組：</strong>負責智慧醫療場域之資通系統維護與隱私保護。</li>
              <li><strong>臨床應用小組：</strong>評估智慧醫療軟體之落地效益與流程優化。</li>
            </ul>
          </div>
        </div>

        <div class="mb-8">
          <h3 class="text-xl font-bold text-text-primary mb-4 border-b border-line pb-2">職責任務</h3>
          <ul class="space-y-4 text-text-secondary leading-relaxed">
            <li><strong>一、策略規劃：</strong>制定本院智慧醫療與AI發展之中長期戰略。</li>
            <li><strong>二、AI治理審議：</strong>
              <ul class="list-disc list-inside ml-6 mt-1">
                <li>審查AI演算表之倫理與法律符合性(如排除偏見、可解釋性)。</li>
                <li>監督AI產品之生命週期，包含開發、試用、正式上線及退場機制。</li>
                <li>建立負責任AI(Responsible AI)管理辦法，確保醫療安全。</li>
              </ul>
            </li>
            <li><strong>三、資安與隱私防護：</strong>
              <ul class="list-disc list-inside ml-6 mt-1">
                <li>確保智慧醫療數據之存取、傳輸(如FHIR標準)符合資安法。</li>
                <li>執行智慧醫療專案之風險評估與資安稽核。</li>
              </ul>
            </li>
            <li><strong>四、專案監督：</strong>審議院內智慧醫療研發或採購專案，並追蹤導入後之臨床成效(如診斷正確率提升、周轉時間縮短)。</li>
          </ul>
        </div>

        <div class="mb-8">
          <h3 class="text-xl font-bold text-text-primary mb-4 border-b border-line pb-2">會議機制</h3>
          <ul class="space-y-2 text-text-secondary leading-relaxed">
            <li>本會原則上每半年招開常會乙次，必要時得召開臨時會議。</li>
            <li>會議決議事項應呈核院長後實施，並追蹤各項決議之執行進度。</li>
          </ul>
        </div>

        <h3 class="text-xl font-bold text-text-primary mb-4 border-b border-line pb-2">決議公告</h3>
        <a-list item-layout="horizontal" :data-source="resolutions">
          <template #renderItem="{ item }">
            <a-list-item>
              <a-list-item-meta :description="item.date">
                <template #title>
                  <a href="#" class="text-primary hover:text-primary-hover">{{ item.title }}</a>
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </a-list>
      </div>
    </section>

    <!-- 區塊二：治理與保護條款 -->
    <section>
      <h2 class="text-3xl font-bold text-text-primary mb-6 text-center">治理與保護條款</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-background-card shadow-sm border border-line rounded-lg p-8">
          <h3 class="text-xl font-bold text-text-primary mb-4 border-b border-line pb-2">AI治理專項條款</h3>
          <ul class="space-y-4 text-text-secondary leading-relaxed">
            <li><strong>透明性宣告：</strong>所有落地使用之AI系統須建立九大透明性內容，供使用者實實查詢。</li>
            <li><strong>定期監測：</strong>本會應每季追蹤AI表現指標，若發生非預期偏差或異常，應具備即時暫停或介入之機制。</li>
            <li><strong>負責任規範：</strong>醫療AI之決策支援應明確界定醫師與AI之責任界限，落實「人機共守」原則。</li>
          </ul>
        </div>
        <div class="bg-background-card shadow-sm border border-line rounded-lg p-8">
          <h3 class="text-xl font-bold text-text-primary mb-4 border-b border-line pb-2">資安與個資保護條款</h3>
          <ul class="space-y-4 text-text-secondary leading-relaxed">
            <li><strong>權限管控：</strong>智慧醫療系統之資料存取須具備分層授權與軌跡留存紀錄，嚴禁未授權之數據導出。</li>
            <li><strong>資安緊急應變：</strong>智慧醫療相關系統發生資安事故時，應依本院緊急應變機制於規定時限內通報並恢復服務。</li>
            <li><strong>保密義務：</strong>委員及相關執行人員應簽署保密與利益衝突迴避協議，離職後仍具法律責任。</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 區塊三：資料治理架構 -->
    <section>
      <h2 class="text-3xl font-bold text-text-primary mb-6 text-center">資料治理架構</h2>
      <div class="space-y-8">
        <div class="bg-background-card shadow-sm border border-line rounded-lg p-8">
          <h3 class="text-xl font-bold text-text-primary mb-4 border-b border-line pb-2">標準相容性</h3>
          <ul class="space-y-4 text-text-secondary leading-relaxed">
            <li class="flex items-start"><span class="text-primary mr-3">✔</span>採用 FHIR 國際醫療資料交換標準</li>
            <li class="flex items-start"><span class="text-primary mr-3">✔</span>導入 TW Core IG 相容資料集</li>
            <li class="flex items-start"><span class="text-primary mr-3">✔</span>支援 SMART on FHIR 應用程式</li>
            <li class="flex items-start"><span class="text-primary mr-3">✔</span>臨床術語標準：SNOMED CT、LOINC、RxNorm</li>
          </ul>
        </div>
        <div class="bg-background-card shadow-sm border border-line rounded-lg p-8 flex items-center justify-center">
          <Placeholder type="chart" text="📊 請提供：FHIR 資料治理架構圖" height="100%" />
        </div>
      </div>
    </section>

    <!-- 區塊四：管理辦法下載 -->
    <!-- 隱藏管理辦法下載 -->
    <!-- <section class="text-center">
      <div class="bg-background-card shadow-sm border border-line rounded-lg p-8 inline-block">
        <h2 class="text-2xl font-bold text-text-primary mb-4">相關管理辦法下載</h2>
        <a-button type="primary" size="large" class="bg-accent hover:bg-accent-hover border-none text-white">
          <template #icon><DownloadOutlined /></template>
          下載【請填入：院方核定版本 PDF 檔案】
        </a-button>
      </div>
    </section> -->
  </div>
</template>

<script setup lang="ts">
import Placeholder from '@/components/shared/Placeholder.vue'

const resolutions = [
  { title: '【請填入：歷次會議紀錄標題一】', date: '2023-10-01' },
  { title: '【請填入：歷次會議紀錄標題二】', date: '2023-07-15' },
]
</script>
