import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  consistencyBoard,
  events,
  galleryItems,
  pulseStats,
  routes,
  siteConfig,
} from './data/site.js';
import stravaCache from './data/strava-cache.json';
import RouteVisualizer from './components/RouteVisualizer.jsx';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`site-header ${isOpen ? 'menu-open' : ''}`} aria-label="Primary navigation">
      <div className="header-bar">
        <Link className="wordmark" to="/" onClick={() => setIsOpen(false)}>
          ASCENT
        </Link>
        <div className="header-actions">
          <Link className="nav-cta mobile-cta" to={siteConfig.links.sundayRun}>
            Join Sunday
          </Link>
          <button 
            className="menu-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      <nav className={isOpen ? 'open' : ''}>
        <Link to="/#runs" onClick={() => setIsOpen(false)}>Runs</Link>
        <NavLink to="/routes" onClick={() => setIsOpen(false)}>Routes</NavLink>
        <NavLink to="/pulse" onClick={() => setIsOpen(false)}>Pulse</NavLink>
        <NavLink to="/join" onClick={() => setIsOpen(false)}>Join</NavLink>
      </nav>
      <Link className="nav-cta desktop-cta" to={siteConfig.links.sundayRun}>
        Join Sunday
      </Link>
    </header>
  );
}

function assetPath(path) {
  if (!path) return '';
  if (/^https?:\/\//.test(path) || path.startsWith('/')) return path;
  return `${import.meta.env.BASE_URL}${path}`;
}

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    requestAnimationFrame(() => {
      document.querySelector(location.hash)?.scrollIntoView({ block: 'start' });
    });
  }, [location.pathname, location.hash]);

  return null;
}

function Hero() {
  const { nextRun, links } = siteConfig;

  return (
    <section className="hero" aria-labelledby="home-title">
      <div className="grain" aria-hidden="true" />
      <div className="sun" aria-hidden="true" />
      <div className="hill hill-back" aria-hidden="true" />
      <div className="hill hill-front" aria-hidden="true" />
      <div className="campus-lines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="hero-copy reveal">
        <p className="eyebrow">A student-led running community</p>
        <h1 id="home-title">ASCENT</h1>
        <p className="tagline">RUN. RISE. REPEAT.</p>
        <p className="hero-subcopy">
          Built around the hills of Vithura - IISER TVM, for first-timers, walkers, joggers,
          race trainees, and the friends who show up before the day moves.
        </p>
        <div className="button-row">
          <Link className="button primary" to={links.sundayRun}>
            JOIN THE NEXT RUN
          </Link>
          <a className="button ghost" href={links.strava}>
            STRAVA CLUB ↗
          </a>
        </div>
      </div>
      <div className="ticker" aria-label="Next run details">
        <span>{nextRun.label}</span>
        <span>{nextRun.day}</span>
        <span>{nextRun.time}</span>
        <span>{nextRun.place}</span>
        <span>{nextRun.note}</span>
      </div>
    </section>
  );
}

function Invitation() {
  return (
    <section className="paper-section split-section">
      <div>
        <p className="section-kicker">First run</p>
        <h2>
          YOU DO NOT
          <br />
          HAVE TO RUN
          <br />
          THE WHOLE WAY.
        </h2>
      </div>
      <div className="invitation-copy">
        <p>
          Walk. Jog. Run for one minute, walk for one minute. Turn around early.
          Stay for chai. ASCENT is for showing up, not proving anything.
        </p>
        <div className="reassurance-grid">
          <article>No experience needed</article>
          <article>No fixed distance</article>
          <article>All paces welcome</article>
        </div>
        <Link className="text-link" to="/join">
          YOUR FIRST RUN →
        </Link>
      </div>
    </section>
  );
}

