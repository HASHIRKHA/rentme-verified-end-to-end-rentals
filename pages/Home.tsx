import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Users, Globe, Play, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ListingCard from '../components/ListingCard';
import { MOCK_LISTINGS } from '../constants';

const Home: React.FC = () => {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const headlines = ["Rent. Room. Sorted.", "Verified Renting, End-to-End.", "Move in faster, with trust."];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-24 min-h-screen overflow-x-hidden">
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-brand-primary/5 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-brand-secondary/5 blur-[100px]"
        />
      </div>

      {/* Hero Section */}
      <section className="px-6 relative py-12 md:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-brand-primary/10 px-4 py-2 rounded-full mb-8"
          >
            <ShieldCheck size={16} className="text-brand-primary" />
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">The UK's Most Trusted Marketplace</span>
          </motion.div>

          <div className="h-[120px] md:h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={headlineIndex}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-8xl font-black text-brand-ink leading-tight tracking-tight max-w-5xl"
              >
                {headlines[headlineIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-brand-ink/60 max-w-2xl mx-auto mb-12"
          >
            Say goodbye to endless scrolling and scammy listings. From identity checks to e-signatures and move-in, Rentme handles it all in one premium flow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/search" data-cursor="Explore" className="w-full sm:w-auto px-8 py-5 bg-brand-ink text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brand-primary transition-all shadow-xl shadow-brand-ink/10">
              Find a Place
              <ArrowRight size={20} />
            </Link>
            <Link to="/list" data-cursor="Host" className="w-full sm:w-auto px-8 py-5 bg-white text-brand-ink border border-brand-ink/10 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all">
              List Your Space
              <Zap size={20} className="text-brand-accent" fill="currentColor" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-20 px-6 bg-brand-ink text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {[
            { label: 'Avg. Days to Let', value: '4.2', sub: 'vs 22 industry avg' },
            { label: 'Trust Score', value: '4.9', sub: 'Verified reviews' },
            { label: 'Scam Protection', value: '100%', sub: 'Verified listings' },
            { label: 'Active Renters', value: '125k', sub: 'With Rent Passports' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black mb-1">{stat.value}</div>
              <div className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-1">{stat.label}</div>
              <div className="text-white/40 text-xs">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-black text-brand-ink mb-2">Curated Spaces</h2>
            <p className="text-brand-ink/60">The highest rated homes available this week.</p>
          </div>
          <Link to="/search" className="text-brand-primary font-bold flex items-center gap-2 group">
            View All Listings
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_LISTINGS.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

      {/* Renter Passport Demo */}
      <section className="py-24 px-6 bg-brand-primary/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-primary/20">
              <Zap className="text-white" size={32} fill="currentColor" />
            </div>
            <h2 className="text-5xl font-black text-brand-ink mb-6 leading-tight">
              One-click apply with your <span className="text-brand-primary underline decoration-brand-accent decoration-4 underline-offset-8">Rent Passport.</span>
            </h2>
            <p className="text-lg text-brand-ink/60 mb-8">
              Verify your identity, income, and references once. Apply to any home in seconds. No more printing bank statements or hunting down old landlords.
            </p>
            <ul className="space-y-4">
              {[
                "Instant Identity Verification (Liveness check)",
                "Open Banking Affordability Check",
                "Automated Reference Collection",
                "Secure Document Vault (Encryption first)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-semibold text-brand-ink">
                  <CheckCircle2 size={20} className="text-brand-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 5 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             {/* Mock Passport UI */}
             <div className="bg-white rounded-[32px] p-8 shadow-2xl shadow-brand-primary/10 border border-brand-ink/5 max-w-md mx-auto relative z-10">
                <div className="flex justify-between items-start mb-10">
                   <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-primary to-brand-support" />
                   <div className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Verified Elite</div>
                </div>
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-brand-ink mb-1">Alex Thompson</h3>
                  <p className="text-brand-ink/40 text-sm">Product Designer at Stripe</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-10">
                   <div className="bg-gray-50 p-4 rounded-2xl">
                     <p className="text-[10px] uppercase font-bold text-brand-ink/40 mb-1">Affordability</p>
                     <p className="text-lg font-black text-brand-ink">£4,200/mo</p>
                   </div>
                   <div className="bg-gray-50 p-4 rounded-2xl">
                     <p className="text-[10px] uppercase font-bold text-brand-ink/40 mb-1">Trust Score</p>
                     <p className="text-lg font-black text-brand-ink">998 / 1000</p>
                   </div>
                </div>
                <button className="w-full bg-brand-primary text-white py-4 rounded-2xl font-black hover:bg-brand-ink transition-colors flex items-center justify-center gap-2">
                  Apply to Shoreditch Penthouse
                  <ArrowRight size={18} />
                </button>
             </div>
             {/* Decorative circles */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-support/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
