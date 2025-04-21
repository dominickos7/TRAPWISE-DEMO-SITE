import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Calendar, Clock, Building2, Shield, Zap, Menu, X, CheckCircle, XCircle, 
  Sparkles, Award, ArrowRight, Search, Phone, Globe, Users, Clock3, Lock, Brain, CheckCircle2, 
  Target, Heart, Calendar as Calendar2, MessageCircle, Settings2, UserRound, Clock4, Users2,
  MessageSquareText, PhoneCall, CalendarClock, Globe2, Share2, Brain as Brain2,
  UserCheck, BookCheck, Plug, MessageSquareDashed, Battery, Power, AlertCircle
} from 'lucide-react';

import { Navbar, FadeInSection, ServiceCard, TypewriterIntro } from '../components/ui';

function HomePage() {
  const navigate = useNavigate();
  const [showMainHeading, setShowMainHeading] = useState(false);

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Updated with better vertical spacing */}
      <section className="min-h-[90vh] flex items-center justify-center py-32 md:py-40 lg:py-48 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="space-y-8 md:space-y-10">
              <TypewriterIntro onComplete={() => setShowMainHeading(true)} />
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4"
              >
                Trapwise.ai captures leads, qualifies clients & books appointments – 24/7, without your team lifting a finger.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col items-center justify-center gap-6 md:gap-8 px-4 pt-4"
              >
                <button 
                  onClick={handleGetStarted}
                  className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 
                           bg-white text-[#4F6DF5] rounded-xl font-medium text-base md:text-lg w-full sm:w-auto
                           border-2 border-[#4F6DF5]
                           transition-all duration-300
                           hover:bg-[#4F6DF5] hover:text-white
                           shadow-sm hover:shadow-md"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  <span>Start Automating My Clinic</span>
                </button>
                <p className="text-sm text-gray-500 mt-2">
                  No pressure – just see how Trapwise can fill your calendar, 100% on autopilot.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                They want an appointment.<br />
                <span className="text-[#4F6DF5]">But your team replies too late.</span>
              </h2>
              <div className="text-lg md:text-xl text-gray-700 mb-8 space-y-4">
                <p>Every second matters when someone hesitates about Botox or fillers.</p>
                <p>Trapwise captures that moment — and turns doubt into bookings.</p>
              </div>
              <button 
                onClick={handleGetStarted}
                className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 
                         bg-white text-[#4F6DF5] rounded-xl font-medium text-base md:text-lg
                         border-2 border-[#4F6DF5]
                         transition-all duration-300
                         hover:bg-[#4F6DF5] hover:text-white
                         shadow-sm hover:shadow-md"
              >
                Install Trapwise on your site (14 days free)
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* The System That Turns Interest Into Bookings Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                The System That Turns Interest Into Bookings — <span className="text-[#4F6DF5]">While You Sleep</span>
              </h2>
              <p className="text-xl text-gray-700 mb-4">Trapwise isn't just AI.</p>
              <p className="text-xl text-gray-700">It's your best closer — trained to engage, qualify, and convert leads with surgical precision.</p>
            </div>
          </FadeInSection>

          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">What Makes Trapwise Different</h3>
            </FadeInSection>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <FadeInSection>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Precision-Prompted AI</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Every line is crafted with elite sales psychology.<br/>
                    No fluff. No filler. Just powerful micro-convictions that guide visitors to take action.
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Human-Level Conversations</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Your AI assistant speaks like your smartest team member:<br/>
                    warm, calm, and professional.<br/>
                    Zero robotic scripts. Just real connection.
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Growth Without the Stress</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Trapwise runs 24/7 — automating lead capture, client nurturing, and appointment booking.<br/>
                    More revenue. Less inbox chaos.
                  </p>
                </div>
              </FadeInSection>
            </div>

            <FadeInSection>
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Clinics Choose Trapwise</h3>
                <p className="text-xl text-gray-700 mb-6">
                  We don't build chatbots.<br/>
                  We build intelligent closers — engineered with behavioral psychology, premium prompt design, and a deep understanding of how clients think, feel, and decide.
                </p>
                <div className="text-lg text-[#4F6DF5] font-medium space-y-2">
                  <p>Every message resonates.</p>
                  <p>Every flow converts.</p>
                  <p>Every lead feels heard — and takes action.</p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Why Clinics Choose Trapwise Section */}
      <section className="py-16 md:py-24 bg-gray-50 w-full">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Built for Clinics That Refuse to Lose Leads
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Trapwise isn't just automation. It's the secret edge clinics use to fill agendas, eliminate chaos, and build patient trust — without lifting a finger.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {/* First Row */}
            <FadeInSection>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <MessageSquareText className="h-12 w-12 text-[#4F6DF5] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lead Capture That Converts</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every message crafted to turn questions into consults — no spam, no fluff, just surgical persuasion.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <PhoneCall className="h-12 w-12 text-[#4F6DF5] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Phone Follow-Ups</h3>
                <p className="text-gray-600 leading-relaxed">
                  Human-like voice calls that confirm appointments, reduce no-shows, and save your front desk hours per day.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <CalendarClock className="h-12 w-12 text-[#4F6DF5] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Appointment Setting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Trapwise qualifies leads and fills your calendar while your team sleeps.
                </p>
              </div>
            </FadeInSection>

            {/* Second Row */}
            <FadeInSection>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <Globe2 className="h-12 w-12 text-[#4F6DF5] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Conversion-Driven Websites</h3>
                <p className="text-gray-600 leading-relaxed">
                  We don't build pretty sites. We build revenue-generating assets designed for clinics.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <Share2 className="h-12 w-12 text-[#4F6DF5] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Social Media Automation</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI that turns viewers into patients — with emotion-rich captions, smart replies, and consistent visibility.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <Brain2 className="h-12 w-12 text-[#4F6DF5] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Prompt Engineering That Sells</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every flow built with elite sales psychology, high-trust microcopy, and behavior-driven logic. The AI knows exactly what to say, when to say it — and why it works.
                </p>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection>
            <p className="text-center text-gray-600 text-lg italic max-w-3xl mx-auto">
              The only regret clinics have — is not starting sooner.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Trust Metrics Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#1F1F1F]">
                What Happens When Clinics Say Yes to Trapwise
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Not theory. Not potential. Just results — backed by real metrics, real stories, and real growth.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            <FadeInSection>
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="text-[#4F6DF5] text-4xl md:text-5xl font-bold mb-4">96%</div>
                <div className="text-gray-700 text-lg">
                  Clinics saw more consults booked in under 30 days
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="text-[#4F6DF5] text-4xl md:text-5xl font-bold mb-4">3×</div>
                <div className="text-gray-700 text-lg">
                  Faster Response<br />
                  Without hiring more staff — Trapwise handled it all
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="text-[#4F6DF5] text-4xl md:text-5xl font-bold mb-4">50%</div>
                <div className="text-gray-700 text-lg">
                  Less Inbox Pressure<br />
                  Receptionists finally had time to breathe and focus
                </div>
              </div>
            </FadeInSection>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            <FadeInSection>
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="space-y-4">
                  <div className="text-gray-500 font-medium">Before Trapwise:</div>
                  <p className="text-gray-700">We were constantly missing consults and answering calls late.</p>
                  <div className="text-gray-500 font-medium mt-6">After Trapwise:</div>
                  <p className="text-gray-700">Now clients are scheduled, followed up, and cared for — without us touching a thing.</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-gray-900 font-medium">Wies Allema</div>
                  <div className="text-[#4F6DF5]">Injectables Specialist</div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="space-y-4">
                  <div className="text-gray-500 font-medium">Before Trapwise:</div>
                  <p className="text-gray-700">Our front desk was overwhelmed with follow-ups.</p>
                  <div className="text-gray-500 font-medium mt-6">After Trapwise:</div>
                  <p className="text-gray-700">Now the system books, confirms, and follows up — we just focus on treatments.</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-gray-900 font-medium">Luca Bruin</div>
                  <div className="text-[#4F6DF5]">Clinic Owner</div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="space-y-4">
                  <div className="text-gray-500 font-medium">Before Trapwise:</div>
                  <p className="text-gray-700">I couldn't believe how many leads we were wasting.</p>
                  <div className="text-gray-500 font-medium mt-6">After Trapwise:</div>
                  <p className="text-gray-700">Now every message turns into a real consult — it's like having a sales rep that never sleeps.</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-gray-900 font-medium">Tirzah Fakkel</div>
                  <div className="text-[#4F6DF5]">Cosmetic Doctor</div>
                </div>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection>
            <p className="text-center text-gray-600 text-lg italic max-w-3xl mx-auto">
              The only regret clinics have — is not starting sooner.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Transformation Section */}
      <section id="why" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#1F1F1F]">
                Behind Every High-Performing Clinic — Is a System Like This
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Trapwise quietly powers growth behind the scenes — by making every message, every moment, and every lead count.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FadeInSection>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <UserCheck className="h-12 w-12 text-[#4F6DF5] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI That Feels Human</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your assistant listens, thinks, and responds like your most trusted team member — without ever needing a break.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <BookCheck className="h-12 w-12 text-[#4F6DF5] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Book More. Miss Less.</h3>
                <p className="text-gray-600 leading-relaxed">
                  Automated booking & follow-up flows eliminate no-shows and missed consults. Everything measurable.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <Plug className="h-12 w-12 text-[#4F6DF5] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Works With Your Stack</h3>
                <p className="text-gray-600 leading-relaxed">
                  Integrates with Calendly, JaneApp, Salonized, and all your existing booking tools — no disruptions.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <MessageSquareDashed className="h-12 w-12 text-[#4F6DF5] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Every Lead Followed Up</h3>
                <p className="text-gray-600 leading-relaxed">
                  No more cold leads or ghosted DMs. Trapwise instantly follows up, qualifies, and keeps the conversation alive.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <Battery className="h-12 w-12 text-[#4F6DF5] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Without Burnout</h3>
                <p className="text-gray-600 leading-relaxed">
                  Handle more leads — without hiring more people. Your team breathes, your business scales.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <Power className="h-12 w-12 text-[#4F6DF5] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Always On. Always Sharp.</h3>
                <p className="text-gray-600 leading-relaxed">
                  Trapwise runs 24/7 — adapting to each message, responding like clockwork, and never losing momentum.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Risk-Free Promise Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="text-center">
                  <Shield className="h-16 w-16 text-[#4F6DF5] mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1F1F1F]">
                    Try Trapwise Risk-Free for 14 Days
                  </h2>
                  <div className="max-w-3xl mx-auto space-y-4">
                    <p className="text-lg md:text-xl text-gray-600">
                      We don't do fluff, hype, or vague tech promises. Just outcomes.
                    </p>
                    <p className="text-lg md:text-xl text-gray-600">
                      Install Trapwise on your site — and if you don't see measurable improvements in consults, client engagement, or lead volume in 14 days, we'll fix it.
                    </p>
                    <p className="text-lg md:text-xl font-medium text-[#4F6DF5]">
                      Free of charge. Until you win.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 text-white leading-tight">
                Your Growth. On Autopilot.<br />
                Your Clinic. On Another Level.
              </h2>
              <div className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 px-4 max-w-3xl mx-auto space-y-4">
                <p>
                  We don't offer 'chatbots'. We build intelligent closers — engineered with behavioral psychology, elite prompts, and human-level tone.
                </p>
                <p>
                  No stress. No guesswork. Just booked consults, even while you sleep.
                </p>
              </div>
              <button 
                onClick={handleGetStarted}
                className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 
                         bg-white text-[#4F6DF5] rounded-xl font-medium text-base md:text-lg
                         border-2 border-[#4F6DF5]
                         transition-all duration-300
                         hover:bg-[#4F6DF5] hover:text-white
                         group shadow-lg hover:shadow-xl"
              >
                Let's Install Trapwise
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;