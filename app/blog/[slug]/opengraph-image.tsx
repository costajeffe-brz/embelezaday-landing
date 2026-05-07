import { ImageResponse } from 'next/og'
import { getPostBySlug } from '@/lib/blog'

export const alt = 'EmbelezaDay'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const post = await getPostBySlug(slug)
  const title = post?.title ?? 'EmbelezaDay'
  const description = post?.description ?? 'Agenda online para profissionais da beleza'
  const tags = post?.tags ?? []

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
            width: 600,
            height: 600,
            borderRadius: 9999,
            background: 'radial-gradient(circle, #f3b3d5 0%, #e5a88e 50%, transparent 80%)',
            opacity: 0.5,
            filter: 'blur(40px)',
          }}
        />

        {/* Header — brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 48,
              height: 48,
              background: '#966e84',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 700,
              fontSize: 24,
              fontFamily: 'sans-serif',
            }}
          >
            E
          </div>
          <span style={{ fontSize: 28, fontWeight: 700, color: '#281621', letterSpacing: '-0.02em' }}>
            EmbelezaDay
          </span>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div style={{ display: 'flex', gap: 10, marginTop: 50 }}>
            {tags.map(tag => (
              <span
                key={tag}
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#7d5a6e',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  background: '#fbe8f2',
                  padding: '8px 16px',
                  borderRadius: 999,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: title.length > 80 ? 56 : 64,
            fontWeight: 800,
            color: '#281621',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginTop: tags.length > 0 ? 24 : 60,
            maxWidth: '90%',
          }}
        >
          {title}
        </div>

        {/* Description (smaller) */}
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            color: '#7d5a6e',
            lineHeight: 1.4,
            marginTop: 24,
            maxWidth: '85%',
          }}
        >
          {description}
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
            fontSize: 20,
          }}
        >
          <span>embelezaday.com.br/blog</span>
          <span style={{ fontWeight: 600 }}>Leia mais →</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
