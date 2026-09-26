import React, { useState } from 'react';
import { 
  Code2, Sparkles, Users, Clock, MapPin, Trophy, 
  ExternalLink, CheckCircle2, ChevronRight, X, PhoneCall 
} from 'lucide-react';
import { EVENTS } from '../data/symposiumData';
import { EventItem } from '../types';

interface EventsProps {
  onSelectEventForRegistration: (eventId: string) => void;
}

export const Events: React.FC<EventsProps> = ({ onSelectEventForRegistration }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'technical' | 'non-technical'>('all');
  const [selectedModalEvent, setSelectedModalEvent] = useState<EventItem | null>(null);

  const filteredEvents = EVENTS.filter((event) => {
    if (activeCategory === 'all') return true;
    return event.category === activeCategory;
  });

  return (
    <section id="events" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2">
            Compete · Showcase · Conquer
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#373737] font-display tracking-tight text-balance">
            Symposium Event Arenas
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Handcrafted technical crucible and strategic non-technical tournaments. 
            Win exciting cash awards, prestigious trophies, and certificates.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="inline-flex items-center p-1.5 bg-white border border-[#B0D2EC]/60 rounded-xl shadow-xs mt-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#373737] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#373737] hover:bg-slate-50'
              }`}
            >
              All Events ({EVENTS.length})
            </button>
            <button
              onClick={() => setActiveCategory('technical')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === 'technical'
                  ? 'bg-[#373737] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#373737] hover:bg-slate-50'
              }`}
            >
              Technical Events ({EVENTS.filter((e) => e.category === 'technical').length})
            </button>
            <button
              onClick={() => setActiveCategory('non-technical')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === 'non-technical'
                  ? 'bg-[#373737] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#373737] hover:bg-slate-50'
              }`}
            >
              Non-Technical ({EVENTS.filter((e) => e.category === 'non-technical').length})
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl border border-[#B0D2EC]/50 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#B0D2EC] transition-all duration-300 flex flex-col group"
            >
              {/* Image banner with fail-safe CSS fallback */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={event.image}
                  alt={event.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Graceful fallback to stylish gradient
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add(
                        'bg-gradient-to-br',
                        'from-[#373737]',
                        'to-[#1E293B]',
                        'flex',
                        'items-center',
                        'justify-center'
                      );
                    }
                  }}
                />
                
                {/* Subtle scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Category label */}
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/90 text-[#373737] backdrop-blur-xs shadow-xs">
                    {event.category === 'technical' ? 'Technical Track' : 'Non-Technical Track'}
                  </span>
                </div>

                {/* Team size tag */}
                <div className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center gap-1.5 drop-shadow-sm">
                  <Users className="w-3.5 h-3.5 text-[#B0D2EC]" />
                  <span>{event.teamSize}</span>
                </div>

                {/* Time slot */}
                <div className="absolute bottom-3 right-3 text-white text-xs font-medium flex items-center gap-1.5 drop-shadow-sm">
                  <Clock className="w-3.5 h-3.5 text-[#B0D2EC]" />
                  <span>{event.time.split('-')[0].trim()}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#373737] group-hover:text-blue-600 transition-colors font-display">
                    {event.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-700 mt-1">
                    {event.shortTagline}
                  </p>
                  
                  <p className="text-sm text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Skills tags: unboxed text with bullet separators per constitution */}
                  <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Focus:</span>
                    {event.skills.slice(0, 3).map((skill, idx) => (
                      <React.Fragment key={skill}>
                        <span>{skill}</span>
                        {idx < Math.min(event.skills.length, 3) - 1 && (
                          <span aria-hidden="true" className="text-slate-300">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedModalEvent(event)}
                    className="flex-1 py-2.5 px-3 text-xs font-semibold text-[#373737] bg-white border border-[#B0D2EC] hover:bg-[#B0D2EC]/20 rounded-xl transition-colors cursor-pointer text-center"
                  >
                    Rules &amp; Rounds
                  </button>
                  <button
                    onClick={() => onSelectEventForRegistration(event.id)}
                    className="flex-1 py-2.5 px-3 text-xs font-semibold text-white bg-[#373737] hover:bg-[#1E293B] rounded-xl transition-all shadow-xs cursor-pointer text-center flex items-center justify-center gap-1 group/btn"
                  >
                    <span>Register</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detailed Event Modal */}
      {selectedModalEvent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedModalEvent(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl border border-[#B0D2EC] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedModalEvent(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-[#373737] hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title & Category */}
            <div className="mb-4">
              <span className="text-xs font-bold tracking-wider uppercase text-blue-600 block mb-1">
                {selectedModalEvent.category === 'technical' ? 'Technical Event Track' : 'Non-Technical Event Track'}
              </span>
              <h3 className="text-2xl font-bold text-[#373737] font-display">
                {selectedModalEvent.title}
              </h3>
              <p className="text-sm font-semibold text-slate-500 mt-1">
                {selectedModalEvent.shortTagline}
              </p>
            </div>

            {/* Event Key Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs mb-6">
              <div>
                <span className="text-slate-400 block font-medium">Team Size</span>
                <span className="font-semibold text-[#373737]">{selectedModalEvent.teamSize}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Timing</span>
                <span className="font-semibold text-[#373737]">{selectedModalEvent.time}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Venue</span>
                <span className="font-semibold text-[#373737] truncate block" title={selectedModalEvent.venue}>
                  {selectedModalEvent.venue}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Prize</span>
                <span className="font-semibold text-emerald-700">Cash Award 🏆</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Event Overview
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedModalEvent.description}
              </p>
            </div>

            {/* Rounds */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Competition Rounds
              </h4>
              <div className="space-y-2">
                {selectedModalEvent.rounds.map((round, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 bg-blue-50/50 p-2.5 rounded-lg border border-blue-100">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{round}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Rules &amp; Guidelines
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {selectedModalEvent.rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Event Coordinators */}
            <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Event Student Coordinators
              </h4>
              <div className="flex flex-wrap gap-4 text-xs">
                {selectedModalEvent.coordinators.map((coord) => (
                  <a
                    key={coord.name}
                    href={`tel:${coord.phone}`}
                    className="flex items-center gap-1.5 text-[#373737] hover:text-blue-600 font-semibold"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                    <span>{coord.name} ({coord.phone})</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={() => setSelectedModalEvent(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-[#373737]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const eventId = selectedModalEvent.id;
                  setSelectedModalEvent(null);
                  onSelectEventForRegistration(eventId);
                }}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#373737] hover:bg-[#1E293B] rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Proceed to Register for {selectedModalEvent.title}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
