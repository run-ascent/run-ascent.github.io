import { useEffect, useState, useRef } from 'react';
import { Link, NavLink, useLocation, Navigate } from 'react-router-dom';
import {
  consistencyBoard,
  events,
  upcomingRaces,
  galleryItems,
  pulseStats,
  routes,
  siteConfig,
  storiesList
} from './data/site.jsx';
import stravaCache from './data/strava-cache.json';
import RouteVisualizer from './components/RouteVisualizer.jsx';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`site-header ${isOpen ? 'menu-open' : ''}`} aria-label="Primary navigation">
      <div className="header-bar">
        <Link className="wordmark" to="/" onClick={() => setIsOpen(false)}>
          <img src={assetPath('logo.png')} alt="ASCENT Logo" style={{ height: '32px', width: 'auto' }} />
          <span>ASCENT</span>
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
        <NavLink to="/stories" onClick={() => setIsOpen(false)}>Stories</NavLink>
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
          <article>Zero pace pressure</article>
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
    <section id="runs" className="dark-section" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
      {/* Block 1: Weekly Club Sessions */}
      <div className="event-section-block">
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
              <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
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
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Block 2: Upcoming Local Races */}
      <div className="event-section-block" style={{ borderTop: '1px solid var(--line-dark)', paddingTop: '80px' }}>
        <div className="section-heading">
          <p className="section-kicker">Racing calendar</p>
          <h2>UPCOMING LOCAL RACES</h2>
        </div>
        <div className="event-grid">
          {upcomingRaces.map((race) => (
            <article className="event-card" key={race.title}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', margin: '0 0 24px' }}>
                <p className="event-time" style={{ margin: 0, fontSize: 'clamp(2.4rem, 6vw, 4.4rem)' }}>
                  {race.date.split(',')[0]}
                </p>
                <span className="runs-card-badge" style={{ marginTop: '4px' }}>
                  {race.distance}
                </span>
              </div>
              <h3>{race.title}</h3>
              <p>{race.description}</p>
              <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                <a href={race.url} target="_blank" rel="noopener noreferrer">
                  {race.action}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ value }) {
  const [displayValue, setDisplayValue] = useState('0');
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (!isIntersecting) return;
    
    const match = value.match(/([\d.,]+)(.*)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }
    
    const rawNumberStr = match[1].replace(/,/g, '');
    const suffix = match[2];
    const targetNumber = parseFloat(rawNumberStr);
    
    if (isNaN(targetNumber)) {
      setDisplayValue(value);
      return;
    }
    
    let start = 0;
    const duration = 1200; // ms
    const startTime = performance.now();
    const isFloat = rawNumberStr.includes('.');
    
    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing outQuad
      const easedProgress = progress * (2 - progress);
      const current = start + easedProgress * (targetNumber - start);
      
      let formatted = '';
      if (isFloat) {
        formatted = current.toFixed(1);
      } else {
        formatted = Math.floor(current).toLocaleString();
      }
      
      setDisplayValue(`${formatted}${suffix}`);
      
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    
    requestAnimationFrame(update);
  }, [value, isIntersecting]);

  return <span ref={elementRef}>{displayValue}</span>;
}

