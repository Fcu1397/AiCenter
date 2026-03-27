<template>
  <div class="placeholder-box">
    【{{ text }}】
  </div>
</template>
<script setup lang="ts">
withDefaults(defineProps<{
  text?: string
}>(), {
  text: "此區塊用途說明"
})
</script>
<style scoped>
.placeholder-box {
  border: 2px dashed #d9d9d9;
  padding: 48px;
  text-align: center;
  color: #aaa;
  border-radius: 8px;
  background-color: #fafafa;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  font-weight: 500;
  transition: all 0.3s;
}
.placeholder-box:hover {
  border-color: #1890ff;
  color: #1890ff;
}
</style>