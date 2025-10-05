"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const NAV = [
  { href: "/events", label: "Events" },
  { href: "/about",  label: "About" },
  { href: "/join",   label: "Join" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-skin-border bg-skin-surface/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="group inline-flex items-center gap-2" aria-label="Cumberland Flux home">
            <Logo />
            <span className="hidden sm:block text-sm font-semibold tracking-wide">
              Cumberland&nbsp;Flux
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "relative px-0.5 py-1 transition-colors",
                    active
                      ? "text-skin-text"
                      : "text-skin-textMuted hover:text-skin-text"
                  ].join(" ")}
                >
                  <span className="after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:scale-x-0 after:bg-skin-ring after:transition-transform after:duration-200 hover:after:scale-x-100" />
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/join"
              className="btn-primary ml-1"
            >
              Join
            </Link>
          </nav>

          {/* Mobile toggler */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-skin-border px-2.5 py-2 text-skin-text"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d={open ? "M6 6l12 12M18 6L6 18" : "M3 6h18M3 12h18M3 18h18"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={[
          "md:hidden fixed top-0 right-0 z-50 h-full w-80 max-w-[85%]",
          "bg-skin-surface border-l border-skin-border shadow-xl",
          "transition-transform duration-200",
          open ? "translate-x-0" : "translate-x-full"
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between px-4 h-14 border-b border-skin-border">
          <div className="inline-flex items-center gap-2">
            <Logo />
            <span className="text-sm font-semibold tracking-wide">Cumberland&nbsp;Flux</span>
          </div>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-skin-border"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="px-3 py-3">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={[
                  "block rounded-lg px-3 py-2 text-sm",
                  active
                    ? "bg-skin-bg text-skin-text"
                    : "text-skin-text hover:bg-skin-bg/60"
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-2">
            <Link
              href="/join"
              onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Join
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
