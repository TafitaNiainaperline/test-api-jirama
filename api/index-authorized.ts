import { IndexAuthorizedResponse } from '../models/index-authorized'

export async function getIndexAuthorized(token: string): Promise<IndexAuthorizedResponse> {
  const response = await fetch('https://gateway.jirama.mg/jirama/services/indexAutorise', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })

  const data: IndexAuthorizedResponse = await response.json()
  return data
}
