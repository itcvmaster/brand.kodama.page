import { KodamaLogo } from "@/components/KodamaLogo";
import { PHILOSOPHY_TAGLINE, PHILOSOPHY_WELCOME, WILD_SNAPSHOTS } from "@/lib/philosophy-data";

/** Ma — negative space as a UI composition, not photography. */
export function MaSnapshot({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative rounded-2xl border border-kodama-line bg-kodama-mist overflow-hidden aspect-[4/5] ${className}`}
      aria-hidden
    >
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="absolute inset-8 rounded-xl border border-dashed border-kodama-clay/40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-kodama-moss/15" />
      <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-kodama-bark/80 to-transparent">
        <p className="font-display italic text-kodama-sand text-base leading-snug">
          Ma — the quiet space that gives meaning to what remains.
        </p>
      </div>
    </div>
  );
}

/** Browser chrome + Kodama page skeleton. */
export function PageSnapshot({
  url = WILD_SNAPSHOTS.pageUrl,
  title = WILD_SNAPSHOTS.pageTitle,
  className = "",
}: {
  url?: string;
  title?: string;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-kodama-line bg-kodama-sand overflow-hidden ${className}`}>
      <div className="px-4 py-3 border-b border-kodama-line bg-kodama-mist flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-kodama-clay" />
        <span className="w-2 h-2 rounded-full bg-kodama-line" />
        <span className="w-2 h-2 rounded-full bg-kodama-line" />
        <span className="ml-2 font-mono text-[10px] text-kodama-stone truncate">{url}</span>
      </div>
      <div className="p-6 min-h-[140px]">
        <p className="font-display text-2xl text-kodama-bark leading-tight">{title}</p>
        <div className="mt-4 space-y-2">
          <div className="h-2 rounded-full bg-kodama-line w-full" />
          <div className="h-2 rounded-full bg-kodama-line w-5/6" />
          <div className="h-2 rounded-full bg-kodama-line w-2/3" />
        </div>
      </div>
    </div>
  );
}

/** App icon tile on mist surface. */
export function AppIconSnapshot({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-kodama-line bg-kodama-mist p-10 flex flex-col items-center justify-center min-h-[200px] ${className}`}
    >
      <div className="w-24 h-24 rounded-[26px] bg-kodama-moss flex items-center justify-center shadow-[0_18px_40px_-18px_rgba(74,93,78,0.7)]">
        <KodamaLogo className="w-12 h-12 text-kodama-sand" />
      </div>
      <p className="font-mono text-[11px] tracking-widest uppercase text-kodama-stone mt-6">App Icon</p>
    </div>
  );
}

/** Moss card with mantra — brand in the wild. */
export function MantraCardSnapshot({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-kodama-line bg-kodama-moss p-7 min-h-[200px] flex flex-col justify-between ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <KodamaLogo className="w-7 h-7 text-kodama-sand" />
        <span className="font-display text-xl text-kodama-sand">Kodama</span>
      </div>
      <div>
        <p className="font-display italic text-kodama-sand text-lg">{WILD_SNAPSHOTS.cardLine}</p>
        <p className="font-mono text-[10px] tracking-widest uppercase text-kodama-sand/60 mt-2">
          {PHILOSOPHY_TAGLINE.replace(/\./g, " ·")}
        </p>
      </div>
    </div>
  );
}

/** Product window with placeholder copy. */
export function ProductSnapshot({
  name,
  tagline,
  url,
  placeholder,
  className = "",
}: {
  name: string;
  tagline: string;
  url: string;
  placeholder: string;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-kodama-line bg-kodama-sand overflow-hidden ${className}`}>
      <div className="px-4 py-2.5 border-b border-kodama-line bg-kodama-mist font-mono text-[10px] text-kodama-stone truncate">
        {url}
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <KodamaLogo className="w-6 h-6 text-kodama-moss" />
          <span className="font-display text-lg text-kodama-bark">Kodama {name}</span>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-wider text-kodama-clay">{tagline}</p>
        <div className="mt-4 rounded-lg border border-kodama-line bg-kodama-mist px-3 py-3 min-h-[56px]">
          <p className="text-sm font-light italic text-kodama-stone">{placeholder}</p>
        </div>
      </div>
    </div>
  );
}

/** Voice quote as a typed UI card, not a photo. */
export function VoiceSnapshot({ quote, className = "" }: { quote: string; className?: string }) {
  return (
    <div className={`rounded-2xl border border-kodama-line bg-kodama-mist p-8 ${className}`}>
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-kodama-clay mb-4">Interface copy</p>
      <p className="font-display text-2xl font-light italic text-kodama-bark leading-snug">&ldquo;{quote}&rdquo;</p>
      <p className="mt-6 font-mono text-[10px] text-kodama-stone">{PHILOSOPHY_WELCOME.subhead}</p>
    </div>
  );
}

/** Hero backdrop — soft brand gradient, no photography. */
export function HeroBackdrop() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-kodama-sand">
      <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-kodama-moss/[0.07]" />
      <div className="absolute top-1/3 -left-32 w-[360px] h-[360px] rounded-full bg-kodama-clay/[0.12]" />
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-kodama-sand to-transparent" />
    </div>
  );
}
