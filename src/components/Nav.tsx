'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react'
import { useTranslations, useLocale } from 'next-intl'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tiktok.kiendaotac.com'

const sections = [
  { id: 'features', href: '#features' },
  { id: 'how-it-works', href: '#how-it-works' },
  { id: 'faq', href: '#faq' },
]

export default function Nav() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')

  // Scroll progress + glassmorphism trigger
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollTop > 20)
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const sectionMap = new Map<string, number>()

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            sectionMap.set(id, entry.intersectionRatio)
          } else {
            sectionMap.delete(id)
          }
          // Pick section with highest ratio
          let best = ''
          let bestRatio = 0
          sectionMap.forEach((ratio, sid) => {
            if (ratio > bestRatio) { bestRatio = ratio; best = sid }
          })
          setActiveSection(best)
        },
        { threshold: [0.1, 0.3, 0.5], rootMargin: '-60px 0px -30% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const switchLocale = useCallback((next: string) => {
    // pathname is like /en, /en/privacy, /vi, /vi/terms
    const parts = pathname.split('/')
    const rest = parts.slice(2).join('/')
    window.location.href = rest ? `/${next}/${rest}` : `/${next}`
    setMenuOpen(false)
  }, [pathname])

  const localePath = `/${locale}`
  const homePath = localePath
  const isHome = pathname === '/' || pathname === `/${locale}`

  const navLinks = [
    { href: isHome ? '#features' : `${homePath}#features`, label: t('features'), id: 'features' },
    { href: isHome ? '#how-it-works' : `${homePath}#how-it-works`, label: t('howItWorks'), id: 'how-it-works' },
    { href: isHome ? '#faq' : `${homePath}#faq`, label: t('faq'), id: 'faq' },
    { href: `${localePath}/privacy`, label: t('privacy'), id: '' },
    { href: `${localePath}/terms`, label: t('terms'), id: '' },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ transition: 'all 0.3s ease' }}
    >
      {/* Scroll progress bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '2px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #FE2C55, #ff6b87, #25F4EE)',
          transition: 'width 0.1s linear',
          zIndex: 10,
        }}
      />

      <nav
        style={{
          background: scrolled ? 'rgba(5,5,5,0.92)' : 'rgba(5,5,5,0.5)',
          backdropFilter: scrolled ? 'blur(24px)' : 'blur(12px)',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'blur(12px)',
          borderBottom: scrolled ? '1px solid #1e1e1e' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <div
          className="max-w-6xl mx-auto px-6"
          style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          {/* Logo */}
          <Link href={homePath} className="no-underline" style={{ display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                background: 'linear-gradient(135deg, #FE2C55, #25F4EE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 800,
                fontSize: '1.2rem',
                letterSpacing: '-0.02em',
              }}
            >
              ClipFlow
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => {
              const isActive = l.id && activeSection === l.id
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    color: isActive ? '#ffffff' : '#6b6b71',
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 600 : 500,
                    padding: '6px 12px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    position: 'relative',
                    transition: 'color 0.2s, background 0.2s',
                    background: isActive ? 'rgba(255,255,255,0.05)' : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      ;(e.currentTarget as HTMLElement).style.color = '#ffffff'
                      ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      ;(e.currentTarget as HTMLElement).style.color = '#6b6b71'
                      ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                    }
                  }}
                >
                  {l.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '2px',
                        left: '12px',
                        right: '12px',
                        height: '2px',
                        background: 'linear-gradient(90deg, #FE2C55, #25F4EE)',
                        borderRadius: '1px',
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right: Lang switcher + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* EN / VI toggle pill */}
            <div
              style={{
                display: 'flex',
                background: '#141414',
                border: '1px solid #2a2a2a',
                borderRadius: '8px',
                padding: '3px',
                gap: '2px',
              }}
            >
              {(['en', 'vi'] as const).map((lng) => (
                <button
                  key={lng}
                  onClick={() => switchLocale(lng)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    background: locale === lng ? 'rgba(254,44,85,0.15)' : 'transparent',
                    color: locale === lng ? '#FE2C55' : '#6b6b71',
                    outline: locale === lng ? '1px solid rgba(254,44,85,0.4)' : 'none',
                  }}
                >
                  {lng}
                </button>
              ))}
            </div>

            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.875rem', animation: 'none' }}
            >
              {t('openApp')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  background: '#fff',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                  transform: menuOpen
                    ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                    : i === 2 ? 'rotate(-45deg) translate(5px, -5px)'
                    : 'none'
                    : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(5,5,5,0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid #1e1e1e',
            padding: '1rem 1.5rem 1.5rem',
          }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                color: activeSection === l.id && l.id ? '#FE2C55' : '#d4d4d8',
                padding: '12px 0',
                fontSize: '1rem',
                fontWeight: 500,
                textDecoration: 'none',
                borderBottom: '1px solid #1e1e1e',
              }}
            >
              {l.label}
            </Link>
          ))}

          {/* Language toggle in mobile menu */}
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', marginBottom: '0.75rem' }}>
            {(['en', 'vi'] as const).map((lng) => (
              <button
                key={lng}
                onClick={() => switchLocale(lng)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  border: locale === lng ? '1px solid rgba(254,44,85,0.5)' : '1px solid #2a2a2a',
                  background: locale === lng ? 'rgba(254,44,85,0.12)' : 'transparent',
                  color: locale === lng ? '#FE2C55' : '#6b6b71',
                  cursor: 'pointer',
                }}
              >
                {lng}
              </button>
            ))}
          </div>

          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-flex' }}
            onClick={() => setMenuOpen(false)}
          >
            {t('openApp')} →
          </a>
        </div>
      )}
    </header>
  )
}
