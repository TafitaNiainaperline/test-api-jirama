export interface ConsumptionRecord {
  Activite: string
  Installation: string
  Consommation: number
  Periode: string
  Compteur: string
  estime: string
}

export interface ConsumptionData {
  Erreur: string
  Message: string
  Data: ConsumptionRecord[]
}

export interface ConsumptionResponse {
  code: number
  error: boolean
  status: string
  msg: string
  data: ConsumptionData
}
