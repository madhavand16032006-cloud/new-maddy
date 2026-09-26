import React, { useState } from 'react';
import { 
  Phone, Mail, MessageCircle, Send, CheckCircle, 
  User, ShieldCheck, HelpCircle, Sparkles, MapPin 
} from 'lucide-react';
import { 
  COLLEGE_INFO, LEADERSHIP_COORDINATORS, STUDENT_COORDINATORS 
} from '../data/symposiumData';

export const Contact: React.FC = () => {
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    eventInterest: 'General Query',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryData.name || !inquiryData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setInquiryData({
        name: '',
        email: '',
        phone: '',
        eventInterest: 'General Query',
        message: ''
      });
    }, 4000);
  };

  // Student coordinator for direct WhatsApp chat
  const primaryCoordinatorPhone = '919342661192'; // Mr. K. Venkatesh
  const whatsappUrl = `https://wa.me/${primaryCoordinatorPhone}?text=${encodeURIComponent(
    'Hello IT Spectrum 2026 Organizing Committee, I have an inquiry regarding INTELLECTRA Symposium participation.'
  )}`;

  return (
    <section id="contact" className="py-20 bg-[#F8FAFC] border-t border-[#B0D2EC]/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2">
            Organizing Committee &bull; Reach Out
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#373737] font-display tracking-tight text-balance">
            Contact &amp; Support Desk
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Have questions about paper formatting, rules, team registrations, or travel assistance? 
            Our coordinators are readily available.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left: Coordinators Roster (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Faculty & Leadership */}
            <div className="bg-white p-6 rounded-2xl border border-[#B0D2EC]/60 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Patrons &amp; Faculty Leadership</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {LEADERSHIP_COORDINATORS.map((leader) => (
                  <div key={leader.name} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-blue-700 font-bold uppercase tracking-wider block">
                      {leader.role}
                    </span>
                    <h4 className="text-sm font-bold text-[#373737] mt-0.5">
                      {leader.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {leader.designation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Coordinators from Poster with Click-to-Call */}
            <div className="bg-white p-6 rounded-2xl border border-[#B0D2EC]/60 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
                <User className="w-4 h-4 text-blue-600" />
                <span>Student Co-ordinators (Direct Hotline)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {STUDENT_COORDINATORS.map((coord) => (
                  <a
                    key={coord.name}
                    href={`tel:${coord.phone}`}
                    className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <span className="font-bold text-[#373737] block group-hover:text-blue-600 transition-colors">
                        {coord.name}
                      </span>
                      <span className="text-[11px] text-slate-500">Student Coordinator</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-blue-600 font-mono font-bold text-xs bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                      <Phone className="w-3.5 h-3.5" />
                      <span>{coord.phone}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-600">Need instant clarification on WhatsApp?</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right: Quick Query Form (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#B0D2EC]/60 shadow-xs">
            <h3 className="text-lg font-bold text-[#373737] font-display mb-1">
              Send a Quick Inquiry
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              Submit your query directly to our desk for accommodation, event rules, or transport assistance.
            </p>

            {submitted ? (
              <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs space-y-2 animate-in fade-in">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Message Sent Successfully</span>
                </div>
                <p>
                  Thank you, <strong>{inquiryData.name}</strong>. Our student coordination desk has received your note and will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyadarshan"
                    value={inquiryData.name}
                    onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-blue-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. you@mail.com"
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Mobile / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={inquiryData.phone}
                      onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Event / Category
                  </label>
                  <select
                    value={inquiryData.eventInterest}
                    onChange={(e) => setInquiryData({ ...inquiryData, eventInterest: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-blue-600 bg-white"
                  >
                    <option value="General Query">General Query &bull; Registration</option>
                    <option value="Prompt Stack">Prompt Stack (AI Hackathon)</option>
                    <option value="Codesmith">Codesmith &bull; Paper Presentation</option>
                    <option value="Infographix">Infographix UI/UX</option>
                    <option value="Debugging">Speed Debugging</option>
                    <option value="Booyah Battle">Booyah Battle (Esports)</option>
                    <option value="Travel / Lunch">Travel Directions &bull; Food Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Enter your question or note here..."
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#373737] hover:bg-[#1E293B] rounded-xl transition-all shadow-xs hover:shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Message to Desk</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      {/* Floating WhatsApp Action Button (Bottom Right) */}
      <aside 
        aria-label="Symposium WhatsApp Helpdesk"
        className="fixed bottom-6 right-6 z-40"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all text-xs font-bold cursor-pointer group"
          title="Chat with Student Coordinator on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
          <span className="hidden sm:inline">WhatsApp Helpdesk</span>
          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
        </a>
      </aside>

    </section>
  );
};
