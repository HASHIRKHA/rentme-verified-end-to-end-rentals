import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Search from './pages/Search';
import Passport from './pages/Passport';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-brand-primary selection:text-white">
        <CustomCursor />
        <Navbar />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/passport" element={<Passport />} />
              {/* Fallback */}
              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </main>

        <footer className="bg-white border-t border-brand-ink/5 py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg" />
              <span className="text-xl font-bold tracking-tight text-brand-ink">Rentme</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-brand-ink/60">
              <a href="#" className="hover:text-brand-primary">Careers</a>
              <a href="#" className="hover:text-brand-primary">Press</a>
              <a href="#" className="hover:text-brand-primary">Privacy</a>
              <a href="#" className="hover:text-brand-primary">Terms</a>
              <a href="#" className="hover:text-brand-primary">Help</a>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40 hover:text-brand-primary flex items-center gap-1.5 transition-colors">
                 Reduce Motion
                 <div className="w-8 h-4 bg-gray-100 rounded-full relative">
                   <div className="absolute left-1 top-1 w-2 h-2 bg-white rounded-full" />
                 </div>
              </button>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-brand-ink/5 text-center text-xs text-brand-ink/20">
            © 2024 Rentme Technologies Ltd. All rights reserved. Registered in England & Wales.
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
