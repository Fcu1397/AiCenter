<template>
  <a-tag :color="color">風險等級 {{ level }}</a-tag>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RISK_COLORS } from '@/constants/riskMatrix'
import type { RiskLevel } from '@/types'

const props = defineProps<{
  level: RiskLevel | number
}>()

const color = computed(() => {
  if (props.level in RISK_COLORS) {
    return RISK_COLORS[props.level as RiskLevel]
  }
  return 'default'
})
</script>

