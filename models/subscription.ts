export interface Subscription {
  id: number
  num_compteur: string
  date_abonnement: string
  statut: number
  date_resiliation: string | null
  client_id: number
  type_abonnement_id: number
  state: number
  address: string
  compte_ecaissement: string
  nom: string
  prenom: string | null
  num_client: string
  num_compteur_old: string | null
}

export interface SubscriptionResponse {
  code: number
  error: boolean
  msg: string
  data: Subscription[]
}
