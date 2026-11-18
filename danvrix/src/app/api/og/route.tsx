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
          backgroundColor: '#292334',
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
              borderRadius: '10px',
              backgroundColor: '#f8f7fa',
              color: '#292334',
              fontSize: '30px',
              fontWeight: '500',
            }}
          >
            D
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
            <span style={{ color: '#f8f7fa', fontSize: '38px', fontWeight: '500' }}>
              Danvrix
            </span>
            <span style={{ color: '#c9c3d4', fontSize: '38px', fontWeight: '500' }}>
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
              color: '#c9c3d4',
              fontSize: '18px',
            }}
          >
            <div style={{ width: '6px', height: '6px', backgroundColor: '#66d9b1' }} />
            Desarrollo web y software
          </div>
          <div
            style={{
              color: '#f8f7fa',
              fontSize: '62px',
              fontWeight: '500',
              lineHeight: '1.06',
              letterSpacing: '-0.02em',
            }}
          >
            Desarrollo web y software a medida
          </div>
          <div style={{ color: '#c9c3d4', fontSize: '26px', lineHeight: '1.4' }}>
            Sitios, aplicaciones y asistentes de IA para pequeños negocios
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
                border: '1px solid rgba(248,247,250,0.22)',
                color: '#c9c3d4',
                fontSize: '18px',
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
