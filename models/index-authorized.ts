export interface IndexAuthorizedData {
  Erreur: string
  Message: string
  Data: (string | number)[]
}

export interface IndexAuthorizedResponse {
  code: number
  error: boolean
  status: string
  msg: string
  data: IndexAuthorizedData
}
