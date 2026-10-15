import { Shield } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#F8FAFC] text-center p-4">
      <div className="relative flex items-center justify-center mb-4">
        <div className="w-16 h-16 rounded-full border-2 border-slate-200 border-t-[#B45309] animate-spin" />
        <Shield className="w-6 h-6 text-[#B45309] absolute" />
      </div>
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
        Loading S.S. Agency...
      </p>
    </div>
  );
}
