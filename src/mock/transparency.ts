import type { TransparencyPrinciple } from '../types'
import { NINE_PRINCIPLES } from '../constants/transparency'

export const MOCK_TRANSPARENCY: TransparencyPrinciple[] = NINE_PRINCIPLES.map(p => ({
  principle_no: p.no,
  principle_name: p.name,
  content: `本項原標明 ${p.name} 相關措施與符合程度評估（由各專案自行提送審核內容後揭露。本段落為假資料展示用途，顯示實際運作的透明性）。`,
  version: '1.0.0',
  updated_at: '2024-02-15'
}));

