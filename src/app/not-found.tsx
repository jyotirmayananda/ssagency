import Link from 'next/link';
import { ShieldAlert, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 bg-[#F8FAFC]">
      <div className="max-w-md w-full text-center p-8 rounded-2xl bg-white border border-slate-200 shadow-xl space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-amber-50 border border-amber-300 flex items-center justify-center text-[#B45309]">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B45309]">
            Error 404 // Post Not Found
          </span>
          <h1 className="text-3xl font-black text-[#061A32] uppercase tracking-tight mt-1">
            Page Not Found
          </h1>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            The page or operational route you are attempting to reach does not exist or may have
            been relocated.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-amber-500 via-[#B45309] to-amber-700 shadow-md hover:scale-[1.02] transition-transform"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#061A32] bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
          >
            <span>Our Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
