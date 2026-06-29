import { KodamaLogo } from "@/components/KodamaLogo";
import { FOREST_PRODUCT_URLS, PHILOSOPHY_TAGLINE, PHILOSOPHY_WELCOME, WILD_SNAPSHOTS } from "@/lib/philosophy-data";

/** Compact Note editor — for Ma composition. */
function NoteMiniSnapshot({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-xl border border-kodama-line bg-kodama-sand shadow-[0_12px_32px_-12px_rgba(44,48,46,0.18)] dark:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.45)] overflow-hidden ${className}`}
    >
      <div className="px-2.5 py-1.5 border-b border-kodama-line bg-kodama-mist dark:bg-[#242724] flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-kodama-clay" />
        <span className="font-mono text-[8px] text-kodama-stone truncate">{FOREST_PRODUCT_URLS.Note}</span>
      </div>
      <div className="p-3">
        <div className="flex items-center gap-1.5 mb-2">
          <KodamaLogo className="w-3.5 h-3.5 text-kodama-moss" />
          <span className="font-display text-[11px] text-kodama-bark">Note</span>
        </div>
        <p className="font-display text-sm text-kodama-bark leading-snug">Quiet mornings</p>
        <div className="mt-2 space-y-1">
          <div className="h-1 rounded-full bg-kodama-line w-full" />
          <div className="h-1 rounded-full bg-kodama-line w-4/5" />
        </div>
        <p className="mt-2 text-[10px] font-light italic text-kodama-stone leading-snug">Write quietly…</p>
      </div>
    </div>
  );
}

/** Compact Drop inbox — for Ma composition. */
function DropMiniSnapshot({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-xl border border-kodama-line bg-kodama-sand shadow-[0_12px_32px_-12px_rgba(44,48,46,0.18)] dark:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.45)] overflow-hidden ${className}`}
    >
      <div className="px-2.5 py-1.5 border-b border-kodama-line bg-kodama-mist dark:bg-[#242724] flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-kodama-clay" />
        <span className="font-mono text-[8px] text-kodama-stone truncate">{FOREST_PRODUCT_URLS.Drop}</span>
      </div>
      <div className="p-3">
        <div className="flex items-center gap-1.5 mb-2">
          <KodamaLogo className="w-3.5 h-3.5 text-kodama-moss" />
          <span className="font-display text-[11px] text-kodama-bark">Drop</span>
        </div>
        <div className="rounded-lg border border-kodama-line bg-kodama-mist dark:bg-[#2a2d2b] px-2.5 py-2">
          <p className="text-[10px] font-light text-kodama-stone leading-snug italic">
            &ldquo;Thank you for making space to listen.&rdquo;
          </p>
          <p className="mt-1.5 font-mono text-[8px] text-kodama-clay uppercase tracking-wider">Anonymous</p>
        </div>
      </div>
    </div>
  );
}

/** Ma — negative space framing real product UI, not photography. */
export function MaSnapshot({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative rounded-2xl border border-kodama-line bg-kodama-mist dark:bg-[#2a2d2b] overflow-hidden aspect-[4/5] ${className}`}
      aria-hidden
    >
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="absolute inset-6 rounded-xl border border-dashed border-kodama-clay/40" />

      <NoteMiniSnapshot className="absolute top-[14%] left-[8%] w-[52%] z-10" />
      <DropMiniSnapshot className="absolute bottom-[22%] right-[6%] w-[48%] z-10" />

      <div className="absolute bottom-0 inset-x-0 p-5 pt-16 bg-gradient-to-t from-kodama-sand via-kodama-mist/90 to-transparent dark:from-[#2C302E]/90 dark:via-[#2C302E]/50 dark:to-transparent">
        <p className="font-display italic text-kodama-bark dark:text-[#F6F4F0] text-sm leading-snug">
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
        <KodamaLogo className="w-12 h-12" variant="dark" />
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
        <KodamaLogo className="w-7 h-7" variant="dark" />
        <span className="font-display text-xl text-[#F6F4F0]">Kodama</span>
      </div>
      <div>
        <p className="font-display italic text-[#F6F4F0] text-lg">{WILD_SNAPSHOTS.cardLine}</p>
        <p className="font-mono text-[10px] tracking-widest uppercase text-[#F6F4F0]/60 mt-2">
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
