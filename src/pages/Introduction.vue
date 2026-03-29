<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
    <!-- 區塊一：中心基本資訊 -->
    <section>
      <h2 class="text-3xl font-bold text-text-primary mb-6 text-center">中心基本資訊</h2>
      <div class="bg-background-card shadow-sm border border-line rounded-lg p-8 text-lg leading-relaxed text-text-secondary">
        <ul class="space-y-4">
          <li class="text-text-primary"><strong>中心名稱：</strong>【請填入：中心名稱】</li>
          <li class="text-text-primary"><strong>成立日期：</strong>【請填入：成立日期】</li>
          <li class="text-text-primary"><strong>核心使命：</strong>以「安全、透明、可解釋、可監督」為核心價值</li>
        </ul>
      </div>
    </section>

    <!-- 區塊二：團隊成員 -->
    <section>
      <h2 class="text-3xl font-bold text-text-primary text-center mb-8">團隊成員</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <a-card v-for="i in 4" :key="i" hoverable class="text-center rounded-lg shadow-sm bg-background-card border-line hover:shadow-md transition-shadow">
          <div class="flex justify-center mb-4">
            <Placeholder type="avatar" text="📷 請提供：姓名_照片.jpg" />
          </div>
          <a-card-meta>
            <template #title><span class="font-bold text-text-primary">【請填入：姓名】</span></template>
            <template #description><span class="text-text-secondary">【請填入：職稱】</span></template>
          </a-card-meta>
        </a-card>
      </div>
    </section>

    <!-- 區塊三：組織架構示意圖 -->
    <section>
      <h2 class="text-3xl font-bold text-text-primary text-center mb-8">組織架構</h2>
      <div class="bg-background-card shadow-sm border border-line rounded-lg p-8">
        <Placeholder type="chart" text="📊 請提供：組織架構圖（PNG/SVG）" height="300px" />
      </div>
    </section>

    <!-- 區塊四：智慧醫療發展里程碑 -->
    <section>
      <h2 class="text-3xl font-bold text-text-primary text-center mb-8">智慧醫療發展里程碑</h2>
      <div class="bg-background-card shadow-sm border border-line rounded-lg p-8">
        <a-timeline mode="alternate">
          <a-timeline-item color="#3b82f6">
            <p class="text-text-primary font-bold">【請填入：年份】</p>
            <p class="text-text-secondary">【請填入：里程碑說明】</p>
          </a-timeline-item>
          <a-timeline-item color="#10b981">
            <p class="text-text-primary font-bold">【請填入：年份】</p>
            <p class="text-text-secondary">【請填入：里程碑說明】</p>
          </a-timeline-item>
          <a-timeline-item color="#10b981">
            <p class="text-text-primary font-bold">【請填入：年份】</p>
            <p class="text-text-secondary">【請填入：里程碑說明】</p>
          </a-timeline-item>
          <a-timeline-item color="#d1d5db">
            <p class="text-text-primary font-bold">【請填入：年份】</p>
            <p class="text-text-secondary">【請填入：里程碑說明】</p>
          </a-timeline-item>
        </a-timeline>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Placeholder from '@/components/shared/Placeholder.vue'
</script>
