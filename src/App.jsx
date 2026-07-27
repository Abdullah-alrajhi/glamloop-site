import { useState, useEffect, useCallback } from 'react';
import { X, Check, Globe, MessageCircle } from 'lucide-react';
import { C } from './theme.js';
import { CONTENT, PAYMENT_METHODS, SOCIAL_LINKS } from './content.js';

// ─── Visual primitives (ported from the prototype) ──────────────────────────

function LoopMark({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={Math.round(size * 0.93)} viewBox="7.49 34.56 311.51 290.54"
      preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle', overflow: 'hidden' }}>
      <path fill={color} d="M 353.746 142.949 L 351.160 145.176 L 360.285 155.957 C 334.125 152.867 308.320 153.516 283.379 157.828 C 260.090 161.922 237.594 169.184 216.461 179.605 C 197.559 188.879 180.020 200.379 164.277 213.891 C 156.086 220.934 148.395 228.555 141.492 236.387 C 141.207 235.023 140.988 233.586 140.703 232.219 C 135.098 204.258 126.184 175.582 114.969 149.418 C 102.176 119.445 87.152 94.430 70.406 75.238 C 51.145 52.887 30.227 39.230 8.234 34.559 L 7.516 37.863 C 28.789 42.391 49.059 55.688 67.891 77.324 C 76.301 87.098 84.422 98.527 92.043 111.320 C 99.156 123.254 105.770 136.551 111.809 150.641 C 122.949 176.660 131.719 205.051 137.324 232.793 C 137.754 235.094 138.188 237.324 138.617 239.621 C 134.879 244.078 131.430 248.535 128.270 253.063 C 110.586 278.438 103.758 302.301 110.586 315.383 C 113.965 321.922 120.578 325.371 129.633 325.371 C 135.816 325.371 143.723 320.773 146.023 298.922 C 147.602 283.969 146.238 263.559 142.211 240.699 C 149.398 232.219 157.594 224.023 166.434 216.477 C 181.961 203.180 199.281 191.754 217.898 182.625 C 238.742 172.418 260.953 165.156 283.883 161.203 C 308.465 156.891 334.051 156.316 360.000 159.336 L 348.426 167.816 L 350.441 170.547 L 366.898 158.547 Z M 142.715 298.488 C 141.926 306.180 140.344 312.074 138.043 316.102 C 135.816 319.980 133.082 321.922 129.707 321.922 C 121.871 321.922 116.480 319.191 113.676 313.801 C 110.730 308.121 110.730 299.785 113.605 289.578 C 116.625 279.012 122.660 267.078 131.070 255.004 C 133.660 251.340 136.391 247.672 139.410 244.008 C 143.074 265.355 144.223 284.402 142.715 298.488 Z" />
    </svg>
  );
}

function RiyalSymbol({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={Math.round(size * 1256.39 / 1124.14)} viewBox="0 0 1124.14 1256.39"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, margin: '0 2px' }}>
      <path fill={color} d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z" />
      <path fill={color} d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z" />
    </svg>
  );
}

// Renders a string that may contain the [SAR] token. In Arabic the token becomes
// the riyal glyph; in English it becomes the text "SAR".
function renderWithSAR(text, lang) {
  if (typeof text !== 'string' || !text.includes('[SAR]')) return text;
  const parts = text.split('[SAR]');
  return parts.reduce((acc, part, i) => {
    if (i > 0) {
      acc.push(
        lang === 'ar'
          ? <RiyalSymbol key={i} size={15} color={C.inkMuted} />
          : <span key={i}>SAR</span>
      );
    }
    acc.push(part);
    return acc;
  }, []);
}

function PillButton({ children, onClick, href, primary = true, fullWidth, compact, type = 'button' }) {
  const style = {
    padding: compact ? '10px 20px' : '14px 28px',
    background: primary ? C.ink : C.surface,
    color: primary ? C.surface : C.ink,
    border: primary ? 'none' : `1px solid ${C.borderStrong}`,
    borderRadius: 14, fontSize: compact ? 14 : 15, fontWeight: 700, fontFamily: 'inherit',
    cursor: 'pointer', width: fullWidth ? '100%' : 'auto',
    minWidth: fullWidth ? undefined : (compact ? undefined : 180),
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    textDecoration: 'none', lineHeight: 1.2,
  };
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" style={style}>{children}</a>;
  }
  return <button type={type} onClick={onClick} style={style}>{children}</button>;
}

