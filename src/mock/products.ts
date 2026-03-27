import type { Product } from '../types'

export const MOCK_PRODUCTS: Product[] = [
  {
    product_id: 1,
    product_name: 'AI肺結節輔助診斷系統',
    department: '放射科',
    risk_level: 3,
    launch_date: '2023-05-12',
    version: 'v2.1.0',
    description: '此系統透過深度學習技術，輔助醫師從胸部X光或CT影像中圈選並辨識可能的肺結節，提高早期肺癌篩檢率。',
    video_url: '',
    is_active: true,
    updated_at: '2023-11-20'
  },
  {
    product_id: 2,
    product_name: '急診敗血症風險預測模組',
    department: '急診科',
    risk_level: 4,
    launch_date: '2022-08-30',
    version: 'v1.4.2',
    description: '結合患者生命徵象與即時檢驗數據，預測急診患者發生敗血症之高低風險，並即時於HIS系統發出警示。',
    video_url: '',
    is_active: true,
    updated_at: '2023-12-05'
  },
  {
    product_id: 3,
    product_name: '門診就診人潮預測系統',
    department: '門診中心',
    risk_level: 1,
    launch_date: '2024-01-10',
    version: 'v1.0.0',
    description: '提供管理階層門診每日報到人數與尖峰時段的預測參考，以利優化行政流程與人力調度。',
    video_url: 'https://example.com/demo.mp4',
    is_active: true,
    updated_at: '2024-01-10'
  }
];

