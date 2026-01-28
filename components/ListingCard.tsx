
import React from 'react';
import { motion } from 'framer-motion';
import { Listing } from '../types';
import { Shield, Clock, MapPin, Bed, Bath, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  listing: Listing;
}

const ListingCard: React.FC<Props> = ({ listing }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-brand-ink/5 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <Link to={`/listing/${listing.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          {listing.isVerified && (
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <Shield size={14} className="text-brand-primary" fill="currentColor" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary">Verified</span>
            </div>
          )}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
             <div className="bg-brand-ink text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
               Book Viewing
               <ArrowUpRight size={14} />
             </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-semibold text-brand-support uppercase tracking-widest">{listing.type}</span>
            <div className="flex items-center gap-1 text-[10px] text-brand-ink/60 bg-gray-50 px-2 py-1 rounded-md">
              <Clock size={12} />
              Replies {listing.responseTime}
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-brand-ink leading-tight mb-2 group-hover:text-brand-primary transition-colors">
            {listing.title}
          </h3>

          <div className="flex items-center gap-1 text-brand-ink/60 mb-4 text-sm">
            <MapPin size={14} />
            {listing.location}
          </div>

          <div className="flex items-center gap-4 border-t border-brand-ink/5 pt-4">
            <div className="flex items-center gap-1 text-sm font-medium">
              <Bed size={16} className="text-brand-ink/40" />
              {listing.beds}
            </div>
            <div className="flex items-center gap-1 text-sm font-medium">
              <Bath size={16} className="text-brand-ink/40" />
              {listing.baths}
            </div>
            <div className="ml-auto text-xl font-black text-brand-ink">
              £{listing.price}<span className="text-xs font-medium text-brand-ink/40">/mo</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ListingCard;