// ─── Language switcher ──────────────────────────────────────────────────────

function LangSwitcher({ lang, setLang, t }) {
  return (
    <button
      onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
      aria-label={t.header.langAria}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        height: 38, padding: '0 14px', borderRadius: 999,
        background: 'transparent', border: `1px solid ${C.border}`,
        cursor: 'pointer', color: C.ink, fontFamily: 'inherit',
        fontSize: 13, fontWeight: 700,
      }}>
      <Globe size={16} strokeWidth={1.75} />
      <span style={{ direction: 'ltr' }}>{t.otherLangShort}</span>
    </button>
  );
}

// ─── Header ─────────────────────────────────────────────────────────────────

function Header({ t, lang, setLang, onRegister }) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 30,
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(18px) saturate(180%)',
      WebkitBackdropFilter: 'blur(18px) saturate(180%)',
      borderBottom: `1px solid ${C.border}`,
    }}>
      <div style={{
        maxWidth: 760, margin: '0 auto', height: 60,
        paddingInline: 16,
        display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: 8,
      }}>
        {/* start zone: language switcher */}
        <div style={{ justifySelf: 'start' }}>
          <LangSwitcher lang={lang} setLang={setLang} t={t} />
        </div>
        {/* center zone: brand lockup */}
        <a href="#top" style={{
          display: 'flex', alignItems: 'center', gap: 6, height: '100%',
          justifyContent: 'center', textDecoration: 'none',
        }}>
          <img src="/icons/logo-mark.svg" alt="GlamLoop"
            style={{ height: 26, display: 'block' }} />
          <span style={{
            fontSize: 20, fontWeight: 800, color: '#1A1A1A',
            lineHeight: 1, position: 'relative', top: 2, direction: 'ltr',
          }}>GlamLoop</span>
        </a>
        {/* end zone: register CTA */}
        <div style={{ justifySelf: 'end' }}>
          <button onClick={onRegister} style={{
            padding: '9px 16px', background: C.ink, color: C.surface,
            border: 'none', borderRadius: 12, fontSize: 13, fontWeight: 700,
            fontFamily: 'inherit', cursor: 'pointer', whiteSpace: 'nowrap',
          }}>{t.header.registerCta}</button>
        </div>
      </div>
    </header>
  );
}

// ─── Register interest modal ────────────────────────────────────────────────

const inputStyle = {
  width: '100%', padding: '12px 14px',
  border: `1px solid ${C.border}`, borderRadius: 12,
  background: C.surface, fontSize: 14, color: C.ink,
  fontFamily: 'inherit', outline: 'none',
};

function RegisterModal({ t, lang, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const submit = (e) => {
    e.preventDefault();
    // No backend — the interest is only logged locally, nothing is stored.
    console.log('[GlamLoop] Interest registered:', { name, email });
    setDone(true);
  };

  const R = t.register;

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 500,
      background: 'rgba(0,0,0,0.45)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
    }}>
      <div onClick={(e) => e.stopPropagation()} dir={t.dir} style={{
        background: C.surface, borderRadius: 22, padding: '28px 24px 30px',
        maxWidth: 400, width: '100%', position: 'relative',
        boxShadow: '0 16px 48px rgba(0,0,0,0.2)',
      }}>
        <button onClick={onClose} aria-label={R.close} style={{
          position: 'absolute', top: 16, insetInlineStart: 16,
          width: 34, height: 34, borderRadius: 999, background: C.surfaceTint,
          border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}>
          <X size={17} color={C.ink} strokeWidth={2} />
        </button>

        {done ? (
          <div style={{ textAlign: 'center', paddingTop: 8 }}>
            <div style={{
              width: 64, height: 64, borderRadius: 999, background: C.successTint,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px',
            }}>
              <Check size={30} color={C.success} strokeWidth={2.5} />
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: C.ink, marginBottom: 8 }}>{R.successTitle}</div>
            <div style={{ fontSize: 14, color: C.inkMuted, lineHeight: 1.6, marginBottom: 22 }}>{R.successBody}</div>
            <PillButton onClick={onClose} fullWidth>{R.successCta}</PillButton>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div style={{ fontSize: 21, fontWeight: 800, color: C.ink, textAlign: 'center', marginBottom: 6, marginTop: 4 }}>
              {R.title}
            </div>
            <div style={{ fontSize: 13.5, color: C.inkMuted, textAlign: 'center', lineHeight: 1.6, marginBottom: 22 }}>
              {R.subtitle}
            </div>

            <label style={{ display: 'block', marginBottom: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.ink, marginBottom: 6 }}>{R.nameLabel}</div>
              <input required value={name} onChange={(e) => setName(e.target.value)}
                placeholder={R.namePlaceholder}
                style={{ ...inputStyle, textAlign: 'start' }} />
            </label>

            <label style={{ display: 'block', marginBottom: 22 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.ink, marginBottom: 6 }}>{R.emailLabel}</div>
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder={R.emailPlaceholder}
                style={{ ...inputStyle, direction: 'ltr', textAlign: 'start' }} />
            </label>

            <PillButton type="submit" fullWidth>{R.submit}</PillButton>
          </form>
        )}
      </div>
    </div>
  );
}

