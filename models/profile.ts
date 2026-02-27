export interface ClientProfileItem {
  Categorie: string
  Site: string
  Activite: string
  Tarif: string
  Tarif_label: string
  Puissance: number
  Tension: string
  Diametre_id: string
  Diametre: string
  NumCompteur: string
  PuissanceTransfo: number
  code_puissance: string
  ZoneTarifaire: string
  Statut: string
  ClientId: string
  Nom: string
  RefClient: string
  Adresse: string
  Commune: string
  Libcommune: string
  Quartier: string
  LibQuartier: string
  TVA: string
  LibTVA: string
  Mail: string
  Telephone: string
  LibStatus: string
  BTMT: string
  TypePaiement: string
  LibTypePaiement: string
  Amperage: string
  CompteurIntelligent: string
  ProprietaireTransfo: string
  TypeCompteur: string
}

export interface ClientProfileData {
  Erreur: string
  Message: string
  Data: ClientProfileItem[]
}

export interface ClientProfileResponse {
  code: number
  error: boolean
  status: string
  msg: string
  data: ClientProfileData
}
