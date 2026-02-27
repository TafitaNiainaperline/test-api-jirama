import { LoginRequest, LoginResponse } from '../models/auth'

export async function loginWithJirama(
  credentials: LoginRequest
): Promise<LoginResponse> {
  const jiramaResponse = await fetch(
    'https://gateway.jirama.mg/jirama/auth/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://espaceclient.jirama.mg',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
        password_confirm: '',
      }),
    }
  )

  const data: LoginResponse = await jiramaResponse.json()
  return data
}
