import React from 'react';
import { Link } from 'react-router-dom';

const assetPath = (path) => {
  return `./${path}`;
};

// Simple dynamic script loader for html2canvas
const loadHtml2Canvas = () => {
  return new Promise((resolve) => {
    if (window.html2canvas) {
      resolve(window.html2canvas);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
    script.onload = () => resolve(window.html2canvas);
    document.body.appendChild(script);
  });
};

export default function InstagramAssetsPage() {
  const downloadSlide = async (slideId, filename) => {
    const html2canvas = await loadHtml2Canvas();
    const element = document.getElementById(slideId);
    if (!element) return;
    
    // Temporarily remove preview scale for high-res rendering
    const canvas = await html2canvas(element, {
      scale: 2, // Double resolution for ultra-crisp Retina quality (2160x2700 px)
      useCORS: true,
      logging: false,
      backgroundColor: '#101512'
    });
    
    const link = document.createElement('a');
    link.download = `${filename}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const posts = [
    {
      id: 'post-1',
      title: 'Post 1: Website Launch Announcement',
      slides: [
        {
          id: 'p1s1',
          name: 'p1_cover',
          bg: '#101512',
          color: '#f5ebe6',
          content: (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px', boxSizing: 'border-box' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img src={assetPath('logo.png')} alt="ASCENT" style={{ height: '70px', width: 'auto' }} />
                <span style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>ASCENT</span>
              </div>
              <div>
                <span style={{ fontSize: '1.4rem', fontFamily: 'DM Mono, monospace', color: 'var(--orange)', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>ANNOUNCEMENT</span>
                <h1 style={{ fontSize: '6rem', lineHeight: '1.0', margin: '0 0 24px 0', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--orange)' }}>
                  ASCENT IS LIVE
                </h1>
                <p style={{ fontSize: '1.8rem', margin: 0, color: 'rgba(245, 235, 230, 0.8)', lineHeight: '1.5', maxWidth: '800px' }}>
                  A student-led running community built around the hills of Vithura. Explore routes, track leaderboard stats, and read trail logs.
                </p>
              </div>
              <div style={{ borderTop: '2px solid var(--orange)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'DM Mono, monospace' }}>run-ascent.github.io</span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'rgba(245, 235, 230, 0.5)' }}>01 / 04</span>
              </div>
            </div>
          )
        },
        {
          id: 'p1s2',
          name: 'p1_main',
          bg: '#f5ebe6',
          color: '#101512',
          content: (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px', boxSizing: 'border-box' }}>
              <div>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'var(--orange)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>THE DIGITAL CLUBHOUSE</span>
                <h2 style={{ fontSize: '3.5rem', margin: '0 0 40px 0', fontFamily: 'Impact, Bebas Neue, sans-serif', textTransform: 'uppercase', letterSpacing: '0.02em' }}>THE WEB PLATFORM</h2>
              </div>
              <div style={{ background: '#101512', padding: '48px', borderRadius: '8px', color: '#f5ebe6', border: '1px solid rgba(245,235,230,0.1)' }}>
                <h3 style={{ fontFamily: 'Impact, Bebas Neue, sans-serif', fontSize: '2rem', margin: '0 0 32px 0', color: 'var(--orange)', letterSpacing: '0.02em' }}>THIS WEEK'S STANDINGS</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '32px' }}>
                  <div style={{ borderLeft: '4px solid var(--orange)', paddingLeft: '16px' }}>
                    <div style={{ fontSize: '2.5rem', fontFamily: 'Impact, Bebas Neue, sans-serif' }}>57</div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(245,235,230,0.6)', fontFamily: 'DM Mono, monospace' }}>RUNNERS</div>
                  </div>
                  <div style={{ borderLeft: '4px solid var(--orange)', paddingLeft: '16px' }}>
                    <div style={{ fontSize: '2.5rem', fontFamily: 'Impact, Bebas Neue, sans-serif' }}>158.9</div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(245,235,230,0.6)', fontFamily: 'DM Mono, monospace' }}>KM TOTAL</div>
                  </div>
                  <div style={{ borderLeft: '4px solid var(--orange)', paddingLeft: '16px' }}>
                    <div style={{ fontSize: '2.5rem', fontFamily: 'Impact, Bebas Neue, sans-serif' }}>1,274</div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(245,235,230,0.6)', fontFamily: 'DM Mono, monospace' }}>METERS CLIMBED</div>
                  </div>
                </div>
                <p style={{ margin: 0, fontSize: '1.2rem', lineHeight: '1.6', color: 'rgba(245,235,230,0.85)' }}>
                  A clean, pace-pressure free dashboard showcasing our community's effort. Just showing up.
                </p>
              </div>
              <div style={{ borderTop: '2px solid var(--orange)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'DM Mono, monospace', color: 'var(--forest)' }}>run-ascent.github.io</span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'rgba(16, 21, 18, 0.5)' }}>02 / 04</span>
              </div>
            </div>
          )
        },
        {
          id: 'p1s3',
          name: 'p1_explain',
          bg: '#101512',
          color: '#f5ebe6',
          content: (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px', boxSizing: 'border-box' }}>
              <div>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'var(--orange)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>CORE PLATFORM FEATURES</span>
                <h2 style={{ fontSize: '3.5rem', margin: '0 0 48px 0', fontFamily: 'Impact, Bebas Neue, sans-serif', textTransform: 'uppercase', letterSpacing: '0.02em', color: 'var(--orange)' }}>ONE CLUB. FOUR CORNERS.</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                <div style={{ border: '1px solid rgba(245,235,230,0.08)', padding: '32px', borderRadius: '6px' }}>
                  <strong style={{ fontSize: '1.5rem', fontFamily: 'Impact, Bebas Neue, sans-serif', display: 'block', marginBottom: '8px', color: 'var(--orange)' }}>/RUNS</strong>
                  <p style={{ margin: 0, fontSize: '1.1rem', color: 'rgba(245,235,230,0.8)', lineHeight: '1.6' }}>Weekly run schedules, buddy runs, and local safety coordination guides.</p>
                </div>
                <div style={{ border: '1px solid rgba(245,235,230,0.08)', padding: '32px', borderRadius: '6px' }}>
                  <strong style={{ fontSize: '1.5rem', fontFamily: 'Impact, Bebas Neue, sans-serif', display: 'block', marginBottom: '8px', color: 'var(--orange)' }}>/ROUTES</strong>
                  <p style={{ margin: 0, fontSize: '1.1rem', color: 'rgba(245,235,230,0.8)', lineHeight: '1.6' }}>Self-hosted GPX route library with maps, satellite controls, and live elevation hover tracking.</p>
                </div>
                <div style={{ border: '1px solid rgba(245,235,230,0.08)', padding: '32px', borderRadius: '6px' }}>
                  <strong style={{ fontSize: '1.5rem', fontFamily: 'Impact, Bebas Neue, sans-serif', display: 'block', marginBottom: '8px', color: 'var(--orange)' }}>/PULSE</strong>
                  <p style={{ margin: 0, fontSize: '1.1rem', color: 'rgba(245,235,230,0.8)', lineHeight: '1.6' }}>Standings celebrating consistency over speed. Distance and elevation logs from Strava.</p>
                </div>
                <div style={{ border: '1px solid rgba(245,235,230,0.08)', padding: '32px', borderRadius: '6px' }}>
                  <strong style={{ fontSize: '1.5rem', fontFamily: 'Impact, Bebas Neue, sans-serif', display: 'block', marginBottom: '8px', color: 'var(--orange)' }}>/STORIES</strong>
                  <p style={{ margin: 0, fontSize: '1.1rem', color: 'rgba(245,235,230,0.8)', lineHeight: '1.6' }}>Magazine-style logs detailing race reports, captions, safety advices, and founding stories.</p>
                </div>
              </div>
              <div style={{ borderTop: '2px solid var(--orange)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'DM Mono, monospace' }}>run-ascent.github.io</span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'rgba(245, 235, 230, 0.5)' }}>03 / 04</span>
              </div>
            </div>
          )
        },
        {
          id: 'p1s4',
          name: 'p1_visit',
          bg: '#101512',
          color: '#f5ebe6',
          content: (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px', boxSizing: 'border-box', textAlign: 'center', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', alignSelf: 'flex-start' }}>
                <img src={assetPath('logo.png')} alt="ASCENT" style={{ height: '70px', width: 'auto' }} />
                <span style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>ASCENT</span>
              </div>
              <div style={{ maxWidth: '800px' }}>
                <h2 style={{ fontSize: '5rem', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--orange)', margin: '0 0 24px 0' }}>EXPLORE THE PLATFORM</h2>
                <p style={{ fontSize: '1.6rem', color: 'rgba(245,235,230,0.8)', lineHeight: '1.6', marginBottom: '48px' }}>
                  Tap the link in our bio to find your route, check this week's active stats, and join us this Sunday.
                </p>
                <div style={{ background: 'var(--orange)', padding: '24px 48px', borderRadius: '4px', fontSize: '2.5rem', fontFamily: 'Impact, Bebas Neue, sans-serif', color: '#f5ebe6', letterSpacing: '0.02em', display: 'inline-block' }}>
                  RUN-ASCENT.GITHUB.IO
                </div>
              </div>
              <div style={{ borderTop: '2px solid var(--orange)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'DM Mono, monospace', textAlign: 'left' }}>LINK IN BIO</span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'rgba(245, 235, 230, 0.5)' }}>04 / 04</span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 'post-2',
      title: 'Post 2: Interactive Routes Library',
      slides: [
        {
          id: 'p2s1',
          name: 'p2_cover',
          bg: '#101512',
          color: '#f5ebe6',
          content: (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px', boxSizing: 'border-box' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img src={assetPath('logo.png')} alt="ASCENT" style={{ height: '70px', width: 'auto' }} />
                <span style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>ASCENT</span>
              </div>
              <div>
                <span style={{ fontSize: '1.4rem', fontFamily: 'DM Mono, monospace', color: 'var(--orange)', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>FEATURE FOCUS</span>
                <h1 style={{ fontSize: '6rem', lineHeight: '1.0', margin: '0 0 24px 0', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--orange)' }}>
                  MAP YOUR EFFORTS
                </h1>
                <p style={{ fontSize: '1.8rem', margin: 0, color: 'rgba(245, 235, 230, 0.8)', lineHeight: '1.5', maxWidth: '800px' }}>
                  A custom route library integrating Leaflet maps, satellite overlays, and live elevation tracking calibrated from actual GPS data.
                </p>
              </div>
              <div style={{ borderTop: '2px solid var(--orange)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'DM Mono, monospace' }}>run-ascent.github.io/routes</span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'rgba(245, 235, 230, 0.5)' }}>01 / 04</span>
              </div>
            </div>
          )
        },
        {
          id: 'p2s2',
          name: 'p2_main',
          bg: '#f5ebe6',
          color: '#101512',
          content: (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px', boxSizing: 'border-box' }}>
              <div>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'var(--orange)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>THE GEOGRAPHY</span>
                <h2 style={{ fontSize: '3.5rem', margin: '0 0 40px 0', fontFamily: 'Impact, Bebas Neue, sans-serif', textTransform: 'uppercase', letterSpacing: '0.02em' }}>ROUTE PLAYGROUND</h2>
              </div>
              
              <div style={{ background: '#101512', padding: '40px', borderRadius: '8px', color: '#f5ebe6', border: '1px solid rgba(245,235,230,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h4 style={{ fontFamily: 'Impact, Bebas Neue, sans-serif', fontSize: '1.8rem', margin: 0, textTransform: 'uppercase', letterSpacing: '0.02em', color: 'var(--orange)' }}>VITHURA GREEN ROLL</h4>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ background: 'var(--orange)', color: '#f5ebe6', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontFamily: 'DM Mono, monospace', fontWeight: 'bold' }}>10.0 KM</span>
                    <span style={{ background: 'rgba(245,235,230,0.1)', color: '#f5ebe6', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontFamily: 'DM Mono, monospace' }}>87M CLIMB</span>
                  </div>
                </div>
                
                {/* Visual depiction of GPX Visualizer */}
                <div style={{ background: 'rgba(245,235,230,0.03)', height: '240px', border: '1px dashed rgba(245,235,230,0.2)', borderRadius: '4px', marginBottom: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  {/* Fake map drawing */}
                  <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
                    <path d="M20,80 Q70,20 120,60 T180,30" stroke="var(--orange)" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="20" cy="80" r="6" fill="#2b8a3e" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="180" cy="30" r="6" fill="#e03131" stroke="#fff" strokeWidth="1.5" />
                  </svg>
                  <span style={{ fontSize: '0.8rem', fontFamily: 'DM Mono, monospace', color: 'rgba(245,235,230,0.6)', marginTop: '8px' }}>[ INTERACTIVE MAP & ELEVATION TRACKER ]</span>
                </div>
                
                <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.6', color: 'rgba(245,235,230,0.8)' }}>
                  A rolling loop from IISER Gate down through the valleys of Vithura. View full satellite paths and vertical profiles.
                </p>
              </div>

              <div style={{ borderTop: '2px solid var(--orange)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'DM Mono, monospace', color: 'var(--forest)' }}>run-ascent.github.io/routes</span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'rgba(16, 21, 18, 0.5)' }}>02 / 04</span>
              </div>
            </div>
          )
        },
        {
          id: 'p2s3',
          name: 'p2_explain',
          bg: '#101512',
          color: '#f5ebe6',
          content: (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px', boxSizing: 'border-box' }}>
              <div>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'var(--orange)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>ENGINE SPECIFICATION</span>
                <h2 style={{ fontSize: '3.5rem', margin: '0 0 48px 0', fontFamily: 'Impact, Bebas Neue, sans-serif', textTransform: 'uppercase', letterSpacing: '0.02em', color: 'var(--orange)' }}>TAILORED TRAILS</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ borderLeft: '4px solid var(--orange)', paddingLeft: '24px' }}>
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', margin: '0 0 8px 0', letterSpacing: '0.02em' }}>SATELLITE & MAP LAYERS</h3>
                  <p style={{ margin: 0, fontSize: '1.15rem', color: 'rgba(245,235,230,0.85)', lineHeight: '1.6' }}>
                    Toggle between standard light maps and Esri high-resolution satellite imagery to study trail pathways, road bends, and forest cover grids.
                  </p>
                </div>
                <div style={{ borderLeft: '4px solid var(--orange)', paddingLeft: '24px' }}>
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', margin: '0 0 8px 0', letterSpacing: '0.02em' }}>SYNCED HOVER TRACKING</h3>
                  <p style={{ margin: 0, fontSize: '1.15rem', color: 'rgba(245,235,230,0.85)', lineHeight: '1.6' }}>
                    Move your cursor over the elevation chart to see a crosshair update live on the map, pointing to the exact coordinate and displaying local grade and cumulative climb.
                  </p>
                </div>
                <div style={{ borderLeft: '4px solid var(--orange)', paddingLeft: '24px' }}>
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', margin: '0 0 8px 0', letterSpacing: '0.02em' }}>7-POINT GPS SMOOTHING</h3>
                  <p style={{ margin: 0, fontSize: '1.15rem', color: 'rgba(245,235,230,0.85)', lineHeight: '1.6' }}>
                    A custom moving average filter that screens out raw GPS height noise, rendering elevation gains calibrated to match high-precision sports watches.
                  </p>
                </div>
              </div>
              <div style={{ borderTop: '2px solid var(--orange)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'DM Mono, monospace' }}>run-ascent.github.io/routes</span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'rgba(245, 235, 230, 0.5)' }}>03 / 04</span>
              </div>
            </div>
          )
        },
        {
          id: 'p2s4',
          name: 'p2_visit',
          bg: '#101512',
          color: '#f5ebe6',
          content: (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px', boxSizing: 'border-box', textAlign: 'center', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', alignSelf: 'flex-start' }}>
                <img src={assetPath('logo.png')} alt="ASCENT" style={{ height: '70px', width: 'auto' }} />
                <span style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>ASCENT</span>
              </div>
              <div style={{ maxWidth: '800px' }}>
                <h2 style={{ fontSize: '5rem', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--orange)', margin: '0 0 24px 0' }}>EXPLORE THE TRAILS</h2>
                <p style={{ fontSize: '1.6rem', color: 'rgba(245,235,230,0.8)', lineHeight: '1.6', marginBottom: '48px' }}>
                  Tap the link in our bio to visualize the routes and find your next training loop.
                </p>
                <div style={{ background: 'var(--orange)', padding: '24px 48px', borderRadius: '4px', fontSize: '2.3rem', fontFamily: 'Impact, Bebas Neue, sans-serif', color: '#f5ebe6', letterSpacing: '0.02em', display: 'inline-block' }}>
                  RUN-ASCENT.GITHUB.IO/ROUTES
                </div>
              </div>
              <div style={{ borderTop: '2px solid var(--orange)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'DM Mono, monospace', textAlign: 'left' }}>LINK IN BIO</span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'rgba(245, 235, 230, 0.5)' }}>04 / 04</span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 'post-3',
      title: 'Post 3: Pace-Free Leaderboard (Pulse)',
      slides: [
        {
          id: 'p3s1',
          name: 'p3_cover',
          bg: '#101512',
          color: '#f5ebe6',
          content: (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px', boxSizing: 'border-box' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img src={assetPath('logo.png')} alt="ASCENT" style={{ height: '70px', width: 'auto' }} />
                <span style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>ASCENT</span>
              </div>
              <div>
                <span style={{ fontSize: '1.4rem', fontFamily: 'DM Mono, monospace', color: 'var(--orange)', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>THE CLUB PHILOSOPHY</span>
                <h1 style={{ fontSize: '6rem', lineHeight: '1.0', margin: '0 0 24px 0', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--orange)' }}>
                  CONSISTENCY OVER SPEED
                </h1>
                <p style={{ fontSize: '1.8rem', margin: 0, color: 'rgba(245, 235, 230, 0.8)', lineHeight: '1.5', maxWidth: '800px' }}>
                  Why we completely removed pace tables and speed records from our board. Celebrating collective effort and climbing stats.
                </p>
              </div>
              <div style={{ borderTop: '2px solid var(--orange)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'DM Mono, monospace' }}>run-ascent.github.io/pulse</span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'rgba(245, 235, 230, 0.5)' }}>01 / 04</span>
              </div>
            </div>
          )
        },
        {
          id: 'p3s2',
          name: 'p3_main',
          bg: '#f5ebe6',
          color: '#101512',
          content: (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px', boxSizing: 'border-box' }}>
              <div>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'var(--orange)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>THE LEADERBOARD</span>
                <h2 style={{ fontSize: '3.5rem', margin: '0 0 32px 0', fontFamily: 'Impact, Bebas Neue, sans-serif', textTransform: 'uppercase', letterSpacing: '0.02em' }}>THE PULSE BOARD</h2>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Rank Row 1 */}
                <div style={{ background: '#101512', padding: '24px', borderRadius: '4px', color: '#f5ebe6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontFamily: 'Impact, Bebas Neue, sans-serif', fontSize: '1.8rem', color: 'var(--orange)' }}>#1</span>
                    <strong style={{ fontSize: '1.3rem', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.02em' }}>KARAN SINGH</strong>
                  </div>
                  <div style={{ display: 'flex', gap: '24px', fontFamily: 'DM Mono, monospace', fontSize: '1.1rem' }}>
                    <span>20 RUNS</span>
                    <span style={{ color: 'var(--orange)' }}>89.9 KM</span>
                    <span>914 M CLIMB</span>
                  </div>
                </div>
                {/* Rank Row 2 */}
                <div style={{ background: '#101512', padding: '24px', borderRadius: '4px', color: '#f5ebe6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontFamily: 'Impact, Bebas Neue, sans-serif', fontSize: '1.8rem', color: 'var(--orange)' }}>#2</span>
                    <strong style={{ fontSize: '1.3rem', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.02em' }}>RUDRA PATEL</strong>
                  </div>
                  <div style={{ display: 'flex', gap: '24px', fontFamily: 'DM Mono, monospace', fontSize: '1.1rem' }}>
                    <span>2 RUNS</span>
                    <span style={{ color: 'var(--orange)' }}>20.0 KM</span>
                    <span>85 M CLIMB</span>
                  </div>
                </div>
                {/* Rank Row 3 */}
                <div style={{ background: '#101512', padding: '24px', borderRadius: '4px', color: '#f5ebe6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontFamily: 'Impact, Bebas Neue, sans-serif', fontSize: '1.8rem', color: 'var(--orange)' }}>#3</span>
                    <strong style={{ fontSize: '1.3rem', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.02em' }}>SANJAY B</strong>
                  </div>
                  <div style={{ display: 'flex', gap: '24px', fontFamily: 'DM Mono, monospace', fontSize: '1.1rem' }}>
                    <span>2 RUNS</span>
                    <span style={{ color: 'var(--orange)' }}>10.4 KM</span>
                    <span>107 M CLIMB</span>
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '2px solid var(--orange)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'DM Mono, monospace', color: 'var(--forest)' }}>NO SPEED TABLES. JUST SHOWING UP.</span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'rgba(16, 21, 18, 0.5)' }}>02 / 04</span>
              </div>
            </div>
          )
        },
        {
          id: 'p3s3',
          name: 'p3_explain',
          bg: '#101512',
          color: '#f5ebe6',
          content: (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px', boxSizing: 'border-box' }}>
              <div>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'var(--orange)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>THE PHILOSOPHY</span>
                <h2 style={{ fontSize: '3.5rem', margin: '0 0 48px 0', fontFamily: 'Impact, Bebas Neue, sans-serif', textTransform: 'uppercase', letterSpacing: '0.02em', color: 'var(--orange)' }}>ZERO PACE PRESSURE</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ borderLeft: '4px solid var(--orange)', paddingLeft: '24px' }}>
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', margin: '0 0 8px 0', letterSpacing: '0.02em' }}>NO SPEED CLASSIFICATION</h3>
                  <p style={{ margin: 0, fontSize: '1.15rem', color: 'rgba(245,235,230,0.85)', lineHeight: '1.6' }}>
                    We explicitly omit average pace from our club standings. An athlete completing 10 km at 08:30 min/km and one at 04:30 min/km share equal space.
                  </p>
                </div>
                <div style={{ borderLeft: '4px solid var(--orange)', paddingLeft: '24px' }}>
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', margin: '0 0 8px 0', letterSpacing: '0.02em' }}>RANKED BY CONSISTENCY</h3>
                  <p style={{ margin: 0, fontSize: '1.15rem', color: 'rgba(245,235,230,0.85)', lineHeight: '1.6' }}>
                    Our board ranks runners by the number of runs completed in the week, reinforcing consistent, sustainable habits over raw speed metrics.
                  </p>
                </div>
                <div style={{ borderLeft: '4px solid var(--orange)', paddingLeft: '24px' }}>
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', margin: '0 0 8px 0', letterSpacing: '0.02em' }}>ELEVATION AS A MEASURE</h3>
                  <p style={{ margin: 0, fontSize: '1.15rem', color: 'rgba(245,235,230,0.85)', lineHeight: '1.6' }}>
                    Running in Vithura means running hills. We highlight cumulative climbing meters (elevation gain) to celebrate conquering local hill paths.
                  </p>
                </div>
              </div>
              <div style={{ borderTop: '2px solid var(--orange)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'DM Mono, monospace' }}>run-ascent.github.io/pulse</span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'rgba(245, 235, 230, 0.5)' }}>03 / 04</span>
              </div>
            </div>
          )
        },
        {
          id: 'p3s4',
          name: 'p3_visit',
          bg: '#101512',
          color: '#f5ebe6',
          content: (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px', boxSizing: 'border-box', textAlign: 'center', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', alignSelf: 'flex-start' }}>
                <img src={assetPath('logo.png')} alt="ASCENT" style={{ height: '70px', width: 'auto' }} />
                <span style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>ASCENT</span>
              </div>
              <div style={{ maxWidth: '800px' }}>
                <h2 style={{ fontSize: '5rem', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--orange)', margin: '0 0 24px 0' }}>CHECK STANDINGS</h2>
                <p style={{ fontSize: '1.6rem', color: 'rgba(245,235,230,0.8)', lineHeight: '1.6', marginBottom: '48px' }}>
                  Tap the link in our bio to view the consistency rankings and weekly stats.
                </p>
                <div style={{ background: 'var(--orange)', padding: '24px 48px', borderRadius: '4px', fontSize: '2.3rem', fontFamily: 'Impact, Bebas Neue, sans-serif', color: '#f5ebe6', letterSpacing: '0.02em', display: 'inline-block' }}>
                  RUN-ASCENT.GITHUB.IO/PULSE
                </div>
              </div>
              <div style={{ borderTop: '2px solid var(--orange)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'DM Mono, monospace', textAlign: 'left' }}>LINK IN BIO</span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'rgba(245, 235, 230, 0.5)' }}>04 / 04</span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 'post-4',
      title: 'Post 4: Community Stories & Logs',
      slides: [
        {
          id: 'p4s1',
          name: 'p4_cover',
          bg: '#101512',
          color: '#f5ebe6',
          content: (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px', boxSizing: 'border-box' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img src={assetPath('logo.png')} alt="ASCENT" style={{ height: '70px', width: 'auto' }} />
                <span style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>ASCENT</span>
              </div>
              <div>
                <span style={{ fontSize: '1.4rem', fontFamily: 'DM Mono, monospace', color: 'var(--orange)', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>EDITORIAL LOGS</span>
                <h1 style={{ fontSize: '6rem', lineHeight: '1.0', margin: '0 0 24px 0', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--orange)' }}>
                  LENS ON THE RUN
                </h1>
                <p style={{ fontSize: '1.8rem', margin: 0, color: 'rgba(245, 235, 230, 0.8)', lineHeight: '1.5', maxWidth: '800px' }}>
                  A dynamic, magazine-style stories space documenting race reports, captain's diaries, and community trail logs.
                </p>
              </div>
              <div style={{ borderTop: '2px solid var(--orange)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'DM Mono, monospace' }}>run-ascent.github.io/stories</span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'rgba(245, 235, 230, 0.5)' }}>01 / 04</span>
              </div>
            </div>
          )
        },
        {
          id: 'p4s2',
          name: 'p4_main',
          bg: '#f5ebe6',
          color: '#101512',
          content: (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px', boxSizing: 'border-box' }}>
              <div>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'var(--orange)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>COMMUNITY LOGS</span>
                <h2 style={{ fontSize: '3.5rem', margin: '0 0 32px 0', fontFamily: 'Impact, Bebas Neue, sans-serif', textTransform: 'uppercase', letterSpacing: '0.02em' }}>JOURNALS FROM THE FIELD</h2>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div style={{ background: '#101512', padding: '32px', borderRadius: '4px', color: '#f5ebe6' }}>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'DM Mono, monospace', color: 'var(--orange)', display: 'block', marginBottom: '8px' }}>RACE REPORT</span>
                  <h4 style={{ fontFamily: 'Impact, Bebas Neue, sans-serif', fontSize: '1.35rem', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '0.02em' }}>TACKLING THE TRAILS: VAGAMON ENVIROTHON</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: 'rgba(245,235,230,0.7)', lineHeight: '1.5' }}>Captain Karan Singh details Ascent's journey climbing the steep ridges of Vagamon.</p>
                </div>
                <div style={{ background: '#101512', padding: '32px', borderRadius: '4px', color: '#f5ebe6' }}>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'DM Mono, monospace', color: 'var(--orange)', display: 'block', marginBottom: '8px' }}>SAFETY ADVISORY</span>
                  <h4 style={{ fontFamily: 'Impact, Bebas Neue, sans-serif', fontSize: '1.35rem', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '0.02em' }}>FOOTHILL RUNNING SAFETY MANUAL</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: 'rgba(245,235,230,0.7)', lineHeight: '1.5' }}>Route guidelines and wildlife advisories for running the Vithura gates after sunset.</p>
                </div>
              </div>

              <div style={{ borderTop: '2px solid var(--orange)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'DM Mono, monospace', color: 'var(--forest)' }}>MAGAZINE-STYLE DEDICATED BLOG PAGES</span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'rgba(16, 21, 18, 0.5)' }}>02 / 04</span>
              </div>
            </div>
          )
        },
        {
          id: 'p4s3',
          name: 'p4_explain',
          bg: '#101512',
          color: '#f5ebe6',
          content: (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px', boxSizing: 'border-box' }}>
              <div>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'var(--orange)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>READING INTERFACE</span>
                <h2 style={{ fontSize: '3.5rem', margin: '0 0 48px 0', fontFamily: 'Impact, Bebas Neue, sans-serif', textTransform: 'uppercase', letterSpacing: '0.02em', color: 'var(--orange)' }}>EDITORIAL DETAILS</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ borderLeft: '4px solid var(--orange)', paddingLeft: '24px' }}>
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', margin: '0 0 8px 0', letterSpacing: '0.02em' }}>FOCUSSED COLUMN LAYOUT</h3>
                  <p style={{ margin: 0, fontSize: '1.15rem', color: 'rgba(245,235,230,0.85)', lineHeight: '1.6' }}>
                    Articles render in a centered, highly readable reading column with curated typographical hierarchies that reduce eye strain on mobile.
                  </p>
                </div>
                <div style={{ borderLeft: '4px solid var(--orange)', paddingLeft: '24px' }}>
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', margin: '0 0 8px 0', letterSpacing: '0.02em' }}>AUTHOR PROFILE CARDS</h3>
                  <p style={{ margin: 0, fontSize: '1.15rem', color: 'rgba(245,235,230,0.85)', lineHeight: '1.6' }}>
                    Each log features detailed attribution highlighting the runner's role in the club, initials badge, and editorial tags.
                  </p>
                </div>
                <div style={{ borderLeft: '4px solid var(--orange)', paddingLeft: '24px' }}>
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', margin: '0 0 8px 0', letterSpacing: '0.02em' }}>LANDSCAPE VIEWING</h3>
                  <p style={{ margin: 0, fontSize: '1.15rem', color: 'rgba(245,235,230,0.85)', lineHeight: '1.6' }}>
                    We replaced tight crops with horizontal landscape imagery ratios (3:2) to preserve gorgeous scenic route horizons and club line-ups.
                  </p>
                </div>
              </div>
              <div style={{ borderTop: '2px solid var(--orange)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'DM Mono, monospace' }}>run-ascent.github.io/stories</span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'rgba(245, 235, 230, 0.5)' }}>03 / 04</span>
              </div>
            </div>
          )
        },
        {
          id: 'p4s4',
          name: 'p4_visit',
          bg: '#101512',
          color: '#f5ebe6',
          content: (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px', boxSizing: 'border-box', textAlign: 'center', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', alignSelf: 'flex-start' }}>
                <img src={assetPath('logo.png')} alt="ASCENT" style={{ height: '70px', width: 'auto' }} />
                <span style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>ASCENT</span>
              </div>
              <div style={{ maxWidth: '800px' }}>
                <h2 style={{ fontSize: '5rem', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--orange)', margin: '0 0 24px 0' }}>READ THE STORIES</h2>
                <p style={{ fontSize: '1.6rem', color: 'rgba(245,235,230,0.8)', lineHeight: '1.6', marginBottom: '48px' }}>
                  Tap the link in our bio to read full race logs and safety guidelines.
                </p>
                <div style={{ background: 'var(--orange)', padding: '24px 48px', borderRadius: '4px', fontSize: '2.3rem', fontFamily: 'Impact, Bebas Neue, sans-serif', color: '#f5ebe6', letterSpacing: '0.02em', display: 'inline-block' }}>
                  RUN-ASCENT.GITHUB.IO/STORIES
                </div>
              </div>
              <div style={{ borderTop: '2px solid var(--orange)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'DM Mono, monospace', textAlign: 'left' }}>LINK IN BIO</span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'rgba(245, 235, 230, 0.5)' }}>04 / 04</span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 'post-5',
      title: 'Post 5: Sunday Ascent Invitation',
      slides: [
        {
          id: 'p5s1',
          name: 'p5_cover',
          bg: '#101512',
          color: '#f5ebe6',
          content: (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px', boxSizing: 'border-box' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img src={assetPath('logo.png')} alt="ASCENT" style={{ height: '70px', width: 'auto' }} />
                <span style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>ASCENT</span>
              </div>
              <div>
                <span style={{ fontSize: '1.4rem', fontFamily: 'DM Mono, monospace', color: 'var(--orange)', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>JOIN THE PACK</span>
                <h1 style={{ fontSize: '6rem', lineHeight: '1.0', margin: '0 0 24px 0', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--orange)' }}>
                  ZERO PACE PRESSURE
                </h1>
                <p style={{ fontSize: '1.8rem', margin: 0, color: 'rgba(245, 235, 230, 0.8)', lineHeight: '1.5', maxWidth: '800px' }}>
                  Sunday group runs starting at 06:30 AM before the heat rises. Open to walkers, joggers, and friends.
                </p>
              </div>
              <div style={{ borderTop: '2px solid var(--orange)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'DM Mono, monospace' }}>run-ascent.github.io</span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'rgba(245, 235, 230, 0.5)' }}>01 / 04</span>
              </div>
            </div>
          )
        },
        {
          id: 'p5s2',
          name: 'p5_main',
          bg: '#f5ebe6',
          color: '#101512',
          content: (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px', boxSizing: 'border-box' }}>
              <div>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'var(--orange)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>THE COORDINATES</span>
                <h2 style={{ fontSize: '3.5rem', margin: '0 0 32px 0', fontFamily: 'Impact, Bebas Neue, sans-serif', textTransform: 'uppercase', letterSpacing: '0.02em' }}>WEEKLY GROUP RUN</h2>
              </div>
              
              <div style={{ background: '#101512', padding: '40px', borderRadius: '4px', color: '#f5ebe6', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(245,235,230,0.1)', paddingBottom: '16px' }}>
                  <strong style={{ fontFamily: 'Impact, Bebas Neue, sans-serif', fontSize: '1.6rem', letterSpacing: '0.02em' }}>SUNDAY ASCENT</strong>
                  <span style={{ fontFamily: 'DM Mono, monospace', color: 'var(--orange)', fontSize: '1.2rem' }}>06:30 AM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(245,235,230,0.1)', paddingBottom: '16px' }}>
                  <strong style={{ fontFamily: 'Impact, Bebas Neue, sans-serif', fontSize: '1.6rem', letterSpacing: '0.02em' }}>RECOVERY RUNS</strong>
                  <span style={{ fontFamily: 'DM Mono, monospace', color: 'var(--orange)', fontSize: '1.2rem' }}>MID-WEEK</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong style={{ fontFamily: 'Impact, Bebas Neue, sans-serif', fontSize: '1.6rem', letterSpacing: '0.02em' }}>RUN BUDDIES</strong>
                  <span style={{ fontFamily: 'DM Mono, monospace', color: 'var(--orange)', fontSize: '1.2rem' }}>DISCUSSIONS</span>
                </div>
              </div>

              <div style={{ borderTop: '2px solid var(--orange)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'DM Mono, monospace', color: 'var(--forest)' }}>EVERY SUNDAY · START POINT SHARED ON STRAVA</span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'rgba(16, 21, 18, 0.5)' }}>02 / 04</span>
              </div>
            </div>
          )
        },
        {
          id: 'p5s3',
          name: 'p5_explain',
          bg: '#101512',
          color: '#f5ebe6',
          content: (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px', boxSizing: 'border-box' }}>
              <div>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'var(--orange)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>BEFORE YOU SHOW UP</span>
                <h2 style={{ fontSize: '3.5rem', margin: '0 0 48px 0', fontFamily: 'Impact, Bebas Neue, sans-serif', textTransform: 'uppercase', letterSpacing: '0.02em', color: 'var(--orange)' }}>WHAT TO EXPECT</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ borderLeft: '4px solid var(--orange)', paddingLeft: '24px' }}>
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', margin: '0 0 8px 0', letterSpacing: '0.02em' }}>WALK BREAKS WELCOME</h3>
                  <p style={{ margin: 0, fontSize: '1.15rem', color: 'rgba(245,235,230,0.85)', lineHeight: '1.6' }}>
                    There is absolutely no pace shame. Walk breaks are fully standard and welcomed. Elite marathoners and walk-joggers show up side-by-side.
                  </p>
                </div>
                <div style={{ borderLeft: '4px solid var(--orange)', paddingLeft: '24px' }}>
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', margin: '0 0 8px 0', letterSpacing: '0.02em' }}>CHOOSE YOUR LOOP</h3>
                  <p style={{ margin: 0, fontSize: '1.15rem', color: 'rgba(245,235,230,0.85)', lineHeight: '1.6' }}>
                    You select your distance on the fly. Turning back early is a normal part of building consistency and is never discouraged.
                  </p>
                </div>
                <div style={{ borderLeft: '4px solid var(--orange)', paddingLeft: '24px' }}>
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', margin: '0 0 8px 0', letterSpacing: '0.02em' }}>HILL PREPARATION</h3>
                  <p style={{ margin: 0, fontSize: '1.15rem', color: 'rgba(245,235,230,0.85)', lineHeight: '1.6' }}>
                    Running in the Vithura foothills involves climbing. Bring water, comfortable shoes, and a little patience for the hill slopes.
                  </p>
                </div>
              </div>
              <div style={{ borderTop: '2px solid var(--orange)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'DM Mono, monospace' }}>run-ascent.github.io</span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'rgba(245, 235, 230, 0.5)' }}>03 / 04</span>
              </div>
            </div>
          )
        },
        {
          id: 'p5s4',
          name: 'p5_visit',
          bg: '#101512',
          color: '#f5ebe6',
          content: (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px', boxSizing: 'border-box', textAlign: 'center', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', alignSelf: 'flex-start' }}>
                <img src={assetPath('logo.png')} alt="ASCENT" style={{ height: '70px', width: 'auto' }} />
                <span style={{ fontSize: '1.8rem', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>ASCENT</span>
              </div>
              <div style={{ maxWidth: '800px' }}>
                <h2 style={{ fontSize: '5rem', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--orange)', margin: '0 0 24px 0' }}>JOIN US SUNDAY</h2>
                <p style={{ fontSize: '1.6rem', color: 'rgba(245,235,230,0.8)', lineHeight: '1.6', marginBottom: '48px' }}>
                  Tap the link in our bio to access our Strava group coordinates and schedule.
                </p>
                <div style={{ background: 'var(--orange)', padding: '24px 48px', borderRadius: '4px', fontSize: '2.5rem', fontFamily: 'Impact, Bebas Neue, sans-serif', color: '#f5ebe6', letterSpacing: '0.02em', display: 'inline-block' }}>
                  RUN-ASCENT.GITHUB.IO
                </div>
              </div>
              <div style={{ borderTop: '2px solid var(--orange)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <span style={{ fontSize: '1.5rem', fontFamily: 'DM Mono, monospace', textAlign: 'left' }}>LINK IN BIO</span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'DM Mono, monospace', color: 'rgba(245, 235, 230, 0.5)' }}>04 / 04</span>
              </div>
            </div>
          )
        }
      ]
    }
  ];

  return (
    <main style={{ padding: '60px 24px', background: '#101512', minHeight: '100vh', color: '#f5ebe6', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <img src={assetPath('logo.png')} alt="ASCENT" style={{ height: '48px', width: 'auto' }} />
          <span style={{ fontSize: '1.5rem', fontFamily: 'Impact, Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>ASCENT BRAND ASSET GENERATOR</span>
        </div>
        <h1 style={{ fontSize: '2.5rem', fontFamily: 'Impact, Bebas Neue, sans-serif', textTransform: 'uppercase', margin: '0 0 16px 0', letterSpacing: '0.02em', color: 'var(--orange)' }}>
          Instagram Carousel Exporter
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(245,235,230,0.7)', lineHeight: '1.6', margin: '0 0 48px 0', maxWidth: '800px' }}>
          This page renders high-contrast, professional, and branded Instagram slides matching standard 4:5 ratios. Click **Export Slide** on any thumbnail to download a double-resolution, retina-ready (**2160x2700px**) PNG image.
        </p>

        {posts.map((post) => (
          <div key={post.id} style={{ marginBottom: '64px', borderBottom: '1px solid rgba(245,235,230,0.08)', paddingBottom: '48px' }}>
            <h3 style={{ fontSize: '1.6rem', fontFamily: 'Impact, Bebas Neue, sans-serif', textTransform: 'uppercase', marginBottom: '24px', color: 'var(--orange)' }}>
              {post.title}
            </h3>
            
            <div style={{ display: 'flex', gap: '32px', overflowX: 'auto', paddingBottom: '16px' }}>
              {post.slides.map((slide) => (
                <div key={slide.id} style={{ flexShrink: 0, width: '272px' }}>
                  {/* High-res container scaled down for preview */}
                  <div style={{
                    width: '270px',
                    height: '337.5px',
                    overflow: 'hidden',
                    border: '1px solid rgba(245,235,230,0.12)',
                    borderRadius: '4px',
                    position: 'relative',
                    background: slide.bg,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                  }}>
                    <div 
                      id={slide.id}
                      style={{
                        width: '1080px',
                        height: '1350px',
                        transform: 'scale(0.25)',
                        transformOrigin: 'top left',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        background: slide.bg,
                        color: slide.color,
                        boxSizing: 'border-box'
                      }}
                    >
                      {slide.content}
                    </div>
                  </div>
                  <button 
                    onClick={() => downloadSlide(slide.id, `${post.id}_${slide.name}`)}
                    style={{
                      width: '100%',
                      marginTop: '16px',
                      background: 'transparent',
                      color: 'var(--orange)',
                      border: '1px solid var(--orange)',
                      padding: '10px 16px',
                      borderRadius: '4px',
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = 'var(--orange)';
                      e.target.style.color = '#f5ebe6';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = 'var(--orange)';
                    }}
                  >
                    EXPORT SLIDE (PNG)
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link to="/" style={{ color: 'rgba(245,235,230,0.6)', textDecoration: 'underline' }}>Back to Homepage</Link>
        </div>
      </div>
    </main>
  );
}
