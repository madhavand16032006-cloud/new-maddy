import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, PhoneCall } from 'lucide-react';
import { COLLEGE_INFO } from '../data/symposiumData';

interface NavbarProps {
  onRegisterClick: () => void;
  onPosterClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick, onPosterClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Perks', href: '#perks' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Poster', href: '#poster' },
    { label: 'Venue', href: '#venue' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-[#B0D2EC]/40 py-3'
          : 'bg-white/70 backdrop-blur-sm border-b border-[#B0D2EC]/20 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly conforming to Top Bar Contract: 3 zones */}
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 group text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B0D2EC]"
          >
            <div className="w-9 h-9 rounded-lg bg-[#373737] text-white flex items-center justify-center font-bold text-base shadow-xs group-hover:bg-[#1E293B] transition-colors">
              <span className="text-[#B0D2EC]">&lt;/&gt;</span>
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-[#373737] block leading-tight font-display">
                INTELLECTRA &apos;26
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide block leading-tight">
                IT Spectrum · APEC
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#373737]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-600 transition-colors relative py-1 focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#B0D2EC]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onPosterClick}
              className="px-3.5 py-2 text-xs font-semibold text-[#373737] bg-white border border-[#B0D2EC] hover:bg-[#B0D2EC]/20 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Official Poster</span>
            </button>
            <button
              onClick={onRegisterClick}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#373737] hover:bg-[#1E293B] rounded-lg transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              Register Now
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onRegisterClick}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#373737] rounded-md"
            >
              Register
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#373737] hover:bg-[#B0D2EC]/20 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-xl border-b border-[#B0D2EC]/40 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#373737] hover:bg-[#B0D2EC]/20 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onPosterClick();
                }}
                className="w-full py-2.5 text-xs font-semibold text-[#373737] bg-[#B0D2EC]/30 rounded-lg text-center"
              >
                View Official Poster
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRegisterClick();
                }}
                className="w-full py-2.5 text-xs font-semibold text-white bg-[#373737] rounded-lg text-center shadow-xs"
              >
                Register Now (Free Entry)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
