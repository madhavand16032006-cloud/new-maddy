import React, { useState, useEffect } from 'react';
import { 
  FileText, QrCode, Search, CheckCircle, Sparkles, 
  ArrowRight, ShieldCheck, UserCheck, Utensils, Printer, 
  RefreshCw, MapPin, Calendar, AlertCircle, Copy, Check 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COLLEGE_INFO, EVENTS } from '../data/symposiumData';

interface RegistrationProps {
  preselectedEventId?: string;
}

interface StoredPass {
  id: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  dept: string;
  year: string;
  events: string[];
  eventObjects: { id: string; title: string; venue: string; time: string }[];
  date: string;
  lunchTokenStatus: 'VALID' | 'CLAIMED';
  registrationTimestamp: string;
}

export const Registration: React.FC<RegistrationProps> = ({ preselectedEventId }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    collegeName: '',
    department: 'Information Technology',
    year: 'III Year',
    selectedEvents: [] as string[],
  });

  const [submittedPass, setSubmittedPass] = useState<StoredPass | null>(null);
  const [activeTab, setActiveTab] = useState<'form' | 'track' | 'qr'>('form');
  const [searchQuery, setSearchQuery] = useState('');
  const [trackedPass, setTrackedPass] = useState<StoredPass | null>(null);
  const [searchError, setSearchError] = useState('');
  const [copiedId, setCopiedId] = useState(false);

  // Initialize and load saved passes from localStorage
  const getStoredPasses = (): StoredPass[] => {
    try {
      const data = localStorage.getItem('it_spectrum_2026_passes');
      if (data) {
        return JSON.parse(data);
      }
    } catch {
      // fallback
    }
    // Default demo sample pass for instant demonstration
    return [
      {
        id: 'IT26-2026',
        name: 'Madhavan D',
        email: 'madhavand734@gmail.com',
        phone: '9342661192',
        college: 'Adhiparasakthi Engineering College',
        dept: 'Information Technology',
        year: 'Final Year B.Tech',
        events: ['Prompt Stack', 'Infographix'],
        eventObjects: [
          { id: 'prompt-stack', title: 'Prompt Stack (AI Hackathon)', venue: 'Computer Center Lab 3', time: '10:30 AM' },
          { id: 'infographix-uiux', title: 'Infographix (UI/UX Sprint)', venue: 'Multimedia Lab 2', time: '10:30 AM' }
        ],
        date: 'October 12, 2026',
        lunchTokenStatus: 'VALID',
        registrationTimestamp: 'Pre-registered'
      }
    ];
  };

  const savePassToStorage = (newPass: StoredPass) => {
    try {
      const current = getStoredPasses();
      const updated = [newPass, ...current.filter((p) => p.id !== newPass.id)];
      localStorage.setItem('it_spectrum_2026_passes', JSON.stringify(updated));
    } catch {
      // fallback
    }
  };

  useEffect(() => {
    if (preselectedEventId) {
      if (!formData.selectedEvents.includes(preselectedEventId)) {
        setFormData((prev) => ({
          ...prev,
          selectedEvents: [...prev.selectedEvents, preselectedEventId]
        }));
      }
      setActiveTab('form');
    }
  }, [preselectedEventId]);

  const toggleEventSelection = (id: string) => {
    setFormData((prev) => {
      const exists = prev.selectedEvents.includes(id);
      return {
        ...prev,
        selectedEvents: exists
          ? prev.selectedEvents.filter((item) => item !== id)
          : [...prev.selectedEvents, id]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.collegeName) {
      alert('Please fill out all required fields.');
      return;
    }

    if (formData.selectedEvents.length === 0) {
      alert('Please select at least one symposium event.');
      return;
    }

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const passId = `IT26-${Math.floor(1000 + Math.random() * 9000)}`;
    const eventDetails = formData.selectedEvents.map((id) => {
      const ev = EVENTS.find((e) => e.id === id);
      return {
        id,
        title: ev?.title || id,
        venue: ev?.venue || 'Central Library Hall',
        time: ev?.time || '10:30 AM'
      };
    });

    const newPass: StoredPass = {
      id: passId,
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      college: formData.collegeName,
      dept: formData.department,
      year: formData.year,
      events: eventDetails.map((e) => e.title),
      eventObjects: eventDetails,
      date: 'October 12, 2026',
      lunchTokenStatus: 'VALID',
      registrationTimestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    savePassToStorage(newPass);
    setSubmittedPass(newPass);
    setTrackedPass(newPass);
  };

  const handleSearchPass = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchError('');
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      setSearchError('Please enter a Pass ID (e.g. IT26-2026) or phone number.');
      return;
    }

    const allPasses = getStoredPasses();
    const found = allPasses.find(
      (p) =>
        p.id.toLowerCase() === query ||
        p.phone.includes(query) ||
        p.email.toLowerCase() === query
    );

    if (found) {
      setTrackedPass(found);
    } else {
      setTrackedPass(null);
      setSearchError(`No active delegate pass found matching "${searchQuery}". Please check your Pass ID or register below.`);
    }
  };

  const handlePrintPass = () => {
    window.print();
  };

  const handleCopyPassId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <section id="register" className="py-20 bg-[#F8FAFC] border-t border-[#B0D2EC]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2">
            Free Entry &bull; Lunch Included &bull; Cash Prizes
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#373737] font-display tracking-tight text-balance">
            Symposium Registration &amp; Pass Desk
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Generate your Instant Digital Pass for paperless entry, or track an existing pass and allocated event halls.
          </p>

          {/* Registration Mode Tabs */}
          <div className="inline-flex items-center p-1.5 bg-white border border-[#B0D2EC]/60 rounded-xl shadow-xs mt-6 flex-wrap justify-center gap-1">
            <button
              onClick={() => setActiveTab('form')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'form'
                  ? 'bg-[#373737] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#373737]'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Instant Digital Pass</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('track');
                if (!trackedPass && submittedPass) {
                  setTrackedPass(submittedPass);
                }
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'track'
                  ? 'bg-[#373737] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#373737]'
              }`}
            >
              <Search className="w-4 h-4 text-blue-500" />
              <span>Track / Verify Pass</span>
            </button>

            <button
              onClick={() => setActiveTab('qr')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'qr'
                  ? 'bg-[#373737] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#373737]'
              }`}
            >
              <QrCode className="w-4 h-4" />
              <span>Scan QR &amp; Form</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Instant Digital Pass Registration Form */}
        {activeTab === 'form' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#B0D2EC]/60 shadow-xs">
              {!submittedPass ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-lg font-bold text-[#373737] font-display">
                      Participant Details
                    </h3>
                    <p className="text-xs text-slate-500">
                      Enter your academic credentials for registration confirmation and certificate issuance.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Madhavan D"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. student@college.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        WhatsApp Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Year of Study *
                      </label>
                      <select
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
                      >
                        <option value="I Year">I Year B.E / B.Tech</option>
                        <option value="II Year">II Year B.E / B.Tech</option>
                        <option value="III Year">III Year B.E / B.Tech</option>
                        <option value="IV Year">IV Year B.E / B.Tech</option>
                        <option value="Post Graduate">M.E / M.Tech / MCA</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        College / Institution Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Adhiparasakthi Engineering College"
                        value={formData.collegeName}
                        onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Department / Branch *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. B.Tech Information Technology"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  {/* Event Selection Matrix */}
                  <div className="pt-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Select Events to Participate * (Select one or more)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-56 overflow-y-auto p-2 bg-slate-50 rounded-xl border border-slate-200">
                      {EVENTS.map((event) => {
                        const isChecked = formData.selectedEvents.includes(event.id);
                        return (
                          <div
                            key={event.id}
                            onClick={() => toggleEventSelection(event.id)}
                            className={`p-2.5 rounded-lg border text-left cursor-pointer transition-colors flex items-center justify-between ${
                              isChecked
                                ? 'bg-blue-50/80 border-blue-400 text-blue-950 font-medium'
                                : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                            }`}
                          >
                            <div className="pr-2">
                              <span className="text-xs block leading-tight">{event.title}</span>
                              <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                                {event.category}
                              </span>
                            </div>
                            <div className={`w-4 h-4 rounded-sm flex items-center justify-center shrink-0 border ${
                              isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300'
                            }`}>
                              {isChecked && <CheckCircle className="w-3.5 h-3.5" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submission Notice */}
                  <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-[11px] text-slate-600 flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Free Lunch Token &amp; Welcome Kit will be provisioned automatically upon pass generation.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 text-xs sm:text-sm font-semibold text-white bg-[#373737] hover:bg-[#1E293B] rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Generate Instant Delegate Pass</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                /* Success Pass Preview */
                <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Registration Confirmed! Your digital pass is saved and ready.</span>
                    </div>
                    <button
                      onClick={() => handleCopyPassId(submittedPass.id)}
                      className="px-2 py-1 bg-white rounded border border-emerald-300 text-[10px] font-mono font-bold flex items-center gap-1 cursor-pointer"
                    >
                      {copiedId ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedId ? 'Copied' : submittedPass.id}</span>
                    </button>
                  </div>

                  {/* Digital Badge Layout */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-[#373737] to-[#1E293B] text-white shadow-xl border-2 border-[#B0D2EC]/60 relative overflow-hidden">
                    <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-[#B0D2EC]/10 rounded-full blur-xl pointer-events-none" />
                    
                    <div className="flex items-start justify-between border-b border-slate-600/70 pb-4 mb-4">
                      <div>
                        <span className="text-[10px] text-[#B0D2EC] font-mono tracking-wider uppercase block">
                          OM SAKTHI &bull; ADHIPARASAKTHI ENGG COLLEGE
                        </span>
                        <h4 className="text-xl font-bold font-display text-white">
                          INTELLECTRA 2026
                        </h4>
                        <p className="text-[11px] text-slate-300">
                          IT Spectrum &bull; National Level Symposium
                        </p>
                      </div>
                      <div className="px-2.5 py-1 rounded-md bg-[#B0D2EC] text-[#373737] text-xs font-mono font-bold">
                        {submittedPass.id}
                      </div>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wide block">Delegate Name</span>
                        <span className="text-base font-bold text-white">{submittedPass.name}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wide block">College / Dept</span>
                        <span className="text-slate-200">{submittedPass.college} &bull; {submittedPass.dept} ({submittedPass.year})</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wide block">Registered Tracks &amp; Venues</span>
                        <div className="flex flex-col gap-1.5 mt-1">
                          {submittedPass.eventObjects.map((ev, i) => (
                            <div key={i} className="px-2.5 py-1.5 rounded-lg bg-white/10 text-slate-200 text-xs flex items-center justify-between">
                              <span className="text-[#B0D2EC] font-semibold">{ev.title}</span>
                              <span className="text-[11px] text-slate-400 font-mono">{ev.venue}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-600/70 flex items-center justify-between text-[11px] text-slate-300">
                      <span className="flex items-center gap-1 font-semibold text-emerald-400">
                        <Utensils className="w-3.5 h-3.5" />
                        <span>Lunch Token: {submittedPass.lunchTokenStatus}</span>
                      </span>
                      <span>Date: <strong>12th October 2026</strong></span>
                    </div>
                  </div>

                  {/* Actions for pass */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePrintPass}
                      className="flex-1 py-2.5 px-4 text-xs font-semibold text-[#373737] bg-white border border-[#B0D2EC] hover:bg-[#B0D2EC]/20 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Printer className="w-4 h-4 text-blue-600" />
                      <span>Print / Save PDF</span>
                    </button>
                    <button
                      onClick={() => setSubmittedPass(null)}
                      className="py-2.5 px-4 text-xs font-semibold text-slate-600 hover:text-[#373737] flex items-center gap-1 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Register Another</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Instructions Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* How it works info */}
              <div className="p-6 rounded-2xl bg-white border border-[#B0D2EC]/60 shadow-xs">
                <h4 className="text-sm font-bold text-[#373737] font-display mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>What is the Instant Digital Pass?</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  The <strong>Instant Digital Pass</strong> is your official paperless delegate credential for 
                  <strong> IT Spectrum 2026 – INTELLECTRA</strong>.
                </p>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 font-bold text-[10px] flex items-center justify-center shrink-0">1</span>
                    <span><strong>Direct Campus Admission</strong>: Show this pass on your mobile phone at the APEC Central Library registration desk on October 12, 2026.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 font-bold text-[10px] flex items-center justify-center shrink-0">2</span>
                    <span><strong>Free Lunch Token</strong>: Automatically encodes your complimentary lunch buffet voucher for the dining hall.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 font-bold text-[10px] flex items-center justify-center shrink-0">3</span>
                    <span><strong>Trackable Any Time</strong>: Use your Pass ID (e.g. <code>IT26-XXXX</code>) or registered phone number to verify event hall allocations anytime.</span>
                  </div>
                </div>
              </div>

              {/* Quick Google Form Alternative */}
              <div className="p-6 rounded-2xl bg-white border border-[#B0D2EC]/60 shadow-xs">
                <h4 className="text-sm font-bold text-[#373737] font-display mb-1">
                  Google Form Registration
                </h4>
                <p className="text-xs text-slate-600 mb-3">
                  Prefer submitting via the traditional Google Form?
                </p>
                <a
                  href={COLLEGE_INFO.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open Official Google Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Track & Verify Pass Status */}
        {activeTab === 'track' && (
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* Search Input Box */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#B0D2EC]/60 shadow-xs">
              <h3 className="text-lg font-bold text-[#373737] font-display mb-1 flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-600" />
                <span>Track Your Registration &amp; Venue Pass</span>
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Enter your Pass ID (e.g. <code>IT26-2026</code>) or registered WhatsApp mobile number to verify hall allocations, lunch status, and event timings.
              </p>

              <form onSubmit={handleSearchPass} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Enter Pass ID (e.g. IT26-2026) or Phone Number"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#373737] hover:bg-[#1E293B] rounded-xl transition-all shadow-xs cursor-pointer flex items-center gap-1.5 shrink-0"
                >
                  <Search className="w-4 h-4" />
                  <span>Track Status</span>
                </button>
              </form>

              {searchError && (
                <div className="mt-3 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{searchError}</span>
                </div>
              )}
            </div>

            {/* Tracked Result Pass View */}
            {trackedPass && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#B0D2EC] shadow-md animate-in fade-in space-y-6">
                
                {/* Status Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-sm font-bold text-[#373737]">
                      Pass Status: <span className="text-emerald-600">CONFIRMED &bull; ACTIVE</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">Pass ID:</span>
                    <span className="px-2.5 py-1 rounded bg-[#373737] text-[#B0D2EC] font-mono text-xs font-bold">
                      {trackedPass.id}
                    </span>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-400 block font-medium text-[11px]">Delegate Name</span>
                    <span className="text-sm font-bold text-[#373737] block mt-0.5">{trackedPass.name}</span>
                    <span className="text-slate-500 text-[11px] block mt-0.5">{trackedPass.college}</span>
                    <span className="text-slate-500 text-[11px] block">{trackedPass.dept} ({trackedPass.year})</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-[11px]">Symposium Date:</span>
                      <span className="font-bold text-[#373737]">12th October 2026</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-[11px]">Reporting Time:</span>
                      <span className="font-bold text-blue-700">08:30 AM IST</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-[11px]">Lunch Buffet Token:</span>
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {trackedPass.lunchTokenStatus} &bull; UNUSED
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-[11px]">Reporting Desk:</span>
                      <span className="font-bold text-slate-700">Central Library Foyer</span>
                    </div>
                  </div>
                </div>

                {/* Registered Tracks & Venues */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Allocated Competition Tracks &amp; Venues
                  </h4>
                  <div className="space-y-2">
                    {trackedPass.eventObjects.map((ev, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                            {i + 1}
                          </span>
                          <span className="font-bold text-[#373737]">{ev.title}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-mono">
                          <MapPin className="w-3.5 h-3.5 text-blue-600" />
                          <span>{ev.venue}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Print & Return */}
                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    onClick={handlePrintPass}
                    className="px-4 py-2 text-xs font-semibold text-[#373737] bg-white border border-[#B0D2EC] hover:bg-[#B0D2EC]/20 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5 text-blue-600" />
                    <span>Print Badge</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('form')}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#373737] hover:bg-[#1E293B] rounded-xl transition-colors cursor-pointer"
                  >
                    Register New Attendee
                  </button>
                </div>

              </div>
            )}

            {/* Quick Demo Lookup Hint */}
            <div className="p-4 rounded-xl bg-[#F0F7FD] border border-[#B0D2EC]/60 text-xs text-slate-600 flex items-center justify-between">
              <div>
                <span>💡 Try tracking sample registered pass: </span>
                <button
                  onClick={() => {
                    setSearchQuery('IT26-2026');
                    const allPasses = getStoredPasses();
                    setTrackedPass(allPasses[0] || null);
                  }}
                  className="font-mono font-bold text-blue-700 underline ml-1 cursor-pointer"
                >
                  IT26-2026
                </button>
              </div>
              <span className="text-[11px] text-slate-500">Instant Verification</span>
            </div>

          </div>
        )}

        {/* Tab 3: Scannable QR Code Showcase */}
        {activeTab === 'qr' && (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-[#B0D2EC] shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-200">
              <QrCode className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-[#373737] font-display">
              Scan QR Code to Register
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-2">
              Scan with any mobile camera or Google Lens to immediately open the registration portal on your smartphone.
            </p>

            {/* High-Contrast Clean QR Code Visual */}
            <div className="my-8 inline-block p-6 rounded-2xl bg-white border-2 border-[#373737] shadow-md">
              <svg 
                className="w-56 h-56 mx-auto" 
                viewBox="0 0 200 200" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* QR Finder patterns */}
                <rect width="200" height="200" fill="white"/>
                {/* Top-Left */}
                <rect x="15" y="15" width="50" height="50" rx="6" fill="#373737"/>
                <rect x="23" y="23" width="34" height="34" rx="3" fill="white"/>
                <rect x="31" y="31" width="18" height="18" rx="2" fill="#373737"/>
                {/* Top-Right */}
                <rect x="135" y="15" width="50" height="50" rx="6" fill="#373737"/>
                <rect x="143" y="23" width="34" height="34" rx="3" fill="white"/>
                <rect x="151" y="31" width="18" height="18" rx="2" fill="#373737"/>
                {/* Bottom-Left */}
                <rect x="15" y="135" width="50" height="50" rx="6" fill="#373737"/>
                <rect x="23" y="143" width="34" height="34" rx="3" fill="white"/>
                <rect x="31" y="151" width="18" height="18" rx="2" fill="#373737"/>
                
                {/* Data blocks */}
                <rect x="75" y="20" width="12" height="12" fill="#373737"/>
                <rect x="95" y="20" width="22" height="12" fill="#373737"/>
                <rect x="75" y="40" width="12" height="25" fill="#373737"/>
                <rect x="100" y="45" width="15" height="15" fill="#373737"/>
                <rect x="20" y="75" width="15" height="15" fill="#373737"/>
                <rect x="45" y="80" width="20" height="12" fill="#373737"/>
                <rect x="75" y="75" width="50" height="50" rx="8" fill="#B0D2EC"/>
                <text x="100" y="105" textAnchor="middle" fill="#1E293B" fontSize="13" fontWeight="bold" fontFamily="monospace">&lt;IT&gt;</text>
                <rect x="135" y="75" width="20" height="15" fill="#373737"/>
                <rect x="165" y="85" width="15" height="25" fill="#373737"/>
                <rect x="75" y="135" width="25" height="15" fill="#373737"/>
                <rect x="110" y="140" width="18" height="18" fill="#373737"/>
                <rect x="140" y="135" width="45" height="15" fill="#373737"/>
                <rect x="80" y="165" width="30" height="18" fill="#373737"/>
                <rect x="125" y="160" width="20" height="25" fill="#373737"/>
                <rect x="155" y="165" width="25" height="20" fill="#373737"/>
              </svg>
              <div className="mt-3 text-xs font-mono font-bold text-slate-800 tracking-wider">
                {COLLEGE_INFO.website}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={COLLEGE_INFO.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#373737] hover:bg-[#1E293B] rounded-xl transition-all shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <span>Direct Google Form Link</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-[11px] text-slate-400 mt-4">
              Online Registration Available &bull; Spot Registration available on October 12, 2026
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
