'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import ParticlesBg from '@/components/ParticlesBg'
import {
  Video, Scissors, Upload,
  Calendar, FileText, RefreshCw, Layers, FolderOpen, Lock,
} from 'lucide-react'
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tiktok.kiendaotac.com'

/* ── Animation variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

/* ── Tech Stack icons ───────────────────────────────────────────────────── */
function DockerIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#2496ED" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.954 0h2.118a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H8.075a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.953 0h2.118a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.122a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m2.953 2.716h2.118a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H8.075a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.953 0h2.118a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.122a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.953 0h2.118a.185.185 0 00.185-.185V9.006a.186.186 0 00-.185-.186H2.169a.186.186 0 00-.186.185v1.888c0 .102.083.185.186.185m-1.489 1.175c-.374.23-.557.562-.557.998 0 .552.231 1.007.7 1.368.382.292.824.437 1.324.437h15.32c.481 0 .875-.162 1.183-.487.309-.324.463-.747.463-1.271 0-.077-.006-.155-.019-.232a.639.639 0 00-.019-.098c.218-.149.39-.336.516-.562a1.78 1.78 0 00.185-.815c0-.454-.143-.832-.43-1.13a1.605 1.605 0 00-1.17-.452 1.46 1.46 0 00-.334.039 2.257 2.257 0 00-.765-1.013 2.31 2.31 0 00-1.442-.413c-.267 0-.52.045-.757.134a2.393 2.393 0 00-.97-1.107 2.734 2.734 0 00-1.394-.368c-.582 0-1.064.18-1.447.541a2.13 2.13 0 00-.573.964H9.23a2.257 2.257 0 00-1.395-.44 2.257 2.257 0 00-1.613.616 2.12 2.12 0 00-.618 1.456H5.3a1.596 1.596 0 00-1.076.407 1.39 1.39 0 00-.434 1.053c0 .24.054.457.163.651z"/>
    </svg>
  )
}

function GoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#00ACD7" opacity="0.15"/>
      <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="800" fill="#00ACD7" fontFamily="monospace">Go</text>
    </svg>
  )
}

const stack = [
  { label: 'Next.js', icon: <span style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>▲</span> },
  { label: 'Go / Gin', icon: <GoIcon /> },
  { label: 'FFmpeg', icon: <span style={{ color: '#4CAF50', fontWeight: 700 }}>▶</span> },
  { label: 'SQLite', icon: <span style={{ color: '#0F80CC', fontWeight: 700, fontFamily: 'monospace', fontSize: '0.8rem' }}>db</span> },
  { label: 'Docker', icon: <DockerIcon /> },
]

