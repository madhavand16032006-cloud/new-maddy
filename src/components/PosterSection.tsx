import React, { useState } from 'react';
import { 
  Sparkles, Download, Maximize2, X, Share2, Check, 
  Trophy, Utensils, Award, BookOpen, User, Eye, Layers 
} from 'lucide-react';
import { COLLEGE_INFO, STUDENT_COORDINATORS, LEADERSHIP_COORDINATORS } from '../data/symposiumData';
import { DigitalPoster } from './DigitalPoster';
import officialPosterImage from '../assets/images/symposium_official_poster_1790439306650.jpg';

interface PosterSectionProps {
  isModalOpen?: boolean;
  onCloseModal?: () => void;
}

export const PosterSection: React.FC<PosterSectionProps> = ({ 
  isModalOpen = false, 
  onCloseModal 
}) => {
  const [internalLightboxOpen, setInternalLightboxOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [posterMode, setPosterMode] = useState<'graphic' | 'interactive'>('graphic');

  const isLightboxActive = isModalOpen || internalLightboxOpen;
  const handleClose = () => {
    setInternalLightboxOpen(false);
    if (onCloseModal) onCloseModal();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'IT Spectrum 2026 - INTELLECTRA Official Poster',
        text: 'National Level Technical Symposium by B.Tech IT Dept, Adhiparasakthi Engineering College, Melmaruvathur.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = officialPosterImage;
    a.download = 'IT_Spectrum_2026_INTELLECTRA_Official_Poster.jpg';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="poster" className="py-20 bg-[#F0F7FD]/70 relative border-t border-[#B0D2EC]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#B0D2EC] text-blue-700 text-xs font-semibold mb-2 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OFFICIAL SYMPOSIUM BROCHURE &amp; POSTER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#373737] font-display tracking-tight text-balance">
            Official Symposium Poster
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Published by Department of Information Technology, Adhiparasakthi Engineering College, Melmaruvathur.
          </p>

          {/* Poster Format Switcher */}
          <div className="inline-flex items-center p-1.5 bg-white border border-[#B0D2EC]/60 rounded-xl shadow-xs mt-6">
            <button
              onClick={() => setPosterMode('graphic')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
                posterMode === 'graphic'
                  ? 'bg-[#373737] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#373737] hover:bg-slate-50'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Graphic Poster</span>
            </button>
            <button
              onClick={() => setPosterMode('interactive')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
                posterMode === 'interactive'
                  ? 'bg-[#373737] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#373737] hover:bg-slate-50'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Interactive Digital Blueprint</span>
            </button>
          </div>
        </div>

        {/* Poster Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Active Poster Display (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {posterMode === 'graphic' ? (
              <div className="relative group rounded-2xl overflow-hidden border-2 border-[#B0D2EC] shadow-xl bg-white max-w-md w-full transition-all duration-300 hover:shadow-2xl">
                <img
                  src={officialPosterImage}
                  alt="IT Spectrum 2026 INTELLECTRA Official Poster - Adhiparasakthi Engineering College"
                  className="w-full h-auto object-cover cursor-pointer select-none"
                  onClick={() => setInternalLightboxOpen(true)}
                />
                
                {/* Hover overlay hint */}
                <div 
                  className="absolute inset-0 bg-[#373737]/40 backdrop-blur-2xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer pointer-events-none"
                >
                  <div className="px-4 py-2 rounded-xl bg-white text-[#373737] font-semibold text-xs flex items-center gap-2 shadow-lg">
                    <Maximize2 className="w-4 h-4 text-blue-600" />
                    <span>Click to Zoom &amp; Inspect</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full">
                <DigitalPoster onZoom={() => setInternalLightboxOpen(true)} />
              </div>
            )}

            {/* Poster Quick Action Bar */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
              <button
                onClick={() => setInternalLightboxOpen(true)}
                className="px-4 py-2 text-xs font-semibold text-[#373737] bg-white border border-[#B0D2EC] hover:bg-[#B0D2EC]/20 rounded-lg shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Full Lightbox View</span>
              </button>
              
              <button
                onClick={handleDownload}
                className="px-4 py-2 text-xs font-semibold text-[#373737] bg-white border border-[#B0D2EC] hover:bg-[#B0D2EC]/20 rounded-lg shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-blue-600" />
                <span>Download Poster</span>
              </button>

              <button
                onClick={handleShare}
                className="px-4 py-2 text-xs font-semibold text-[#373737] bg-white border border-[#B0D2EC] hover:bg-[#B0D2EC]/20 rounded-lg shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Copied Link</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Share</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right: Key Poster Highlights & Direct Information (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Institution Badge */}
            <div className="p-5 rounded-2xl bg-white border border-[#B0D2EC]/60 shadow-xs">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-bold text-amber-600 tracking-wider uppercase block">
                    {COLLEGE_INFO.invocation}
                  </span>
                  <h3 className="text-lg font-bold text-[#373737] font-display">
                    {COLLEGE_INFO.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {COLLEGE_INFO.location}
                  </p>
                </div>
                <div className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-bold border border-amber-300">
                  NAAC &ldquo;A&rdquo; GRADE
                </div>
              </div>
              
              <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100 leading-relaxed">
                {COLLEGE_INFO.approvals} &bull; {COLLEGE_INFO.certification}
              </p>
            </div>

            {/* Event Highlights & Rewards */}
            <div className="p-5 rounded-2xl bg-white border border-[#B0D2EC]/60 shadow-xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Official Perks &amp; Provisions
              </h4>
              
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-center gap-2.5">
                  <Trophy className="w-5 h-5 text-amber-600 shrink-0" />
                  <div>
                    <span className="font-bold text-[#373737] block">Exciting Cash Prizes</span>
                    <span className="text-[11px] text-slate-500">For all event winners</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-center gap-2.5">
                  <Utensils className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold text-[#373737] block">Free Food &amp; Snacks</span>
                    <span className="text-[11px] text-slate-500">Lunch &amp; Refreshment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Poster Coordinators Box */}
            <div className="p-5 rounded-2xl bg-white border border-[#B0D2EC]/60 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Contacts from Poster
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {STUDENT_COORDINATORS.map((coord) => (
                  <a
                    key={coord.name}
                    href={`tel:${coord.phone}`}
                    className="p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <span className="font-semibold text-[#373737] block">{coord.name}</span>
                      <span className="text-[11px] text-slate-500">{coord.role}</span>
                    </div>
                    <span className="text-blue-600 font-mono font-bold text-[11px]">{coord.phone}</span>
                  </a>
                ))}
              </div>
              
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Symposium Venue: <strong>{COLLEGE_INFO.venue}</strong></span>
                <span className="text-[11px] text-slate-500 font-semibold italic">Designed by {COLLEGE_INFO.designedBy}</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox / Zoom Modal */}
      {isLightboxActive && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={handleClose}
        >
          <div
            className="relative max-w-4xl max-h-[94vh] flex flex-col items-center justify-center w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top action controls */}
            <div className="w-full flex items-center justify-between pb-3 text-white">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">IT Spectrum 2026 &bull; INTELLECTRA Poster</span>
                <span className="text-xs text-slate-400 hidden sm:inline">Adhiparasakthi Engineering College</span>
              </div>
              
              {/* Lightbox Mode Toggle & Actions */}
              <div className="flex items-center gap-2">
                <div className="bg-white/10 rounded-lg p-0.5 flex text-xs">
                  <button
                    onClick={() => setPosterMode('graphic')}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      posterMode === 'graphic' ? 'bg-white text-slate-900 font-semibold' : 'text-slate-300'
                    }`}
                  >
                    Graphic
                  </button>
                  <button
                    onClick={() => setPosterMode('interactive')}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      posterMode === 'interactive' ? 'bg-white text-slate-900 font-semibold' : 'text-slate-300'
                    }`}
                  >
                    Interactive
                  </button>
                </div>

                <button
                  onClick={handleDownload}
                  className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                  title="Download Poster"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                  title="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Poster high-res frame */}
            <div className="overflow-auto max-h-[82vh] rounded-xl border border-white/20 bg-black/40 shadow-2xl p-2 w-full flex justify-center">
              {posterMode === 'graphic' ? (
                <img
                  src={officialPosterImage}
                  alt="Symposium Official Poster Fullscreen View"
                  className="max-h-[80vh] w-auto object-contain mx-auto rounded-lg"
                />
              ) : (
                <div className="py-2">
                  <DigitalPoster />
                </div>
              )}
            </div>
            
            <p className="text-xs text-slate-300 mt-2 text-center">
              Adhiparasakthi Engineering College, Melmaruvathur &bull; Designed by Madhavan D
            </p>
          </div>
        </div>
      )}

    </section>
  );
};
