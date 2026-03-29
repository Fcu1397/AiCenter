<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-text-primary mb-4">標準化流程圖及申請途徑</h1>
    </div>

    <!-- 區塊一：線上申請入口 -->
    <section class="text-center">
      <router-link to="/apply">
        <a-button type="primary" size="large" class="bg-primary hover:bg-primary-hover border-none px-12 py-4 h-auto text-xl font-bold rounded-lg shadow-md text-white">
          線上申請入口
        </a-button>
      </router-link>
    </section>

    <!-- 區塊二：負責任AI落地管理標準化推動流程圖 -->
    <section>
      <h2 class="text-2xl font-bold text-text-primary mb-6 text-center">負責任AI落地管理標準化推動流程圖</h2>
      <div class="bg-background-card p-8 rounded-xl shadow-sm border border-line">
        <a-steps :current="6" progress-dot>
          <a-step title="1. 需求評估 & 資格初審" />
          <a-step title="2. 專家審查會議" />
          <a-step title="3. 導入完成" />
          <a-step title="4. 持續使用" />
          <a-step title="5. 再驗證 (每6~12個月)" />
          <a-step title="6. 改善 或 啟動停用" />
        </a-steps>
      </div>
    </section>

    <!-- 區塊三：各節點說明表格 -->
    <section>
      <h2 class="text-2xl font-bold text-text-primary mb-6">各節點說明</h2>
      <div class="bg-background-card rounded-xl shadow-sm border border-line overflow-hidden">
        <a-table :dataSource="processSteps" :columns="columns" :pagination="false" bordered />
      </div>
    </section>

    <!-- 區塊四：申請表格下載 -->
    <section class="text-center">
      <div class="bg-background-card shadow-sm border border-line rounded-lg p-8 inline-block">
        <h2 class="text-2xl font-bold text-text-primary mb-4">相關申請表格下載</h2>
        <a-button type="primary" size="large" class="bg-accent hover:bg-accent-hover border-none text-white">
          <template #icon><DownloadOutlined /></template>
          下載申請表格範本 (PDF)
        </a-button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { DownloadOutlined } from '@ant-design/icons-vue'

const columns = [
  { title: '節點名稱', dataIndex: 'name', key: 'name', width: '20%' },
  { title: '負責單位', dataIndex: 'dept', key: 'dept', width: '20%' },
  { title: '所需文件', dataIndex: 'docs', key: 'docs', width: '40%' },
  { title: '預計時程', dataIndex: 'time', key: 'time', width: '20%' },
]

const processSteps = [
  { key: '1', name: '1. 需求評估 & 資格初審', dept: '【請填入：負責單位】', docs: '【請填入：所需文件】', time: '【請填入：預計時程】' },
  { key: '2', name: '2. 專家審查會議', dept: '【請填入：負責單位】', docs: '【請填入：所需文件】', time: '【請填入：預計時程】' },
  { key: '3', name: '3. 導入完成', dept: '【請填入：負責單位】', docs: '【請填入：所需文件】', time: '【請填入：預計時程】' },
  { key: '4', name: '4. 持續使用', dept: '【請填入：負責單位】', docs: '【請填入：所需文件】', time: '【請填入：預計時程】' },
  { key: '5', name: '5. 再驗證 (每6~12個月)', dept: '【請填入：負責單位】', docs: '【請填入：所需文件】', time: '【請填入：預計時程】' },
  { key: '6', name: '6. 改善 或 啟動停用', dept: '【請填入：負責單位】', docs: '【請填入：所需文件】', time: '【請填入：預計時程】' },
]
</script>