// ─── Contact-us modal ───────────────────────────────────────────────────────

function ContactModal({ t, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const submit = (e) => {
    e.preventDefault();
    // No backend — the message is only logged locally, nothing is stored.
    console.log('[GlamLoop] Contact message:', { name, email, message });
    setDone(true);
  };

  const K = t.contact;

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 500,
      background: 'rgba(0,0,0,0.45)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
    }}>
      <div onClick={(e) => e.stopPropagation()} dir={t.dir} style={{
        background: C.surface, borderRadius: 22, padding: '28px 24px 30px',
        maxWidth: 420, width: '100%', position: 'relative',
        boxShadow: '0 16px 48px rgba(0,0,0,0.2)',
      }}>
        <button onClick={onClose} aria-label={K.close} style={{
          position: 'absolute', top: 16, insetInlineStart: 16,
          width: 34, height: 34, borderRadius: 999, background: C.surfaceTint,
          border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}>
          <X size={17} color={C.ink} strokeWidth={2} />
        </button>

        {done ? (
          <div style={{ textAlign: 'center', paddingTop: 8 }}>
            <div style={{
              width: 64, height: 64, borderRadius: 999, background: C.successTint,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px',
            }}>
              <Check size={30} color={C.success} strokeWidth={2.5} />
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: C.ink, marginBottom: 8 }}>{K.successTitle}</div>
            <div style={{ fontSize: 14, color: C.inkMuted, lineHeight: 1.6, marginBottom: 22 }}>{K.successBody}</div>
            <PillButton onClick={onClose} fullWidth>{K.successCta}</PillButton>
          </div>
        ) : (
          <form onSubmit={submit}>
            {/* Icon marks this modal as distinct from the register-interest one */}
            <div style={{
              width: 52, height: 52, borderRadius: 999, background: C.sellTint,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '4px auto 14px',
            }}>
              <MessageCircle size={24} color={C.ink} strokeWidth={1.9} />
            </div>
            <div style={{ fontSize: 21, fontWeight: 800, color: C.ink, textAlign: 'center', marginBottom: 6 }}>
              {K.title}
            </div>
            <div style={{ fontSize: 13.5, color: C.inkMuted, textAlign: 'center', lineHeight: 1.6, marginBottom: 22 }}>
              {K.subtitle}
            </div>

            <label style={{ display: 'block', marginBottom: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.ink, marginBottom: 6 }}>{K.nameLabel}</div>
              <input required value={name} onChange={(e) => setName(e.target.value)}
                placeholder={K.namePlaceholder}
                style={{ ...inputStyle, textAlign: 'start' }} />
            </label>

            <label style={{ display: 'block', marginBottom: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.ink, marginBottom: 6 }}>{K.emailLabel}</div>
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder={K.emailPlaceholder}
                style={{ ...inputStyle, direction: 'ltr', textAlign: 'start' }} />
            </label>

            <label style={{ display: 'block', marginBottom: 22 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.ink, marginBottom: 6 }}>{K.messageLabel}</div>
              <textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
                placeholder={K.messagePlaceholder}
                style={{ ...inputStyle, textAlign: 'start', resize: 'vertical', minHeight: 96, lineHeight: 1.6 }} />
            </label>

            <PillButton type="submit" fullWidth>{K.submit}</PillButton>
          </form>
        )}
      </div>
    </div>
  );
}

