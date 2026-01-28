import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, FileText, Landmark, Key, ChevronRight, Lock } from 'lucide-react';

const Passport: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-brand-background pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-12">
          <div className="flex items-center gap-3 text-brand-primary font-bold text-sm uppercase tracking-widest mb-4">
             <ShieldCheck size={20} />
             Identity Secured
          </div>
          <h1 className="text-5xl font-black text-brand-ink mb-4">Your Rent Passport</h1>
          <p className="text-lg text-brand-ink/60">Manage your verified data and apply to homes with total privacy.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: UserCheck, label: 'Identity', status: 'Verified', color: 'text-brand-primary' },
            { icon: Landmark, label: 'Financials', status: 'Connected', color: 'text-brand-support' },
            { icon: FileText, label: 'References', status: '2 Pending', color: 'text-brand-accent' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-brand-ink/5 shadow-sm">
              <div className={`w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 ${item.color}`}>
                <item.icon size={24} />
              </div>
              <p className="text-xs font-bold text-brand-ink/40 uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-lg font-black text-brand-ink">{item.status}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-black text-brand-ink mb-4">Verification Checklist</h2>
          
          {[
            { title: 'Liveness Check', desc: 'FaceID verification complete', done: true },
            { title: 'Bank Connection', desc: 'Securely confirm income via Open Banking', done: true },
            { title: 'Employer Reference', desc: 'Requesting from Stripe HR...', done: false },
            { title: 'Previous Landlord', desc: 'Requested 2 days ago', done: false },
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 8 }}
              className={`p-5 rounded-2xl border transition-all flex items-center gap-4 ${step.done ? 'bg-brand-primary/5 border-brand-primary/20' : 'bg-white border-brand-ink/5'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step.done ? 'bg-brand-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                {step.done ? <UserCheck size={16} /> : <div className="w-2 h-2 rounded-full bg-current" />}
              </div>
              <div className="flex-1">
                <h3 className={`font-bold ${step.done ? 'text-brand-primary' : 'text-brand-ink'}`}>{step.title}</h3>
                <p className="text-xs text-brand-ink/40">{step.desc}</p>
              </div>
              {!step.done && <ChevronRight className="text-brand-ink/20" />}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-brand-ink text-white rounded-[32px] relative overflow-hidden">
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                 <div className="flex items-center gap-2 text-brand-accent font-bold text-xs uppercase tracking-widest mb-4">
                   <Lock size={16} />
                   Privacy First
                 </div>
                 <h3 className="text-3xl font-black mb-4">Data Protection</h3>
                 <p className="text-white/60">Rentme uses bank-grade encryption. Landlords can only see your full details once you accept an invitation to apply. You stay in control.</p>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10 text-xs font-mono">
                 <pre>
                   {`{
  "encrypted": true,
  "last_audit": "2024-04-12",
  "status": "SECURE_VAULT"
}`}
                 </pre>
              </div>
           </div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Passport;
