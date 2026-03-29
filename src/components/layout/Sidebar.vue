<template>
  <div>
    <!-- Mobile Header -->
    <div class="md:hidden bg-background-card p-2 border-b border-line">
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-lg font-bold text-text-primary">負責任AI中心</h2>
      </div>
      <div class="flex overflow-x-auto pb-2">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="flex-shrink-0 px-4 py-2 text-sm font-medium text-text-secondary rounded-md"
          active-class="bg-primary/10 text-primary font-semibold"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>

    <!-- Desktop Sidebar -->
    <aside class="hidden md:flex md:flex-col md:w-60 bg-background-card flex-shrink-0 p-4">
      <div class="mb-4">
        <h2 class="text-xl font-bold text-text-primary">負責任AI中心</h2>
      </div>
      <nav class="flex-grow">
        <ul>
          <li v-for="item in menuItems" :key="item.path" class="mb-2">
            <router-link
              :to="item.path"
              class="flex items-center p-3 rounded-md text-text-secondary hover:bg-primary/10 hover:text-primary transition-colors"
              active-class="bg-primary/10 text-primary font-bold"
            >
              <span>{{ item.label }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="border-t border-line pt-4">
        <router-link to="/apply" class="w-full block text-center bg-primary text-white py-2 px-4 rounded-md mb-2 hover:bg-primary-hover transition-colors">
          線上申請
        </router-link>
        <router-link to="/transparency" class="w-full block text-center bg-accent text-white py-2 px-4 rounded-md hover:bg-accent-hover transition-colors">
          透明性查詢
        </router-link>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
const menuItems = [
  { path: '/origin', label: '成立緣由' },
  { path: '/introduction', label: '中心介紹' },
  { path: '/organization', label: '組織及辦法' },
  { path: '/strategy', label: '三大落地策略' },
  { path: '/process', label: '標準化流程' },
  { path: '/contact', label: '聯繫窗口' },
  { path: '/cases', label: 'AI實例' },
]
</script>
