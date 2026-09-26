import React from 'react';
import { ShieldCheck, Award, Users, BookOpen, GraduationCap, Building2 } from 'lucide-react';
import { COLLEGE_INFO } from '../data/symposiumData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2">
            Institutional Legacy & Department Excellence
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#373737] font-display tracking-tight text-balance">
            Department of Information Technology
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Adhiparasakthi Engineering College (APEC), Melmaruvathur is an autonomous engineering institution 
            accredited with NAAC &ldquo;A&rdquo; Grade and approved by AICTE, New Delhi, affiliated to Anna University, Chennai.
          </p>
        </div>

        {/* 2-Column Story / Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mb-16">
          
          {/* Card 1: About the IT Department */}
          <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-[#B0D2EC]/50 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#373737] text-white flex items-center justify-center mb-6 shadow-xs">
                <GraduationCap className="w-6 h-6 text-[#B0D2EC]" />
              </div>
              <h3 className="text-xl font-bold text-[#373737] mb-3 font-display">
                Empowering Next-Gen Technologists
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                The Department of Information Technology at Adhiparasakthi Engineering College is dedicated to 
                nurturing technically competent, ethically grounded, and innovative software engineers. Equipped 
                with high-throughput computing clusters, cloud labs, and specialized centers for Artificial Intelligence 
                and Full-Stack Web Development, our department prepares students to conquer global industry demands.
              </p>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>Anna University Affiliated Curriculum with Industry 4.0 Integrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>Dedicated Research Centers in Machine Learning & Cyber Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>Robust Industry Collaborations, Hackathons & Placements</span>
                </div>
              </div>
            </div>
            
            <div className="pt-6 mt-6 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
              <span>HOD: Mr. K. Hemakumar</span>
              <span>ISO 9001:2015 Certified</span>
            </div>
          </div>

          {/* Card 2: About INTELLECTRA / IT Spectrum 2026 */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#F0F7FD] to-white border border-[#B0D2EC] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-xs">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#373737] mb-3 font-display">
                About INTELLECTRA 2026
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                <strong>IT Spectrum 2026 &ndash; INTELLECTRA</strong> is the flagship National-Level Technical Symposium 
                organized annually by the Department of Information Technology. Guided by our motto 
                <em> &ldquo;Ideas into Impact&rdquo;</em>, INTELLECTRA gathers visionary student developers, designers, 
                and researchers across India to collaborate, compete, and showcase cutting-edge technical prowess.
              </p>
              <div className="p-4 rounded-xl bg-white border border-[#B0D2EC]/60 mb-4">
                <p className="text-xs font-semibold text-[#373737] uppercase tracking-wide mb-1 text-blue-700">
                  Symposium Motto & Code
                </p>
                <p className="text-sm font-mono text-slate-700 font-medium">
                  &lt;/&gt; IDEAS &bull; TECHNOLOGY &bull; INNOVATION &bull; A BETTER TOMORROW
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
              <span>Convener: Mr. P. Sakthivel, AP/IT</span>
              <span>All Engineering Colleges Welcome</span>
            </div>
          </div>

        </div>

        {/* Quantified Metrics & Social Proof Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#B0D2EC]/40 text-center">
            <span className="block text-3xl sm:text-4xl font-extrabold text-[#373737] font-mono tabular-nums">
              8+
            </span>
            <span className="text-xs font-semibold text-slate-600 mt-1 block">
              Flagship Events
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Technical & Non-Technical
            </span>
          </div>

          <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#B0D2EC]/40 text-center">
            <span className="block text-3xl sm:text-4xl font-extrabold text-blue-600 font-mono tabular-nums">
              ₹25,000+
            </span>
            <span className="text-xs font-semibold text-slate-600 mt-1 block">
              Cash Prize Pool
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Trophies & Shields
            </span>
          </div>

          <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#B0D2EC]/40 text-center">
            <span className="block text-3xl sm:text-4xl font-extrabold text-[#373737] font-mono tabular-nums">
              500+
            </span>
            <span className="text-xs font-semibold text-slate-600 mt-1 block">
              Expected Delegates
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Across Tamil Nadu & India
            </span>
          </div>

          <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#B0D2EC]/40 text-center">
            <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-600 font-mono tabular-nums">
              100%
            </span>
            <span className="text-xs font-semibold text-slate-600 mt-1 block">
              Free Lunch & Kits
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              All Registered Participants
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