// ─── How-it-works step modal ────────────────────────────────────────────────

function StepsModal({ title, steps, lang, onClose, closeLabel }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 500,
      background: 'rgba(0,0,0,0.45)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: C.surface, borderRadius: 22, padding: '28px 22px 32px',
        maxWidth: 400, width: '100%', maxHeight: '90vh', overflowY: 'auto',
        position: 'relative', boxShadow: '0 16px 48px rgba(0,0,0,0.2)',
      }}>
        <button onClick={onClose} aria-label={closeLabel} style={{
          position: 'absolute', top: 16, insetInlineStart: 16,
          width: 34, height: 34, borderRadius: 999, background: C.surfaceTint,
          border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}>
          <X size={17} color={C.ink} strokeWidth={2} />
        </button>
        <div style={{ fontSize: 20, fontWeight: 800, color: C.ink, textAlign: 'center', marginBottom: 28 }}>
          {title}
        </div>
        <div>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 14 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 999, background: C.ink, color: C.surface,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 700, direction: 'ltr',
                }}>{i + 1}</div>
                {i < steps.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 20, background: C.border }} />}
              </div>
              <div style={{ flex: 1, paddingBottom: i < steps.length - 1 ? 20 : 0, paddingTop: 6 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: C.ink, marginBottom: 4 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: C.inkMuted, lineHeight: 1.6 }}>{renderWithSAR(s.desc, lang)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Hero: Why GlamLoop ─────────────────────────────────────────────────────

function ValueBlock({ title, subtitle, lang }) {
  return (
    <div style={{
      flex: 1, minWidth: 0,
      background: 'rgba(255,255,255,0.65)', borderRadius: 16, padding: '16px 12px',
      display: 'flex', flexDirection: 'column', gap: 6,
    }}>
      <div style={{ fontSize: 13.5, fontWeight: 700, color: C.ink, lineHeight: 1.25 }}>{title}</div>
      <div style={{ fontSize: 12, color: C.inkMuted, lineHeight: 1.45 }}>{renderWithSAR(subtitle, lang)}</div>
    </div>
  );
}

function Hero({ t, lang }) {
  const [mode, setMode] = useState('buy');
  const [showSteps, setShowSteps] = useState(false);
  const isSell = mode === 'sell';
  const H = t.hero;
  const cards = isSell ? H.sellCards : H.buyCards;
  const stepsData = isSell ? t.sellSteps : t.buySteps;

  return (
    <section style={{ paddingInline: 16, marginTop: 8 }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginTop: 16, marginBottom: 16 }}>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: '#1A1A1A', lineHeight: 1.3, margin: 0 }}>
            {H.promoTitle}
          </h1>
        </div>

        <div style={{
          background: isSell ? C.sellTint : C.buyTint,
          borderRadius: 22, padding: '24px 20px 28px', transition: 'background 300ms ease',
        }}>
          <div style={{ fontSize: 23, fontWeight: 800, color: '#1A1A1A', textAlign: 'center', marginBottom: 18 }}>
            {H.cardHeading}
          </div>

          {/* Toggle */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <div style={{
              display: 'flex', background: 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(20px) saturate(180%)', WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: `1px solid ${C.border}`, borderRadius: 999, padding: 4,
            }}>
              {['buy', 'sell'].map((m) => (
                <button key={m} onClick={() => setMode(m)} style={{
                  padding: '8px 28px', borderRadius: 999, border: 'none',
                  background: mode === m ? C.ink : 'transparent',
                  color: mode === m ? C.surface : C.ink,
                  fontSize: 14, fontWeight: 600, fontFamily: 'inherit',
                  cursor: 'pointer', minWidth: 100, transition: 'all 200ms ease',
                }}>{m === 'buy' ? H.tabBuy : H.tabSell}</button>
              ))}
            </div>
          </div>

          {/* Benefit cards */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
            {cards.map((c, i) => (
              <ValueBlock key={i} title={c.title} subtitle={c.subtitle} lang={lang} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <PillButton onClick={() => setShowSteps(true)}>
              {isSell ? H.sellStepsCta : H.buyStepsCta}
            </PillButton>
          </div>
        </div>
      </div>

      {showSteps && (
        <StepsModal title={stepsData.title} steps={stepsData.steps} lang={lang}
          closeLabel={t.register.close} onClose={() => setShowSteps(false)} />
      )}
    </section>
  );
}

// ─── Sell section ───────────────────────────────────────────────────────────

function StepRow({ num, title, body, lang, last }) {
  return (
    <div>
      {num > 1 && <div style={{ borderTop: `1px solid ${C.border}` }} />}
      <div style={{ display: 'flex', gap: 14, padding: '14px 16px' }}>
        <div style={{
          width: 32, height: 32, borderRadius: 999, background: C.ink, color: C.surface,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, fontWeight: 700, flexShrink: 0, direction: 'ltr',
        }}>{num}</div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: C.ink, marginBottom: 4 }}>{title}</div>
          <div style={{ fontSize: 13, color: C.inkMuted, lineHeight: 1.55 }}>{renderWithSAR(body, lang)}</div>
        </div>
      </div>
    </div>
  );
}

function SellSection({ t, lang, onRegister, onContact }) {
  const S = t.sell;
  return (
    <section style={{ paddingInline: 16, marginTop: 40 }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        {/* Hero */}
        <div style={{ background: C.sellTint, borderRadius: 22, padding: '32px 24px 26px' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: C.ink, lineHeight: 1.2, margin: 0 }}>
            {S.heroTitle}
          </h2>
          <div style={{ fontSize: 14.5, color: C.inkMuted, marginTop: 10, lineHeight: 1.55 }}>
            {S.heroSubtitle}
          </div>
          <div style={{ marginTop: 22 }}>
            <PillButton onClick={onRegister}>{S.heroCta}</PillButton>
          </div>
        </div>

        {/* How it works */}
        <div style={{ marginTop: 28 }}>
          <div style={{ fontSize: 19, fontWeight: 700, color: C.ink, marginBottom: 12 }}>{S.howTitle}</div>
          <div style={{ background: C.surface, borderRadius: 16, border: `1px solid ${C.border}` }}>
            {t.sellSteps.steps.map((s, i) => (
              <StepRow key={i} num={i + 1} title={s.title} body={s.desc} lang={lang} last={i === t.sellSteps.steps.length - 1} />
            ))}
          </div>
        </div>

        <div style={{ marginTop: 28, textAlign: 'center' }}>
          <PillButton onClick={onRegister}>{S.ctaTitle}</PillButton>
        </div>

        {/* Still hesitant */}
        <div style={{ marginTop: 28, textAlign: 'center', background: C.buyTint, borderRadius: 22, padding: '28px 24px' }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: '#1A1A1A' }}>{S.hesitantTitle}</div>
          <div style={{ fontSize: 13.5, color: '#5C5C5C', lineHeight: 1.6, marginTop: 10 }}>{S.hesitantBody}</div>
          <div style={{ marginTop: 16 }}>
            <PillButton primary={false} onClick={onContact}>{S.hesitantCta}</PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ────────────────────────────────────────────────────────────────────

function FAQAccordion({ items, lang }) {
  const [open, setOpen] = useState(new Set());
  const toggle = (i) => setOpen((prev) => {
    const next = new Set(prev);
    next.has(i) ? next.delete(i) : next.add(i);
    return next;
  });
  return (
    <div style={{ background: C.surface, borderRadius: 16, border: `1px solid ${C.border}`, overflow: 'hidden' }}>
      {items.map((item, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i}>
            {i > 0 && <div style={{ borderTop: `1px solid ${C.border}` }} />}
            <button onClick={() => toggle(i)} style={{
              width: '100%', background: 'transparent', border: 'none',
              padding: '14px 16px', display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', cursor: 'pointer', fontFamily: 'inherit',
              textAlign: 'start', gap: 8,
            }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: '#1A1A1A', flex: 1 }}>{item.q}</span>
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#8A8A8A"
                strokeWidth={1.75} style={{
                  flexShrink: 0,
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 200ms ease',
                }}>
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div style={{
              overflow: 'hidden', maxHeight: isOpen ? 400 : 0, opacity: isOpen ? 1 : 0,
              transition: 'max-height 250ms ease, opacity 250ms ease',
            }}>
              <div style={{
                padding: '0 16px 14px', fontSize: 13.5, color: '#5C5C5C',
                lineHeight: 1.8, textAlign: 'start',
              }}>{item.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FAQSection({ t, lang }) {
  return (
    <section style={{ paddingInline: 16, marginTop: 40 }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ fontSize: 19, fontWeight: 700, color: C.ink, marginBottom: 12 }}>{t.faq.title}</div>
        <FAQAccordion items={t.faq.items} lang={lang} />
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────────────

function Footer({ t }) {
  const F = t.footer;
  return (
    <footer style={{ paddingInline: 16, marginTop: 48 }}>
      <div style={{
        maxWidth: 760, margin: '0 auto',
        paddingTop: 32, paddingBottom: 28, borderTop: '1px solid #EAEAEA',
      }}>
        {/* SBC trust block */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="/payments/sbc.png" alt={F.sbcAlt} style={{ width: 120, height: 'auto' }} />
          <div style={{ fontSize: 12.5, fontWeight: 600, color: '#4A4A4A', textAlign: 'center', marginTop: 10 }}>
            {F.registeredLine}
          </div>
          <div style={{ fontSize: 12, fontWeight: 500, color: '#6B6B6B', textAlign: 'center', marginTop: 4, direction: t.dir === 'rtl' ? 'rtl' : 'ltr' }}>
            {F.crLine}
          </div>
        </div>

        {/* Payment methods */}
        <div style={{ marginTop: 22, textAlign: 'center' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#8A8A8A', letterSpacing: '0.04em', marginBottom: 10 }}>
            {F.paymentLabel}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
            {PAYMENT_METHODS.map((pm) => (
              <div key={pm.name} style={{
                background: '#FFFFFF', border: '1px solid #ECECEC', borderRadius: 6,
                padding: '6px 12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img src={pm.src} alt={pm.name} style={{ maxWidth: pm.maxW, maxHeight: 24, height: 'auto', width: 'auto' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Social icons */}
        <div style={{ marginTop: 22, textAlign: 'center' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#8A8A8A', letterSpacing: '0.04em', marginBottom: 10 }}>
            {F.socialLabel}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
            {SOCIAL_LINKS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} style={{
                width: 36, height: 36, borderRadius: '50%',
                background: '#FFFFFF', border: '1px solid #ECECEC',
                display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none',
              }}>
                <svg width={22} height={22} viewBox="0 0 24 24" fill="#4A4A4A" xmlns="http://www.w3.org/2000/svg">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 26, textAlign: 'center', fontSize: 11.5, color: '#9A9A9A' }}>
          {F.rights}
        </div>
      </div>
    </footer>
  );
}

// ─── App ────────────────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState('ar');
  const [showRegister, setShowRegister] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const t = CONTENT[lang];

  // Switch document language AND direction so the whole layout mirrors.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
  }, [lang, t.dir]);

  const openRegister = useCallback(() => setShowRegister(true), []);
  const openContact = useCallback(() => setShowContact(true), []);

  return (
    <div id="top" dir={t.dir} style={{ background: C.bg, minHeight: '100vh', color: C.ink }}>
      <Header t={t} lang={lang} setLang={setLang} onRegister={openRegister} />

      <Hero t={t} lang={lang} />
      <SellSection t={t} lang={lang} onRegister={openRegister} onContact={openContact} />
      <FAQSection t={t} lang={lang} />
      <Footer t={t} />

      <div style={{ height: 40 }} />

      {showRegister && <RegisterModal t={t} lang={lang} onClose={() => setShowRegister(false)} />}
      {showContact && <ContactModal t={t} onClose={() => setShowContact(false)} />}
    </div>
  );
}
