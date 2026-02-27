import { TypePieceResponse } from '../models/type-piece'

export async function getTypePiece(token: string): Promise<TypePieceResponse> {
  const response = await fetch('https://gateway.jirama.mg/jirama/typepiece', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })

  const data: TypePieceResponse = await response.json()
  return data
}
