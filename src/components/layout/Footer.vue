<template>
  <footer class="bg-primary text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Center Info -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-white">負責任AI中心</h3>
          <p class="text-surface-secondary/80">致力於推動可信任、透明且安全的醫療AI應用，為病患與醫療人員提供更高品質的服務。</p>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-white">聯絡資訊</h3>
          <ul class="space-y-2 text-surface-secondary/80">
            <li><strong>聯絡人：</strong> {{ MOCK_CONTACT.name }} {{ MOCK_CONTACT.title }}</li>
            <li><strong>電話：</strong> {{ MOCK_CONTACT.phone }}</li>
            <li><strong>電子信箱：</strong> <a :href="`mailto:${MOCK_CONTACT.email}`" class="hover:text-white transition-colors">{{ MOCK_CONTACT.email }}</a></li>
            <li><strong>服務時間：</strong> {{ MOCK_CONTACT.hours }}</li>
          </ul>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-primary-light text-center text-surface-secondary/80 text-sm">
        &copy; {{ currentYear }} 負責任AI中心 版權所有. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { MOCK_CONTACT } from '@/mock/contact'
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
