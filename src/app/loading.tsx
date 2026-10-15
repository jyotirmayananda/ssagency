import { Shield } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
      <div className="relative flex items-center justify-center mb-4">
        <div className="size-12 rounded-full border border-card-edge border-t-brand animate-spin" />
        <Shield className="size-5 text-brand absolute" />
      </div>
      <p className="font-mono text-xs text-muted-foreground tracking-wider">
        Loading...
      </p>
    </div>
  );
}