function PulsePreview({ full = false }) {
  const displayStats = stravaCache.isLive ? stravaCache.pulseStats : pulseStats;
  const displayBoard = stravaCache.isLive ? stravaCache.consistencyBoard : consistencyBoard;
  const isLive = stravaCache.isLive;
  const hasDetails = displayBoard.length > 0 && displayBoard[0].distance !== undefined;

  return (
    <section className={full ? 'paper-section pulse-page' : 'paper-section pulse-preview'}>
      <div className="section-heading">
        <p className="section-kicker">Club pulse {isLive && '· LIVE'}</p>
        <h2>{full ? 'CURRENT-WEEK CLUB DATA' : 'MOVE TOGETHER, COUNT CONSISTENCY'}</h2>
        <p className="section-copy">
          {isLive 
            ? 'Club stats fetched live from Strava. Showing recent group activities and consistency rankings.'
            : "Weekly leaderboard synced from our Strava Club activities"}
        </p>
      </div>
      <div className="stat-grid">
        {displayStats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <strong><AnimatedCounter value={stat.value} /></strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>

      <div className="board">
        <div className="board-title" style={{ borderBottom: 'none', paddingBottom: '0' }}>
          <p className="section-kicker">Weekly Activity Board</p>
          <span>Celebrating showing up, combined miles, and foothill climbs.</span>
        </div>
        
        <div className="leaderboard-list">
          {displayBoard.map((runner, index) => {
            const rankNum = runner.rank || index + 1;
            const isTop3 = rankNum <= 3;
            return (
              <div 
                key={runner.name} 
                className={`leaderboard-row ${isTop3 ? 'top-3' : ''}`}
              >
                {/* Left: Rank and Name */}
                <div className="leaderboard-athlete">
                  <span className="rank">#{rankNum}</span>
                  <span className="name">{runner.name}</span>
                </div>

                {/* Right: Stats Badges */}
                <div className="leaderboard-stats">
                  <div className="leaderboard-stat-item">
                    <span>Runs</span>
                    <strong>{runner.runs || runner.days || '1'}</strong>
                  </div>
                  {runner.distance && (
                    <div className="leaderboard-stat-item">
                      <span>Distance</span>
                      <strong>{runner.distance}</strong>
                    </div>
                  )}
                  {runner.elevation && (
                    <div className="leaderboard-stat-item climb">
                      <span>Climb</span>
                      <strong>{runner.elevation}</strong>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
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
            <article>
              <p className="section-kicker">Before Sunday</p>
              <h2>WHAT TO KNOW</h2>
              <ul className="clean-list">
                <li>Meet at 06:30 AM at the weekly start point shared in the group.</li>
                <li>Choose your distance on the day. Turning back early is normal.</li>
                <li>Walk breaks are welcome. So are complete beginners.</li>
                <li>Bring water and a little patience for the hills.</li>
                <li><strong>Safety first:</strong> Winding forest roads can be hazardous. Running beyond the Jersey Farm area after sunset, or on unlit roads, is strictly discouraged due to low visibility and active wildlife.</li>
              </ul>
            </article>
            <aside className="join-card">
              <h2>JOIN ASCENT</h2>
              <p>Connect with our community of active runners and stay updated on weekly routes and events.</p>
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
          </section>
        </main>
  );
}


function StoriesPage() {
  return (
    <main className="page">
      <PageHero
        kicker="Stories & Logs"
        title="LENS ON THE RUN. LIFE ON THE TRAIL."
        copy="Capturing the miles, moments, and trails of the ASCENT running community. Explore our photos and read logs of our running journeys."
        type="stories"
      />

      <section className="paper-section" style={{ borderBottom: '1px solid var(--line-dark)' }}>
        <div className="section-heading">
          <p className="section-kicker">Gallery</p>
          <h2>ASCENT IN MOTION</h2>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <figure key={item.caption}>
              {item.image ? (
                <img src={assetPath(item.image)} alt={item.alt} />
              ) : (
                <div aria-hidden="true" />
              )}
              <figcaption style={{ fontSize: '0.78rem', color: 'rgba(16, 21, 18, 0.76)' }}>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="paper-section">
        <div className="section-heading">
          <p className="section-kicker">Logs & Blogs</p>
          <h2>COMMUNITY STORIES</h2>
        </div>
        
        <div style={{ 
          maxWidth: 'var(--max)', 
          margin: '0 auto', 
          display: 'grid', 
          gap: '24px', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'start'
        }}>
          {storiesList.map((story) => {
            return (
              <article 
                key={story.id} 
                className="story-card"
                style={{ 
                  border: '1px solid var(--line-dark)', 
                  padding: '24px', 
                  borderRadius: '3px', 
                  background: 'transparent',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.68rem', fontFamily: 'DM Mono, monospace', color: 'var(--orange)', letterSpacing: '0.05em', fontWeight: 'bold' }}>{story.category}</span>
                    <span style={{ fontSize: '0.62rem', fontFamily: 'DM Mono, monospace', color: 'rgba(16, 21, 18, 0.45)', background: 'rgba(16, 21, 18, 0.05)', padding: '2px 6px', borderRadius: '10px' }}>{story.readTime}</span>
                  </div>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'DM Mono, monospace', color: 'var(--green)' }}>{story.date}</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', margin: '0 0 10px 0', fontFamily: 'Impact, Bebas Neue, sans-serif', fontWeight: 'normal', color: 'var(--forest)', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                  {story.title}
                </h3>
                <p style={{ fontSize: '0.88rem', margin: '0 0 16px 0', color: 'rgba(16, 21, 18, 0.8)', lineBreak: 'normal', lineHeight: '1.6' }}>
                  {story.description}
                </p>
                
                {/* Clean inline details (Author name) */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', fontSize: '0.78rem', color: 'rgba(16, 21, 18, 0.65)' }}>
                  <div style={{ 
                    width: '24px', 
                    height: '24px', 
                    borderRadius: '50%', 
                    background: story.author.avatarColor, 
                    color: 'var(--paper)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: '0.62rem', 
                    fontWeight: 'bold',
                    fontFamily: 'DM Sans, sans-serif'
                  }}>
                    {story.author.initials}
                  </div>
                  <span>By {story.author.name}</span>
                </div>

                <Link 
                  to={`/stories/${story.id}`}
                  className="text-link"
                  style={{ 
                    fontFamily: 'DM Mono, monospace', 
                    fontSize: '0.78rem', 
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    color: 'var(--orange)'
                  }}
                >
                  READ MORE →
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function BlogPostPage({ id }) {
  const story = storiesList.find((s) => s.id === id);
  
  if (!story) {
    return (
      <main className="page" style={{ padding: '120px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Bebas Neue, Impact, sans-serif', fontSize: '2rem', color: 'var(--forest)' }}>Story not found</h2>
        <Link className="button primary" to="/stories" style={{ marginTop: '20px' }}>BACK TO STORIES</Link>
      </main>
    );
  }

  return (
    <main className="page">
      {/* Back navigation at top */}
      <section className="paper-section" style={{ paddingBottom: '0', borderBottom: 'none' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <Link to="/stories" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            fontFamily: 'DM Mono, monospace', 
            fontSize: '0.85rem', 
            color: 'var(--orange)', 
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>
            ← BACK TO STORIES
          </Link>
        </div>
      </section>

      {/* Main creative blog layout */}
      <section className="paper-section" style={{ paddingTop: '24px' }}>
        <article style={{ maxWidth: '680px', margin: '0 auto' }}>
          {/* Category & Date */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.75rem', fontFamily: 'DM Mono, monospace', color: 'var(--orange)', fontWeight: 'bold', letterSpacing: '0.05em' }}>
              {story.category}
            </span>
            <span style={{ color: 'var(--line-dark)' }}>·</span>
            <span style={{ fontSize: '0.75rem', fontFamily: 'DM Mono, monospace', color: 'var(--green)' }}>
              {story.date}
            </span>
            <span style={{ color: 'var(--line-dark)' }}>·</span>
            <span style={{ fontSize: '0.68rem', fontFamily: 'DM Mono, monospace', color: 'rgba(16, 21, 18, 0.55)', background: 'rgba(16, 21, 18, 0.05)', padding: '2px 8px', borderRadius: '12px' }}>
              {story.readTime}
            </span>
          </div>

          {/* Heading */}
          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', 
            lineHeight: '1.05', 
            marginBottom: '24px', 
            fontFamily: 'Bebas Neue, Impact, sans-serif', 
            fontWeight: 'normal',
            color: 'var(--forest)',
            letterSpacing: '0.01em',
            textTransform: 'uppercase'
          }}>
            {story.title}
          </h1>

          {/* Author Block */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            marginBottom: '32px',
            paddingBottom: '24px',
            borderBottom: '1px solid var(--line-dark)'
          }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              background: story.author.avatarColor, 
              color: 'var(--paper)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontWeight: 'bold',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.88rem'
            }}>
              {story.author.initials}
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--forest)', fontFamily: 'DM Sans, sans-serif' }}>
                {story.author.name}
              </strong>
              <span style={{ fontSize: '0.75rem', color: 'rgba(16, 21, 18, 0.6)', fontFamily: 'DM Mono, monospace' }}>
                {story.author.role}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          {story.image && (
            <figure style={{ margin: '0 0 32px 0', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--line-dark)' }}>
              <img src={assetPath(story.image)} alt={story.title} style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '3 / 2', objectFit: 'cover' }} />
            </figure>
          )}

          {/* Brief Description */}
          <p style={{ 
            fontSize: '1.15rem', 
            fontStyle: 'italic', 
            color: 'rgba(16, 21, 18, 0.75)', 
            lineHeight: '1.6', 
            marginBottom: '28px',
            fontFamily: 'DM Sans, sans-serif',
            borderLeft: '4px solid var(--orange)',
            paddingLeft: '16px'
          }}>
            {story.description}
          </p>

          {/* Rich Content Body */}
          <div className="blog-body" style={{ color: 'var(--forest)', fontFamily: 'DM Sans, sans-serif' }}>
            {story.content}
          </div>



          {/* Bottom Back Button */}
          <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--line-dark)', textAlign: 'center' }}>
            <Link className="button ghost" to="/stories" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              ← BACK TO STORIES
            </Link>
          </div>
        </article>
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

      {type === 'stories' && (
        <svg width="340" height="200" viewBox="0 0 340 200" fill="none" style={{ position: 'absolute', right: '4%', top: '50%', transform: 'translateY(-50%)', opacity: 0.22, pointerEvents: 'none', zIndex: 1 }}>
          <rect x="70" y="30" width="200" height="140" rx="10" stroke="var(--orange)" strokeWidth="2.5" />
          <path d="M120,30 L130,15 L210,15 L220,30" stroke="var(--orange)" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="170" cy="100" r="45" stroke="var(--orange)" strokeWidth="2" />
          <circle cx="170" cy="100" r="20" stroke="var(--orange)" strokeWidth="1.5" />
          <circle cx="230" cy="60" r="8" fill="var(--orange)" />
          <path d="M150,80 L190,80" stroke="var(--orange)" strokeWidth="1" />
          <path d="M185,85 L185,125" stroke="var(--orange)" strokeWidth="1" />
          <path d="M190,120 L150,120" stroke="var(--orange)" strokeWidth="1" />
          <path d="M155,115 L155,75" stroke="var(--orange)" strokeWidth="1" />
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
          <img src={assetPath('logo.png')} alt="ASCENT Logo" style={{ height: '32px', width: 'auto' }} />
          <span>ASCENT</span>
        </Link>
        <p>Run. Rise. Repeat. Keeping our community moving around IISER TVM / Vithura.</p>
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

  const isStoriesSubpage = path.startsWith('/stories/');
  const storiesSubpageId = isStoriesSubpage ? path.replace('/stories/', '') : null;
  return (
    <>
      <ScrollToHash />
      <Header />
      {path === '/runs' ? <Navigate to="/#runs" replace /> : null}
      {path === '/routes' ? <RouteLibrary /> : null}
      {path === '/pulse' ? (
        <main className="page">
          <PageHero
            kicker="Club pulse"
            title="NO SPEED TABLES. JUST SHOWING UP."
            copy="ASCENT celebrates collective effort, showing up, and building strength together. Track our combined club stats, climbing milestones, and consistency board."
            type="pulse"
          />
          <PulsePreview full />
        </main>
      ) : null}
      {path === '/join' ? <JoinPage /> : null}
      {path === '/stories' ? <StoriesPage /> : null}
      {isStoriesSubpage ? <BlogPostPage id={storiesSubpageId} /> : null}
      {!['/routes', '/pulse', '/stories', '/join'].includes(path) && !isStoriesSubpage ? <Home /> : null}
      <Footer />
    </>
  );
}
