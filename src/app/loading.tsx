import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
      <div className="relative flex items-center justify-center mb-4">
        <div className="size-14 rounded-2xl border-2 border-border border-t-brand animate-spin" />
        <div className="absolute size-9 rounded-xl overflow-hidden bg-white p-0.5 shadow-xs flex items-center justify-center">
          <Image
            src="/images/branding/ssa-emblem.png"
            alt="SSA Loading"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
      </div>
      <p className="font-mono text-xs text-muted-foreground tracking-wider">
        Loading...
      </p>
    </div>
  );
}
