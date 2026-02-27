import { DashboardResponse } from '../models/dashboard'

export async function getDashboard(token: string, numCompteur: string): Promise<DashboardResponse> {
  const response = await fetch(`https://gateway.jirama.mg/jirama/dashbord?num_compteur=${numCompteur}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })

  const data: DashboardResponse = await response.json()
  return data
}
