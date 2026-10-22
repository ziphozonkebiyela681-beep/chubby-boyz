/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { EventsAndGamesSection } from './components/EventsAndGamesSection';
import { StorySection } from './components/StorySection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060c1d] text-blue-50 flex flex-col font-sans overflow-x-hidden w-full">
      {/* 1-Row 3-Zone Top Navigation with WhatsApp Fast Booking */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onExploreMenu={handleScrollToMenu} />

        {/* The Chubby Menu with Food Photography & Direct WhatsApp / Uber Eats Ordering */}
        <MenuSection />

        {/* Hangover Tuesdays & Live Sports Big Screen Section with Rich Passages and Authentic Photography */}
        <EventsAndGamesSection />

        {/* Brand Story & Maboneng Street Culture */}
        <StorySection />

        {/* Physical Location, Google Maps & Live Hours at 289 Fox Street */}
        <LocationHoursSection />

        {/* Verified Reviews & Proof */}
        <ReviewsSection />
      </main>

      {/* Footer with Contact, Maps, & Socials */}
      <Footer />
    </div>
  );
}