function EventCards() {
  return (
    <section id="runs" className="dark-section">
      <div className="section-heading">
        <p className="section-kicker">This week</p>
        <h2>THIS WEEK AT ASCENT</h2>
      </div>
      <div className="event-grid">
        {events.map((event) => (
          <article className="event-card" key={event.title}>
            <p className="event-time">{event.when}</p>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            {event.url ? (
              event.url.startsWith('http') ? (
                <a href={event.url} target="_blank" rel="noopener noreferrer">
                  {event.action}
                </a>
              ) : (
                <Link to={event.url}>{event.action}</Link>
              )
            ) : (
              <Link to="/join">{event.action}</Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function PulsePreview({ full = false }) {
  const displayStats = stravaCache.isLive ? stravaCache.pulseStats : pulseStats;
  const displayBoard = stravaCache.isLive ? stravaCache.consistencyBoard : consistencyBoard;
  const isLive = stravaCache.isLive;

  return (
    <section className={full ? 'paper-section pulse-page' : 'paper-section pulse-preview'}>
      <div className="section-heading">
        <p className="section-kicker">Club pulse {isLive && '· LIVE'}</p>
        <h2>{full ? 'CURRENT-WEEK CLUB DATA' : 'MOVE TOGETHER, COUNT CONSISTENCY'}</h2>
        <p className="section-copy">
          {isLive 
            ? 'Club stats fetched live from Strava. Showing recent group activities and consistency rankings.'
            : 'Static placeholder data for version 1. Future Strava integration can plug into the same structure without changing the page layout.'}
        </p>
      </div>
      <div className="stat-grid">
        {displayStats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>

      <div className="board">
        <div className="board-title">
          <p className="section-kicker">Consistency Board</p>
          <span>No pace pressure. Just progress.</span>
        </div>
        {displayBoard.map((runner, index) => (
          <div className="board-row" key={runner.name}>
            <span>{index + 1}</span>
            <strong>{runner.name}</strong>
            <em>{runner.days}</em>
          </div>
        ))}
      </div>
    </section>
  );
}

function RouteCard({ route }) {
  const [gpxStats, setGpxStats] = useState(null);

  return (
    <article className="route-card">
      <div>
        <p className="route-distance">
          {gpxStats ? `${gpxStats.distance.toFixed(1)} KM` : route.distance}
        </p>
        <h2>{route.name}</h2>
      </div>
      <dl>
        <div>
          <dt>Climb</dt>
          <dd>{gpxStats ? `${Math.round(gpxStats.climb)} M` : route.climb}</dd>
        </div>
        <div>
          <dt>Effort</dt>
          <dd>{route.effort}</dd>
        </div>
        <div>
          <dt>Surface</dt>
          <dd>{route.surface}</dd>
        </div>
        <div>
          <dt>Start</dt>
          <dd>{route.start}</dd>
        </div>
      </dl>
      <p>{route.notes}</p>
      
      {route.gpx && (
        <RouteVisualizer 
          gpxPath={assetPath(route.gpx)} 
          routeName={route.name} 
          onLoadStats={setGpxStats}
        />
      )}

      {(route.mapUrl || route.gpx) && (
        <div style={{ display: 'flex', gap: 10, marginTop: 12, flexWrap: 'wrap' }}>
          {route.mapUrl && (
            <a 
              className="button ghost light" 
              href={route.mapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ flex: 1, minWidth: '120px', padding: '10px', fontSize: '0.78rem' }}
            >
              VIEW ROUTE ↗
            </a>
          )}
          {route.gpx && (
            <a 
              className="button primary" 
              href={assetPath(route.gpx)} 
              download={`${route.name.toLowerCase().replace(/\s+/g, '-')}.gpx`}
              style={{ flex: 1, minWidth: '120px', padding: '10px', fontSize: '0.78rem' }}
            >
              DOWNLOAD GPX ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}

function RouteLibrary() {
  return (
    <main className="page">
      <PageHero
        kicker="Route library"
        title="BUILT ON HILLS. BUILT TOGETHER."
        copy="Explore the verified routes designed and run by the ASCENT community. Toggle satellite views, preview elevation gains, and navigate your next run."
        type="routes"
      />
      <section className="paper-section route-grid" aria-label="Route library">
        <div style={{
          gridColumn: '1 / -1',
          border: '1px solid var(--orange)',
          background: 'rgba(240, 90, 40, 0.05)',
          padding: '20px 24px',
          marginBottom: '12px',
          fontFamily: 'sans-serif',
          lineHeight: '1.5'
        }}>
          <h3 style={{ 
            margin: '0 0 8px 0', 
            color: 'var(--orange)', 
            fontSize: '0.82rem', 
            letterSpacing: '0.08em', 
            fontWeight: '700',
            fontFamily: 'DM Mono, monospace'
          }}>
            ⚠️ SAFETY ADVISORY
          </h3>
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--forest)' }}>
            ASCENT routes wind through forest foothill zones. For your safety, <strong>running beyond the Jersey Farm area after sunset, or along any unlit roads, is strictly discouraged</strong>. Low visibility and active wildlife in these forest areas can compromise your safety. Always run with a buddy, wear reflective gear in low light, and stay alert.
          </p>
        </div>

        {routes.map((route) => (
          <RouteCard key={route.name} route={route} />
        ))}

        {/* How to Navigate Guide */}
        <div style={{ 
          gridColumn: '1 / -1', 
          marginTop: '56px', 
          borderTop: '1px solid var(--line-light)', 
          paddingTop: '40px' 
        }}>
          <h2 style={{ fontFamily: 'sans-serif', letterSpacing: '-0.02em', fontSize: '1.75rem', marginBottom: '24px' }}>HOW TO NAVIGATE</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontFamily: 'DM Mono, monospace', fontSize: '0.9rem', color: 'var(--green)' }}>1. DOWNLOAD THE GPX</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--forest)', opacity: 0.9 }}>Click the "Download GPX" button on any route card to download the standard route coordinate file to your computer or phone.</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontFamily: 'DM Mono, monospace', fontSize: '0.9rem', color: 'var(--green)' }}>2. LOAD TO YOUR DEVICE</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--forest)', opacity: 0.9 }}>Upload the GPX file to your Garmin Connect, Coros, or Strava account, then sync it to your running watch for turn-by-turn routing.</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontFamily: 'DM Mono, monospace', fontSize: '0.9rem', color: 'var(--green)' }}>3. FOLLOW THE TRAIL</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--forest)', opacity: 0.9 }}>Use the map view to stay on course. Since these runs wind through foothill zones, pre-loading the route prevents getting lost in low-service areas.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function JoinPage() {
  return (
    <main className="page">
      <PageHero
        kicker="First-run guide"
        title="START WHERE YOU ARE."
        copy="You do not need a watch, a plan, or a fast pace. Bring shoes, water, and enough curiosity to reach the start."
        type="join"
      />
      <section className="paper-section join-layout">
        <article style={{ display: 'flex', flexDirection: 'column' }}>
          <div>
            <p className="section-kicker">Before Sunday</p>
            <h2>WHAT TO KNOW</h2>
            <ul className="clean-list">
              <li>Meet at 06:30 AM at the weekly start point shared in the group.</li>
              <li>Choose your distance on the day. Turning back early is normal.</li>
              <li>Walk breaks are welcome. So are complete beginners.</li>
              <li>Bring water and a little patience for the hills.</li>
              <li><strong>Safety first:</strong> Winding forest roads can be hazardous. Running beyond the Jersey Farm area after sunset, or on unlit roads, is strictly discouraged due to low visibility and active wildlife.</li>
            </ul>
          </div>

          {/* What to Bring Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '40px', borderTop: '1px solid var(--line-light)', paddingTop: '32px' }}>
            <article>
              <h4 style={{ color: 'var(--orange)', fontFamily: 'DM Mono, monospace', fontSize: '0.85rem', margin: '0 0 8px 0' }}>01. RUNNING GEAR</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4' }}>Any comfortable running shoes and breathable clothing are perfect. Reflective elements are recommended if you run early or late.</p>
            </article>
            <article>
              <h4 style={{ color: 'var(--orange)', fontFamily: 'DM Mono, monospace', fontSize: '0.85rem', margin: '0 0 8px 0' }}>02. HYDRATION</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4' }}>The foothills get humid quickly. We recommend carrying a handheld water bottle or wearing a hydration vest for runs longer than 5K.</p>
            </article>
            <article>
              <h4 style={{ color: 'var(--orange)', fontFamily: 'DM Mono, monospace', fontSize: '0.85rem', margin: '0 0 8px 0' }}>03. SUPPORTIVE SPIRIT</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4' }}>We run as a community. Encourage those around you, stay with your buddy, and always regroup at key intersections.</p>
            </article>
          </div>
        </article>
        <aside className="join-card">
          <h2>JOIN ASCENT</h2>
          <p>Connect with our running community and stay updated on weekly routes and events.</p>
          <a className="button primary" href={siteConfig.links.sundayRun}>
            JOIN SUNDAY RUN ↗
          </a>
          <a className="button ghost" href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer">
            INSTAGRAM ↗
          </a>
          <a className="button ghost" href={siteConfig.links.strava} target="_blank" rel="noopener noreferrer">
            STRAVA CLUB ↗
          </a>
          <a className="button ghost" href={siteConfig.links.email}>
            EMAIL US ↗
          </a>
        </aside>

        {/* Frequently Asked Questions */}
        <div style={{ gridColumn: '1 / -1', marginTop: '56px', borderTop: '1px solid var(--line-light)', paddingTop: '40px' }}>
          <h2 style={{ fontFamily: 'sans-serif', letterSpacing: '-0.02em', fontSize: '1.75rem', marginBottom: '24px' }}>FREQUENTLY ASKED QUESTIONS</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontFamily: 'DM Mono, monospace', fontSize: '0.9rem', color: 'var(--green)' }}>Q: DOES IT COST ANYTHING TO JOIN?</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--forest)', opacity: 0.9, lineHeight: '1.4' }}>No. ASCENT is a free, community-driven run club. There are no fees or subscriptions. Just show up and run.</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontFamily: 'DM Mono, monospace', fontSize: '0.9rem', color: 'var(--green)' }}>Q: WHAT IF I AM TOO SLOW?</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--forest)', opacity: 0.9, lineHeight: '1.4' }}>No one is left behind. We have runners at all paces, and we regularly regroup. You can also run-walk or choose a shorter distance.</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontFamily: 'DM Mono, monospace', fontSize: '0.9rem', color: 'var(--green)' }}>Q: CAN I RUN ON MY OWN DAYS?</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--forest)', opacity: 0.9, lineHeight: '1.4' }}>Yes! Join our Strava Club where members coordinate mid-week morning runs, track training, and share routes.</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontFamily: 'DM Mono, monospace', fontSize: '0.9rem', color: 'var(--green)' }}>Q: ARE THERE WATER STOPS?</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--forest)', opacity: 0.9, lineHeight: '1.4' }}>For Sunday runs, we coordinate routes with shared water drop points or stop at shops, but carrying your own bottle is always advised.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="dark-section gallery-section">
        <div className="section-heading">
          <p className="section-kicker">Photo placeholders</p>
          <h2>REAL ASCENT PHOTOS GO HERE</h2>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <figure key={item.caption}>
              {item.image ? (
                <img src={assetPath(item.image)} alt={item.alt} />
              ) : (
                <div aria-hidden="true" />
              )}
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}

