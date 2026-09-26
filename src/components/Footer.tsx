import React from 'react';
import { ArrowUp, Heart, Code2, GraduationCap } from 'lucide-react';
import { COLLEGE_INFO } from '../data/symposiumData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#373737] text-white pt-14 pb-8 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top zone */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-700/80">
          
          {/* Brand & Institution Info (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#B0D2EC] text-[#373737] flex items-center justify-center font-bold text-sm font-mono">
                &lt;/&gt;
              </div>
              <div>
                <span className="text-lg font-bold font-display tracking-tight text-white block">
                  INTELLECTRA 2026
                </span>
                <span className="text-xs text-[#B0D2EC] font-medium block">
                  IT Spectrum &bull; National Level Technical Symposium
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md pt-2">
              Organized by the Department of Information Technology, Adhiparasakthi Engineering College, Melmaruvathur &ndash; 603319.
            </p>

            <div className="text-[11px] text-slate-400 space-y-1 pt-1">
              <p>&bull; Approved by AICTE, New Delhi &bull; Affiliated to Anna University, Chennai</p>
              <p>&bull; Accredited with NAAC &ldquo;A&rdquo; Grade &bull; ISO 9001:2015 Certified</p>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-3">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About IT Dept</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Symposium Events</a></li>
              <li><a href="#perks" className="hover:text-white transition-colors">Perks &amp; Prizes</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Agenda (Oct 12)</a></li>
              <li><a href="#register" className="hover:text-white transition-colors">Instant Pass</a></li>
              <li><a href="#poster" className="hover:text-white transition-colors">Official Poster</a></li>
              <li><a href="#venue" className="hover:text-white transition-colors">Campus Map &amp; Transit</a></li>
            </ul>
          </div>

          {/* Key Coordinators & Action (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-3">
              Direct Contact
            </h4>
            <p className="text-slate-300">
              Student Hotline: <br />
              <span className="font-mono text-[#B0D2EC] font-semibold">+91 9342661192</span>
            </p>
            <p className="text-slate-300">
              Venue: <br />
              <span className="text-slate-400">APEC Central Library, Melmaruvathur</span>
            </p>
            <button
              onClick={scrollToTop}
              className="mt-3 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1.5 text-[11px] transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            &copy; 2026 Department of Information Technology, Adhiparasakthi Engineering College. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Designed by</span>
            <span className="font-bold text-white tracking-wide">{COLLEGE_INFO.designedBy}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
