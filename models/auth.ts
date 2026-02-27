export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  code: number
  error: boolean
  status: string
  msg: string
  data: {
    access_token: string
    token_type: string
    plateforme: string
    expires_in: number
  }
}
