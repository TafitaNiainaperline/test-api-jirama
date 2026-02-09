export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  code: number
  error: boolean
  status: string
  msg: string
  data: {
    access_token: string
    token_type: string
    plateforme: string
    expires_in: number
  }
}

// GET /jirama/auth/me
export interface UserProfile {
  id: number
  admin: number
  l_name: string
  f_name: string
  email: string
  address: string
  phone: string
  password: string
  state: number
  last_connection: string | null
  first_connexion: string | null
  avatar: string | null
  profil_id: number
  plateforme_id: number
  client_id: number
  recovery_token: string | null
  recovery_at: string | null
  profil: {
    id: number
    name: string
    code: string
    state: number
  }
  client: {
    id: number
    prenom: string
    nom: string
    telephone: string
    email: string
    password: string
    provenance: number
    statut: number
    type_client_id: number
    state: number
    num_client: string
    cni: string
    address: string
    type_piece_id: number
    libelle_societe: string | null
    typeClient: {
      id: number
      name: string
      state: number
    }
    type_client: {
      id: number
      name: string
      state: number
    }
  }
}

export interface MeResponse {
  code: number
  error: boolean
  status: string
  msg: string
  data: {
    info: UserProfile
    modules: unknown[]
  }
}
