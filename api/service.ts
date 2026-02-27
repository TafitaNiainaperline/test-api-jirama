import { ServiceResponse } from '../models/service'

export async function getService(id: number, token: string): Promise<ServiceResponse> {
  const response = await fetch(`https://gateway.jirama.mg/jirama/service/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })

  const data: ServiceResponse = await response.json()
  return data
}
