import { NotificationResponse } from '../models/notification'

export async function getNotifications(token: string): Promise<NotificationResponse> {
  const response = await fetch('https://gateway.jirama.mg/jirama/notification', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })

  const data: NotificationResponse = await response.json()
  return data
}
