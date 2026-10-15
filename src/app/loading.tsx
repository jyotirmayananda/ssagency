import { Shield } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#031225] text-center p-4">
      <div className="relative flex items-center justify-center mb-4">
        <div className="w-16 h-16 rounded-full border-2 border-[#0B2B50] border-t-[#D4AF37] animate-spin" />
        <Shield className="w-6 h-6 text-[#D4AF37] absolute" />
      </div>
      <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
        Loading S.S. Agency...
      </p>
    </div>
  );
}
