import { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Haversine formula to compute distance between two GPS coordinates in KM
function haversineDistance(coords1, coords2) {
  const toRad = (x) => (x * Math.PI) / 180;
  const R = 6371; // Earth's radius in KM
  const dLat = toRad(coords2.lat - coords1.lat);
  const dLon = toRad(coords2.lon - coords1.lon);
  const lat1 = toRad(coords1.lat);
  const lat2 = toRad(coords2.lat);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function RouteVisualizer({ gpxPath, routeName }) {
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoverPoint, setHoverPoint] = useState(null);

  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const polylineRef = useRef(null);
  const hoverMarkerRef = useRef(null);
  const svgRef = useRef(null);

  // Fetch and Parse GPX File
  useEffect(() => {
    setLoading(true);
    setError(null);
    setPoints([]);

    fetch(gpxPath)
      .then((res) => {
        if (!res.ok) throw new Error(`Could not load GPX file: ${res.statusText}`);
        return res.text();
      })
      .then((gpxText) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(gpxText, 'text/xml');
        const trkpts = xmlDoc.getElementsByTagName('trkpt');

        if (trkpts.length === 0) {
          throw new Error('No trackpoints found in the GPX file.');
        }

        const parsedPoints = [];
        let cumDistance = 0;

        for (let i = 0; i < trkpts.length; i++) {
          const node = trkpts[i];
          const lat = parseFloat(node.getAttribute('lat'));
          const lon = parseFloat(node.getAttribute('lon'));
          const eleNode = node.getElementsByTagName('ele')[0];
          const ele = eleNode ? parseFloat(eleNode.textContent) : 0;

          if (i > 0) {
            const prev = parsedPoints[i - 1];
            cumDistance += haversineDistance(prev, { lat, lon });
          }

          parsedPoints.push({ lat, lon, ele, cumDistance });
        }

        setPoints(parsedPoints);
        setLoading(false);
      })
      .catch((err) => {
        console.error('GPX parsing error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [gpxPath]);

  // Initialize and Update Map
  useEffect(() => {
    if (loading || error || points.length === 0 || !mapContainerRef.current) return;

    // Destroy existing map instance to prevent duplicates
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const startPoint = points[0];
    const endPoint = points[points.length - 1];

    // Initialize Leaflet map
    const map = L.map(mapContainerRef.current, {
      zoomControl: true,
      scrollWheelZoom: false,
    }).setView([startPoint.lat, startPoint.lon], 14);

    mapInstanceRef.current = map;

    // Load CartoDB Voyager tiles (light theme for maximum visibility)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map);

    // Draw route line
    const latlngs = points.map((p) => [p.lat, p.lon]);
    const polyline = L.polyline(latlngs, {
      color: '#f05a28', // ASCENT Orange
      weight: 4,
      opacity: 0.9,
      lineJoin: 'round',
    }).addTo(map);

    polylineRef.current = polyline;

    // Fit map view bounds around the route
    map.fitBounds(polyline.getBounds(), { padding: [20, 20] });

    // Draw Start Marker (Green)
    L.circleMarker([startPoint.lat, startPoint.lon], {
      color: '#2b8a3e', // Bright Forest Green
      fillColor: '#ffffff',
      fillOpacity: 1,
      radius: 6,
      weight: 3,
    })
      .addTo(map)
      .bindPopup('Start Point');

    // Draw End Marker (Red)
    L.circleMarker([endPoint.lat, endPoint.lon], {
      color: '#e03131', // Bright Red
      fillColor: '#ffffff',
      fillOpacity: 1,
      radius: 6,
      weight: 3,
    })
      .addTo(map)
      .bindPopup('End Point');

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [points, loading, error]);

  // Sync Hover Marker on Map
  useEffect(() => {
    if (!mapInstanceRef.current || !hoverPoint) {
      if (hoverMarkerRef.current) {
        hoverMarkerRef.current.remove();
        hoverMarkerRef.current = null;
      }
      return;
    }

    if (!hoverMarkerRef.current) {
      hoverMarkerRef.current = L.circleMarker([hoverPoint.lat, hoverPoint.lon], {
        color: '#f05a28', // ASCENT Orange
        fillColor: '#ffffff',
        fillOpacity: 1,
        radius: 6,
        weight: 3,
      }).addTo(mapInstanceRef.current);
    } else {
      hoverMarkerRef.current.setLatLng([hoverPoint.lat, hoverPoint.lon]);
    }
  }, [hoverPoint]);

  if (loading) {
    return (
      <div className="route-visualizer-placeholder" style={{ padding: 40, textAlign: 'center', fontFamily: 'DM Mono, monospace' }}>
        LOADING ROUTE DATA...
      </div>
    );
  }

  if (error) {
    return (
      <div className="route-visualizer-placeholder" style={{ padding: 20, color: 'var(--orange)', fontFamily: 'DM Mono, monospace' }}>
        Failed to load visualizer: {error}
      </div>
    );
  }

  // Pre-calculate SVG Chart Coordinates
  const totalDistance = points[points.length - 1].cumDistance;
  const elevations = points.map((p) => p.ele);
  const minEle = Math.min(...elevations);
  const maxEle = Math.max(...elevations);
  const eleRange = maxEle - minEle || 1;

  const chartWidth = 600;
  const chartHeight = 120;
  const paddingX = 0;
  const paddingTop = 20;
  const paddingBottom = 15;
  const usableHeight = chartHeight - paddingTop - paddingBottom;

  const chartPoints = points.map((p) => {
    const x = (p.cumDistance / totalDistance) * chartWidth;
    const y = chartHeight - paddingBottom - ((p.ele - minEle) / eleRange) * usableHeight;
    return { x, y, ...p };
  });

  // Create SVG path string
  const pathD = chartPoints.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const areaD = `0,${chartHeight - paddingBottom} ${pathD} ${chartWidth},${chartHeight - paddingBottom}`;

  // Handle Chart Mouse Move
  const handleMouseMove = (e) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * chartWidth;

    // Find the closest point horizontally
    const closest = chartPoints.reduce((prev, curr) =>
      Math.abs(curr.x - mouseX) < Math.abs(prev.x - mouseX) ? curr : prev
    );

    setHoverPoint(closest);
  };

  const handleMouseLeave = () => {
    setHoverPoint(null);
  };

  return (
    <div className="route-visualizer" style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Map Container */}
      <div 
        ref={mapContainerRef} 
        className="route-map"
        style={{ 
          height: '280px', 
          width: '100%', 
          border: '1px solid var(--line-dark)',
          background: '#e0e0e0',
          position: 'relative',
          zIndex: 5
        }} 
      />

      {/* Elevation Chart Container */}
      <div className="elevation-chart-wrapper" style={{ position: 'relative', background: 'rgba(16, 21, 18, 0.03)', border: '1px solid var(--line-dark)', padding: '12px 16px 8px' }}>
        
        {/* Tooltip display */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          fontFamily: 'DM Mono, monospace', 
          fontSize: '0.75rem', 
          color: 'var(--green)',
          marginBottom: 6,
          minHeight: '16px'
        }}>
          {hoverPoint ? (
            <>
              <div style={{ color: 'var(--orange)' }}>
                <strong>Distance:</strong> {hoverPoint.cumDistance.toFixed(2)} KM
              </div>
              <div style={{ color: 'var(--orange)' }}>
                <strong>Elevation:</strong> {Math.round(hoverPoint.ele)} M
              </div>
            </>
          ) : (
            <>
              <div style={{ color: 'var(--green)', opacity: 0.8 }}>
                <strong>Elevation Profile</strong>
              </div>
              <div style={{ color: 'var(--green)', opacity: 0.6 }}>
                <em>Hover to trace route elevation</em>
              </div>
            </>
          )}
        </div>

        {/* SVG Chart */}
        <svg 
          ref={svgRef}
          viewBox={`0 0 ${chartWidth} ${chartHeight}`} 
          width="100%" 
          height="100%"
          style={{ overflow: 'visible', cursor: 'crosshair' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <defs>
            <linearGradient id="eleGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f05a28" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#f05a28" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines (min/max elevation lines) */}
          <line 
            x1="0" y1={paddingTop} 
            x2={chartWidth} y2={paddingTop} 
            stroke="var(--line-dark)" 
            strokeWidth="0.5" 
            strokeDasharray="4 4" 
          />
          <text 
            x={chartWidth - 5} y={paddingTop - 4} 
            textAnchor="end" 
            fill="var(--green)" 
            style={{ fontSize: '9px', fontFamily: 'DM Mono, monospace' }}
          >
            {Math.round(maxEle)}m
          </text>

          <line 
            x1="0" y1={chartHeight - paddingBottom} 
            x2={chartWidth} y2={chartHeight - paddingBottom} 
            stroke="var(--line-dark)" 
            strokeWidth="0.5" 
          />
          <text 
            x={chartWidth - 5} y={chartHeight - paddingBottom + 12} 
            textAnchor="end" 
            fill="var(--green)" 
            style={{ fontSize: '9px', fontFamily: 'DM Mono, monospace' }}
          >
            {Math.round(minEle)}m
          </text>

          {/* Filled Area */}
          <polygon points={areaD} fill="url(#eleGradient)" />

          {/* Line Path */}
          <polyline points={pathD} fill="none" stroke="#f05a28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

          {/* Hover Guides & Elements */}
          {hoverPoint && (
            <>
              {/* Vertical Guide Line */}
              <line 
                x1={hoverPoint.x} y1={paddingTop} 
                x2={hoverPoint.x} y2={chartHeight - paddingBottom} 
                stroke="var(--orange)" 
                strokeWidth="1" 
                strokeDasharray="3 3" 
              />
              
              {/* Highlight Circle on Line */}
              <circle 
                cx={hoverPoint.x} cy={hoverPoint.y} 
                r="4.5" 
                fill="#ffffff" 
                stroke="var(--orange)" 
                strokeWidth="2.5" 
              />
            </>
          )}

          {/* Invisible Interactive Overlay */}
          <rect 
            width={chartWidth} 
            height={chartHeight} 
            fill="transparent" 
            style={{ pointerEvents: 'all' }}
          />
        </svg>
      </div>
    </div>
  );
}