/* ── Section 1: Hero ────────────────────────────────────────────────────── */
function Hero() {
  const t = useTranslations('hero')
  const locale = useLocale()

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
      }}
    >
      {/* Dot grid overlay */}
      <div
        className="dot-grid"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}
      />

      <div
        className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 relative"
        style={{ zIndex: 2, width: '100%', maxWidth: '72rem', textAlign: 'center' }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ marginBottom: '1.5rem' }}
        >
          <span className="badge">
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#25F4EE', display: 'inline-block' }} />
            {t('badge')}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            fontWeight: 900,
            lineHeight: 1.06,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
            maxWidth: '820px',
            margin: '0 auto 1.5rem',
          }}
        >
          {t('headline1')}
          <br />
          {t('headline2')}{' '}
          <span className="gradient-text">{t('headlineBrand')}</span>
        </motion.h1>

        {/* Sub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#9ca3af', maxWidth: '540px', margin: '0 auto 0.5rem', lineHeight: 1.7 }}>
            {t('sub1')}
          </p>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#9ca3af', maxWidth: '540px', margin: '0 auto 0.75rem', lineHeight: 1.7 }}>
            {t('sub2')}
          </p>
          <p style={{ fontSize: '0.875rem', color: '#6b6b71', marginBottom: '2.5rem' }}>{t('tagline')}</p>
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}
        >
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {t('ctaPrimary')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <Link href={`/${locale}/privacy`} className="btn-secondary">
            {t('ctaSecondary')}
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid #1e1e1e',
            textAlign: 'center',
          }}
        >
          {[
            { num: t('stat1Num'), label: t('stat1Label') },
            { num: t('stat2Num'), label: t('stat2Label') },
            { num: t('stat3Num'), label: t('stat3Label') },
          ].map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <div className="stat-number">{s.num}</div>
              <div style={{ color: '#6b6b71', fontSize: '0.875rem', marginTop: '0.25rem' }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ── Section 2: Features ────────────────────────────────────────────────── */
function Features() {
  const t = useTranslations('features')

  const cards = [
    {
      icon: Video,
      gradient: 'var(--red)',
      borderClass: 'card-red-border',
      title: t('card1Title'),
      body: t('card1Body'),
    },
    {
      icon: Scissors,
      gradient: 'var(--cyan)',
      borderClass: 'card-cyan-border',
      title: t('card2Title'),
      body: t('card2Body'),
    },
    {
      icon: Upload,
      gradient: '#a855f7',
      borderClass: 'card-purple-border',
      title: t('card3Title'),
      body: t('card3Body'),
    },
  ]

  return (
    <section id="features" className="py-12 md:py-24 px-4 md:px-6" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
         
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>{t('sectionLabel')}</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            {t('heading')} <span className="gradient-text">{t('headingBrand')}</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}
        >
          {cards.map((f) => {
            const Icon = f.icon
            return (
              <motion.div key={f.title} variants={cardVariant} className={`card ${f.borderClass}`} style={{ padding: '2rem' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: `${f.gradient}18`, border: `1px solid ${f.gradient}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}>
                  <Icon size={22} style={{ color: f.gradient }} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem' }}>{f.title}</h3>
                <p style={{ color: '#9ca3af', lineHeight: 1.75, fontSize: '0.925rem' }}>{f.body}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

/* ── Section 3: How It Works ────────────────────────────────────────────── */
function HowItWorks() {
  const t = useTranslations('howItWorks')

  const steps = [
    { num: t('step1Num'), title: t('step1Title'), body: t('step1Body') },
    { num: t('step2Num'), title: t('step2Title'), body: t('step2Body') },
    { num: t('step3Num'), title: t('step3Title'), body: t('step3Body') },
  ]

  return (
    <section id="how-it-works" className="py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>{t('sectionLabel')}</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            {t('heading')} <span className="gradient-text">{t('headingBrand')}</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}
        >
          {steps.map((s) => (
            <motion.div key={s.num} variants={cardVariant} className="card" style={{ padding: '2rem' }}>
              <div className="step-number" style={{ marginBottom: '1rem' }}>{s.num}</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem' }}>{s.title}</h3>
              <p style={{ color: '#9ca3af', lineHeight: 1.75, fontSize: '0.925rem' }}>{s.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ── Section 4: Capabilities ────────────────────────────────────────────── */
function Capabilities() {
  const t = useTranslations('capabilities')

  const caps = [
    { Icon: Calendar, title: t('cap1Title'), desc: t('cap1Desc') },
    { Icon: FileText, title: t('cap2Title'), desc: t('cap2Desc') },
    { Icon: RefreshCw, title: t('cap3Title'), desc: t('cap3Desc') },
    { Icon: Layers, title: t('cap4Title'), desc: t('cap4Desc') },
    { Icon: FolderOpen, title: t('cap5Title'), desc: t('cap5Desc') },
    { Icon: Lock, title: t('cap6Title'), desc: t('cap6Desc') },
  ]

  return (
    <section id="capabilities" className="py-12 md:py-24 px-4 md:px-6" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>{t('sectionLabel')}</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            {t('heading')} <span className="gradient-text">{t('headingBrand')}</span>
          </h2>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}
        >
          {caps.map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={cardVariant}
              className="card"
              style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
            >
              <div style={{
                width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0, marginTop: '2px',
                background: 'rgba(254,44,85,0.08)', border: '1px solid rgba(254,44,85,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={18} style={{ color: '#FE2C55' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem' }}>{title}</h3>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.65 }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ── Section 5: Tech Stack ──────────────────────────────────────────────── */
function TechStack() {
  const t = useTranslations('techStack')

  return (
    <section id="tech" className="py-10 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
        >
          <p style={{
            textAlign: 'center', color: '#6b6b71', fontSize: '0.78rem',
            fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2rem',
          }}>
            {t('label')}
          </p>
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}
          >
            {stack.map((t) => (
              <motion.span
                key={t.label}
                variants={{ hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }}
                className="tech-chip"
              >
                {t.icon}
                {t.label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Section 6: FAQ ─────────────────────────────────────────────────────── */
function FAQ() {
  const t = useTranslations('faq')

  const faqs = [
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
    { q: t('q4'), a: t('a4') },
    { q: t('q5'), a: t('a5') },
  ]

  return (
    <section id="faq" className="py-12 md:py-24 px-4 md:px-6" style={{ background: 'var(--surface)' }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>{t('sectionLabel')}</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            {t('heading')} <span className="gradient-text">{t('headingBrand')}</span>
          </h2>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.q}
              variants={cardVariant}
              className="faq-item"
            >
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem',
                  display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                }}>
                  <span style={{ color: 'var(--red)', flexShrink: 0 }}>Q</span>
                  {faq.q}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.75, paddingLeft: '1.5rem' }}>
                  {faq.a}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ── Section 7: CTA Strip ───────────────────────────────────────────────── */
function CTAStrip() {
  const t = useTranslations('cta')

  return (
    <section className="py-10 md:py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="cta-strip"
          style={{ padding: 'clamp(2.5rem, 5vw, 4rem)', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            {t('heading')}
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '420px', margin: '0 auto 2rem' }}>
            {t('sub')}
          </p>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
            {t('button')}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <ParticlesBg />
      <Hero />
      <Features />
      <HowItWorks />
      <Capabilities />
      <TechStack />
      <FAQ />
      <CTAStrip />
    </>
  )
}
