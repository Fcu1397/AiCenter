<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
    <!-- 區塊一：智慧醫療委員會 -->
    <section>
      <h2 class="text-3xl font-bold text-primary mb-6 text-center">智慧醫療委員會</h2>
      <div class="bg-white shadow-lg rounded-lg p-8">
        <h3 class="text-xl font-bold mb-4 border-b pb-2">委員名單</h3>
        <a-table :dataSource="committeeMembers" :columns="columns" :pagination="false" class="mb-8" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 class="text-xl font-bold mb-4 border-b pb-2">委員職掌</h3>
            <p class="text-gray-700 leading-relaxed">
              負責本院 AI 醫療應用之政策制定、風險審查、法規遵循督導，以及重大爭議事件之仲裁。確保所有 AI 專案皆符合《負責任 AI 實施指南》之要求。
            </p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4 border-b pb-2">開會頻率</h3>
            <p class="text-gray-700 leading-relaxed">
              每季度召開一次例行性會議，針對高風險專案或緊急事件，得視需要隨時召開臨時會議。
            </p>
          </div>
        </div>

        <h3 class="text-xl font-bold mb-4 border-b pb-2">決議公告</h3>
        <a-list item-layout="horizontal" :data-source="resolutions">
          <template #renderItem="{ item }">
            <a-list-item>
              <a-list-item-meta :description="item.date">
                <template #title>
                  <a href="#">{{ item.title }}</a>
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </a-list>
      </div>
    </section>

    <!-- 區塊二：管理辦法下載 -->
    <section class="text-center">
      <div class="bg-white shadow-lg rounded-lg p-8 inline-block">
        <h2 class="text-2xl font-bold text-primary mb-4">相關管理辦法下載</h2>
        <a-button type="primary" size="large" class="bg-accent hover:bg-green-600 border-none">
          <template #icon><DownloadOutlined /></template>
          下載【請填入：院方核定版本 PDF 檔案】
        </a-button>
      </div>
    </section>

    <!-- 區塊三：資料治理架構 -->
    <section>
      <h2 class="text-3xl font-bold text-primary mb-6 text-center">資料治理架構</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="bg-white shadow-lg rounded-lg p-8">
          <h3 class="text-xl font-bold mb-4 border-b pb-2">標準相容性</h3>
          <ul class="space-y-4 text-gray-700 leading-relaxed">
            <li class="flex items-start"><span class="text-accent mr-3">✔</span>採用 FHIR 國際醫療資料交換標準</li>
            <li class="flex items-start"><span class="text-accent mr-3">✔</span>導入 TW Core IG 相容資料集</li>
            <li class="flex items-start"><span class="text-accent mr-3">✔</span>支援 SMART on FHIR 應用程式</li>
            <li class="flex items-start"><span class="text-accent mr-3">✔</span>臨床術語標準：SNOMED CT、LOINC、RxNorm</li>
          </ul>
        </div>
        <div class="bg-white shadow-lg rounded-lg p-8 flex items-center justify-center">
          <Placeholder type="chart" text="📊 請提供：FHIR 資料治理架構圖" height="100%" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { DownloadOutlined } from '@ant-design/icons-vue'
import Placeholder from '@/components/shared/Placeholder.vue'

const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '職稱', dataIndex: 'title', key: 'title' },
  { title: '所屬科別', dataIndex: 'dept', key: 'dept' },
]

const committeeMembers = [
  { key: '1', name: '【請填入：姓名】', title: '【請填入：職稱】', dept: '【請填入：所屬科別】' },
  { key: '2', name: '【請填入：姓名】', title: '【請填入：職稱】', dept: '【請填入：所屬科別】' },
  { key: '3', name: '【請填入：姓名】', title: '【請填入：職稱】', dept: '【請填入：所屬科別】' },
]

const resolutions = [
  { title: '【請填入：歷次會議紀錄標題一】', date: '2023-10-01' },
  { title: '【請填入：歷次會議紀錄標題二】', date: '2023-07-15' },
]
</script>