function PageHero({ kicker, title, copy, type }) {
  return (
    <section className="page-hero">
      <div className="sun small" aria-hidden="true" />
      
      {type === 'routes' && (
        <svg width="340" height="240" viewBox="0 0 340 240" fill="none" style={{ position: 'absolute', right: '4%', top: '50%', transform: 'translateY(-50%)', opacity: 0.22, pointerEvents: 'none', zIndex: 1 }}>
          <path d="M50,120 C80,40 180,30 260,80 C320,120 280,180 200,200 C120,220 30,170 50,120 Z" stroke="var(--orange)" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M80,120 C100,60 170,50 230,90 C270,120 240,160 180,180 C120,200 60,160 80,120 Z" stroke="var(--orange)" strokeWidth="1.5" />
          <path d="M120,120 C130,90 160,80 190,105 C210,120 200,140 160,150 C120,160 110,140 120,120 Z" stroke="var(--orange)" strokeWidth="1.5" />
          <path d="M20,210 Q80,180 150,120 T280,30" stroke="var(--orange)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="280" cy="30" r="5" fill="var(--orange)" />
          <circle cx="20" cy="210" r="5" fill="none" stroke="var(--orange)" strokeWidth="2" />
        </svg>
      )}

      {type === 'pulse' && (
        <svg width="340" height="200" viewBox="0 0 340 200" fill="none" style={{ position: 'absolute', right: '4%', top: '50%', transform: 'translateY(-50%)', opacity: 0.22, pointerEvents: 'none', zIndex: 1 }}>
          <path d="M10,100 L80,100 L95,80 L105,130 L120,60 L135,110 L145,100 L200,100 L210,50 L220,140 L230,85 L240,100 L330,100" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="30" y="120" width="8" height="40" rx="2" fill="var(--orange)" opacity="0.4" />
          <rect x="50" y="110" width="8" height="50" rx="2" fill="var(--orange)" opacity="0.4" />
          <rect x="70" y="130" width="8" height="30" rx="2" fill="var(--orange)" opacity="0.4" />
          <rect x="160" y="115" width="8" height="45" rx="2" fill="var(--orange)" opacity="0.4" />
          <rect x="180" y="95" width="8" height="65" rx="2" fill="var(--orange)" opacity="0.4" />
          <rect x="260" y="125" width="8" height="35" rx="2" fill="var(--orange)" opacity="0.4" />
          <rect x="280" y="105" width="8" height="55" rx="2" fill="var(--orange)" opacity="0.4" />
          <rect x="300" y="115" width="8" height="45" rx="2" fill="var(--orange)" opacity="0.4" />
        </svg>
      )}

      {type === 'join' && (
        <svg width="340" height="200" viewBox="0 0 340 200" fill="none" style={{ position: 'absolute', right: '4%', top: '50%', transform: 'translateY(-50%)', opacity: 0.22, pointerEvents: 'none', zIndex: 1 }}>
          <path d="M30,180 C80,160 100,110 160,100 C220,90 240,50 300,30" stroke="var(--orange)" strokeWidth="3" strokeDasharray="6 4" strokeLinecap="round" />
          <path d="M300,30 L300,20 M300,30 L300,40 M300,30 L290,30 M300,30 L310,30" stroke="var(--orange)" strokeWidth="2" />
          <circle cx="30" cy="180" r="12" stroke="var(--orange)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="30" cy="180" r="24" stroke="var(--orange)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="160" cy="100" r="16" stroke="var(--orange)" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M10,130 Q70,90 140,140 T290,80" stroke="var(--orange)" strokeWidth="1" opacity="0.6" />
        </svg>
      )}

      <p className="section-kicker">{kicker}</p>
      <h1>{title}</h1>
      <p>{copy}</p>
    </section>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <Invitation />
      <EventCards />
      <PulsePreview />
    </main>
  );
}

