'use client'

import { FormEvent, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { loginWithJirama } from '@/api/auth'
import styles from '@/styles/auth.module.scss'

export default function Home() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  // Auto-hide success message after 3 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(null), 3000)
      return () => clearTimeout(timer)
    }
  }, [success])

  // Auto-hide error message after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [error])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const data = await loginWithJirama({ email, password })

      if (data.error) {
        throw new Error(data.msg || 'Login failed')
      }

      setSuccess(`Welcome ${email}! Login successful.`)
      console.log('Login response:', data)

      // Reset form
      setEmail('')
      setPassword('')

      // Store token if available
      if (data.data?.access_token) {
        localStorage.setItem('jirama_token', data.data.access_token)
        localStorage.setItem('jirama_token_type', data.data.token_type)
        localStorage.setItem('jirama_plateforme', data.data.plateforme)
        localStorage.setItem('jirama_expires_in', data.data.expires_in.toString())

        // Redirect to dashboard after 1.5 seconds
        setTimeout(() => {
          router.push('/dashboard')
        }, 1500)
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred'
      setError(message)
      console.error('Login error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className={styles.header}>
          <h1>Welcome Back</h1>
          <p>Sign in to your account</p>
        </div>

        {error && (
          <div className={styles.errorMessage}>
            <span className={styles.errorIcon}>⚠</span>
            <div>{error}</div>
          </div>
        )}
        {success && (
          <div className={styles.successMessage}>
            <span className={styles.successIcon}>✓</span>
            <div>{success}</div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <div className={styles.inputWrapper}>
              <span className={styles.inputIcon}>✉</span>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <div className={styles.inputWrapper}>
              <span className={styles.inputIcon}>◆</span>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button type="submit" disabled={loading} className={styles.submitButton}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
