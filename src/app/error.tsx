'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled application error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 bg-[#F8FAFC]">
      <div className="max-w-md w-full text-center p-8 rounded-2xl bg-white border border-rose-200 shadow-xl space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-500">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-600">
            System Notice
          </span>
          <h1 className="text-2xl font-black text-[#061A32] uppercase tracking-tight mt-1">
            Something Went Wrong
          </h1>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            An unexpected error occurred while loading this view. You may retry or return to our
            home directory.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#061A32] shadow-md hover:bg-[#0B2B50] transition-colors"
          >
            <RotateCcw className="w-4 h-4 text-amber-400" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#061A32] bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
