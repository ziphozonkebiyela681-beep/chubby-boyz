import React, { useState } from 'react';
import {
  Tv,
  Gamepad2,
  Users,
  Calendar,
  Clock,
  MessageSquare,
  Sparkles,
  Trophy,
  Flame,
  Dices,
  Sparkle,
  Share2,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import {
  HANGOVER_TUESDAY_IMAGE,
  SPORTS_SCREENING_IMAGE,
  STORE_INFO,
} from '../data/menuData';

export const EventsAndGamesSection: React.FC = () => {
  const [crewSize, setCrewSize] = useState('4');
  const [eventType, setEventType] = useState('Hangover Tuesday Game Night');
  const [selectedDay, setSelectedDay] = useState('Tuesday');
  const [bookingTime, setBookingTime] = useState('19:00');
  const [contactName, setContactName] = useState('');

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `*TABLE BOOKING - CHUBBY BOYZ (289 Fox St, Jeppestown)*\n\n`;
    if (contactName) text += `*Name / Crew:* ${contactName}\n`;
    text += `*Event:* ${eventType}\n`;
    text += `*Day / Date:* ${selectedDay}\n`;
    text += `*Time:* ${bookingTime}\n`;
    text += `*Crew Size:* ${crewSize} people\n\n`;
    text += `Hey Chubby Boyz! We want to reserve a table for our crew to watch sports / play games and order some smash burgers, gatsbys and combos!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="events" className="py-16 lg:py-24 bg-[#050b18] border-b-2 border-blue-900/40 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-funky text-amber-400 uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>289 Fox Street · Open Till Late</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-funky tracking-tight leading-tight">
            <span className="text-3d-orange">HANGOVER TUESDAYS</span> &amp;{' '}
            <span className="text-3d-blue">LIVE SPORTS</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-blue-200/90 font-medium leading-relaxed">
            Chubby Boyz is more than a burger joint — it is Jeppestown and Maboneng&apos;s ultimate late-night cultural hub.
            Whether you&apos;re bringing your crew to battle over dice and charades or chanting with fellow fans during the big game, our doors stay open late.
          </p>
        </div>

        {/* Feature 1: Hangover Tuesday Game Nights */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-blue-950/40 border-2 border-blue-800/40 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-amber-400 text-stone-950 font-funky text-xs uppercase tracking-wider shadow-md">
              <Dices className="w-4 h-4 text-stone-950" />
              <span>Midweek Crew Ritual · Every Tuesday</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-funky text-white leading-tight">
              THE VIBE: <span className="text-amber-400">HANGOVER TUESDAY</span> GAME NIGHTS
            </h3>

            {/* Evocative passage describing atmosphere */}
            <div className="space-y-4 text-sm sm:text-base text-blue-100/90 leading-relaxed font-medium">
              <p>
                Step inside 289 Fox Street as the sun dips below the Joburg skyline. The warm neon glow of the Chubby Boyz sign reflects across cobalt brick walls, filling the room with an irresistible, electric hum. Hangover Tuesday is where the entire city comes to decompress, laugh without boundaries, and leave weekday stress at the door.
              </p>
              <p>
                Across rustic timber tables, colorful dice clatter on trays, cards are fiercely dealt in heated Uno and Morabaraba face-offs, and uproarious bursts of laughter erupt as friends act out animated charades and try to outwit each other. Between competitive rounds, platters of golden loaded slap chips, 5-patty Big Boy smash burgers, and icy sodas get passed around the circle. It is pure camaraderie, unpretentious warmth, and good vibes that roll on deep into the early hours.
              </p>
            </div>

            {/* Highlights pill tags */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-700/50">
                <div className="font-funky text-amber-400 text-sm">Cards &amp; Dice</div>
                <div className="text-[11px] text-blue-300 font-medium">Uno, Poker, Dominoes &amp; Dice</div>
              </div>
              <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-700/50">
                <div className="font-funky text-amber-400 text-sm">Charades &amp; Games</div>
                <div className="text-[11px] text-blue-300 font-medium">Bring your crew &amp; play all night</div>
              </div>
              <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-700/50 col-span-2 sm:col-span-1">
                <div className="font-funky text-amber-400 text-sm">Open Till Late</div>
                <div className="text-[11px] text-blue-300 font-medium">Comfort food &amp; drinks on flow</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hey%20Chubby%20Boyz!%20I%20want%20to%20reserve%20a%20table%20for%20our%20crew%20for%20Hangover%20Tuesday%20Game%20Night!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-funky uppercase tracking-wider btn-whatsapp-compact rounded-xl shadow-lg active:scale-95 transition-transform"
              >
                <MessageSquare className="w-4 h-4 text-white stroke-[2.5]" />
                <span>Reserve Game Night · WhatsApp: 076 294 5349</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/50 shadow-2xl group">
              <img
                src={HANGOVER_TUESDAY_IMAGE}
                alt="Crew playing cards, rolling dice and acting charades at Chubby Boyz on 289 Fox Street"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-blue-950/90 border border-amber-400/30 backdrop-blur-md">
                <div className="font-funky text-amber-400 text-sm flex items-center justify-between">
                  <span>Authentic Chubby Boyz Night</span>
                  <span className="text-white text-xs">289 Fox St</span>
                </div>
                <p className="text-xs text-blue-200 mt-1">
                  Card games, rolling dice, charades, and laughing with the crew till late!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Live Big Screen Sports Screenings */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-blue-950/40 border-2 border-blue-800/40 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border-2 border-sky-400/50 shadow-2xl group">
              <img
                src={SPORTS_SCREENING_IMAGE}
                alt="Fans cheering at big screen football and rugby match at Chubby Boyz on 289 Fox Street"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-blue-950/90 border border-sky-400/30 backdrop-blur-md">
                <div className="font-funky text-sky-400 text-sm flex items-center justify-between">
                  <span>Matchday Stadium Roar</span>
                  <span className="text-white text-xs">Big Screens</span>
                </div>
                <p className="text-xs text-blue-200 mt-1">
                  PSL, Premier League, Champions League, and Springbok Rugby with live sound!
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-sky-500 text-stone-950 font-funky text-xs uppercase tracking-wider shadow-md">
              <Tv className="w-4 h-4 text-stone-950" />
              <span>Big Screen Stadium Atmosphere</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-funky text-white leading-tight">
              LIVE SPORTS: <span className="text-sky-400">FEEL THE STADIUM CHANT</span>
            </h3>

            {/* Evocative passage describing atmosphere */}
            <div className="space-y-4 text-sm sm:text-base text-blue-100/90 leading-relaxed font-medium">
              <p>
                When matchday arrives, 289 Fox Street transforms into a miniature stadium in the heart of Johannesburg. Wall-to-wall high-definition projectors beam every tackle, strike, and photo-finish, while stadium-grade audio brings every whistle and roar straight to your wooden bench.
              </p>
              <p>
                From heated Soweto Derbies and Premier League clashes to adrenaline-fueled Springbok Rugby test matches, the atmosphere is pure fire. Supporter jerseys fill the booths, hands wave flags in unison, and strangers turn into brothers over every stoppage-time goal. Order the R350 Masala Tika Beef Gatsby or the Chubby Buddies Combo to feed the entire table while cold beverages keep the celebrations flowing.
              </p>
            </div>

            {/* Highlights pill tags */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-700/50">
                <div className="font-funky text-sky-300 text-sm">Crystal Big Screens</div>
                <div className="text-[11px] text-blue-300 font-medium">Zero blind spots from any table</div>
              </div>
              <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-700/50">
                <div className="font-funky text-sky-300 text-sm">Gatsby &amp; Combos</div>
                <div className="text-[11px] text-blue-300 font-medium">Feast with 4-6 crew mates</div>
              </div>
              <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-700/50 col-span-2 sm:col-span-1">
                <div className="font-funky text-sky-300 text-sm">Full Audio Commentary</div>
                <div className="text-[11px] text-blue-300 font-medium">Crisp commentary &amp; match energy</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hey%20Chubby%20Boyz!%20I%20want%20to%20reserve%20a%20table%20to%20watch%20the%20big%20game%20live%20on%20the%20big%20screens!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-funky uppercase tracking-wider bg-sky-500 hover:bg-sky-400 text-stone-950 font-bold rounded-xl shadow-lg border-b-4 border-sky-700 transition-transform active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-stone-950 stroke-[3]" />
                <span>Book Matchday Seats · WhatsApp: 076 294 5349</span>
              </a>
            </div>
          </div>
        </div>

        {/* Central Booking & Location Bar */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0b1736] via-[#091533] to-[#0b1736] border-2 border-amber-400/60 p-6 sm:p-10 shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-funky text-amber-400 uppercase tracking-widest">
                All Bookings via WhatsApp · Instant Confirmation
              </span>
              <h3 className="text-2xl sm:text-4xl font-funky text-white mt-1">
                LOCK IN YOUR TABLE AT 289 FOX STREET
              </h3>
              <p className="mt-2 text-sm text-blue-200/90 font-medium">
                Reserve your table for Hangover Tuesday Game Night or the next big sports screening.
                We are open till late in Jeppestown / Maboneng!
              </p>
            </div>

            {/* Quick interactive booking form that opens WhatsApp with pre-filled message */}
            <form onSubmit={handleWhatsAppBooking} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-funky text-blue-200 uppercase tracking-wider mb-1">
                  Name / Crew
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kagiso &amp; Squad"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-blue-950 border-2 border-blue-800 rounded-xl text-white placeholder-blue-400/40 focus:outline-none focus:border-amber-400 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-funky text-blue-200 uppercase tracking-wider mb-1">
                  Event
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-blue-950 border-2 border-blue-800 rounded-xl text-white focus:outline-none focus:border-amber-400 font-medium"
                >
                  <option value="Hangover Tuesday Game Night">Hangover Tuesday Game Night</option>
                  <option value="Live Football / PSL Match">Live Football / PSL Match</option>
                  <option value="Springbok Rugby Match">Springbok Rugby Match</option>
                  <option value="Late Night Crew Feast">Late Night Crew Feast</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-funky text-blue-200 uppercase tracking-wider mb-1">
                  Day &amp; Crew Size
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                    className="w-full px-2 py-2.5 text-xs bg-blue-950 border-2 border-blue-800 rounded-xl text-white focus:outline-none focus:border-amber-400 font-medium"
                  >
                    <option value="Tuesday">Tuesday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                    <option value="Tonight">Tonight</option>
                  </select>

                  <select
                    value={crewSize}
                    onChange={(e) => setCrewSize(e.target.value)}
                    className="w-full px-2 py-2.5 text-xs bg-blue-950 border-2 border-blue-800 rounded-xl text-white focus:outline-none focus:border-amber-400 font-medium"
                  >
                    <option value="2">2 ppl</option>
                    <option value="4">4 ppl</option>
                    <option value="6">6 ppl</option>
                    <option value="8+">8+ ppl</option>
                  </select>
                </div>
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-funky uppercase tracking-wider btn-whatsapp-compact rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 h-[42px] active:scale-95 transition-transform"
                >
                  <MessageSquare className="w-4 h-4 text-white stroke-[2.5]" />
                  <span>Book: 076 294 5349</span>
                </button>
              </div>
            </form>

            {/* Quick contact / social proof strip */}
            <div className="mt-8 pt-6 border-t border-blue-900/60 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-blue-200/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>289 Fox Street, Jeppestown, Johannesburg</span>
              </div>
              <div className="flex items-center gap-4">
                <span>WhatsApp: <strong className="text-white">{STORE_INFO.phone}</strong></span>
                <span className="text-blue-600">·</span>
                <span className="text-amber-400 font-funky">@chubbyboyz_za (IG &amp; TikTok)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
