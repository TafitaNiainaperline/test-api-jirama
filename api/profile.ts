import { ClientProfileResponse } from '../models/profile'

export async function getClientProfile(token: string): Promise<ClientProfileResponse> {
  const response = await fetch('https://gateway.jirama.mg/jirama/services/ClientProfil_v2', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })

  const data: ClientProfileResponse = await response.json()
  return data
}
