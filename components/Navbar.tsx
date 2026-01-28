
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCircle, Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between shadow-sm">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <ShieldCheck className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-ink">Rentme</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/search" className="text-sm font-medium text-brand-ink hover:text-brand-primary transition-colors" data-cursor="Find">Find a Home</Link>
          <Link to="/rooms" className="text-sm font-medium text-brand-ink hover:text-brand-primary transition-colors" data-cursor="Match">Spare Rooms</Link>
          <Link to="/list" className="text-sm font-medium text-brand-ink hover:text-brand-primary transition-colors" data-cursor="Host">List Property</Link>
          <Link to="/trust" className="text-sm font-medium text-brand-ink hover:text-brand-primary transition-colors" data-cursor="Safety">Trust & Safety</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/passport" className="hidden sm:flex items-center gap-2 text-sm font-semibold bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-xl hover:bg-brand-primary hover:text-white transition-all">
            <UserCircle size={18} />
            My Passport
          </Link>
          <button className="md:hidden">
            <Menu className="text-brand-ink" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
