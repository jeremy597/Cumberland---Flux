export default function SiteHeader(){
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold">Cumberland Flux</a>
        <nav className="flex gap-6 text-sm">
          <a href="/events" className="hover:underline">Events</a>
          <a href="/about"  className="hover:underline">About</a>
          <a href="/join"   className="rounded-xl px-3 py-1.5 bg-cf-accent text-white">Join</a>
        </nav>
      </div>
    </header>
  );
}
