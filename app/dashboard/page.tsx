'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/styles/dashboard.module.scss'

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [installations, setInstallations] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('jirama_token')
    if (!token) {
      router.push('/')
      return
    }

    fetchData(token)
  }, [router])

  const fetchData = async (token: string) => {
    try {
      const userResponse = await fetch('https://gateway.jirama.mg/jirama/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      const userData = await userResponse.json()
      if (userData.data) {
        setUser(userData.data)
      }

      const installationsResponse = await fetch('https://gateway.jirama.mg/jirama/abonnement', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      const installationsData = await installationsResponse.json()
      if (installationsData.data) {
        setInstallations(installationsData.data)
      }
    } catch (err) {
      setError('Erreur lors du chargement des données')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('jirama_token')
    localStorage.removeItem('jirama_token_type')
    localStorage.removeItem('jirama_plateforme')
    localStorage.removeItem('jirama_expires_in')
    router.push('/')
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingMessage}>Chargement des données...</div>
      </div>
    )
  }

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <h1>Tableau de Bord</h1>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Déconnexion
        </button>
      </header>

      {error && <div className={styles.errorMessage}>{error}</div>}

      {user && (
        <section className={styles.userInfo}>
          <h2>Informations Client</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.label}>Nom</span>
              <span className={styles.value}>{user.l_name || 'N/A'}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Prénom</span>
              <span className={styles.value}>{user.f_name || 'N/A'}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Email</span>
              <span className={styles.value}>{user.email || 'N/A'}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Téléphone</span>
              <span className={styles.value}>{user.phone || 'N/A'}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>CIN</span>
              <span className={styles.value}>{user.password ? 'xxxxxxxx' : 'N/A'}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Adresse</span>
              <span className={styles.value}>{user.address || 'N/A'}</span>
            </div>
          </div>
        </section>
      )}

      {installations.length > 0 && (
        <section className={styles.installations}>
          <h2>Mes Installations</h2>
          <div className={styles.installationsList}>
            {installations.map((installation) => (
              <div key={installation.id} className={styles.installationCard}>
                <div className={styles.cardHeader}>
                  <h3>{installation.nom} {installation.prenom || ''}</h3>
                  <span className={styles.badge}>{installation.typeAbonnement?.name || 'N/A'}</span>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardRow}>
                    <span className={styles.label}>Numéro compteur</span>
                    <span className={styles.value}>{installation.num_compteur}</span>
                  </div>
                  <div className={styles.cardRow}>
                    <span className={styles.label}>Numéro client</span>
                    <span className={styles.value}>{installation.num_client}</span>
                  </div>
                  <div className={styles.cardRow}>
                    <span className={styles.label}>Adresse</span>
                    <span className={styles.value}>{installation.address}</span>
                  </div>
                  <div className={styles.cardRow}>
                    <span className={styles.label}>Date abonnement</span>
                    <span className={styles.value}>{new Date(installation.date_abonnement).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <div className={styles.cardRow}>
                    <span className={styles.label}>Statut</span>
                    <span className={installation.statut === 1 ? styles.statusActive : styles.statusInactive}>
                      {installation.statut === 1 ? 'Actif' : 'Inactif'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
