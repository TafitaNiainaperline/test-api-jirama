import { InvoiceCountResponse } from '../models/invoice'

export async function getInvoiceCount(token: string): Promise<InvoiceCountResponse> {
  const response = await fetch('https://gateway.jirama.mg/jirama/services/nbrefactures', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })

  const data: InvoiceCountResponse = await response.json()
  return data
}

export async function getUnpaidInvoiceCount(token: string): Promise<InvoiceCountResponse> {
  const response = await fetch('https://gateway.jirama.mg/jirama/services/nbrefacturesimpayes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })

  const data: InvoiceCountResponse = await response.json()
  return data
}
