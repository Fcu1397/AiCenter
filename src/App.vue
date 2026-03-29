<template>
  <div class="flex flex-col min-h-screen bg-gray-100 font-sans">
    <TopHeader />
    <div class="flex flex-1">
      <Sidebar />
      <main class="flex-1 p-8 overflow-y-auto">
        <div class="max-w-7xl mx-auto">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopHeader from '@/components/layout/TopHeader.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
</script>

<style>
body {
  margin: 0;
}
</style>
