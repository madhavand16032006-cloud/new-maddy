import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, Bell, Volume2, VolumeX, Sparkles, Radio } from 'lucide-react';
import { COLLEGE_INFO } from '../data/symposiumData';

export const Countdown: React.FC = () => {
  // Target date requested by user: 12th Oct 2026 9:00 AM IST
  const targetDate = new Date('2026-10-12T09:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false
  });

  const [toneEnabled, setToneEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Pleasant subtle synthesized audio chime function
  const playChimeTone = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.15); // E5

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch {
      // Audio autoplay gracefully handled
    }
  };

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    updateCountdown();
    const interval = setInterval(() => {
      updateCountdown();
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Handle tone toggling
  const toggleTone = () => {
    const nextState = !toneEnabled;
    setToneEnabled(nextState);
    if (nextState) {
      playChimeTone();
    }
  };

  const handleAddToCalendar = () => {
    const title = encodeURIComponent('IT Spectrum 2026 - INTELLECTRA (Adhiparasakthi Engineering College)');
    const details = encodeURIComponent('National Level Technical Symposium by B.Tech Information Technology Department, APEC Melmaruvathur. Venue: Central Library. Contact: 9342661192');
    const location = encodeURIComponent('Adhiparasakthi Engineering College, Melmaruvathur - 603319');
    // 12th Oct 2026 09:00 AM IST = 03:30 AM UTC
    const start = '20261012T033000Z';
    const end = '20261012T110000Z';
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  const timerUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINS', value: timeLeft.minutes },
    { label: 'SECS', value: timeLeft.seconds },
  ];

  return (
    <section className="py-8 bg-white border-y border-[#B0D2EC]/50 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-[#F0F7FD] via-white to-[#F0F7FD] border border-[#B0D2EC]/70 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Label zone */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-2 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>REGISTRATION LIVE &bull; FREE ENTRY</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-[#373737] font-display">
              Symposium Grand Opening
            </h3>
            
            <p className="text-sm font-semibold text-blue-900 mt-1 flex items-center justify-center lg:justify-start gap-1.5 font-mono">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>12th October 2026 &bull; 09:00 AM IST</span>
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              APEC Central Library &amp; IT Dept Auditorium
            </p>
          </div>

          {/* Time digits */}
          <div className="grid grid-cols-4 gap-2.5 sm:gap-4 w-full sm:w-auto">
            {timerUnits.map((unit) => (
              <div
                key={unit.label}
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-[#373737] text-white min-w-[70px] sm:min-w-[92px] shadow-sm hover:scale-105 transition-transform border border-slate-700"
              >
                <span className="text-2xl sm:text-4xl font-extrabold font-mono text-[#B0D2EC] tabular-nums leading-none">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-300 mt-1.5 tracking-wider">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          {/* Action buttons (Calendar & Count Tone) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
            <button
              onClick={toggleTone}
              className={`px-3.5 py-2.5 text-xs font-semibold rounded-xl border transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
                toneEnabled
                  ? 'bg-blue-600 text-white border-blue-600 ring-2 ring-blue-300'
                  : 'bg-white text-[#373737] border-[#B0D2EC] hover:bg-[#B0D2EC]/20'
              }`}
              title="Toggle countdown sound tone chime"
            >
              {toneEnabled ? <Volume2 className="w-4 h-4 text-white" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
              <span>{toneEnabled ? 'Chime Tone Active' : 'Start Count Tone'}</span>
            </button>

            <button
              onClick={handleAddToCalendar}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#373737] hover:bg-[#1E293B] rounded-xl transition-all shadow-xs hover:shadow-md flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <Bell className="w-4 h-4 text-[#B0D2EC]" />
              <span>Add to Calendar</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
