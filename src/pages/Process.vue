<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">推動流程</h1>
      <p class="text-xl text-gray-600">從申請、審核到上線的負責任AI落地管理標準化推動流程</p>
    </div>

    <!-- 流程圖佔位框 -->
    <section>
      <h2 class="text-2xl font-bold mb-6">作業流程圖</h2>
      <Placeholder text="在此放置負責任AI落地管理標準化推動流程圖" />
    </section>

    <!-- 6節點說明卡片 -->
    <section>
      <h2 class="text-2xl font-bold mb-6">各階段執行重點 (負責任AI落地管理標準化推動流程)</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a-card title="1. 需求評估 & 資格初審" hoverable>
          由需用單位提出AI導入需求，填寫預估效益、使用資料來源，系統將自動進行風險分級判定，並完成初審。
        </a-card>
        <a-card title="2. 專家審查會議" hoverable>
          由AI倫理委員會及工作小組召開專家審查會議，特別針對高風險(\>=3級)系統進行法規、資安與倫理審議。
        </a-card>
        <a-card title="3. 導入完成" hoverable>
          模型於沙盒進行內部/外部驗證無誤後，與HIS系統整合，針對終端醫護人員實施透明度及操作培訓後正式上線。
        </a-card>
        <a-card title="4. 持續使用 (真實世界監測)" hoverable>
          開始服務病患並持續收集真實世界數據(RWD)，運用MLOps技術即時監控成效指標(準確率、運算時間等)。
        </a-card>
        <a-card title="5. 再驗證 (每6~12個月)" hoverable>
          依據系統特性訂定週期(如每半年或一年)，針對模型是否老化、產生資料偏移或精準度下降進行重新驗證與校正。
        </a-card>
        <a-card title="6. 改善或啟動停用" hoverable>
          若績效表現不佳或發生安全疑慮，立即啟動應變機制(降級服務或退場)，重新調整訓練資料與模型集後再次上線爭取核准。
        </a-card>
      </div>
    </section>

    <!-- 文件清單下載 -->
    <section class="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <h2 class="text-2xl font-bold mb-6">相關文件下載</h2>
      <a-list bordered>
        <a-list-item>
          <div class="flex justify-between w-full items-center">
            <span class="text-lg"><FilePdfOutlined class="mr-2 text-red-500" /> AI軟體採購評估表 (空白表)</span>
            <a-button type="link"><DownloadOutlined /> 下載</a-button>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="flex justify-between w-full items-center">
            <span class="text-lg"><FileWordOutlined class="mr-2 text-blue-500" /> 臨床風險分級自評查核表</span>
            <a-button type="link"><DownloadOutlined /> 下載</a-button>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="flex justify-between w-full items-center">
            <span class="text-lg"><FilePdfOutlined class="mr-2 text-red-500" /> 資訊安全檢測規格說明書</span>
            <a-button type="link"><DownloadOutlined /> 下載</a-button>
          </div>
        </a-list-item>
      </a-list>
    </section>

    <!-- 大型CTA按鈕 -->
    <section class="text-center py-12">
      <h2 class="text-3xl font-bold mb-6">準備好送出您的申請了嗎？</h2>
      <p class="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
        請備妥相關文件，並進入線上申請系統，填寫七大區塊表單以進行風險自評與初步審核。
      </p>
      <router-link to="/apply">
        <a-button type="primary" size="large" class="h-14 px-8 text-lg font-bold">
          立即前往計畫申請
        </a-button>
      </router-link>
    </section>

  </div>
</template>

<script setup lang="ts">
import Placeholder from '@/components/shared/Placeholder.vue'
import { FilePdfOutlined, FileWordOutlined, DownloadOutlined } from '@ant-design/icons-vue'
</script>
