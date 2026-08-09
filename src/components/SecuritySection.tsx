import React, { useState, useEffect } from 'react';
import { Shield, Eye, Lock, Bell, Wifi, Cpu, Maximize2, ShieldCheck, Activity } from 'lucide-react';
import { getUnsplashSrcSet, getOptimizedUnsplashUrl } from '../utils/image';
import { ScrollReveal } from './ScrollReveal';

interface CameraFeed {
  id: string;
  name: string;
  camId: string;
  location: string;
  image: string;
  resolution: string;
  fps: number;
}

export const SecuritySection: React.FC = React.memo(() => {
  const [activeCamIndex, setActiveCamIndex] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<string>('');
  const [isScannerRunning, setIsScannerRunning] = useState<boolean>(true);
  const [signalStrength, setSignalStrength] = useState<number>(98);

  // Update timestamps in real time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimestamp(now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    // Simulate slight fluctuations in wireless camera signal strength
    const signalInterval = setInterval(() => {
      setSignalStrength(prev => {
        const diff = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
        const next = prev + diff;
        return next > 100 ? 100 : next < 95 ? 95 : next;
      });
    }, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(signalInterval);
    };
  }, []);

  const cameraFeeds: CameraFeed[] = [
    {
      id: 'cam-front',
      name: 'Front Entrance',
      camId: 'SEC-CAM-101',
      location: 'Gate & Main Portico',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      resolution: '4K UHD',
      fps: 24,
    },
    {
      id: 'cam-perimeter',
      name: 'Perimeter North',
      camId: 'SEC-CAM-102',
      location: 'Boundary Fence Line',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      resolution: '1080p HDR',
      fps: 30,
    },
    {
      id: 'cam-driveway',
      name: 'Main Driveway',
      camId: 'SEC-CAM-103',
      location: 'Arrival Courtyard',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
      resolution: '4K UHD',
      fps: 24,
    },
    {
      id: 'cam-pool',
      name: 'Pool & Garden',
      camId: 'SEC-CAM-104',
      location: 'Rear Recreation Lawn',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      resolution: '1080p HDR',
      fps: 30,
    },
    {
      id: 'cam-garage',
      name: 'Garage Access',
      camId: 'SEC-CAM-105',
      location: 'Subterranean Car Vault',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
      resolution: '4K UHD',
      fps: 24,
    },
    {
      id: 'cam-courtyard',
      name: 'Private Courtyard',
      camId: 'SEC-CAM-106',
      location: 'Internal Zen Atrium',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
      resolution: '1080p HDR',
      fps: 30,
    },
  ];

  const stats = [
    {
      icon: Shield,
      title: '24/7 Monitoring',
      description: 'Continuous threat detection linked directly with local law enforcement.',
    },
    {
      icon: Cpu,
      title: 'Smart Access',
      description: 'Encrypted biometric and optical authorization at all estate portals.',
    },
    {
      icon: Eye,
      title: 'Perimeter Guard',
      description: 'Intruder alarm barriers with automatic threat isolation mechanics.',
    },
    {
      icon: Bell,
      title: 'Fiduciary Support',
      description: 'Instant connection with private security teams and emergency dispatch.',
    },
  ];

  const activeCam = cameraFeeds[activeCamIndex];

  return (
    <section id="security" className="py-28 md:py-36 bg-[#0F0E0D] text-[#E5E2DA]/80 relative overflow-hidden border-b border-[#C5A376]/20">
      {/* Visual Ambient Grid / Scanner Accents */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#8c7b6a_1px,transparent_1px),linear-gradient(to_bottom,#8c7b6a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#C5A376]/5 to-transparent rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#C5A376]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A376] uppercase mb-4 block">
                SECURITY & PRIVACY
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-white leading-tight">
                Protected Without Compromise
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={150}>
            <div className="max-w-xl">
              <p className="text-sm sm:text-base text-[#C4C0B5] font-light leading-relaxed mb-6">
                All premium ESTATE residences feature customized security infrastructure. Designed for absolute privacy, our systems deliver constant protection. (Simulated security presentation showing demonstration footage).
              </p>
              {/* Monitored Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-[#C5A376]/25 bg-[#C5A376]/5 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A376] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A376]"></span>
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#C5A376] uppercase">
                  24/7 SECURE MONITORING LINKED
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Cinematic Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          
          {/* Left: Large Featured Feed (Command Center) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <ScrollReveal>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black border border-[#C5A376]/15 rounded-2xl shadow-2xl group">
                
                {/* Scanline Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none z-20" />
                
                {/* Horizontal scanner beam - hardware composited */}
                {isScannerRunning && (
                  <div className="absolute inset-0 h-full w-full border-t-2 border-[#C5A376]/45 pointer-events-none z-20 animate-[scan_5s_linear_infinite]" />
                )}

                {/* Surveillance footage display with Ken Burns effect */}
                <img
                  src={getOptimizedUnsplashUrl(activeCam.image, 800, 75)}
                  srcSet={getUnsplashSrcSet(activeCam.image, [640, 800, 1024, 1200], 75)}
                  sizes="(max-width: 1024px) 100vw, 850px"
                  alt={`Security camera footage showing ${activeCam.name}`}
                  className="w-full h-full object-cover opacity-85 transition-transform duration-[8000ms] ease-out scale-105 group-hover:scale-100 filter contrast-[1.05] brightness-[0.80] grayscale-[20%]"
                  loading="lazy"
                />

                {/* Ambient vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)] pointer-events-none z-10" />

                {/* HUD Live Indicators */}
                <div className="absolute inset-x-0 top-0 p-6 flex justify-between items-start z-30 pointer-events-none">
                  {/* Feed Status */}
                  <div className="flex flex-col gap-1.5">
                    <div className="inline-flex items-center gap-2 bg-black/60 px-3.5 py-1.5 border border-[#C5A376]/20 backdrop-blur-md rounded-[4px]">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                      </span>
                      <span className="text-[10px] font-semibold tracking-widest text-white uppercase">DEMO FEED</span>
                    </div>
                    <span className="text-[9px] font-bold text-white/50 bg-black/40 px-2 py-0.5 rounded tracking-widest self-start uppercase font-mono">{activeCam.camId}</span>
                  </div>

                  {/* Feed Metadata */}
                  <div className="flex flex-col items-end gap-1.5 font-mono text-[9px] text-[#C5A376] bg-black/60 px-3.5 py-2 border border-[#C5A376]/10 backdrop-blur-md rounded">
                    <div>RESOL: {activeCam.resolution}</div>
                    <div>FPS: {activeCam.fps} // BITRATE: 12.4 Mbps</div>
                    <div className="flex items-center gap-1.5">
                      <span>SIGNAL:</span>
                      <span className="text-emerald-500 font-bold">{signalStrength}%</span>
                      <Wifi className="w-3 h-3 text-emerald-500" />
                    </div>
                  </div>
                </div>

                {/* HUD Bottom Info Bar */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex justify-between items-end z-30 pointer-events-none">
                  <div className="flex flex-col">
                    <span className="text-white text-lg font-light tracking-wide font-serif mb-0.5">{activeCam.name}</span>
                    <span className="text-[#C5A376]/90 text-[10px] tracking-widest uppercase">{activeCam.location}</span>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <div className="text-[10px] font-semibold text-white tracking-widest font-mono">{timestamp}</div>
                    <div className="flex gap-2">
                      <span className="text-[8px] text-[#726E65] uppercase bg-white/5 border border-white/10 px-2 py-0.5 tracking-wider rounded">SECURE DEMO FEED</span>
                    </div>
                  </div>
                </div>

                {/* Focus Scan Corners */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#C5A376]/45 pointer-events-none z-20" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#C5A376]/45 pointer-events-none z-20" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#C5A376]/45 pointer-events-none z-20" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#C5A376]/45 pointer-events-none z-20" />
              </div>
            </ScrollReveal>

            {/* Dashboard Control Panel bar */}
            <ScrollReveal delay={100}>
              <div className="flex flex-wrap justify-between items-center bg-[#FAF9F6]/5 border border-[#C5A376]/10 p-4 rounded-xl gap-4">
                <div className="flex items-center gap-3.5">
                  <Activity className="w-4 h-4 text-[#C5A376] animate-pulse" />
                  <span className="text-[10px] font-semibold tracking-widest text-[#E5E2DA]/90 uppercase">TELEMETRY: STABLE</span>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => {
                      const element = document.getElementById('security-features-row');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-1.5 text-[9px] font-semibold tracking-wider uppercase border border-[#C5A376]/25 text-[#C5A376] hover:bg-[#C5A376] hover:text-black transition-all rounded cursor-pointer"
                  >
                    View Security Features
                  </button>
                  <button className="p-1.5 border border-[#C5A376]/25 text-[#C5A376] hover:bg-[#C5A376] hover:text-black transition-all rounded cursor-pointer">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Camera Feeds Grid */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#C5A376] uppercase mb-1">
              Security Monitoring Demo
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 max-h-[580px] lg:max-h-none overflow-y-auto overflow-x-hidden pr-2 select-scrollbar">
              {cameraFeeds.map((cam, idx) => (
                <ScrollReveal key={cam.id} delay={idx * 80}>
                  <div
                    onClick={() => setActiveCamIndex(idx)}
                    className={`cursor-pointer group flex flex-col border p-3 rounded-xl transition-all duration-[400ms] ${
                      activeCamIndex === idx
                        ? 'bg-gradient-to-r from-[#C5A376]/15 to-[#C5A376]/5 border-[#C5A376] shadow-[0_0_15px_rgba(197,163,118,0.15)] translate-x-1.5'
                        : 'bg-[#FAF9F6]/5 hover:bg-[#FAF9F6]/10 border-white/5 hover:border-[#C5A376]/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Mini Thumbnail */}
                      <div className="w-16 h-12 bg-black border border-white/10 overflow-hidden relative rounded-md flex-shrink-0">
                        <img
                          src={getOptimizedUnsplashUrl(cam.image, 300)}
                          alt={cam.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.70] contrast-[1.05] grayscale-[20%]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/5 z-10" />
                        <div className="absolute top-1 left-1.5 w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse z-20" />
                      </div>

                      {/* Camera Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-1">
                          <h4 className="text-white text-xs font-serif font-light truncate group-hover:text-[#C5A376] transition-colors">
                            {cam.name}
                          </h4>
                          <span className="font-mono text-[8px] text-[#C5A376]/70 flex-shrink-0">{cam.resolution}</span>
                        </div>
                        <p className="text-[9px] text-[#A39E93] uppercase tracking-wider truncate mb-1">
                          {cam.location}
                        </p>
                        <div className="flex justify-between items-center text-[8px] font-mono text-[#A39E93]/80 font-semibold">
                          <span>{cam.camId}</span>
                          <span className="text-[#C5A376] font-semibold">{cam.fps} FPS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Luxury Security Statistics Row */}
        <div id="security-features-row" className="border-t border-[#C5A376]/20 pt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={stat.title} delay={idx * 100}>
                  <div className="flex gap-5 items-start group">
                    <div className="w-12 h-12 bg-[#C5A376]/5 border border-[#C5A376]/20 flex items-center justify-center shadow-sm group-hover:bg-[#1A1917] group-hover:text-[#C5A376] group-hover:border-[#C5A376] transition-all duration-[400ms] rounded-xl flex-shrink-0">
                      <Icon className="w-5 h-5 stroke-[1.25] text-[#C5A376]" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-white font-serif text-lg font-light tracking-wide group-hover:text-[#C5A376] transition-colors">
                        {stat.title}
                      </h4>
                      <p className="text-xs text-[#726E65] leading-relaxed font-light">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
});

SecuritySection.displayName = 'SecuritySection';
