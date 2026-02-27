import { ConsumptionResponse } from '../models/consumption'

export async function getConsumptionHistory(token: string): Promise<ConsumptionResponse> {
  const response = await fetch('https://gateway.jirama.mg/jirama/services/getCumulAchatCredit', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })

  const data: ConsumptionResponse = await response.json()
  return data
}
