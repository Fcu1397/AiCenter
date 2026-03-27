export type RiskLevel = 1 | 2 | 3 | 4

export interface Product {
  product_id: number
  product_name: string
  department: string
  risk_level: RiskLevel
  launch_date: string
  version: string
  description: string
  video_url: string
  is_active: boolean
  updated_at: string
}

export interface TransparencyPrinciple {
  principle_no: number
  principle_name: string
  content: string
  version?: string
  updated_at?: string
}

export interface PerformanceMetric {
  record_date: string
  total_cases: number
  service_count: number
  accuracy_before: number
  accuracy_after: number
  tat_before_min: number
  tat_after_min: number
}

export interface Contact {
  name: string
  title: string
  phone: string
  email: string
  hours: string
}

