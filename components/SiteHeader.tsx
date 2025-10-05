import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Cumberland Flux
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/events" className="hover:underline">Events</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/join" className="rounded-xl px-3 py-1.5 bg-cf-accent text-white">Join</Link>
        </nav>
      </div>
    </header>
  );
}
