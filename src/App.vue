<template>
  <div class="flex flex-col min-h-screen bg-background-page font-sans text-text-primary">
    <TopHeader />
    <div class="flex flex-1 max-w-7xl mx-auto w-full">
      <Sidebar />
      <main class="flex-1 p-4 md:p-8 overflow-y-auto bg-background-card">
        <router-view />
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
a {
  text-decoration: none !important;
}
</style>
