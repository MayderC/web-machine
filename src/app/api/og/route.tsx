import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const lang = new URL(request.url).searchParams.get('lang');
  const isES = lang !== 'en';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f7f6f0',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            maxWidth: '1000px',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                backgroundColor: '#121212',
                color: '#f7f6f0',
                fontFamily: 'Space Mono, monospace',
                fontSize: '24px',
                fontWeight: '700',
                letterSpacing: '0.1em',
                padding: '8px 16px',
                border: '2px solid #121212',
              }}
            >
              [MC]
            </div>
            <div
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '48px',
                fontWeight: '800',
                color: '#121212',
                letterSpacing: '-0.02em',
              }}
            >
              MayderC
            </div>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '18px',
              fontWeight: '700',
              letterSpacing: '0.05em',
              color: '#121212',
              border: '2px solid #121212',
              padding: '8px 16px',
              backgroundColor: '#ffffff',
            }}
          >
            FULLSTACK // WEB & AI
          </div>

          {/* Description */}
          <div
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '28px',
              fontWeight: '400',
              color: '#555555',
              textAlign: 'center',
              lineHeight: '1.5',
              maxWidth: '800px',
            }}
          >
            {isES ? 'Desarrollo Web en Costa Rica' : 'Web Development in Costa Rica'}
          </div>

          {/* Tech tags */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '16px',
            }}
          >
            {['TypeScript', 'React', 'Next.js', 'Python', 'AI/ML', 'WebGL', '3D'].map((tech) => (
              <div
                key={tech}
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#121212',
                  backgroundColor: '#ffffff',
                  border: '2px solid #121212',
                  padding: '8px 16px',
                  boxShadow: '4px 4px 0 #121212',
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Bottom accent */}
          <div
            style={{
              marginTop: '32px',
              width: '200px',
              height: '4px',
              backgroundColor: '#f6e05e',
              border: '2px solid #121212',
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}