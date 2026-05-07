import { ImageResponse } from 'next/og'

export const alt = 'EmbelezaDay — Agenda online para salões e profissionais da beleza'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #fef4f8 0%, #ffffff 50%, #fef0e8 100%)',
          padding: '70px',
          position: 'relative',
        }}
      >
        {/* Decorative blur */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            right: -200,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background: 'radial-gradient(circle, #f3b3d5 0%, #e5a88e 50%, transparent 80%)',
            opacity: 0.55,
            filter: 'blur(40px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: 9999,
            background: 'radial-gradient(circle, #966e84 0%, transparent 70%)',
            opacity: 0.3,
            filter: 'blur(40px)',
          }}
        />

        {/* Header — brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 56,
              height: 56,
              background: '#966e84',
              borderRadius: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 700,
              fontSize: 28,
              fontFamily: 'sans-serif',
            }}
          >
            E
          </div>
          <span style={{ fontSize: 32, fontWeight: 700, color: '#281621', letterSpacing: '-0.02em' }}>
            EmbelezaDay
          </span>
        </div>

        {/* Eyebrow */}
        <div
          style={{
            display: 'flex',
            fontSize: 18,
            fontWeight: 600,
            color: '#7d5a6e',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginTop: 70,
          }}
        >
          Para salões e profissionais da beleza
        </div>

        {/* Main headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 76,
            fontWeight: 800,
            color: '#281621',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginTop: 18,
            maxWidth: '92%',
          }}
        >
          <span>A agenda online que</span>
          <span style={{ color: '#966e84' }}>seus clientes preenchem sozinhos</span>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#7d5a6e',
            fontSize: 22,
          }}
        >
          <span>embelezaday.com.br</span>
          <span style={{ fontWeight: 600 }}>Teste grátis 14 dias →</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
