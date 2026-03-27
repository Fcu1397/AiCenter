import type { RiskLevel } from '../types'

export const RISK_MATRIX: Record<string, Record<string, RiskLevel>> = {
  critical:      { 'treat-diagnose': 4, 'drive-management': 3, 'inform-management': 2 },
  serious:       { 'treat-diagnose': 3, 'drive-management': 2, 'inform-management': 1 },
  'non-serious': { 'treat-diagnose': 2, 'drive-management': 1, 'inform-management': 1 },
}

export const SEVERITY_LABELS: Record<string, string> = {
  critical:      '危急情況',
  serious:       '嚴重情況',
  'non-serious': '非嚴重情況',
}

export const ROLE_LABELS: Record<string, string> = {
  'treat-diagnose':    '治療或診斷',
  'drive-management':  '驅動臨床管理',
  'inform-management': '告知臨床管理資訊',
}

export const RISK_COLORS: Record<RiskLevel, string> = {
  1: 'green', 2: 'blue', 3: 'orange', 4: 'red',
}

