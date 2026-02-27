export interface Notification {
  // Add notification properties as needed
}

export interface NotificationResponse {
  code: number
  error: boolean
  msg: string
  data: Notification[]
}