function Footer() {
  const { links } = siteConfig;
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Link className="wordmark" to="/">
          ASCENT
        </Link>
        <p>Run. Rise. Repeat. All paces welcome around IISER TVM / Vithura.</p>
      </div>
      <div className="footer-links">
        <a href={links.sundayRun} target="_blank" rel="noopener noreferrer">
          SUNDAY RUN
        </a>
        <a href={links.strava} target="_blank" rel="noopener noreferrer">
          STRAVA
        </a>
        <a href={links.instagram} target="_blank" rel="noopener noreferrer">
          INSTAGRAM
        </a>
        <a href={links.email}>
          EMAIL
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <ScrollToHash />
      <Header />
      {path === '/routes' ? <RouteLibrary /> : null}
      {path === '/pulse' ? (
        <main className="page">
          <PageHero
            kicker="Club pulse"
            title="NO SPEED TABLES. JUST SHOWING UP."
            copy="ASCENT celebrates collective effort, showing up, and building strength together. Track our combined club stats, climbing milestones, and consistency board."
            type="pulse"
          />
          <section className="paper-section" aria-label="Pulse details">
            <PulsePreview full />

            {/* Club Milestones Grid */}
            <div style={{ marginTop: '56px', borderTop: '1px solid var(--line-light)', paddingTop: '40px' }}>
              <h2 style={{ fontFamily: 'sans-serif', letterSpacing: '-0.02em', fontSize: '1.75rem', marginBottom: '24px' }}>CLUB MILESTONES</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
                <div style={{ border: '1px solid var(--line-dark)', padding: '20px', background: 'rgba(16, 21, 18, 0.02)' }}>
                  <h3 style={{ margin: '0 0 4px 0', color: 'var(--orange)', fontSize: '1.5rem', fontFamily: 'DM Mono, monospace' }}>8,849 M</h3>
                  <p style={{ margin: 0, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--green)' }}><strong>Everest Altitude</strong></p>
                  <p style={{ margin: '8px 0 0 0', fontSize: '0.82rem', lineHeight: '1.4' }}>Our collective vertical climbing has surpassed the height of Mount Everest multiple times over.</p>
                </div>
                <div style={{ border: '1px solid var(--line-dark)', padding: '20px', background: 'rgba(16, 21, 18, 0.02)' }}>
                  <h3 style={{ margin: '0 0 4px 0', color: 'var(--orange)', fontSize: '1.5rem', fontFamily: 'DM Mono, monospace' }}>500+</h3>
                  <p style={{ margin: 0, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--green)' }}><strong>Total Runs</strong></p>
                  <p style={{ margin: '8px 0 0 0', fontSize: '0.82rem', lineHeight: '1.4' }}>Total logged run activities across all members since the club started tracking collective progress.</p>
                </div>
                <div style={{ border: '1px solid var(--line-dark)', padding: '20px', background: 'rgba(16, 21, 18, 0.02)' }}>
                  <h3 style={{ margin: '0 0 4px 0', color: 'var(--orange)', fontSize: '1.5rem', fontFamily: 'DM Mono, monospace' }}>100%</h3>
                  <p style={{ margin: 0, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--green)' }}><strong>Pace Friendly</strong></p>
                  <p style={{ margin: '8px 0 0 0', fontSize: '0.82rem', lineHeight: '1.4' }}>Consistency is our priority. Every step, whether walked, jogged, or sprinted, contributes to the pulse of ASCENT.</p>
                </div>
              </div>
            </div>

            {/* How it Works Section */}
            <div style={{ marginTop: '48px', borderTop: '1px solid var(--line-light)', paddingTop: '40px' }}>
              <h2 style={{ fontFamily: 'sans-serif', letterSpacing: '-0.02em', fontSize: '1.75rem', marginBottom: '20px' }}>HOW THE PULSE WORKS</h2>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: 'var(--forest)', maxWidth: '800px', margin: 0 }}>
                The Pulse is the live heartbeat of ASCENT. Statistics are calculated directly from members' public activities logged in our Strava Club. By sync-building the stats, we display the community's combined distance, climbers, and runs. To contribute your runs to the board, simply join the ASCENT run club on Strava!
              </p>
            </div>
          </section>
        </main>
      ) : null}
      {path === '/join' ? <JoinPage /> : null}
      {!['/routes', '/pulse', '/join'].includes(path) ? <Home /> : null}
      <Footer />
    </>
  );
}
