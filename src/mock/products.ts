import type { Product } from '../types'

export const MOCK_PRODUCTS: Product[] = [
  {
    product_id: 1,
    product_name: 'AI心電圖輔助判讀',
    department: '內科',
    risk_level: 2,
    launch_date: '2023-08-15',
    version: 'v1.2.0',
    description: '利用深度學習模型快速分析心電圖（ECG），協助醫師及早發現心律不整及其他潛在的心臟疾病。',
    video_url: '',
    is_active: true,
    updated_at: '2023-11-20'
  }
];
