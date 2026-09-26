import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { About } from './components/About';
import { Events } from './components/Events';
import { PerksAndFaq } from './components/PerksAndFaq';
import { PosterSection } from './components/PosterSection';
import { Schedule } from './components/Schedule';
import { Registration } from './components/Registration';
import { VenueMap } from './components/VenueMap';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedEventId, setSelectedEventId] = useState<string | undefined>(undefined);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  const handleRegisterClick = () => {
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreEventsClick = () => {
    const el = document.getElementById('events');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectEventForRegistration = (eventId: string) => {
    setSelectedEventId(eventId);
    handleRegisterClick();
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#373737] flex flex-col font-sans selection:bg-[#B0D2EC]/60 selection:text-[#1E293B]">
      {/* Top Navbar */}
      <Navbar
        onRegisterClick={handleRegisterClick}
        onPosterClick={() => setIsPosterModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onRegisterClick={handleRegisterClick}
          onExploreEventsClick={handleExploreEventsClick}
          onPosterClick={() => setIsPosterModalOpen(true)}
        />

        {/* Live Countdown Timer Section */}
        <Countdown />

        {/* About Section */}
        <About />

        {/* Official Poster Section */}
        <PosterSection
          isModalOpen={isPosterModalOpen}
          onCloseModal={() => setIsPosterModalOpen(false)}
        />

        {/* Events Showcase */}
        <Events
          onSelectEventForRegistration={handleSelectEventForRegistration}
        />

        {/* Delegate Perks & Smart Track Matcher */}
        <PerksAndFaq
          onSelectEvent={handleSelectEventForRegistration}
        />

        {/* Schedule Timeline */}
        <Schedule />

        {/* Registration Section (Form + Google Form + QR Code) */}
        <Registration
          preselectedEventId={selectedEventId}
        />

        {/* Map & Venue Guidance */}
        <VenueMap />

        {/* Contact & WhatsApp Desk */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
