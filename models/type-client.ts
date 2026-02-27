export interface TypeClient {
  id: number
  name: string
  state: number
}

export interface TypeClientResponse {
  code: number
  error: boolean
  msg: string
  data: TypeClient[]
}
