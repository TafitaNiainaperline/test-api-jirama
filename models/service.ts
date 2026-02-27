export interface Service {
  id: number
  name: string
  commission: string
  state: number
}

export interface ServiceResponse {
  code: number
  error: boolean
  msg: string
  data: Service
}
