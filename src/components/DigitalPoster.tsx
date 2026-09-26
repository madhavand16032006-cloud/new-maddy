import React from 'react';
import { 
  Trophy, Utensils, QrCode, Sparkles, MapPin, 
  Calendar, Laptop, ChevronRight, Phone, Award, Shield 
} from 'lucide-react';
import { COLLEGE_INFO, STUDENT_COORDINATORS, LEADERSHIP_COORDINATORS } from '../data/symposiumData';

interface DigitalPosterProps {
  onZoom?: () => void;
}

export const DigitalPoster: React.FC<DigitalPosterProps> = ({ onZoom }) => {
  return (
    <div 
      className="w-full max-w-md mx-auto bg-[#F8F9FA] rounded-2xl border-4 border-[#1E293B] shadow-2xl overflow-hidden relative font-sans text-slate-800 transition-all select-none"
      style={{
        backgroundImage: 'radial-gradient(#E2E8F0 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}
    >
      {/* Top Header Strip: Red Emblem + Title + NAAC Badge */}
      <div className="p-4 sm:p-5 pb-3 border-b border-slate-200 bg-white/90 backdrop-blur-xs relative">
        <div className="flex items-start justify-between gap-2">
          
          {/* Circular Red College Seal */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-red-600 bg-red-50 p-1 flex flex-col items-center justify-center shrink-0 shadow-xs text-center">
            <div className="w-full h-full rounded-full border border-red-500 flex flex-col items-center justify-center bg-red-600 text-white">
              <span className="text-[7px] font-bold leading-none uppercase">APEC</span>
              <span className="text-[6px] tracking-tight font-medium opacity-90">MELMARUVATHUR</span>
              <span className="text-[5px] mt-0.5 opacity-80 leading-none">ESTD 1984</span>
            </div>
          </div>

          {/* Central Titles */}
          <div className="text-center flex-1 px-1">
            <span className="text-[10px] font-serif font-bold text-slate-700 italic tracking-wider block">
              Om Sakthi
            </span>
            <h2 className="text-sm sm:text-base font-extrabold text-[#1E293B] tracking-tight font-display leading-tight">
              ADHIPARASAKTHI ENGINEERING COLLEGE
            </h2>
            <p className="text-[8.5px] sm:text-[9.5px] text-slate-600 mt-0.5 leading-snug">
              Approved by AICTE, New Delhi and Affiliated to Anna University, Chennai
            </p>
            <p className="text-[8px] sm:text-[9px] text-slate-500 font-medium">
              Accredited by NAAC &ldquo;A&rdquo; Grade &bull; (An ISO 9001:2015 Certified Institution)
            </p>
            <p className="text-[8.5px] font-semibold text-slate-700">
              Melmaruvathur &ndash; 603319
            </p>
          </div>

          {/* NAAC A Grade Seal */}
          <div className="w-12 h-14 sm:w-14 sm:h-16 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 rounded-b-xl flex flex-col items-center justify-center text-slate-900 shadow-md shrink-0 p-1 border-t-2 border-amber-300">
            <span className="text-[7.5px] font-bold tracking-widest uppercase">NAAC</span>
            <span className="text-sm sm:text-base font-black leading-none my-0.5">A</span>
            <span className="text-[7px] font-bold uppercase tracking-wider">GRADE</span>
          </div>
        </div>
      </div>

      {/* Campus Central Library Feature Photo with Motivational Quotes */}
      <div className="relative bg-slate-900 overflow-hidden border-b-2 border-slate-300">
        <img
          src="/src/assets/images/hero_tech_network_1790438511467.jpg"
          alt="APEC Central Library"
          className="w-full h-40 sm:h-48 object-cover opacity-85"
        />
        
        {/* Floating Building Title Marker */}
        <div className="absolute bottom-2 right-2 px-2.5 py-1 bg-white/90 backdrop-blur-xs rounded-md shadow-xs text-[9px] font-bold text-slate-800 border border-slate-300">
          🏛️ APEC CENTRAL LIBRARY
        </div>

        {/* Motivational Side Doodles */}
        <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 rounded-md text-[9px] text-[#B0D2EC] font-display italic">
          Think &bull; Build &bull; Innovate
        </div>
        <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 rounded-md text-[9px] text-amber-300 font-display italic">
          Code &bull; Create &bull; Impact
        </div>
      </div>

      {/* Main INTELLECTRA Paint-Stroke Banner */}
      <div className="p-3 bg-gradient-to-r from-blue-900 via-[#1E3A8A] to-blue-900 text-white text-center relative overflow-hidden shadow-inner">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-800/80 rounded-full text-[9px] font-mono text-[#B0D2EC] mb-1">
          <span>&lt;/&gt;</span>
          <span>ANNUAL NATIONAL SYMPOSIUM</span>
          <span>&lt;/&gt;</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black tracking-tight font-display text-white drop-shadow-md">
          INTELLECTRA
        </h1>

        <p className="text-[11px] font-extrabold tracking-widest text-[#B0D2EC] uppercase mt-0.5">
          NATIONAL LEVEL SYMPOSIUM
        </p>

        <p className="text-[9.5px] font-semibold text-slate-300 mt-0.5">
          BY DEPARTMENT OF INFORMATION TECHNOLOGY
        </p>

        <div className="mt-2 pt-1.5 border-t border-blue-700/60 flex items-center justify-center gap-2 text-[8.5px] text-blue-200 tracking-wider">
          <span>&lt;/&gt; IDEAS</span>
          <span>&bull;</span>
          <span>TECHNOLOGY</span>
          <span>&bull;</span>
          <span>INNOVATION</span>
          <span>&bull;</span>
          <span>A BETTER TOMORROW</span>
        </div>
      </div>

      {/* Dual Events Grid: Technical & Non-Technical */}
      <div className="p-3 sm:p-4 bg-slate-50 border-b border-slate-200">
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          
          {/* Technical Events Container */}
          <div className="bg-white rounded-xl border border-blue-200 shadow-2xs p-2.5">
            <div className="flex items-center gap-1.5 pb-1.5 mb-2 border-b border-blue-100 text-blue-900">
              <div className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[9px] font-bold">
                T
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wide">
                TECHNICAL
              </span>
            </div>

            <div className="space-y-1.5 text-[10px] font-bold text-slate-800">
              <div className="p-1.5 rounded-lg bg-blue-50/60 border border-blue-100 flex items-center justify-between">
                <span className="truncate">Prompt Stack</span>
                <ChevronRight className="w-3 h-3 text-blue-600 shrink-0" />
              </div>
              <div className="p-1.5 rounded-lg bg-blue-50/60 border border-blue-100 flex items-center justify-between">
                <span className="truncate">Codesmith Meet</span>
                <ChevronRight className="w-3 h-3 text-blue-600 shrink-0" />
              </div>
              <div className="p-1.5 rounded-lg bg-blue-50/60 border border-blue-100 flex items-center justify-between">
                <span className="truncate">Infographix</span>
                <ChevronRight className="w-3 h-3 text-blue-600 shrink-0" />
              </div>
            </div>
          </div>

          {/* Non-Technical Events Container */}
          <div className="bg-white rounded-xl border border-purple-200 shadow-2xs p-2.5">
            <div className="flex items-center gap-1.5 pb-1.5 mb-2 border-b border-purple-100 text-purple-900">
              <div className="w-4 h-4 rounded-full bg-purple-600 text-white flex items-center justify-center text-[9px] font-bold">
                N
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wide">
                NON-TECHNICAL
              </span>
            </div>

            <div className="space-y-1.5 text-[10px] font-bold text-slate-800">
              <div className="p-1.5 rounded-lg bg-purple-50/60 border border-purple-100 flex items-center justify-between">
                <span className="truncate">Booyah Battle</span>
                <ChevronRight className="w-3 h-3 text-purple-600 shrink-0" />
              </div>
              <div className="p-1.5 rounded-lg bg-purple-50/60 border border-purple-100 flex items-center justify-between">
                <span className="truncate">Neurolink Chess</span>
                <ChevronRight className="w-3 h-3 text-purple-600 shrink-0" />
              </div>
              <div className="p-1.5 rounded-lg bg-purple-50/60 border border-purple-100 flex items-center justify-between">
                <span className="truncate">Auction Arena</span>
                <ChevronRight className="w-3 h-3 text-purple-600 shrink-0" />
              </div>
            </div>
          </div>

        </div>

        {/* Center handwritten emblem */}
        <div className="text-center my-2">
          <span className="text-xs font-serif font-bold italic text-blue-800 tracking-wider">
            &sim; Ideas into Impact &sim;
          </span>
        </div>
      </div>

      {/* Leadership & Student Coordinators Strip */}
      <div className="p-3 bg-white border-b border-slate-200 text-[9.5px]">
        {/* Faculty Row */}
        <div className="grid grid-cols-3 gap-1 pb-2 border-b border-slate-100 text-center">
          <div>
            <span className="text-[8px] font-bold text-slate-400 block uppercase">Faculty Co-Ordinators</span>
            <span className="font-semibold text-slate-800 block text-[9px]">Mrs. S. Sasirekha, AP/IT</span>
            <span className="font-semibold text-slate-800 block text-[9px]">Mrs. S. Lavanya, AP/IT</span>
          </div>
          <div>
            <span className="text-[8px] font-bold text-slate-400 block uppercase">Convener</span>
            <span className="font-bold text-blue-900 block text-[9px]">Mr. P. Sakthivel</span>
            <span className="text-[8px] text-slate-500">AP / IT</span>
          </div>
          <div>
            <span className="text-[8px] font-bold text-slate-400 block uppercase">HOD / IT</span>
            <span className="font-bold text-blue-900 block text-[9px]">Mr. K. Hemakumar</span>
            <span className="text-[8px] text-slate-500">Head of Dept</span>
          </div>
        </div>

        {/* Student Coordinators Grid with Phone Numbers */}
        <div className="pt-2">
          <span className="text-[8px] font-bold text-slate-400 block uppercase text-center mb-1">
            Student Co-ordinators
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-center">
            {STUDENT_COORDINATORS.map((coord) => (
              <a
                key={coord.name}
                href={`tel:${coord.phone}`}
                className="p-1 rounded-md bg-slate-50 border border-slate-200 hover:border-blue-400 block transition-colors"
              >
                <span className="font-bold text-[#1E293B] block truncate text-[9px]">
                  {coord.name}
                </span>
                <span className="font-mono text-blue-700 font-bold block text-[9px]">
                  {coord.phone}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action Footer: QR Code, Venue, Date, Cash Prizes */}
      <div className="p-3 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white">
        <div className="flex items-center justify-between gap-2">
          
          {/* Scan to register box */}
          <div className="p-1.5 rounded-lg bg-white text-slate-900 flex items-center gap-1.5 shrink-0 shadow-xs">
            <QrCode className="w-9 h-9 sm:w-10 sm:h-10 text-slate-900" />
            <div className="pr-1 text-left">
              <span className="text-[7.5px] font-bold uppercase block leading-none text-slate-500">Scan to</span>
              <span className="text-[9.5px] font-black uppercase block leading-tight text-blue-900">REGISTER</span>
              <span className="text-[7px] text-slate-500 font-mono">intellectra.in</span>
            </div>
          </div>

          {/* Date & Venue */}
          <div className="text-center px-1">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-800/80 text-[#B0D2EC] text-[8.5px] font-bold mb-0.5">
              <Calendar className="w-2.5 h-2.5" />
              <span>OCTOBER 12, 2026</span>
            </div>
            <p className="text-[9px] text-slate-300 font-medium">
              Venue: Central Library
            </p>
          </div>

          {/* Cash Prizes Trophy */}
          <div className="text-right shrink-0">
            <div className="flex items-center justify-end gap-1 text-amber-400">
              <Trophy className="w-4 h-4" />
              <span className="text-[9.5px] font-black uppercase tracking-tight text-amber-400">
                CASH PRIZES
              </span>
            </div>
            <p className="text-[7.5px] text-emerald-400 font-semibold">
              Free Lunch &amp; Refreshment
            </p>
          </div>

        </div>

        {/* Attribution Bar */}
        <div className="mt-2 pt-1.5 border-t border-slate-700/60 flex items-center justify-between text-[7.5px] text-slate-400">
          <span>Code &bull; Create &bull; Collaborate &bull; Elevate</span>
          <span className="font-semibold text-slate-300">Designed by {COLLEGE_INFO.designedBy}</span>
        </div>
      </div>

    </div>
  );
};
