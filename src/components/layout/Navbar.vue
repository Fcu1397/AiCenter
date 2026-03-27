<template>
  <header class="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo / Title -->
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            負責任AI執行中心
          </router-link>
        </div>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex space-x-4 lg:space-x-6">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            active-class="text-blue-600 bg-blue-50 font-semibold"
          >
            {{ item.label }}
          </router-link>
        </nav>

        <!-- Mobile Menu Button -->
        <div class="flex items-center md:hidden">
          <a-button type="text" @click="showDrawer">
            <template #icon><MenuOutlined /></template>
          </a-button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <a-drawer
      v-model:open="drawerVisible"
      title="選單"
      placement="right"
    >
      <div class="flex flex-col space-y-2">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
          active-class="text-blue-600 bg-blue-50 font-semibold"
          @click="drawerVisible = false"
        >
          {{ item.label }}
        </router-link>
      </div>
    </a-drawer>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MenuOutlined } from '@ant-design/icons-vue'

const drawerVisible = ref(false)

const showDrawer = () => {
  drawerVisible.value = true
}

const menuItems = [
  { path: '/origin', label: '緣起' },
  { path: '/introduction', label: '簡介' },
  { path: '/organization', label: '組織架構' },
  { path: '/strategy', label: '策略規劃' },
  { path: '/process', label: '推動流程' },
  { path: '/cases', label: '案例展示' },
  { path: '/transparency', label: '透明度查詢' },
  { path: '/apply', label: '計畫申請' },
  { path: '/contact', label: '聯絡我們' }
]
</script>

