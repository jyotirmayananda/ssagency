import Link from 'next/link';
import { ShieldAlert, Home, ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-24">
      <div className="card-chai max-w-md w-full text-center p-8 space-y-6">
        <div className="size-14 mx-auto rounded-xl border border-card-edge flex items-center justify-center bg-card text-brand">
          <ShieldAlert className="size-7 text-brand" />
        </div>

        <div>
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-1">
            Error 404: page not found
          </span>
          <h1 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
            Page not found
          </h1>
          <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
            The page or operational route you are attempting to reach does not exist or may have
            been relocated.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-asym inline-flex h-10 w-full sm:w-auto items-center justify-center gap-2 bg-neutral-900 px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            <Home className="size-4" />
            <span>Return home</span>
          </Link>
          <Link
            href="/services"
            className="btn-asym-mirror inline-flex h-10 w-full sm:w-auto items-center justify-center gap-2 border border-border bg-transparent px-5 text-sm font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900 text-foreground"
          >
            <span>Our services</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
