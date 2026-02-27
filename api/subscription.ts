import { SubscriptionResponse } from '../models/subscription'

export async function getSubscriptions(token: string): Promise<SubscriptionResponse> {
  const response = await fetch('https://gateway.jirama.mg/jirama/abonnement', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })

  const data: SubscriptionResponse = await response.json()
  return data
}

export async function getSubscriptionByMeterNumber(token: string, numCompteur: string): Promise<SubscriptionResponse> {
  const response = await fetch(`https://gateway.jirama.mg/jirama/abonnement?where=num_compteur|e|${numCompteur}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })

  const data: SubscriptionResponse = await response.json()
  return data
}
