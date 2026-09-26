import React, { useState } from 'react';
import { Clock, MapPin, Coffee, Utensils, Trophy, Sparkles, BookOpen, Layers } from 'lucide-react';
import { SCHEDULE } from '../data/symposiumData';

export const Schedule: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'technical' | 'non-technical'>('all');

  const filteredSchedule = SCHEDULE.filter((item) => {
    if (filterType === 'all') return true;
    if (filterType === 'technical') return item.type === 'technical' || item.type === 'general';
    if (filterType === 'non-technical') return item.type === 'non-technical' || item.type === 'general';
    return true;
  });

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'technical':
        return {
          badge: 'bg-blue-100 text-blue-800 border-blue-200',
          dot: 'bg-blue-600',
          border: 'border-blue-200',
        };
      case 'non-technical':
        return {
          badge: 'bg-purple-100 text-purple-800 border-purple-200',
          dot: 'bg-purple-600',
          border: 'border-purple-200',
        };
      case 'break':
        return {
          badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
          dot: 'bg-emerald-600',
          border: 'border-emerald-200',
        };
      default:
        return {
          badge: 'bg-slate-100 text-slate-800 border-slate-200',
          dot: 'bg-[#373737]',
          border: 'border-slate-200',
        };
    }
  };

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2">
            Hour-By-Hour Roadmap
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#373737] font-display tracking-tight text-balance">
            Symposium Schedule &amp; Agenda
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Monday, October 12, 2026 &bull; Central Library &amp; IT Department, APEC Melmaruvathur
          </p>

          {/* Schedule view toggles */}
          <div className="inline-flex items-center p-1 bg-slate-100 rounded-lg mt-6 text-xs font-semibold">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                filterType === 'all' ? 'bg-white text-[#373737] shadow-xs' : 'text-slate-600 hover:text-[#373737]'
              }`}
            >
              Full Day Agenda
            </button>
            <button
              onClick={() => setFilterType('technical')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                filterType === 'technical' ? 'bg-white text-[#373737] shadow-xs' : 'text-slate-600 hover:text-[#373737]'
              }`}
            >
              Technical Focus
            </button>
            <button
              onClick={() => setFilterType('non-technical')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                filterType === 'non-technical' ? 'bg-white text-[#373737] shadow-xs' : 'text-slate-600 hover:text-[#373737]'
              }`}
            >
              Non-Technical Focus
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#B0D2EC]/60 space-y-8 ml-4 sm:ml-8">
          {filteredSchedule.map((item, index) => {
            const style = getTypeStyle(item.type);
            return (
              <div key={index} className="relative group">
                
                {/* Node Dot on Timeline */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-white shadow-xs ${style.dot} transition-transform group-hover:scale-125`}
                  aria-hidden="true"
                />

                {/* Content Box */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 group-hover:border-[#B0D2EC] group-hover:bg-white group-hover:shadow-md transition-all duration-200">
                  
                  {/* Top Bar of item: Time + Venue */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 font-mono">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>{item.time}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{item.venue}</span>
                      </span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${style.badge}`}>
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#373737] font-display">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlight callouts for food and prizes */}
                  {item.type === 'break' && item.title.includes('Lunch') && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                      <Utensils className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Free Lunch buffet provided for all registered delegates</span>
                    </div>
                  )}

                  {item.title.includes('Valedictory') && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 text-amber-900 text-xs font-semibold border border-amber-200">
                      <Trophy className="w-3.5 h-3.5 text-amber-600" />
                      <span>Cash prizes handed over by HOD &amp; College Convener</span>
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
