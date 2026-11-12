import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'Verena Claudia Haage — science with depth, leadership with humanity';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#f6f4ed', color: '#263d35', padding: '64px' }}>
      <div style={{ fontSize: 24, letterSpacing: 5 }}>VERENA CLAUDIA HAAGE, PhD</div>
      <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'serif', fontSize: 76, lineHeight: 1.1 }}>
        <span>Science with depth.</span>
        <span style={{ color: '#a2472c', fontStyle: 'italic' }}>Leadership with humanity.</span>
      </div>
      <div style={{ fontSize: 20, letterSpacing: 3 }}>ACADEMIC LEADERSHIP · SCIENCE COMMUNICATION</div>
    </div>,
    size,
  );
}
