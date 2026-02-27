export interface TypePiece {
  id: number
  name: string
  state: number
}

export interface TypePieceResponse {
  code: number
  error: boolean
  msg: string
  data: TypePiece[]
}
