// @ts-nocheck
import { useState } from "react";

// ============================================================
// SWIFTA — Full Transportation App UI
// Made by Carter Codes
// ============================================================

const COLORS = {
  navy: "#050B1F",
  navyMid: "#0D1635",
  navyLight: "#1A2547",
  cyan: "#00D4FF",
  cyanDim: "#00A8CC",
  gold: "#FFB800",
  goldDim: "#CC9400",
  white: "#F0F4FF",
  gray: "#8892B0",
  grayLight: "#CDD6F4",
  red: "#FF4D6A",
  green: "#00E5A0",
  surface: "#111827",
  card: "#162040",
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

  * { margin:0; padding:0; box-sizing:border-box; }
  
  body {
    font-family: 'DM Sans', sans-serif;
    background: ${COLORS.navy};
    color: ${COLORS.white};
    min-height: 100vh;
  }

  .syne { font-family: 'Syne', sans-serif; }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: ${COLORS.navy}; }
  ::-webkit-scrollbar-thumb { background: ${COLORS.navyLight}; border-radius: 4px; }

  @keyframes pulse-ring {
    0% { transform: scale(0.8); opacity: 1; }
    100% { transform: scale(2); opacity: 0; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes slide-up {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.3); }
    50% { box-shadow: 0 0 40px rgba(0, 212, 255, 0.6); }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  .animate-float { animation: float 3s ease-in-out infinite; }
  .animate-glow { animation: glow 2s ease-in-out infinite; }
  .animate-slide-up { animation: slide-up 0.4s ease forwards; }
  .animate-blink { animation: blink 1.5s ease infinite; }

  .btn-primary {
    background: linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.cyanDim});
    color: ${COLORS.navy};
    border: none;
    border-radius: 14px;
    padding: 14px 24px;
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.2s;
    width: 100%;
  }
  .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 8px 25px rgba(0,212,255,0.4); }
  
  .btn-gold {
    background: linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDim});
    color: ${COLORS.navy};
    border: none;
    border-radius: 14px;
    padding: 14px 24px;
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.2s;
    width: 100%;
  }
  .btn-gold:hover { transform: translateY(-1px); box-shadow: 0 8px 25px rgba(255,184,0,0.4); }

  .btn-outline {
    background: transparent;
    color: ${COLORS.cyan};
    border: 1.5px solid ${COLORS.cyan};
    border-radius: 14px;
    padding: 13px 24px;
    font-family: 'Syne', sans-serif;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.2s;
    width: 100%;
  }
  .btn-outline:hover { background: rgba(0,212,255,0.08); }

  .card {
    background: ${COLORS.card};
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 20px;
    padding: 20px;
  }

  .input-field {
    background: ${COLORS.navyLight};
    border: 1.5px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    padding: 13px 16px;
    color: ${COLORS.white};
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    width: 100%;
    outline: none;
    transition: border-color 0.2s;
  }
  .input-field:focus { border-color: ${COLORS.cyan}; }
  .input-field::placeholder { color: ${COLORS.gray}; }

  .tab-bar {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 390px;
    background: ${COLORS.navyMid};
    border-top: 1px solid rgba(255,255,255,0.06);
    display: flex;
    padding: 12px 8px 20px;
    gap: 4px;
    z-index: 100;
  }

  .tab-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 8px 4px;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
    border: none;
    background: transparent;
    color: ${COLORS.gray};
  }

  .tab-item.active {
    color: ${COLORS.cyan};
    background: rgba(0,212,255,0.08);
  }

  .tab-item span { font-size: 10px; font-family: 'DM Sans'; font-weight: 500; }

  .badge {
    background: ${COLORS.red};
    color: white;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    font-size: 10px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 4px;
    right: 4px;
  }

  .star { color: ${COLORS.gold}; }

  .chip {
    background: rgba(0,212,255,0.1);
    border: 1px solid rgba(0,212,255,0.2);
    color: ${COLORS.cyan};
    border-radius: 20px;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s;
    font-family: 'DM Sans';
  }
  .chip:hover, .chip.active { background: rgba(0,212,255,0.2); }
  .chip.gold {
    background: rgba(255,184,0,0.1);
    border-color: rgba(255,184,0,0.25);
    color: ${COLORS.gold};
  }

  .map-bg {
    background: ${COLORS.navyMid};
    border-radius: 20px;
    position: relative;
    overflow: hidden;
  }
  .map-bg::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, transparent 1px, transparent 40px),
      repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, transparent 1px, transparent 40px);
  }

  .map-road-h {
    position: absolute;
    height: 3px;
    background: rgba(0,212,255,0.15);
    left: 0; right: 0;
  }
  .map-road-v {
    position: absolute;
    width: 3px;
    background: rgba(0,212,255,0.15);
    top: 0; bottom: 0;
  }

  .gradient-text {
    background: linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.gold});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .progress-bar {
    height: 4px;
    background: ${COLORS.navyLight};
    border-radius: 2px;
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, ${COLORS.cyan}, ${COLORS.gold});
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  .toggle {
    width: 48px;
    height: 26px;
    border-radius: 13px;
    background: ${COLORS.navyLight};
    position: relative;
    cursor: pointer;
    transition: background 0.3s;
    border: none;
    flex-shrink: 0;
  }
  .toggle.on { background: ${COLORS.cyan}; }
  .toggle::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    top: 3px;
    left: 3px;
    transition: left 0.3s;
  }
  .toggle.on::after { left: 25px; }

  .divider {
    height: 1px;
    background: rgba(255,255,255,0.06);
    margin: 16px 0;
  }

  .swifta-logo {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 28px;
    letter-spacing: -1px;
  }
