import React, { useState } from 'react';
import { 
  Trophy, Utensils, Award, Navigation, HelpCircle, 
  ChevronDown, CheckCircle2, Sparkles, Compass, ArrowRight 
} from 'lucide-react';
import { SYMPOSIUM_PERKS, SYMPOSIUM_FAQS, EVENTS } from '../data/symposiumData';

interface PerksAndFaqProps {
  onSelectEvent: (eventId: string) => void;
}

export const PerksAndFaq: React.FC<PerksAndFaqProps> = ({ onSelectEvent }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedInterest, setSelectedInterest] = useState<string>('ai-coding');

  const recommendationProfiles: Record<string, { label: string; eventIds: string[]; reason: string }> = {
    'ai-coding': {
      label: 'AI & Rapid Code Development',
      eventIds: ['prompt-stack', 'mern-web-development'],
      reason: 'Perfect for coders seeking fast prototyping, LLM prompting, and full-stack web building.'
    },
    'research': {
      label: 'Research & System Defense',
      eventIds: ['codesmith-innovation'],
      reason: 'Articulate your IEEE papers, IoT architectures, or cloud frameworks before academic jurists.'
    },
    'design': {
      label: 'UI/UX & Product Design',
      eventIds: ['infographix-uiux'],
      reason: 'Create pixel-perfect Figma screens, wireframes, and accessible mobile interfaces.'
    },
    'strategy': {
      label: 'Tactics & Esports Arena',
      eventIds: ['booyah-battle', 'neurolink-checkmate', 'auction-arena'],
      reason: 'Showcase quick tactical reflexes in Battle Royale gaming, chess duels, and auction bidding.'
    }
  };

  const currentRecommendation = recommendationProfiles[selectedInterest];
  const recommendedEvents = EVENTS.filter((e) => currentRecommendation.eventIds.includes(e.id));

  const getPerkIcon = (icon: string) => {
    switch (icon) {
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-amber-600" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-emerald-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-blue-600" />;
      default:
        return <Navigation className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <section id="perks" className="py-20 bg-white border-t border-[#B0D2EC]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B0D2EC]/30 text-blue-900 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>STUDENT-FIRST SYMPOSIUM EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#373737] font-display tracking-tight text-balance">
            Delegate Privileges &amp; Rewards
          </h2>
          <p className="text-base text-slate-600 mt-2">
            We prioritize an unforgettable delegate experience: zero registration fees, free buffet dining, verified certificates, and substantial cash awards.
          </p>
        </div>

        {/* 4 Core Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {SYMPOSIUM_PERKS.map((perk, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#B0D2EC]/60 shadow-xs hover:shadow-md hover:border-[#B0D2EC] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-white border border-[#B0D2EC]/60 shadow-2xs flex items-center justify-center mb-4">
                  {getPerkIcon(perk.icon)}
                </div>
                <span className="text-xs font-bold text-blue-700 tracking-wide uppercase block mb-1">
                  {perk.highlight}
                </span>
                <h3 className="text-base font-bold text-[#373737] font-display mb-2">
                  {perk.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {perk.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/70 text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Guaranteed on Oct 12</span>
              </div>
            </div>
          ))}
        </div>

        {/* Unique Feature: Interactive Event Track Matcher */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#F0F7FD] via-white to-[#F0F7FD] border border-[#B0D2EC] shadow-sm mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
                <Compass className="w-4 h-4" />
                <span>Smart Track Matcher</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#373737] font-display">
                Not sure which event suits you best?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Select your core passion below to find your ideal competition arena:
              </p>
            </div>

            {/* Interest Selectors */}
            <div className="flex flex-wrap gap-2">
              {Object.entries(recommendationProfiles).map(([key, item]) => {
                const isActive = selectedInterest === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedInterest(key)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#373737] text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-[#B0D2EC]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Matched Events Preview */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#B0D2EC]/60">
            <p className="text-xs font-medium text-slate-500 mb-3">
              💡 {currentRecommendation.reason}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {recommendedEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-blue-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">
                      {event.category === 'technical' ? 'Technical Track' : 'Non-Technical'}
                    </span>
                    <h4 className="text-sm font-bold text-[#373737] font-display mt-0.5">
                      {event.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      {event.shortTagline}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">{event.teamSize}</span>
                    <button
                      onClick={() => onSelectEvent(event.id)}
                      className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Select Track</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#373737] font-display">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Everything you need to know before arriving at APEC Melmaruvathur
            </p>
          </div>

          <div className="space-y-3">
            {SYMPOSIUM_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <span className="text-sm font-bold text-[#373737] font-display">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#F8FAFC]/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
