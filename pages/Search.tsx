import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search as SearchIcon, SlidersHorizontal, Map as MapIcon, Grid, List as ListIcon, Shield, X } from 'lucide-react';
import { MOCK_LISTINGS } from '../constants';
import ListingCard from '../components/ListingCard';

const Search: React.FC = () => {
  const [view, setView] = useState<'grid' | 'map'>('grid');
  const [searchQuery, setSearchQuery] = useState('London');

  return (
    <div className="pt-24 min-h-screen bg-brand-background">
      {/* Search Header */}
      <div className="sticky top-20 z-40 px-6 pb-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass p-3 rounded-2xl shadow-xl shadow-brand-ink/5 flex flex-wrap items-center gap-3">
            <div className="flex-1 min-w-[200px] relative">
              <SearchIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-ink/30" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/50 rounded-xl border border-transparent focus:border-brand-primary/30 focus:bg-white outline-none transition-all font-medium text-brand-ink"
                placeholder="Where would you like to live?"
              />
            </div>
            
            <div className="h-10 w-[1px] bg-brand-ink/5 hidden md:block" />
            
            <div className="flex items-center gap-2">
              <button className="px-4 py-3 rounded-xl border border-brand-ink/5 hover:border-brand-primary/50 flex items-center gap-2 text-sm font-bold text-brand-ink transition-all">
                <SlidersHorizontal size={18} />
                Filters
              </button>
              <div className="flex bg-gray-100 p-1 rounded-xl">
                <button 
                  onClick={() => setView('grid')}
                  className={`p-2 rounded-lg transition-all ${view === 'grid' ? 'bg-white shadow-sm text-brand-primary' : 'text-brand-ink/40'}`}
                >
                  <Grid size={20} />
                </button>
                <button 
                  onClick={() => setView('map')}
                  className={`p-2 rounded-lg transition-all ${view === 'map' ? 'bg-white shadow-sm text-brand-primary' : 'text-brand-ink/40'}`}
                >
                  <MapIcon size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 overflow-x-auto no-scrollbar pb-2">
            {['Verified Only', 'Instant Book', 'Bills Included', 'Pet Friendly', 'Furnished'].map((filter) => (
              <button key={filter} className="whitespace-nowrap px-4 py-1.5 bg-white border border-brand-ink/10 rounded-full text-xs font-bold text-brand-ink/60 hover:border-brand-primary hover:text-brand-primary transition-all">
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-black text-brand-ink">
            {MOCK_LISTINGS.length} premium listings in {searchQuery}
          </h2>
          <div className="text-sm font-bold text-brand-primary flex items-center gap-2 bg-brand-primary/10 px-3 py-1.5 rounded-lg">
             <Shield size={16} />
             All Listings Verified
          </div>
        </div>

        {view === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_LISTINGS.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="h-[60vh] rounded-3xl overflow-hidden relative shadow-inner border border-brand-ink/5">
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
               <div className="text-center">
                 <MapIcon size={48} className="mx-auto text-brand-ink/20 mb-4" />
                 <p className="font-bold text-brand-ink/40 uppercase tracking-widest">Map View Demo</p>
                 <p className="text-xs text-brand-ink/20 mt-2 italic">Requires Google Maps Integration</p>
               </div>
            </div>
            {/* Interactive Pins Simulation */}
            {MOCK_LISTINGS.map((listing, i) => (
              <motion.div
                key={listing.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="absolute bg-brand-primary text-white font-black px-3 py-1.5 rounded-full shadow-lg cursor-pointer transform hover:scale-110 transition-transform"
                style={{
                  top: `${30 + i * 20}%`,
                  left: `${40 + (i % 2) * 20}%`
                }}
              >
                £{listing.price}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