`;

// ============================================================
// ICONS
// ============================================================
const Icon = ({ name, size = 20, color = "currentColor", className = "" }) => {
  const icons = {
    home: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
    car: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
    wallet: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="16" rx="2"/><path d="M2 10h20"/><circle cx="16" cy="15" r="1" fill={color}/></svg>,
    user: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    map: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1,6 1,22 8,18 16,22 23,18 23,2 16,6 8,2"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>,
    star: <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>,
    phone: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
    bell: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
    settings: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
    arrow: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>,
    back: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15,18 9,12 15,6"/></svg>,
    location: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    plus: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    weather: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>,
    traffic: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="7" r="2" fill={color}/><circle cx="12" cy="13" r="2"/><circle cx="12" cy="19" r="2"/></svg>,
    group: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    share: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
    clock: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
    check: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12"/></svg>,
    airtel: <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><rect width="24" height="24" rx="12" fill="rgba(255,0,0,0.2)"/><text x="50%" y="65%" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#FF4444">ATL</text></svg>,
    mtn: <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><rect width="24" height="24" rx="12" fill="rgba(255,200,0,0.2)"/><text x="50%" y="65%" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#FFD700">MTN</text></svg>,
    visa: <svg width={size} height={size} viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#1A1F71"/><text x="50%" y="65%" textAnchor="middle" fontSize="7" fontWeight="bold" fill="white">VISA</text></svg>,
    send: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9"/></svg>,
    airport: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>,
    wifi: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 16 0 016.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>,
    mic: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
    shield: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    zap: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/></svg>,
    menu: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
    x: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    camera: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>,
    history: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1,4 1,10 7,10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>,
    download: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
    chartbar: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  };
  return icons[name] || null;
};

// ============================================================
// MAP COMPONENT
// ============================================================
const MapView = ({ height = 220, showRoute = false, showDriver = false }) => (
  <div className="map-bg" style={{ height }}>
    <div className="map-road-h" style={{ top: "35%" }} />
    <div className="map-road-h" style={{ top: "65%" }} />
    <div className="map-road-v" style={{ left: "30%" }} />
    <div className="map-road-v" style={{ left: "70%" }} />
    {showRoute && (
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <defs>
          <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={COLORS.cyan} />
            <stop offset="100%" stopColor={COLORS.gold} />
          </linearGradient>
        </defs>
        <path d="M 70 170 Q 130 130 190 110 Q 230 95 280 70" stroke="url(#routeGrad)" strokeWidth="3" fill="none" strokeDasharray="8 4" strokeLinecap="round" />
      </svg>
    )}
    {/* Pickup pin */}
    <div style={{ position: "absolute", bottom: "22%", left: "18%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: 32, height: 32, borderRadius: "50%", background: COLORS.green, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 0 6px rgba(0,229,160,0.2)` }}>
        <Icon name="location" size={16} color={COLORS.navy} />
      </div>
    </div>
    {/* Destination pin */}
    <div style={{ position: "absolute", top: "16%", right: "18%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: 32, height: 32, borderRadius: "50%", background: COLORS.cyan, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 0 6px rgba(0,212,255,0.2)` }}>
        <Icon name="location" size={16} color={COLORS.navy} />
      </div>
    </div>
    {/* Driver car */}
    {showDriver && (
      <div className="animate-float" style={{ position: "absolute", top: "42%", left: "45%", transform: "translate(-50%,-50%)" }}>
        <div style={{ width: 44, height: 44, borderRadius: "50%", background: COLORS.gold, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 0 8px rgba(255,184,0,0.15), 0 0 0 16px rgba(255,184,0,0.06)` }}>
          <Icon name="car" size={22} color={COLORS.navy} />
        </div>
      </div>
    )}
    {/* My location */}
    <div style={{ position: "absolute", bottom: "22%", left: "18%", transform: "translate(-50%,-50%)" }}>
      <div style={{ position: "absolute", width: 40, height: 40, borderRadius: "50%", background: "rgba(0,212,255,0.2)", animation: "pulse-ring 2s infinite" }} />
    </div>
    {/* Branding watermark */}
    <div style={{ position: "absolute", top: 12, left: 12, opacity: 0.4, fontSize: 10, fontFamily: "Syne", fontWeight: 700, letterSpacing: 2, color: COLORS.cyan }}>SWIFTA MAP</div>
  </div>
);

// ============================================================
// PHONE SHELL
// ============================================================
const PhoneShell = ({ children, label, accent = COLORS.cyan }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div style={{
      width: 390,
      minHeight: 844,
      background: COLORS.navy,
      borderRadius: 44,
      border: `2px solid rgba(255,255,255,0.08)`,
      overflow: "hidden",
      position: "relative",
      boxShadow: `0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04), inset 0 0 0 1px rgba(255,255,255,0.02), 0 0 60px ${accent}22`,
    }}>
      {/* Notch */}
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", paddingTop: 8 }}>
        <div style={{ width: 120, height: 28, background: COLORS.navyMid, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
          <div style={{ width: 50, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.06)" }} />
        </div>
        <div style={{ position: "absolute", right: 20, top: 14, display: "flex", gap: 6, alignItems: "center" }}>
          <div style={{ fontSize: 10, color: COLORS.gray, fontFamily: "DM Sans" }}>9:41</div>
          <Icon name="wifi" size={12} color={COLORS.gray} />
        </div>
      </div>
      {children}
    </div>
    <div style={{ marginTop: 16, fontFamily: "Syne", fontWeight: 700, fontSize: 13, color: COLORS.gray, letterSpacing: 2, textTransform: "uppercase" }}>{label}</div>
  </div>
);

// ============================================================
// ONBOARDING SCREENS
// ============================================================
const OnboardingApp = () => {
  const [step, setStep] = useState(0);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [role, setRole] = useState(null);
  const [name, setName] = useState("");

  const slides = [
    {
      icon: "zap", 
      title: "Rides in a Flash",
      subtitle: "Book a ride in seconds. Your driver arrives before you finish your coffee.",
      color: COLORS.cyan,
    },
    {
      icon: "shield",
      title: "Safe Every Mile",
      subtitle: "Live tracking, in-app calls & SOS alerts keep you protected round the clock.",
      color: COLORS.gold,
    },
    {
      icon: "wallet",
      title: "Pay Your Way",
      subtitle: "Airtel Money, MTN MoMo, Visa or your Swifta Wallet — total flexibility.",
      color: COLORS.green,
    },
  ];

  if (step === 0) return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: "40px 24px 32px" }}>
      {/* Logo */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <div style={{ width: 72, height: 72, borderRadius: 24, background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.cyanDim})`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", boxShadow: `0 12px 40px rgba(0,212,255,0.4)` }}>
          <Icon name="zap" size={36} color={COLORS.navy} />
        </div>
        <div className="swifta-logo gradient-text">SWIFTA</div>
        <div style={{ color: COLORS.gray, fontSize: 13, marginTop: 4, fontFamily: "DM Sans" }}>Made by Carter Codes</div>
      </div>

      {/* Slides */}
      <div style={{ flex: 1 }}>
        {slides.map((s, i) => (
          <div key={i} className="card animate-slide-up" style={{ marginBottom: 12, display: "flex", gap: 16, alignItems: "flex-start", animationDelay: `${i * 0.1}s` }}>
            <div style={{ width: 44, height: 44, borderRadius: 14, background: `${s.color}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name={s.icon} size={22} color={s.color} />
            </div>
            <div>
              <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{s.title}</div>
              <div style={{ color: COLORS.gray, fontSize: 13, lineHeight: 1.5 }}>{s.subtitle}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
        <button className="btn-primary" onClick={() => setStep(1)}>Get Started</button>
        <button className="btn-outline" onClick={() => setStep(1)}>I already have an account</button>
      </div>
    </div>
  );

  if (step === 1) return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: "32px 24px" }}>
      <button style={{ background: "none", border: "none", cursor: "pointer", marginBottom: 24, width: "fit-content" }} onClick={() => setStep(0)}>
        <Icon name="back" size={24} color={COLORS.white} />
      </button>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 28, marginBottom: 8 }}>I am a...</div>
        <div style={{ color: COLORS.gray, fontSize: 14 }}>Choose how you want to use Swifta</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        {[
          { id: "rider", icon: "user", label: "Rider", sub: "Book rides & get around the city", color: COLORS.cyan },
          { id: "driver", icon: "car", label: "Driver", sub: "Earn money by giving rides", color: COLORS.gold },
        ].map(opt => (
          <button key={opt.id} onClick={() => { setRole(opt.id); setStep(2); }} style={{
            background: role === opt.id ? `${opt.color}18` : COLORS.card,
            border: `1.5px solid ${role === opt.id ? opt.color : "rgba(255,255,255,0.06)"}`,
            borderRadius: 20,
            padding: 20,
            cursor: "pointer",
            display: "flex",
            gap: 16,
            alignItems: "center",
            textAlign: "left",
            transition: "all 0.2s",
          }}>
            <div style={{ width: 56, height: 56, borderRadius: 18, background: `${opt.color}22`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name={opt.icon} size={28} color={opt.color} />
            </div>
            <div>
              <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 17, color: COLORS.white }}>{opt.label}</div>
              <div style={{ color: COLORS.gray, fontSize: 13, marginTop: 2 }}>{opt.sub}</div>
            </div>
            <div style={{ marginLeft: "auto" }}><Icon name="arrow" size={18} color={COLORS.gray} /></div>
          </button>
        ))}
      </div>
    </div>
  );

  if (step === 2) return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: "32px 24px" }}>
      <button style={{ background: "none", border: "none", cursor: "pointer", marginBottom: 24, width: "fit-content" }} onClick={() => setStep(1)}>
        <Icon name="back" size={24} color={COLORS.white} />
      </button>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 28, marginBottom: 8 }}>Enter your number</div>
        <div style={{ color: COLORS.gray, fontSize: 14 }}>We'll send you a verification code</div>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: 12, color: COLORS.gray, marginBottom: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Phone Number</label>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ background: COLORS.navyLight, border: "1.5px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "13px 14px", fontFamily: "DM Sans", fontSize: 14, color: COLORS.white, whiteSpace: "nowrap" }}>🇺🇬 +256</div>
            <input className="input-field" placeholder="700 000 000" value={phone} onChange={e => setPhone(e.target.value)} style={{ flex: 1 }} />
          </div>
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: 12, color: COLORS.gray, marginBottom: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Full Name</label>
          <input className="input-field" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="card" style={{ background: `rgba(0,212,255,0.05)`, border: `1px solid rgba(0,212,255,0.15)` }}>
          <div style={{ fontSize: 12, color: COLORS.gray, lineHeight: 1.6 }}>By continuing, you agree to Swifta's <span style={{ color: COLORS.cyan }}>Terms of Service</span> and <span style={{ color: COLORS.cyan }}>Privacy Policy</span></div>
        </div>
      </div>
      <button className={role === "driver" ? "btn-gold" : "btn-primary"} onClick={() => setStep(3)} style={{ marginTop: 24 }}>Send OTP</button>
    </div>
  );

  if (step === 3) return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: "32px 24px" }}>
      <button style={{ background: "none", border: "none", cursor: "pointer", marginBottom: 24, width: "fit-content" }} onClick={() => setStep(2)}>
        <Icon name="back" size={24} color={COLORS.white} />
      </button>
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 28, marginBottom: 8 }}>Verify Code</div>
        <div style={{ color: COLORS.gray, fontSize: 14 }}>Sent to +256 {phone || "700 000 000"}</div>
      </div>
      <div style={{ display: "flex", gap: 10, marginBottom: 32, justifyContent: "center" }}>
        {otp.map((v, i) => (
          <div key={i} style={{
            width: 48, height: 56, borderRadius: 12,
            background: COLORS.navyLight,
            border: `1.5px solid ${v ? COLORS.cyan : "rgba(255,255,255,0.08)"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "Syne", fontWeight: 700, fontSize: 20, color: COLORS.white,
          }}>{v || <span style={{ color: COLORS.gray, fontSize: 18 }}>·</span>}</div>
        ))}
      </div>
      <div style={{ textAlign: "center", color: COLORS.gray, fontSize: 13, marginBottom: 32 }}>
        Didn't receive? <span style={{ color: COLORS.cyan, fontWeight: 600 }}>Resend in 0:45</span>
      </div>
      <button className={role === "driver" ? "btn-gold" : "btn-primary"} onClick={() => setStep(4)}>Verify & Continue</button>
    </div>
  );

  if (step === 4) return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px", textAlign: "center" }}>
      <div style={{ width: 100, height: 100, borderRadius: "50%", background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.green})`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, boxShadow: `0 20px 60px rgba(0,212,255,0.4)` }} className="animate-glow">
        <Icon name="check" size={48} color={COLORS.navy} />
      </div>
      <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 28, marginBottom: 12 }}>You're in, {name || "friend"}!</div>
      <div style={{ color: COLORS.gray, fontSize: 14, lineHeight: 1.6, marginBottom: 40 }}>
        {role === "driver" ? "Your driver account is ready. Start earning today." : "Your ride is one tap away. Welcome to Swifta!"}
      </div>
      <button className={role === "driver" ? "btn-gold" : "btn-primary"} onClick={() => setStep(0)} style={{ width: "80%" }}>
        {role === "driver" ? "Go to Driver Dashboard" : "Book My First Ride"}
      </button>
    </div>
  );

  return null;
};

// ============================================================
// USER APP
// ============================================================
const UserApp = () => {
  const [tab, setTab] = useState("home");
  const [rideType, setRideType] = useState("standard");
  const [rideModal, setRideModal] = useState(false);
  const [walletTab, setWalletTab] = useState("overview");

  const tabs = [
    { id: "home", icon: "home", label: "Home" },
    { id: "rides", icon: "history", label: "Rides" },
    { id: "wallet", icon: "wallet", label: "Wallet" },
    { id: "profile", icon: "user", label: "Profile" },
  ];

  const rideTypes = [
    { id: "standard", label: "Swifta Go", price: "UGX 4,500", eta: "3 min", icon: "car" },
    { id: "priority", label: "Swifta XL", price: "UGX 7,000", eta: "5 min", icon: "car" },
    { id: "airport", label: "Airport", price: "UGX 25,000", eta: "8 min", icon: "airport" },
    { id: "group", label: "Group", price: "UGX 3,000", eta: "4 min", icon: "group" },
  ];

  return (
    <>
      <div style={{ height: 44 }} />
      <div style={{ overflowY: "auto", paddingBottom: 100, maxHeight: "calc(844px - 44px)" }}>
        {tab === "home" && (
          <div>
            {/* Header */}
            <div style={{ padding: "16px 20px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ color: COLORS.gray, fontSize: 13 }}>Good morning 👋</div>
                <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 20 }}>Alex Mukasa</div>
              </div>
              <div style={{ position: "relative" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: COLORS.navyLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="bell" size={20} color={COLORS.white} />
                </div>
                <div className="badge">3</div>
              </div>
            </div>

            {/* Weather Alert */}
            <div style={{ margin: "16px 20px 0" }}>
              <div style={{ background: "linear-gradient(135deg, rgba(255,184,0,0.12), rgba(255,184,0,0.05))", border: "1px solid rgba(255,184,0,0.25)", borderRadius: 14, padding: "12px 16px", display: "flex", gap: 12, alignItems: "center" }}>
                <Icon name="weather" size={22} color={COLORS.gold} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.gold, fontFamily: "Syne" }}>⛈ Rain Alert — Kampala</div>
                  <div style={{ fontSize: 12, color: COLORS.gray, marginTop: 2 }}>Heavy rains expected 2–5 PM. Book early to avoid surges.</div>
                </div>
              </div>
            </div>

            {/* Traffic Alert */}
            <div style={{ margin: "8px 20px 0" }}>
              <div style={{ background: "rgba(255,77,106,0.08)", border: "1px solid rgba(255,77,106,0.2)", borderRadius: 14, padding: "12px 16px", display: "flex", gap: 12, alignItems: "center" }}>
                <Icon name="traffic" size={22} color={COLORS.red} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.red, fontFamily: "Syne" }}>🚦 Heavy Traffic — Jinja Rd</div>
                  <div style={{ fontSize: 12, color: COLORS.gray, marginTop: 2 }}>45 min delay. Alternative route via Bombo Rd suggested.</div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div style={{ margin: "16px 20px 0" }}>
              <MapView height={180} showRoute />
            </div>

            {/* Destination Input */}
            <div style={{ margin: "14px 20px 0" }}>
              <div style={{ background: COLORS.card, border: "1px solid rgba(255,255,255,0.06)", borderRadius: 18, padding: 14 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: COLORS.green, flexShrink: 0 }} />
                  <div style={{ flex: 1, fontSize: 14, color: COLORS.gray }}>Nakasero, Kampala</div>
                </div>
                <div style={{ height: 1, background: "rgba(255,255,255,0.05)", margin: "0 22px" }} />
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 12 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 2, background: COLORS.cyan, flexShrink: 0 }} />
                  <input className="input-field" placeholder="Where to?" style={{ background: "transparent", border: "none", padding: 0, fontSize: 14 }} />
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ padding: "16px 20px 0" }}>
              <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 15, marginBottom: 12 }}>Quick Actions</div>
              <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 4 }}>
                {[
                  { icon: "airport", label: "Airport", color: COLORS.cyan },
                  { icon: "clock", label: "Reserve", color: COLORS.gold },
                  { icon: "group", label: "Group", color: COLORS.green },
                  { icon: "share", label: "For Friend", color: "#B57BFF" },
                  { icon: "zap", label: "Priority", color: COLORS.red },
                ].map((a, i) => (
                  <button key={i} onClick={() => setRideModal(true)} style={{ background: COLORS.card, border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", flexShrink: 0, minWidth: 70 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 12, background: `${a.color}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon name={a.icon} size={18} color={a.color} />
                    </div>
                    <span style={{ fontSize: 11, color: COLORS.gray, fontFamily: "DM Sans", whiteSpace: "nowrap" }}>{a.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Ride Types */}
            <div style={{ padding: "20px 20px 0" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 15 }}>Choose Ride</div>
                <div style={{ fontSize: 12, color: COLORS.cyan, fontWeight: 600 }}>See All</div>
              </div>
              {rideTypes.map(rt => (
                <button key={rt.id} onClick={() => { setRideType(rt.id); setRideModal(true); }} style={{
                  background: rideType === rt.id ? `rgba(0,212,255,0.08)` : COLORS.card,
                  border: `1.5px solid ${rideType === rt.id ? COLORS.cyan : "rgba(255,255,255,0.06)"}`,
                  borderRadius: 16, padding: "14px 16px", marginBottom: 10,
                  display: "flex", alignItems: "center", gap: 14, width: "100%", cursor: "pointer"
                }}>
                  <div style={{ width: 44, height: 44, borderRadius: 14, background: rideType === rt.id ? "rgba(0,212,255,0.15)" : COLORS.navyLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={rt.icon} size={22} color={rideType === rt.id ? COLORS.cyan : COLORS.gray} />
                  </div>
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 14, color: COLORS.white }}>{rt.label}</div>
                    <div style={{ fontSize: 12, color: COLORS.gray, marginTop: 2 }}>ETA {rt.eta}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 14, color: COLORS.cyan }}>{rt.price}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Book button */}
            <div style={{ padding: "20px" }}>
              <button className="btn-primary" onClick={() => setRideModal(true)}>Book Ride Now</button>
            </div>
          </div>
        )}

        {tab === "rides" && (
          <div style={{ padding: "16px 20px" }}>
            <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 24, marginBottom: 20 }}>My Rides</div>
            {[
              { status: "completed", from: "Nakasero", to: "Entebbe Airport", date: "Today, 07:15 AM", price: "UGX 28,000", driver: "Brian K.", rating: 5, type: "Airport" },
              { status: "completed", from: "Ntinda", to: "Garden City", date: "Yesterday, 2:30 PM", price: "UGX 7,500", driver: "Sarah M.", rating: 4, type: "Standard" },
              { status: "cancelled", from: "Kololo", to: "Wandegeya", date: "Mon, 10:00 AM", price: "—", driver: "—", rating: 0, type: "Standard" },
              { status: "completed", from: "Bukoto", to: "Acacia Mall", date: "Sun, 4:45 PM", price: "UGX 5,200", driver: "Moses O.", rating: 5, type: "Group" },
            ].map((ride, i) => (
              <div key={i} className="card" style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, fontFamily: "Syne", color: ride.status === "completed" ? COLORS.green : COLORS.red, background: ride.status === "completed" ? "rgba(0,229,160,0.1)" : "rgba(255,77,106,0.1)", padding: "2px 10px", borderRadius: 20 }}>{ride.status === "completed" ? "Completed" : "Cancelled"}</div>
                      <div style={{ fontSize: 11, color: COLORS.gray, background: COLORS.navyLight, padding: "2px 8px", borderRadius: 20 }}>{ride.type}</div>
                    </div>
                    <div style={{ fontSize: 12, color: COLORS.gray }}>{ride.date}</div>
                  </div>
                  <div style={{ fontFamily: "Syne", fontWeight: 700, color: COLORS.white }}>{ride.price}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: COLORS.green, flexShrink: 0 }} />
                      <div style={{ fontSize: 13 }}>{ride.from}</div>
                    </div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <div style={{ width: 8, height: 8, borderRadius: 2, background: COLORS.cyan, flexShrink: 0 }} />
                      <div style={{ fontSize: 13 }}>{ride.to}</div>
                    </div>
                  </div>
                </div>
                {ride.rating > 0 && (
                  <div style={{ display: "flex", alignItems: "center", gap: 8, paddingTop: 10, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: COLORS.navyLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon name="user" size={14} color={COLORS.gray} />
                    </div>
                    <div style={{ fontSize: 13, color: COLORS.gray }}>{ride.driver}</div>
                    <div style={{ display: "flex", gap: 2, marginLeft: "auto" }}>
                      {[...Array(5)].map((_, j) => <Icon key={j} name="star" size={13} color={j < ride.rating ? COLORS.gold : COLORS.navyLight} />)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "wallet" && (
          <div style={{ padding: "16px 20px" }}>
            <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 24, marginBottom: 20 }}>Wallet</div>
            
            {/* Balance Card */}
            <div style={{ background: `linear-gradient(135deg, ${COLORS.navyLight}, ${COLORS.navyMid})`, border: "1px solid rgba(0,212,255,0.2)", borderRadius: 24, padding: 24, marginBottom: 20, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: "rgba(0,212,255,0.06)" }} />
              <div style={{ position: "absolute", bottom: -40, left: -10, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,184,0,0.04)" }} />
              <div style={{ fontSize: 12, color: COLORS.gray, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Swifta Wallet Balance</div>
              <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 32, marginBottom: 4 }}>UGX 127,500</div>
              <div style={{ fontSize: 12, color: COLORS.green }}>↑ UGX 35,000 added this week</div>
              <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
                <button className="btn-primary" style={{ flex: 1, padding: "11px 16px", fontSize: 13 }}>Top Up</button>
                <button className="btn-outline" style={{ flex: 1, padding: "11px 16px", fontSize: 13 }}>Send</button>
              </div>
            </div>

            {/* Top Up Methods */}
            <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 15, marginBottom: 12 }}>Top Up Methods</div>
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              {[
                { icon: "airtel", name: "Airtel Money", color: "#FF4444" },
                { icon: "mtn", name: "MTN MoMo", color: "#FFD700" },
                { icon: "visa", name: "Visa Card", color: "#4F6EF7" },
              ].map((m, i) => (
                <button key={i} style={{ flex: 1, background: COLORS.card, border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "14px 10px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <Icon name={m.icon} size={32} color={m.color} />
                  <div style={{ fontSize: 10, color: COLORS.gray, textAlign: "center", lineHeight: 1.3 }}>{m.name}</div>
                </button>
              ))}
            </div>

            {/* Share Credit */}
            <div className="card" style={{ marginBottom: 16, background: "linear-gradient(135deg, rgba(181,123,255,0.08), rgba(0,212,255,0.05))", border: "1px solid rgba(181,123,255,0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(181,123,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="share" size={20} color="#B57BFF" />
                </div>
                <div>
                  <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 15 }}>Share Credit</div>
                  <div style={{ fontSize: 12, color: COLORS.gray }}>Send wallet credit to friends</div>
                </div>
              </div>
              <button className="btn-outline" style={{ borderColor: "#B57BFF", color: "#B57BFF", padding: "10px 16px", fontSize: 13 }}>Share Balance</button>
            </div>

            {/* Recent Transactions */}
            <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 15, marginBottom: 12 }}>Recent Transactions</div>
            {[
              { type: "credit", label: "Airtel Money Top-up", amount: "+UGX 50,000", time: "2h ago", icon: "airtel" },
              { type: "debit", label: "Ride to Entebbe", amount: "-UGX 28,000", time: "Today 7AM", icon: "car" },
              { type: "credit", label: "Credit from Jane M.", amount: "+UGX 10,000", time: "Yesterday", icon: "share" },
              { type: "debit", label: "Ride to Garden City", amount: "-UGX 7,500", time: "Mon 2PM", icon: "car" },
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: COLORS.navyLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={t.icon} size={18} color={COLORS.gray} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{t.label}</div>
                  <div style={{ fontSize: 11, color: COLORS.gray, marginTop: 2 }}>{t.time}</div>
                </div>
                <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 14, color: t.type === "credit" ? COLORS.green : COLORS.red }}>{t.amount}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "profile" && (
          <div style={{ padding: "16px 20px" }}>
            {/* Profile Header */}
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ position: "relative", width: 80, height: 80, margin: "0 auto 12px" }}>
                <div style={{ width: 80, height: 80, borderRadius: "50%", background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.gold})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 28, color: COLORS.navy }}>AM</span>
                </div>
                <div style={{ position: "absolute", bottom: 0, right: 0, width: 26, height: 26, borderRadius: "50%", background: COLORS.cyan, display: "flex", alignItems: "center", justifyContent: "center", border: `2px solid ${COLORS.navy}` }}>
                  <Icon name="camera" size={12} color={COLORS.navy} />
                </div>
              </div>
              <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 20 }}>Alex Mukasa</div>
              <div style={{ color: COLORS.gray, fontSize: 13, marginTop: 2 }}>+256 700 123 456</div>
              <div style={{ display: "flex", gap: 4, justifyContent: "center", marginTop: 8 }}>
                {[...Array(5)].map((_, i) => <Icon key={i} name="star" size={16} color={i < 4 ? COLORS.gold : COLORS.navyLight} />)}
                <span style={{ fontSize: 13, color: COLORS.gray, marginLeft: 4 }}>4.8</span>
              </div>
            </div>

            {/* Menu Items */}
            {[
              { icon: "shield", label: "Safety & Emergency", sub: "SOS contacts, trip sharing", color: COLORS.red },
              { icon: "bell", label: "Notifications", sub: "Alerts, ride updates", color: COLORS.gold },
              { icon: "share", label: "Referrals", sub: "Invite friends, earn UGX 5,000", color: COLORS.cyan },
              { icon: "wifi", label: "Connected Accounts", sub: "Airtel, MTN, Visa", color: "#B57BFF" },
              { icon: "settings", label: "App Settings", sub: "Language, theme, privacy", color: COLORS.gray },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", cursor: "pointer" }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={item.icon} size={20} color={item.color} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{item.label}</div>
                  <div style={{ fontSize: 12, color: COLORS.gray, marginTop: 1 }}>{item.sub}</div>
                </div>
                <Icon name="arrow" size={16} color={COLORS.gray} />
              </div>
            ))}

            <div style={{ marginTop: 24 }}>
              <button style={{ background: "rgba(255,77,106,0.08)", border: "1px solid rgba(255,77,106,0.2)", borderRadius: 14, padding: "13px", width: "100%", color: COLORS.red, fontFamily: "Syne", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>Sign Out</button>
            </div>
          </div>
        )}
      </div>

      {/* Tab Bar */}
      <div className="tab-bar" style={{ width: 390, left: "auto", transform: "none" }}>
        {tabs.map(t => (
          <button key={t.id} className={`tab-item ${tab === t.id ? "active" : ""}`} onClick={() => setTab(t.id)}>
            <Icon name={t.icon} size={22} color={tab === t.id ? COLORS.cyan : COLORS.gray} />
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      {/* Ride Booking Modal */}
      {rideModal && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(5,11,31,0.85)", zIndex: 200, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div style={{ background: COLORS.navyMid, borderRadius: "28px 28px 0 0", padding: "24px 20px 40px", border: "1px solid rgba(255,255,255,0.06)" }} className="animate-slide-up">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 20 }}>Confirm Ride</div>
              <button onClick={() => setRideModal(false)} style={{ background: COLORS.navyLight, border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="x" size={16} color={COLORS.white} />
              </button>
            </div>

            <MapView height={140} showRoute showDriver />
            
            <div style={{ marginTop: 16, marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: COLORS.gold, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "Syne", fontWeight: 800, color: COLORS.navy }}>BK</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "Syne", fontWeight: 700 }}>Brian Katende</div>
                  <div style={{ display: "flex", gap: 2, marginTop: 2 }}>
                    {[...Array(5)].map((_, i) => <Icon key={i} name="star" size={12} color={COLORS.gold} />)}
                    <span style={{ fontSize: 12, color: COLORS.gray, marginLeft: 4 }}>4.9 · Toyota Corolla · UAA 234K</span>
                  </div>
                </div>
                <button style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <Icon name="phone" size={18} color={COLORS.cyan} />
                </button>
              </div>
            </div>

            <div className="divider" />

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ color: COLORS.gray, fontSize: 14 }}>Ride Type</span>
              <span style={{ fontWeight: 600, fontSize: 14 }}>Swifta Go</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ color: COLORS.gray, fontSize: 14 }}>ETA</span>
              <span style={{ fontWeight: 600, fontSize: 14, color: COLORS.green }}>3 min away</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
              <span style={{ color: COLORS.gray, fontSize: 14 }}>Total Fare</span>
              <span style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 18, color: COLORS.cyan }}>UGX 4,500</span>
            </div>

            <div style={{ display: "flex", gap: 8, marginBottom: 14, overflowX: "auto" }}>
              {["Wallet", "Airtel", "MTN", "Cash"].map(p => (
                <div key={p} className={`chip ${p === "Wallet" ? "active" : ""}`}>{p}</div>
              ))}
            </div>

            <button className="btn-primary" onClick={() => setRideModal(false)}>Confirm & Book</button>
          </div>
        </div>
      )}
    </>
  );
};

