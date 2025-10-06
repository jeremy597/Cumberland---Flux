import Link from "next/link";
import Logo from "./Logo";

export default function SiteFooter() {
  return (
    <footer className="border-t border-skin-border mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo className="h-6 w-6" />
            <div className="text-sm">
              <div className="font-semibold">Cumberland Flux</div>
              <div className="text-skin-textMuted">Belonging through action.</div>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link href="/events" className="text-skin-textMuted hover:text-skin-text">Events</Link>
            <Link href="/about"  className="text-skin-textMuted hover:text-skin-text">About</Link>
            <Link href="/join"   className="text-skin-textMuted hover:text-skin-text">Join</Link>
            <a href="mailto:hello@example.org" className="text-skin-textMuted hover:text-skin-text">Contact</a>
          </nav>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-skin-textMuted">
          <p>© {new Date().getFullYear()} Cumberland Flux. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-skin-text">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="X" className="hover:text-skin-text">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-skin-text">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.7 2 12.4c0 4.55 2.87 8.4 6.85 9.76.5.1.68-.23.68-.5l-.01-1.95c-2.78.63-3.37-1.2-3.37-1.2-.46-1.2-1.12-1.52-1.12-1.52-.92-.66.07-.65.07-.65 1.02.07 1.55 1.09 1.55 1.09.9 1.6 2.36 1.14 2.93.87.09-.68.35-1.14.64-1.4-2.22-.26-4.56-1.16-4.56-5.17 0-1.14.39-2.07 1.03-2.8-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05a9.03 9.03 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.43.21 2.49.1 2.75.64.73 1.03 1.66 1.03 2.8 0 4.02-2.34 4.9-4.57 5.16.36.33.68.98.68 1.98l-.01 2.93c0 .27.18.61.69.5A10.42 10.42 0 0 0 22 12.4C22 6.7 17.52 2 12 2Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
