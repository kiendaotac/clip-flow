'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tiktok.kiendaotac.com'

export default function Footer() {
  const t = useTranslations('footer')
  const nav = useTranslations('nav')
  const locale = useLocale()
  const year = new Date().getFullYear()
  const prefix = `/${locale}`

  return (
    <footer className="px-4 md:px-6 pt-12 md:pt-16 pb-8 md:pb-10" style={{ background: '#0a0a0a', borderTop: '1px solid #1e1e1e' }}>
      <div className="max-w-6xl mx-auto">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
          {/* Brand */}
          <div>
            <div style={{
              background: 'linear-gradient(135deg, #FE2C55, #25F4EE)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.75rem',
            }}>
              ClipFlow
            </div>
            <p style={{ color: '#6b6b71', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '220px' }}>
              {t('tagline')}
            </p>
            <div style={{ marginTop: '1rem' }}>
              <a href="mailto:admin@kiendaotac.com" style={{ color: '#6b6b71', fontSize: '0.825rem', textDecoration: 'none' }}>
                admin@kiendaotac.com
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <p style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem' }}>{t('productHeading')}</p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <Link href="#features" className="footer-link">{nav('features')}</Link>
              <Link href="#how-it-works" className="footer-link">{nav('howItWorks')}</Link>
              <Link href="#faq" className="footer-link">{nav('faq')}</Link>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="footer-link">{t('openApp')}</a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <p style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem' }}>{t('legalHeading')}</p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <Link href={`${prefix}/privacy`} className="footer-link">{t('privacyLink')}</Link>
              <Link href={`${prefix}/terms`} className="footer-link">{t('termsLink')}</Link>
            </nav>
          </div>

          {/* Tech */}
          <div>
            <p style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem' }}>{t('techHeading')}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Next.js', 'Go', 'FFmpeg', 'SQLite', 'Docker'].map((tech) => (
                <span key={tech} style={{
                  padding: '4px 10px', background: '#141414', border: '1px solid #2a2a2a',
                  borderRadius: '6px', fontSize: '0.78rem', color: '#9ca3af',
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid #1e1e1e', paddingTop: '1.5rem',
          display: 'flex', flexWrap: 'wrap', gap: '1rem',
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <p style={{ color: '#6b6b71', fontSize: '0.825rem' }}>
            © {year} {t('copyright')}
          </p>
          <p style={{ color: '#3a3a3a', fontSize: '0.775rem' }}>{t('disclaimer')}</p>
        </div>
      </div>
    </footer>
  )
}
