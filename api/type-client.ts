import { TypeClientResponse } from '../models/type-client'

export async function getTypeClient(token: string): Promise<TypeClientResponse> {
  const response = await fetch('https://gateway.jirama.mg/jirama/typeclient', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })

  const data: TypeClientResponse = await response.json()
  return data
}
