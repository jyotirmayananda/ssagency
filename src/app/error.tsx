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
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-24">
      <div className="card-chai max-w-md w-full text-center p-8 space-y-6">
        <div className="size-14 mx-auto rounded-xl border border-red-500/20 flex items-center justify-center bg-card text-red-500">
          <AlertTriangle className="size-7" />
        </div>

        <div>
          <span className="font-mono text-xs text-red-500 uppercase tracking-wider block mb-1">
            System notice
          </span>
          <h1 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
            Something went wrong
          </h1>
          <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
            An unexpected error occurred while loading this view. You may retry or return to our
            home page.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="btn-asym inline-flex h-10 w-full sm:w-auto items-center justify-center gap-2 bg-neutral-900 px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-neutral-200 cursor-pointer"
          >
            <RotateCcw className="size-4" />
            <span>Try again</span>
          </button>
          <Link
            href="/"
            className="btn-asym-mirror inline-flex h-10 w-full sm:w-auto items-center justify-center gap-2 border border-border bg-transparent px-5 text-sm font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900 text-foreground"
          >
            <Home className="size-4" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
