import { MeResponse } from '../models/user'

export async function getMe(token: string): Promise<MeResponse> {
  const response = await fetch('https://gateway.jirama.mg/jirama/auth/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })

  const data: MeResponse = await response.json()
  return data
}
