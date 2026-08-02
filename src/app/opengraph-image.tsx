import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Verena Claudia Haage — where science meets human connection';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(<div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between',background:'#F4F0E7',color:'#17201E',padding:'64px'}}><div style={{fontSize:24,letterSpacing:5}}>VERENA CLAUDIA HAAGE</div><div style={{fontFamily:'serif',fontSize:88,lineHeight:1}}>Where science meets<br/><span style={{color:'#B96345',fontStyle:'italic'}}>human connection.</span></div><div style={{fontSize:20,letterSpacing:3}}>SCIENTIST · SPEAKER · CIRCLE FACILITATOR</div></div>, size);
}
