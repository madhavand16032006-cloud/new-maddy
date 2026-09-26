import React from 'react';
import { MapPin, ExternalLink, Navigation, Train, Bus, Car } from 'lucide-react';
import { COLLEGE_INFO } from '../data/symposiumData';

export const VenueMap: React.FC = () => {
  return (
    <section id="venue" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2">
            Campus Location &bull; Melmaruvathur
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#373737] font-display tracking-tight text-balance">
            Symposium Venue &amp; Navigation
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Adhiparasakthi Engineering College is conveniently situated directly along National Highway 45 (GST Road) in Melmaruvathur, Tamil Nadu.
          </p>
        </div>

        {/* Map & Direction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Google Map Embed Frame (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border-2 border-[#B0D2EC]/80 shadow-md relative min-h-[380px] bg-slate-100 flex flex-col">
            <iframe
              title="Adhiparasakthi Engineering College Google Map"
              src={COLLEGE_INFO.mapsEmbedUrl}
              width="100%"
              height="100%"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Overlay badge on map bottom */}
            <div className="p-3 bg-white/95 backdrop-blur-md border-t border-[#B0D2EC]/60 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                <span className="font-semibold text-[#373737]">
                  Adhiparasakthi Engineering College, Melmaruvathur - 603319
                </span>
              </div>
              
              <a
                href={COLLEGE_INFO.mapsDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#373737] text-white hover:bg-[#1E293B] text-[11px] font-semibold transition-colors cursor-pointer shrink-0"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-[#B0D2EC]" />
              </a>
            </div>
          </div>

          {/* Right: How to Reach & Transit Guidance (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#B0D2EC]/60 shadow-xs">
              <h3 className="text-lg font-bold text-[#373737] font-display mb-1">
                APEC Central Library
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Primary venue for Registration, Keynote &amp; Presentation Halls
              </p>

              <div className="space-y-3.5 text-xs text-slate-700">
                
                {/* Transit 1: Train */}
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                    <Train className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#373737]">By Railway (MLMR)</h4>
                    <p className="text-slate-500 text-[11px] mt-0.5">
                      Melmaruvathur Railway Station is just 1.2 km away. Frequent suburban and express trains connect from Chennai Egmore and Tambaram.
                    </p>
                  </div>
                </div>

                {/* Transit 2: Bus */}
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                    <Bus className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#373737]">By Public / State Bus</h4>
                    <p className="text-slate-500 text-[11px] mt-0.5">
                      All South-bound SETC &amp; TNSTC buses stop at Melmaruvathur Bus Stop right in front of the college main gate.
                    </p>
                  </div>
                </div>

                {/* Transit 3: Road */}
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200">
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600 shrink-0">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#373737]">By Private Vehicle (NH 45)</h4>
                    <p className="text-slate-500 text-[11px] mt-0.5">
                      Located right on Chennai-Trichy Grand Southern Trunk (GST) Road, ~92 km from Chennai City center. Ample campus parking available.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct button */}
            <a
              href={COLLEGE_INFO.mapsDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Real-Time Directions via Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