// ============================================================
// DRIVER APP
// ============================================================
const DriverApp = () => {
  const [tab, setTab] = useState("home");
  const [isOnline, setIsOnline] = useState(true);
  const [activeRide, setActiveRide] = useState(true);

  const tabs = [
    { id: "home", icon: "map", label: "Drive" },
    { id: "earnings", icon: "chartbar", label: "Earnings" },
    { id: "wallet", icon: "wallet", label: "Wallet" },
    { id: "profile", icon: "user", label: "Profile" },
  ];

  return (
    <>
      <div style={{ height: 44 }} />
      <div style={{ overflowY: "auto", paddingBottom: 100, maxHeight: "calc(844px - 44px)" }}>
        {tab === "home" && (
          <div>
            {/* Driver Header */}
            <div style={{ padding: "12px 20px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 18 }}>Driver Mode</div>
                <div style={{ fontSize: 12, color: isOnline ? COLORS.green : COLORS.gray, display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: isOnline ? COLORS.green : COLORS.gray }} className={isOnline ? "animate-blink" : ""} />
                  {isOnline ? "Online — Accepting Rides" : "Offline"}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <button className="toggle" style={{ background: isOnline ? COLORS.green : COLORS.navyLight }} onClick={() => setIsOnline(!isOnline)} />
              </div>
            </div>

            {/* Stats Row */}
            <div style={{ display: "flex", gap: 10, padding: "14px 20px 0" }}>
              {[
                { label: "Today's Rides", value: "8", color: COLORS.cyan },
                { label: "Earnings", value: "UGX 87K", color: COLORS.gold },
                { label: "Rating", value: "4.9 ★", color: COLORS.green },
              ].map((s, i) => (
                <div key={i} style={{ flex: 1, background: COLORS.card, border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "12px 10px", textAlign: "center" }}>
                  <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 16, color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: 10, color: COLORS.gray, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div style={{ margin: "14px 20px 0" }}>
              <MapView height={200} showDriver />
            </div>

            {/* Active Ride Request */}
            {isOnline && activeRide && (
              <div style={{ margin: "14px 20px 0" }}>
                <div style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(0,212,255,0.04))", border: "1.5px solid rgba(0,212,255,0.3)", borderRadius: 20, padding: 18 }} className="animate-slide-up">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    <div>
                      <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 16, color: COLORS.cyan }}>New Ride Request!</div>
                      <div style={{ fontSize: 12, color: COLORS.gray, marginTop: 2 }}>2.4 km away · 4 min drive</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 18, color: COLORS.gold }}>UGX 12,500</div>
                      <div style={{ fontSize: 11, color: COLORS.gray }}>Est. 18 min trip</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 11, color: COLORS.gray, marginBottom: 3 }}>PICKUP</div>
                      <div style={{ fontSize: 13, fontWeight: 500 }}>Acacia Mall, Kololo</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 11, color: COLORS.gray, marginBottom: 3 }}>DROPOFF</div>
                      <div style={{ fontSize: 13, fontWeight: 500 }}>Ntinda Shopping Ctr</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <button onClick={() => setActiveRide(false)} style={{ flex: 1, background: "rgba(255,77,106,0.1)", border: "1px solid rgba(255,77,106,0.25)", borderRadius: 12, padding: "12px", color: COLORS.red, fontFamily: "Syne", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Decline</button>
                    <button className="btn-primary" style={{ flex: 2, padding: "12px" }}>Accept Ride</button>
                  </div>
                </div>
              </div>
            )}

            {/* Weather & Traffic */}
            <div style={{ padding: "16px 20px 0" }}>
              <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 15, marginBottom: 12 }}>Road Conditions</div>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ flex: 1, background: "rgba(255,184,0,0.08)", border: "1px solid rgba(255,184,0,0.2)", borderRadius: 14, padding: 14 }}>
                  <Icon name="weather" size={20} color={COLORS.gold} />
                  <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.gold, marginTop: 8 }}>Rain 2-5 PM</div>
                  <div style={{ fontSize: 11, color: COLORS.gray, marginTop: 2 }}>Surge active</div>
                </div>
                <div style={{ flex: 1, background: "rgba(255,77,106,0.08)", border: "1px solid rgba(255,77,106,0.2)", borderRadius: 14, padding: 14 }}>
                  <Icon name="traffic" size={20} color={COLORS.red} />
                  <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.red, marginTop: 8 }}>Jinja Rd Jam</div>
                  <div style={{ fontSize: 11, color: COLORS.gray, marginTop: 2 }}>Use Bombo Rd</div>
                </div>
              </div>
            </div>

            {/* Today's ride list */}
            <div style={{ padding: "16px 20px 24px" }}>
              <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 15, marginBottom: 12 }}>Today's Trips</div>
              {[
                { from: "Nakasero", to: "Entebbe", fare: "UGX 28,000", time: "7:15 AM", rating: 5 },
                { from: "Ntinda", to: "City Centre", fare: "UGX 9,000", time: "9:30 AM", rating: 5 },
                { from: "Kololo", to: "Makerere", fare: "UGX 7,500", time: "11:20 AM", rating: 4 },
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: COLORS.navyLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name="car" size={18} color={COLORS.gray} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13 }}>{r.from} → {r.to}</div>
                    <div style={{ fontSize: 11, color: COLORS.gray, marginTop: 2 }}>{r.time}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "Syne", fontWeight: 700, color: COLORS.gold, fontSize: 14 }}>{r.fare}</div>
                    <div style={{ display: "flex", gap: 1, justifyContent: "flex-end", marginTop: 2 }}>
                      {[...Array(r.rating)].map((_, j) => <Icon key={j} name="star" size={10} color={COLORS.gold} />)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "earnings" && (
          <div style={{ padding: "16px 20px" }}>
            <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 24, marginBottom: 20 }}>Earnings</div>
            
            {/* Period Selector */}
            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              {["Today", "Week", "Month"].map((p, i) => (
                <button key={p} className={`chip ${i === 1 ? "active" : ""}`}>{p}</button>
              ))}
            </div>

            {/* Big Earnings Card */}
            <div style={{ background: `linear-gradient(135deg, ${COLORS.navyLight}, ${COLORS.navyMid})`, border: "1px solid rgba(255,184,0,0.2)", borderRadius: 24, padding: 24, marginBottom: 20 }}>
              <div style={{ fontSize: 12, color: COLORS.gray, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>This Week's Earnings</div>
              <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 36, color: COLORS.gold }}>UGX 512,000</div>
              <div style={{ fontSize: 13, color: COLORS.green, marginTop: 4 }}>↑ 18% vs last week</div>
              <div style={{ marginTop: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: COLORS.gray }}>Weekly Goal</span>
                  <span style={{ fontSize: 12, color: COLORS.gold }}>73%</span>
                </div>
                <div className="progress-bar"><div className="progress-fill" style={{ width: "73%" }} /></div>
              </div>
            </div>

            {/* Stats Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
              {[
                { label: "Rides Completed", value: "42", icon: "car", color: COLORS.cyan },
                { label: "Hours Online", value: "28h", icon: "clock", color: COLORS.gold },
                { label: "Avg Rating", value: "4.92 ★", icon: "star", color: COLORS.green },
                { label: "Acceptance Rate", value: "94%", icon: "check", color: "#B57BFF" },
              ].map((s, i) => (
                <div key={i} className="card">
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${s.color}18`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                    <Icon name={s.icon} size={18} color={s.color} />
                  </div>
                  <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 20 }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: COLORS.gray, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Daily Breakdown */}
            <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 15, marginBottom: 12 }}>Daily Breakdown</div>
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
              const amounts = [68, 82, 54, 91, 77, 105, 35];
              const max = 105;
              return (
                <div key={day} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <div style={{ width: 36, fontSize: 12, color: COLORS.gray }}>{day}</div>
                  <div style={{ flex: 1, background: COLORS.navyLight, borderRadius: 4, height: 8, overflow: "hidden" }}>
                    <div style={{ width: `${(amounts[i] / max) * 100}%`, height: "100%", background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.cyan})`, borderRadius: 4 }} />
                  </div>
                  <div style={{ width: 72, textAlign: "right", fontFamily: "Syne", fontWeight: 600, fontSize: 13, color: COLORS.gold }}>UGX {amounts[i]}K</div>
                </div>
              );
            })}
          </div>
        )}

        {tab === "wallet" && (
          <div style={{ padding: "16px 20px" }}>
            <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 24, marginBottom: 20 }}>Driver Wallet</div>
            
            {/* Balance */}
            <div style={{ background: `linear-gradient(135deg, ${COLORS.navyLight}, ${COLORS.navyMid})`, border: "1px solid rgba(255,184,0,0.2)", borderRadius: 24, padding: 24, marginBottom: 20 }}>
              <div style={{ fontSize: 12, color: COLORS.gray, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Available Balance</div>
              <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 36, color: COLORS.gold }}>UGX 347,500</div>
              <div style={{ fontSize: 13, color: COLORS.gray, marginTop: 4 }}>Pending: UGX 45,000</div>
            </div>

            {/* Withdraw */}
            <div className="card" style={{ marginBottom: 20, background: "rgba(255,184,0,0.06)", border: "1px solid rgba(255,184,0,0.2)" }}>
              <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Withdraw Earnings</div>
              <div style={{ fontSize: 13, color: COLORS.gray, marginBottom: 16 }}>Move your earnings directly to mobile money</div>
              <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
                {[
                  { icon: "airtel", name: "Airtel Money", color: "#FF4444" },
                  { icon: "mtn", name: "MTN MoMo", color: "#FFD700" },
                ].map((m, i) => (
                  <button key={i} style={{ flex: 1, background: COLORS.navyMid, border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "14px 10px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <Icon name={m.icon} size={32} color={m.color} />
                    <div style={{ fontSize: 11, color: COLORS.gray, textAlign: "center" }}>{m.name}</div>
                  </button>
                ))}
              </div>
              <input className="input-field" placeholder="Amount (e.g. 100,000)" style={{ marginBottom: 10 }} />
              <button className="btn-gold">Withdraw Now</button>
            </div>

            {/* Transaction History */}
            <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 15, marginBottom: 12 }}>Transaction History</div>
            {[
              { type: "credit", label: "Ride Earnings", amount: "+UGX 87,000", time: "Today", icon: "car" },
              { type: "debit", label: "Withdrawal to Airtel", amount: "-UGX 100,000", time: "Yesterday", icon: "airtel" },
              { type: "credit", label: "Ride Earnings", amount: "+UGX 91,000", time: "Mon", icon: "car" },
              { type: "debit", label: "Withdrawal to MTN", amount: "-UGX 80,000", time: "Last week", icon: "mtn" },
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: COLORS.navyLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={t.icon} size={18} color={COLORS.gray} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{t.label}</div>
                  <div style={{ fontSize: 11, color: COLORS.gray, marginTop: 2 }}>{t.time}</div>
                </div>
                <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 14, color: t.type === "credit" ? COLORS.green : COLORS.red }}>{t.amount}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "profile" && (
          <div style={{ padding: "16px 20px" }}>
            {/* Driver Profile */}
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ position: "relative", width: 80, height: 80, margin: "0 auto 12px" }}>
                <div style={{ width: 80, height: 80, borderRadius: "50%", background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDim})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 28, color: COLORS.navy }}>BK</span>
                </div>
                <div style={{ position: "absolute", bottom: 0, right: 0, width: 22, height: 22, borderRadius: "50%", background: COLORS.green, border: `2px solid ${COLORS.navy}` }} />
              </div>
              <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 20 }}>Brian Katende</div>
              <div style={{ color: COLORS.gray, fontSize: 13 }}>Toyota Corolla · UAA 234K</div>
              <div style={{ display: "flex", gap: 4, justifyContent: "center", marginTop: 8 }}>
                {[...Array(5)].map((_, i) => <Icon key={i} name="star" size={16} color={COLORS.gold} />)}
                <span style={{ fontSize: 13, color: COLORS.gray, marginLeft: 4 }}>4.9 · 342 rides</span>
              </div>
            </div>

            {/* Verification Status */}
            <div className="card" style={{ background: "rgba(0,229,160,0.06)", border: "1px solid rgba(0,229,160,0.2)", marginBottom: 20 }}>
              <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 14, marginBottom: 12, color: COLORS.green }}>✓ Verified Driver</div>
              {["National ID", "Driver's License", "Vehicle Inspection", "Police Clearance"].map((doc, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <Icon name="check" size={16} color={COLORS.green} />
                  <span style={{ fontSize: 13, color: COLORS.gray }}>{doc}</span>
                </div>
              ))}
            </div>

            {[
              { icon: "car", label: "Vehicle Details", sub: "Toyota Corolla 2019, UAA 234K", color: COLORS.cyan },
              { icon: "bell", label: "Notifications", sub: "Ride alerts, earnings updates", color: COLORS.gold },
              { icon: "settings", label: "App Settings", sub: "Language, navigation app", color: COLORS.gray },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", cursor: "pointer" }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={item.icon} size={20} color={item.color} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{item.label}</div>
                  <div style={{ fontSize: 12, color: COLORS.gray, marginTop: 1 }}>{item.sub}</div>
                </div>
                <Icon name="arrow" size={16} color={COLORS.gray} />
              </div>
            ))}
            <div style={{ marginTop: 24 }}>
              <button style={{ background: "rgba(255,77,106,0.08)", border: "1px solid rgba(255,77,106,0.2)", borderRadius: 14, padding: "13px", width: "100%", color: COLORS.red, fontFamily: "Syne", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>Sign Out</button>
            </div>
          </div>
        )}
      </div>

      {/* Tab Bar */}
      <div className="tab-bar" style={{ width: 390, left: "auto", transform: "none" }}>
        {tabs.map(t => (
          <button key={t.id} className={`tab-item ${tab === t.id ? "active" : ""}`} onClick={() => setTab(t.id)}>
            <Icon name={t.icon} size={22} color={tab === t.id ? COLORS.gold : COLORS.gray} />
            <span style={{ color: tab === t.id ? COLORS.gold : COLORS.gray }}>{t.label}</span>
          </button>
        ))}
      </div>
    </>
  );
};

// ============================================================
// MAIN LAYOUT
// ============================================================
export default function SwiftaApp() {
  const [activeApp, setActiveApp] = useState("onboarding");

  return (
    <>
      <style>{styles}</style>
      <div style={{ minHeight: "100vh", padding: "32px 20px 60px", background: `radial-gradient(ellipse at 20% 20%, rgba(0,212,255,0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(255,184,0,0.04) 0%, transparent 50%), ${COLORS.navy}` }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div className="swifta-logo gradient-text" style={{ fontSize: 42, letterSpacing: -2 }}>SWIFTA</div>
          <div style={{ color: COLORS.gray, fontSize: 14, marginTop: 4 }}>Made by Carter Codes · Uganda 🇺🇬</div>
          <div style={{ marginTop: 16, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { id: "onboarding", label: "Onboarding", color: COLORS.cyan },
              { id: "user", label: "User App", color: COLORS.cyan },
              { id: "driver", label: "Driver App", color: COLORS.gold },
            ].map(a => (
              <button key={a.id} onClick={() => setActiveApp(a.id)} style={{
                background: activeApp === a.id ? `${a.color}22` : "transparent",
                border: `1.5px solid ${activeApp === a.id ? a.color : "rgba(255,255,255,0.1)"}`,
                color: activeApp === a.id ? a.color : COLORS.gray,
                borderRadius: 20, padding: "8px 20px",
                fontFamily: "Syne", fontWeight: 700, fontSize: 13,
                cursor: "pointer", transition: "all 0.2s"
              }}>{a.label}</button>
            ))}
          </div>
        </div>

        {/* Phone Display */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {activeApp === "onboarding" && (
            <PhoneShell label="Onboarding Flow" accent={COLORS.cyan}>
              <OnboardingApp />
            </PhoneShell>
          )}
          {activeApp === "user" && (
            <PhoneShell label="User App" accent={COLORS.cyan}>
              <UserApp />
            </PhoneShell>
          )}
          {activeApp === "driver" && (
            <PhoneShell label="Driver App" accent={COLORS.gold}>
              <DriverApp />
            </PhoneShell>
          )}
        </div>

        {/* Feature Tags */}
        <div style={{ maxWidth: 700, margin: "48px auto 0", textAlign: "center" }}>
          <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 13, color: COLORS.gray, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Features Included</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
            {["Weather Alerts", "Traffic Alerts", "Airport Rides", "Reserve Rides", "Group Rides", "Rides for Friends", "Airtel Money", "MTN MoMo", "Visa Card", "Swifta Wallet", "Share Credit", "Driver Ratings", "In-App Calls", "Driver Withdrawals", "Live Tracking", "SOS Safety", "Surge Pricing", "Driver Earnings Dashboard", "OTP Onboarding"].map(f => (
              <div key={f} className="chip" style={{ fontSize: 11 }}>{f}</div>
            ))}
          </div>
        </div>

        {/* Color Palette */}
        <div style={{ maxWidth: 500, margin: "32px auto 0", textAlign: "center" }}>
          <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 13, color: COLORS.gray, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Brand Palette</div>
          <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
            {[
              { color: COLORS.navy, label: "Deep Navy" },
              { color: COLORS.cyan, label: "Electric Cyan" },
              { color: COLORS.gold, label: "Warm Gold" },
              { color: COLORS.green, label: "Swift Green" },
              { color: COLORS.red, label: "Alert Red" },
            ].map(p => (
              <div key={p.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: p.color, border: "1px solid rgba(255,255,255,0.1)" }} />
                <div style={{ fontSize: 9, color: COLORS.gray, fontFamily: "DM Sans" }}>{p.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
