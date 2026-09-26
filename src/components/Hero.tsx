import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Trophy, Utensils, Award, ArrowRight, Sparkles, Code2, Terminal } from 'lucide-react';
import { COLLEGE_INFO } from '../data/symposiumData';

interface HeroProps {
  onRegisterClick: () => void;
  onExploreEventsClick: () => void;
  onPosterClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onRegisterClick,
  onExploreEventsClick,
  onPosterClick,
}) => {
  // Typing text effect
  const typingPhrases = [
    'Welcome to IT Spectrum 2026',
    'INTELLECTRA : National Level Symposium',
    'Code • Create • Innovate',
    'Ideas into Impact'
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = typingPhrases[phraseIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Animated Subtle Code Grid / Radial Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0F6FA] via-[#F8FAFC] to-white -z-20" />
      
      {/* Floating subtle tech gradient spheres */}
      <div 
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#B0D2EC]/40 to-blue-200/20 blur-3xl -z-10 rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute -top-24 right-0 w-96 h-96 bg-[#B0D2EC]/30 rounded-full blur-2xl -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 left-4 w-80 h-80 bg-blue-100/50 rounded-full blur-2xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Institutional Accreditation & Date Kicker */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#B0D2EC] shadow-2xs backdrop-blur-xs text-xs font-semibold text-[#373737]">
            <span className="text-amber-600 font-bold tracking-wider">OM SAKTHI</span>
            <span className="text-slate-300">|</span>
            <span>Adhiparasakthi Engineering College</span>
            <span className="text-slate-300">·</span>
            <span className="text-blue-700 font-medium">NAAC &ldquo;A&rdquo; Grade</span>
          </div>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#373737] text-white shadow-2xs text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5 text-[#B0D2EC]" />
            <span>12th October 2026 &bull; 09:00 AM</span>
          </div>
        </div>

        {/* College Name & Department */}
        <div className="mb-4">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-500 uppercase">
            Department of Information Technology Presents
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-[#373737] mt-1 font-display tracking-tight">
            ADHIPARASAKTHI ENGINEERING COLLEGE, MELMARUVATHUR
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Approved by AICTE, New Delhi &bull; Affiliated to Anna University, Chennai &bull; ISO 9001:2015
          </p>
        </div>

        {/* Main Symposium Brand */}
        <div className="my-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#373737] font-display">
            INTELLECTRA <span className="text-blue-600">2026</span>
          </h1>
          <p className="text-sm sm:text-base font-semibold text-slate-600 mt-2 tracking-wide">
            NATIONAL LEVEL TECHNICAL SYMPOSIUM
          </p>
        </div>

        {/* Animated Typing Header Box */}
        <div className="min-h-[48px] flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white/90 border border-[#B0D2EC]/60 shadow-xs backdrop-blur-md">
            <Terminal className="w-4 h-4 text-blue-600" />
            <span className="text-base sm:text-xl font-bold text-[#373737] font-mono">
              {currentText}
            </span>
            <span className="w-2 h-5 bg-blue-600 animate-pulse ml-0.5" />
          </div>
        </div>

        {/* Subtitle & Motto */}
        <p className="text-lg sm:text-xl font-medium text-slate-700 max-w-2xl mx-auto mb-8 font-sans">
          <span className="text-blue-600 font-semibold">{COLLEGE_INFO.tagline}</span>
          <span className="block text-sm text-slate-500 mt-1 font-normal">
            &lt;/&gt; IDEAS &bull; TECHNOLOGY &bull; INNOVATION &bull; A BETTER TOMORROW
          </span>
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <button
            onClick={onRegisterClick}
            className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#373737] hover:bg-[#1E293B] rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 group cursor-pointer"
          >
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={onExploreEventsClick}
            className="px-6 py-3.5 text-sm sm:text-base font-semibold text-[#373737] bg-white border border-[#B0D2EC] hover:bg-[#B0D2EC]/20 rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center gap-2"
          >
            <Code2 className="w-4 h-4 text-blue-600" />
            <span>Explore Events</span>
          </button>

          <button
            onClick={onPosterClick}
            className="px-5 py-3.5 text-sm sm:text-base font-semibold text-blue-800 bg-[#B0D2EC]/30 hover:bg-[#B0D2EC]/50 border border-[#B0D2EC] rounded-xl transition-all shadow-2xs flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Official Poster</span>
          </button>
        </div>

        {/* Key Event Badges Grid / Quick Proof */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          <div className="p-3 rounded-xl bg-white/90 border border-[#B0D2EC]/40 shadow-xs flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#373737] leading-tight">Exciting Cash Prizes</p>
              <p className="text-[11px] text-slate-500">For all winners & runners</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/90 border border-[#B0D2EC]/40 shadow-xs flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#373737] leading-tight">Free Lunch & Tea</p>
              <p className="text-[11px] text-slate-500">Provided for all delegates</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/90 border border-[#B0D2EC]/40 shadow-xs flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#373737] leading-tight">Certificates for All</p>
              <p className="text-[11px] text-slate-500">Anna Univ. recognized</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/90 border border-[#B0D2EC]/40 shadow-xs flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#373737] leading-tight">APEC Central Library</p>
              <p className="text-[11px] text-slate-500">Melmaruvathur Campus</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
