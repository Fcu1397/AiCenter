<template>
  <div>
    <!-- Mobile Header -->
    <div class="md:hidden bg-gray-100 p-2">
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-lg font-bold text-primary">AI執行中心</h2>
      </div>
      <div class="flex overflow-x-auto pb-2">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="flex-shrink-0 px-4 py-2 text-sm font-medium text-gray-700 rounded-md"
          active-class="bg-primary text-white font-semibold"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>

    <!-- Desktop Sidebar -->
    <aside class="hidden md:flex md:flex-col md:w-60 bg-gray-100 flex-shrink-0">
      <div class="p-4">
        <h2 class="text-lg font-bold text-primary">AI執行中心</h2>
      </div>
      <nav class="flex-grow px-2">
        <ul>
          <li v-for="item in menuItems" :key="item.path" class="mb-2">
            <router-link
              :to="item.path"
              class="flex items-center p-2 text-gray-700 rounded-md hover:bg-gray-200"
              active-class="bg-primary text-white font-semibold"
            >
              <span class="ml-3">{{ item.label }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="p-4 border-t border-gray-300">
        <router-link to="/apply" class="w-full block text-center bg-accent text-white py-2 px-4 rounded-md mb-2 hover:bg-green-600 transition-colors">
          線上申請
        </router-link>
        <router-link to="/transparency" class="w-full block text-center bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors">
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
