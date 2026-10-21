import React, { useState } from 'react';
import { Tv, Gamepad2, Users, Calendar, Clock, MessageSquare, Sparkles, Trophy, Flame } from 'lucide-react';
import { EVENT_GAME_NIGHT_IMAGE, STORE_INFO } from '../data/menuData';

export const EventsAndGamesSection: React.FC = () => {
  const [crewSize, setCrewSize] = useState('4');
  const [eventType, setEventType] = useState('Hangover Tuesday Game Night');
  const [selectedDay, setSelectedDay] = useState('Tuesday');
  const [bookingTime, setBookingTime] = useState('19:00');
  const [contactName, setContactName] = useState('');

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `*TABLE BOOKING - CHUBBY BOYZ (289 Fox St, Jeppestown)*\n\n`;
    if (contactName) text += `*Name:* ${contactName}\n`;
    text += `*Event:* ${eventType}\n`;
    text += `*Day / Date:* ${selectedDay}\n`;
    text += `*Time:* ${bookingTime}\n`;
    text += `*Crew Size:* ${crewSize} people\n\n`;
    text += `Hey Chubby Boyz! We want to book a table for our crew to watch sports / play games and order some burgers and combos!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="events" className="py-16 lg:py-24 bg-[#050b18] border-b-2 border-blue-900/40 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-funky text-amber-400 uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Maboneng &amp; Jeppestown Nightlife</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-funky tracking-tight leading-tight">
            <span className="text-3d-orange">LIVE SPORTS</span> &amp;{' '}
            <span className="text-3d-blue">GAME NIGHTS</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-blue-200/90 font-medium leading-relaxed">
            Every Tuesday is <strong className="text-amber-400">Hangover Tuesday</strong>! Bring your crew to 289 Fox Street, play board games, Jenga &amp; cards, watch live matches on the big screens, and feast on massive combos open till late.
          </p>
        </div>

        {/* 2-Column Showcase: Event Card Left + Live Booking Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Atmospheric Photo & Feature Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Main Visual Card */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-blue-600/50 shadow-2xl bg-blue-950 group">
              <img
                src={EVENT_GAME_NIGHT_IMAGE}
                alt="Friends playing games and watching live sports at Chubby Boyz Fox St"
                referrerPolicy="no-referrer"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-[#050b18]/40 to-transparent" />

              {/* Badges on image */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-xl bg-amber-400 text-stone-950 font-funky text-xs uppercase shadow-md">
                  ★ Hangover Tuesdays
                </span>
                <span className="px-3 py-1 rounded-xl bg-blue-600 text-white font-funky text-xs uppercase shadow-md">
                  Live Big Screen Sports
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-blue-950/90 border border-blue-700/50 backdrop-blur-md flex items-center justify-between text-xs">
                <div>
                  <div className="font-funky text-white text-sm">289 Fox Street, Jeppestown</div>
                  <div className="text-blue-300 font-medium">Big screens · Sound system · Board games provided</div>
                </div>
                <div className="text-right">
                  <span className="text-amber-400 font-funky text-sm">OPEN TILL LATE</span>
                </div>
              </div>
            </div>

            {/* 2 Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-blue-950/70 border-2 border-blue-800/40 shadow-lg space-y-2">
                <div className="flex items-center gap-2.5 text-amber-400 font-funky text-base">
                  <Gamepad2 className="w-5 h-5 text-amber-400" />
                  <span>Hangover Tuesday</span>
                </div>
                <p className="text-xs text-blue-200/80 font-medium leading-relaxed">
                  The ultimate midweek recharge. Gather your crew for Uno, Jenga, dominoes, cards, and trivia with loaded slap chips and ice-cold drinks.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-blue-950/70 border-2 border-blue-800/40 shadow-lg space-y-2">
                <div className="flex items-center gap-2.5 text-sky-400 font-funky text-base">
                  <Tv className="w-5 h-5 text-sky-400" />
                  <span>Live Sports Stadium Vibe</span>
                </div>
                <p className="text-xs text-blue-200/80 font-medium leading-relaxed">
                  Premier League, PSL, Champions League, and Springbok Rugby live with loud sound, electric vibes, and the 5-patty Big Boy burger!
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Table Reservation Box */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full rounded-3xl bg-gradient-to-b from-[#0b1736] via-[#091533] to-[#050b18] border-2 border-amber-400/60 p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-funky text-amber-400 uppercase tracking-widest">
                    Direct Booking · 076 294 5349
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                    WhatsApp Fast Confirmation
                  </span>
                </div>

                <h3 className="text-2xl font-funky text-white leading-tight">
                  BOOK A TABLE FOR YOUR CREW
                </h3>
                <p className="mt-1 text-xs text-blue-200/80 font-medium">
                  Tables fill up fast for game nights and big weekend match screenings. Secure your spot via WhatsApp directly with the kitchen!
                </p>

                {/* Interactive Booking Form */}
                <form onSubmit={handleWhatsAppBooking} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-funky text-blue-200 uppercase tracking-wider mb-1">
                      Your Name / Crew Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kagiso &amp; The Boys"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-blue-950 border-2 border-blue-800 rounded-xl text-white placeholder-blue-400/40 focus:outline-none focus:border-amber-400 font-medium transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-funky text-blue-200 uppercase tracking-wider mb-1">
                      Select Event
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-blue-950 border-2 border-blue-800 rounded-xl text-white focus:outline-none focus:border-amber-400 font-medium transition-colors"
                    >
                      <option value="Hangover Tuesday Game Night">Hangover Tuesday Game Night</option>
                      <option value="Live Football / PSL Match Screening">Live Football / PSL Match Screening</option>
                      <option value="Rugby Championship Screening">Rugby Championship Screening</option>
                      <option value="Crew Feast & Food Hangout">Crew Feast &amp; Food Hangout</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-funky text-blue-200 uppercase tracking-wider mb-1">
                        Crew Size
                      </label>
                      <select
                        value={crewSize}
                        onChange={(e) => setCrewSize(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs bg-blue-950 border-2 border-blue-800 rounded-xl text-white focus:outline-none focus:border-amber-400 font-medium"
                      >
                        <option value="2">2 People</option>
                        <option value="4">4 People (Table)</option>
                        <option value="6">6 People (Booth)</option>
                        <option value="8+">8+ People (Crew Table)</option>
                        <option value="12+">12+ People (Full Area)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-funky text-blue-200 uppercase tracking-wider mb-1">
                        Time
                      </label>
                      <select
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs bg-blue-950 border-2 border-blue-800 rounded-xl text-white focus:outline-none focus:border-amber-400 font-medium"
                      >
                        <option value="17:00">5:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:30">9:30 PM (Late Night)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-funky text-blue-200 uppercase tracking-wider mb-1">
                      Day
                    </label>
                    <div className="grid grid-cols-4 gap-2 text-xs font-funky text-center">
                      {['Tuesday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                        <button
                          key={day}
                          type="button"
                          onClick={() => setSelectedDay(day)}
                          className={`py-2 rounded-xl border-2 transition-all ${
                            selectedDay === day
                              ? 'bg-amber-400 border-amber-400 text-stone-950 font-bold'
                              : 'bg-blue-950 border-blue-800/60 text-blue-200 hover:bg-blue-900'
                          }`}
                        >
                          {day.slice(0, 3)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 px-4 text-xs font-funky uppercase tracking-wider btn-3d-gold rounded-xl flex items-center justify-center gap-2.5 shadow-xl shadow-amber-500/25"
                  >
                    <MessageSquare className="w-4 h-4 text-stone-950 stroke-[3]" />
                    <span>Book via WhatsApp · 076 294 5349</span>
                  </button>
                </form>
              </div>

              {/* Direct Call & Socials Pill */}
              <div className="mt-6 pt-4 border-t border-blue-900/60 flex items-center justify-between text-xs text-blue-200/80 font-medium">
                <div>
                  <span>WhatsApp: </span>
                  <a href={`tel:${STORE_INFO.phoneRaw}`} className="text-white font-bold hover:text-amber-400">
                    {STORE_INFO.phone}
                  </a>
                </div>
                <div className="text-amber-400 font-funky text-[11px]">
                  <span>@chubbyboyz_za</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
