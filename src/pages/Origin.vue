<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
    <!-- 區塊一：背景說明 -->
    <section>
      <h2 class="text-3xl font-bold text-primary mb-6 text-center">成立緣由</h2>
      <div class="bg-white shadow-lg rounded-lg p-8 text-lg leading-relaxed text-gray-700">
        <p class="mb-4">
          隨 AI 醫療應用普及，若缺乏健全的治理機制，可能引發潛在的倫理與監管風險。
        </p>
        <p>
          為此，本院依循衛福部《負責任AI實施指南》及「健康台灣深耕計畫」之指導，特成立「負責任AI執行中心」，旨在建立一個安全、透明且值得信賴的智慧醫療環境。
        </p>
      </div>
    </section>

    <!-- 區塊二：七大倫理風險 -->
    <section>
      <h2 class="text-3xl font-bold text-primary text-center mb-8">七大倫理風險與防範</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <a-card
          v-for="risk in SEVEN_RISKS"
          :key="risk.key"
          class="hover:shadow-xl transition-shadow rounded-lg"
          :style="{ borderTop: '4px solid ' + risk.color }"
        >
          <template #title>
            <span class="text-xl font-bold text-primary">
              {{ risk.label }}
            </span>
          </template>
          <p class="text-gray-600">{{ risk.desc }}</p>
        </a-card>
      </div>
    </section>

    <!-- 區塊三：法規依據 -->
    <section>
      <h2 class="text-3xl font-bold text-primary text-center mb-8">法規依據</h2>
      <div class="bg-white shadow-lg rounded-lg p-8">
        <ul class="space-y-4">
          <li class="flex items-start">
            <span class="text-accent mr-4 mt-1">✔</span>
            <span>衛福部《負責任AI實施指南》</span>
          </li>
          <li class="flex items-start">
            <span class="text-accent mr-4 mt-1">✔</span>
            <span>行政院《人工智慧基本法》草案七大倫理原則</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { SEVEN_RISKS } from '@/constants/risks'
</script>
