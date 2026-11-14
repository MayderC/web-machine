import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0b1f3a',
          padding: '64px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '8px',
              backgroundColor: '#ffffff',
              color: '#0b1f3a',
              fontSize: '30px',
              fontWeight: '800',
            }}
          >
            D
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span style={{ color: '#ffffff', fontSize: '38px', fontWeight: '800', letterSpacing: '-0.02em' }}>
              Danvrix
            </span>
            <span style={{ color: '#9db8d8', fontSize: '38px', fontWeight: '800', letterSpacing: '-0.02em' }}>
              .dev
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '960px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#9db8d8',
              fontSize: '18px',
              fontWeight: '700',
              letterSpacing: '0.12em',
            }}
          >
            <div style={{ width: '32px', height: '2px', backgroundColor: '#1d4ed8' }} />
            DESARROLLO WEB & SOFTWARE
          </div>
          <div
            style={{
              color: '#ffffff',
              fontSize: '64px',
              fontWeight: '800',
              lineHeight: '1.08',
              letterSpacing: '-0.03em',
            }}
          >
            Desarrollo web y software a medida.
          </div>
          <div style={{ color: '#c7d6e8', fontSize: '26px', lineHeight: '1.4' }}>
            Sitios, aplicaciones y asistentes de IA para pequeños negocios.
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          {['Sitios web', 'Aplicaciones', 'Asistentes de IA', 'A medida'].map((tag) => (
            <div
              key={tag}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 18px',
                borderRadius: '6px',
                border: '1px solid rgba(255,255,255,0.18)',
                backgroundColor: 'rgba(255,255,255,0.06)',
                color: '#dbe6f2',
                fontSize: '18px',
                fontWeight: '700',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
