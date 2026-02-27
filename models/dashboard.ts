export interface DashboardStats {
  reclamation_clotures: number
  reclamation_encours: number
  processus_encours: number
  processus_clotures: number
}

export interface DashboardResponse {
  code: number
  error: boolean
  msg: string
  data: DashboardStats
}
