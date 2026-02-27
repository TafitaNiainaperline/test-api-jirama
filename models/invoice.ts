export interface InvoiceCountData {
  Erreur: string
  Message: string
  Data: number
}

export interface InvoiceCountResponse {
  code: number
  error: boolean
  status: string
  msg: string
  data: InvoiceCountData
}
