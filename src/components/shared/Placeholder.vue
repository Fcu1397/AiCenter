<template>
  <div
    class="placeholder-container"
    :style="customStyle"
  >
    <slot>
      <div class="placeholder-text">{{ text }}</div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type PlaceholderType = 'avatar' | 'image' | 'video' | 'chart' | 'report' | 'custom'

const props = withDefaults(defineProps<{
  type?: PlaceholderType
  text?: string
  width?: string
  height?: string
  aspectRatio?: string
}>(), {
  type: 'custom',
  text: '【請提供內容】',
  width: '100%',
  height: 'auto',
  aspectRatio: undefined,
})

const customStyle = computed(() => {
  const styles: Record<string, string> = {
    border: '2px dashed #94a3b8',
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#64748b',
    fontSize: '14px',
    textAlign: 'center',
    padding: '16px',
    width: props.width,
    height: props.height,
  }

  if (props.aspectRatio) {
    styles.aspectRatio = props.aspectRatio
  }

  switch (props.type) {
    case 'avatar':
      styles.width = '120px'
      styles.height = '120px'
      styles.borderRadius = '50%'
      break
    case 'image':
    case 'video':
      styles.aspectRatio = '16 / 9'
      break
    case 'report':
      styles.aspectRatio = '210 / 297'
      break
  }

  return styles
})
</script>
