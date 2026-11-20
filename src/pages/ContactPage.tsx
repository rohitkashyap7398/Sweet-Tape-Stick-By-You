import React, { useState } from 'react';
import { Check, MapPin, Mail, Phone } from 'lucide-react';
import { PageRoute, TAPE_PRODUCTS } from '../data/sweetTapeData';
import { TapeRollSvg } from '../components/TapeRollSvg';
import { PhysicsFooter } from '../components/PhysicsFooter';
import { soundEngine } from '../utils/sound';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Retail & Wholesale Orders');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    setError(null);
    soundEngine.playTapeTear();
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="crumpled-paper bg-[#B8FF00] text-[#053B0C] pt-28 sm:pt-32 pb-20 sm:pb-24 px-4 relative">
        <div className="crumpled-content max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#053B0C] text-[#B8FF00] px-3 py-1 text-xs font-display tracking-widest uppercase mb-4">
            <span>CONTACT</span>
            <span aria-hidden="true">·</span>
            <span>SB TAPE GROUP</span>
          </div>
          <h1 className="font-display text-6xl sm:text-8xl lg:text-[136px] leading-[0.86] uppercase tracking-tight">
            STICK A NOTE TO US
          </h1>
        </div>

        <div className="absolute bottom-0 inset-x-0 pointer-events-none">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-14 sm:h-20 block">
            <path d="M0,90 Q720,0 1440,90 Z" fill="#053B0C" />
          </svg>
        </div>
      </section>

      {/* FORM & OFFICE SECTION */}
      <section className="crumpled-paper bg-[#053B0C] text-[#FAF9F5] py-14 sm:py-20 px-4 sm:px-10">
        <div className="crumpled-content max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="kraft-cardboard text-[#4B290B] p-7 sm:p-9 rounded-xl shadow-2xl relative">
              <div className="packing-tape absolute -top-4 left-8 w-28 h-8 -rotate-2 z-20" />
              <h2 className="font-display text-3xl sm:text-4xl uppercase mb-4">
                HEADQUARTERS &amp; FACTORY
              </h2>
              <div className="space-y-4 text-sm sm:text-base font-semibold">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>SB Tape Group Sdn Bhd, Shah Alam, Selangor, Malaysia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 shrink-0" />
                  <span>hello@sweet-tape.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 shrink-0" />
                  <span className="tabular-nums">+60 3-5519 8800</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-2">
              <TapeRollSvg product={TAPE_PRODUCTS[4]} className="w-44 h-44 sm:w-52 sm:h-52" rotation={8} />
            </div>
          </div>

          {/* Right Lined Note Form */}
          <div className="lg:col-span-7">
            <div className="lined-paper text-[#053B0C] p-7 sm:p-10 rounded-2xl shadow-2xl relative">
              <div className="masking-tape-strip absolute -top-4 right-10 w-28 h-8 rotate-3 z-20" />

              {submitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#B8FF00] text-[#053B0C] flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="font-display text-4xl sm:text-5xl uppercase">
                    NOTE STUCK! WE GOT IT.
                  </h3>
                  <p className="text-base font-semibold text-[#053B0C]/80 max-w-md mx-auto">
                    Thanks {name}! Our team at SB Tape Group will reply to {email} within 1–2 business days.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="px-6 py-2.5 rounded-lg bg-[#053B0C] text-[#B8FF00] font-display text-lg tracking-wider cursor-pointer"
                  >
                    SEND ANOTHER NOTE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <h2 className="font-display text-3xl sm:text-4xl uppercase">
                    DROP US A LINE
                  </h2>

                  {error && (
                    <div className="p-3 rounded-lg bg-[#E3572B] text-white text-sm font-bold">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-extrabold uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Aiman Hakim"
                        className="w-full px-4 py-2.5 rounded-lg bg-white/85 border border-black/20 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#053B0C]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-extrabold uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-white/85 border border-black/20 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#053B0C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-topic" className="block text-xs font-extrabold uppercase tracking-wider mb-1.5">
                      Inquiry Type
                    </label>
                    <select
                      id="contact-topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/85 border border-black/20 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#053B0C]"
                    >
                      <option>Retail &amp; Wholesale Orders</option>
                      <option>Custom OEM / Bulk Industrial</option>
                      <option>MR. D.I.Y &amp; Stockist Partnerships</option>
                      <option>Press &amp; Collaborations</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-msg" className="block text-xs font-extrabold uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-msg"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you're sticking together..."
                      className="w-full px-4 py-2.5 rounded-lg bg-white/85 border border-black/20 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#053B0C]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-7 py-3.5 rounded-xl bg-[#053B0C] text-[#B8FF00] font-display text-2xl tracking-wide hover:bg-[#085413] transition-colors cursor-pointer"
                  >
                    STICK IT &amp; SEND
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <PhysicsFooter onNavigate={onNavigate} />
    </div>
  );
};
