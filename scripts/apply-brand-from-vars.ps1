# Applies Cumberland Flux brand: extended palette (given HEX), type hierarchy, Google Fonts.
# Run from repo root:
#   powershell -ExecutionPolicy Bypass -File .\scripts\apply-brand-from-vars.ps1

$ErrorActionPreference = "Stop"

# ---------- Utility: HEX -> HSL triple "H S% L%" ----------
function Convert-HexToHsl([string]$hex) {
  $h = $hex.Trim().TrimStart('#')
  if ($h.Length -eq 3) { $h = ($h[0]*2 + $h[1]*2 + $h[2]*2) }
  if ($h.Length -ne 6) { throw "Bad HEX: $hex" }

  $r = [Convert]::ToInt32($h.Substring(0,2),16)/255
  $g = [Convert]::ToInt32($h.Substring(2,2),16)/255
  $b = [Convert]::ToInt32($h.Substring(4,2),16)/255

  $max = [Math]::Max($r,[Math]::Max($g,$b))
  $min = [Math]::Min($r,[Math]::Min($g,$b))
  $l = ($max + $min) / 2

  if ($max -eq $min) {
    $hue = 0
    $s = 0
  } else {
    $d = $max - $min
    if ($l -gt 0.5) { $s = $d / (2 - $max - $min) } else { $s = $d / ($max + $min) }

    if ($max -eq $r) {
      $hue = (($g - $b) / $d)
      if ($g -lt $b) { $hue += 6 }
    } elseif ($max -eq $g) {
      $hue = (($b - $r) / $d) + 2
    } else {
      $hue = (($r - $g) / $d) + 4
    }
    $hue = $hue / 6
  }

  $H = [Math]::Round($hue * 360)
  $S = [Math]::Round($s * 100)
  $L = [Math]::Round($l * 100)
  return "$H $S% $L%"
}

function OnColor([string]$hslTriple) {
  if ($hslTriple -match '^\s*\d+\s+\d+%?\s+(\d+)%') { $l=[int]$Matches[1]; return ($(if($l -lt 55){"0 0% 100%"}else{"15 6% 10%"})) }
  "0 0% 100%"
}

# ---------- Your Extended Palette (exact values) ----------
$CORE = @{
  'dark-moss-green' = '#4E6813'
  'blood-red'       = '#74070E'
  'folly'           = '#FF4365'
  'verdigris'       = '#28AFB0'
  'celadon'         = '#B3DEC1'
}
$NEUTRALS = @{
  'off-white-mist' = '#F5F7F2'
  'charcoal-slate' = '#1E1E1C'
  'stone-gray'     = '#7C8572'
  'ivory-cloud'    = '#EAEAE4'
  'midnight-teal'  = '#1C4141'
}
$VIBRANT = @{
  'solar-amber'   = '#FFB847'
  'skywave-blue'  = '#009DFF'
  'clover-pop'    = '#A6E22E'
  'rose-quartz'   = '#FF7E8E'
  'cobalt-shadow' = '#2035A7'
}
$MUTED = @{
  'fern-dust'      = '#8AA96C'
  'clay-taupe'     = '#B6A38C'
  'fog-blue'       = '#A7BFC2'
  'mulberry-smoke' = '#9B6473'
  'pale-aqua-mist' = '#D8ECE7'
}

# ---------- Semantic mapping (LIGHT / DARK) ----------
# You can tweak these choices at any time; these are sensible defaults.
$L = @{
  bg         = Convert-HexToHsl $NEUTRALS.'off-white-mist'  # page bg
  surface    = Convert-HexToHsl $NEUTRALS.'ivory-cloud'     # cards/surfaces
  text       = Convert-HexToHsl $NEUTRALS.'charcoal-slate'  # primary text
  'text-muted' = Convert-HexToHsl $NEUTRALS.'stone-gray'    # secondary text
  border     = Convert-HexToHsl $MUTED.'pale-aqua-mist'     # subtle separators
  ring       = Convert-HexToHsl $VIBRANT.'skywave-blue'     # focus ring / outlines

  primary    = Convert-HexToHsl $VIBRANT.'cobalt-shadow'    # main brand (buttons/links)
  secondary  = Convert-HexToHsl $CORE.'verdigris'           # secondary brand
  accent     = Convert-HexToHsl $CORE.'folly'               # highlight / cta alt

  success    = Convert-HexToHsl $VIBRANT.'clover-pop'
  warning    = Convert-HexToHsl $VIBRANT.'solar-amber'
  danger     = Convert-HexToHsl $CORE.'blood-red'
}
$D = @{
  bg         = Convert-HexToHsl $NEUTRALS.'midnight-teal'
  surface    = Convert-HexToHsl $NEUTRALS.'charcoal-slate'
  text       = Convert-HexToHsl $NEUTRALS.'off-white-mist'
  'text-muted' = Convert-HexToHsl $MUTED.'fog-blue'
  border     = Convert-HexToHsl $CORE.'celadon'
  ring       = Convert-HexToHsl $CORE.'verdigris'

  primary    = $L.primary
  secondary  = $L.secondary
  accent     = $L.accent

  success    = $L.success
  warning    = $L.warning
  danger     = $L.danger
}

$L['on-primary']   = OnColor $L.primary
$L['on-secondary'] = OnColor $L.secondary
$L['on-accent']    = OnColor $L.accent
$D['on-primary']   = OnColor $D.primary
$D['on-secondary'] = OnColor $D.secondary
$D['on-accent']    = OnColor $D.accent

# ---------- Ensure folders ----------
New-Item -ItemType Directory -Force -Path app, components, public, scripts | Out-Null

# ---------- Tailwind config ----------
@"
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)","Inter","system-ui","Arial","sans-serif"],
        sans: ["var(--font-sans)","Inter","system-ui","Arial","sans-serif"],
        serif: ["var(--font-serif)","Georgia","serif"],
        mono: ["var(--font-mono)","ui-monospace","SFMono-Regular","Consolas","monospace"]
      },
      colors: {
        skin: {
          bg: "hsl(var(--bg) / <alpha-value>)",
          surface: "hsl(var(--surface) / <alpha-value>)",
          text: "hsl(var(--text) / <alpha-value>)",
          textMuted: "hsl(var(--text-muted) / <alpha-value>)",
          border: "hsl(var(--border) / <alpha-value>)",
          ring: "hsl(var(--ring) / <alpha-value>)",
          primary: "hsl(var(--primary) / <alpha-value>)",
          onPrimary: "hsl(var(--on-primary) / <alpha-value>)",
          secondary: "hsl(var(--secondary) / <alpha-value>)",
          onSecondary: "hsl(var(--on-secondary) / <alpha-value>)",
          accent: "hsl(var(--accent) / <alpha-value>)",
          onAccent: "hsl(var(--on-accent) / <alpha-value>)",
          success: "hsl(var(--success) / <alpha-value>)",
          onSuccess: "hsl(var(--on-success) / <alpha-value>)",
          warning: "hsl(var(--warning) / <alpha-value>)",
          onWarning: "hsl(var(--on-warning) / <alpha-value>)",
          danger: "hsl(var(--danger) / <alpha-value>)",
          onDanger: "hsl(var(--on-danger) / <alpha-value>)"
        },
        # Raw access to your named swatches (optional)
        cf: {
          'dark-moss-green': '$($CORE.'dark-moss-green')',
          'blood-red':       '$($CORE.'blood-red')',
          'folly':           '$($CORE.'folly')',
          'verdigris':       '$($CORE.'verdigris')',
          'celadon':         '$($CORE.'celadon')',

          'off-white-mist': '$($NEUTRALS.'off-white-mist')',
          'charcoal-slate': '$($NEUTRALS.'charcoal-slate')',
          'stone-gray':     '$($NEUTRALS.'stone-gray')',
          'ivory-cloud':    '$($NEUTRALS.'ivory-cloud')',
          'midnight-teal':  '$($NEUTRALS.'midnight-teal')',

          'solar-amber':   '$($VIBRANT.'solar-amber')',
          'skywave-blue':  '$($VIBRANT.'skywave-blue')',
          'clover-pop':    '$($VIBRANT.'clover-pop')',
          'rose-quartz':   '$($VIBRANT.'rose-quartz')',
          'cobalt-shadow': '$($VIBRANT.'cobalt-shadow')',

          'fern-dust':      '$($MUTED.'fern-dust')',
          'clay-taupe':     '$($MUTED.'clay-taupe')',
          'fog-blue':       '$($MUTED.'fog-blue')',
          'mulberry-smoke': '$($MUTED.'mulberry-smoke')',
          'pale-aqua-mist': '$($MUTED.'pale-aqua-mist')'
        }
      },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")]
};
"@ | Set-Content -Encoding UTF8 -Path .\tailwind.config.js

# ---------- Globals (tokens + your type hierarchy) ----------
@"
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ---- LIGHT ---- */
:root{
  --bg: $($L.bg); --surface: $($L.surface);
  --text: $($L.text); --text-muted: $($L.'text-muted');
  --border: $($L.border); --ring: $($L.ring);

  --primary: $($L.primary); --on-primary: $($L.'on-primary');
  --secondary: $($L.secondary); --on-secondary: $($L.'on-secondary');
  --accent: $($L.accent); --on-accent: $($L.'on-accent');

  --success: $($L.success); --on-success: 0 0% 100%;
  --warning: $($L.warning); --on-warning: 15 6% 10%;
  --danger: $($L.danger); --on-danger: 0 0% 100%;

  /* Fonts via next/font variables */
  --font-display: "Space Grotesk", Inter, ui-sans-serif, system-ui, "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif;
  --font-sans: "Inter", ui-sans-serif, system-ui, "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif;
  --font-serif: "Newsreader", Georgia, "Times New Roman", Times, serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;

  /* Responsive type scale (clean, approachable) */
  --step--1: clamp(0.85rem, 0.80rem + 0.3vw, 0.95rem);
  --step-0:  clamp(1.00rem, 0.92rem + 0.4vw, 1.125rem);
  --step-1:  clamp(1.25rem, 1.10rem + 0.8vw, 1.50rem);
  --step-2:  clamp(1.56rem, 1.28rem + 1.4vw, 1.95rem);
  --step-3:  clamp(1.95rem, 1.44rem + 2.1vw, 2.60rem);
  --step-4:  clamp(2.44rem, 1.60rem + 3.0vw, 3.40rem);
}

/* ---- DARK ---- */
:root.dark, [data-theme="dark"]{
  --bg: $($D.bg); --surface: $($D.surface);
  --text: $($D.text); --text-muted: $($D.'text-muted');
  --border: $($D.border); --ring: $($D.ring);

  --primary: $($D.primary); --on-primary: $($D.'on-primary');
  --secondary: $($D.secondary); --on-secondary: $($D.'on-secondary');
  --accent: $($D.accent); --on-accent: $($D.'on-accent');
}

/* Global defaults */
body{ font-family: var(--font-sans); font-size: var(--step-0); line-height: 1.6; background-color: hsl(var(--bg)); color: hsl(var(--text)); }

/* Headings: friendly, modern spacing */
h1,h2,h3{ font-family: var(--font-display); line-height: 1.15; letter-spacing: 0.01em; }
h4,h5,h6{ font-family: var(--font-display); line-height: 1.2;  letter-spacing: 0.005em; }
h1{ font-size: var(--step-4); font-weight: 700; }
h2{ font-size: var(--step-3); font-weight: 700; }
h3{ font-size: var(--step-2); font-weight: 600; }
h4{ font-size: var(--step-1); font-weight: 600; }
h5{ font-size: var(--step-0); font-weight: 600; }
h6{ font-size: var(--step--1); font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; }

/* Body text sizes */
p, li { font-size: var(--step-0); }
small, .meta { font-size: var(--step--1); opacity: .9; }

/* Editorial accent (quotes, pull-quotes) */
blockquote, .pullquote{
  font-family: var(--font-serif);
  font-size: var(--step-1);
  font-weight: 400;
  line-height: 1.45;
}

/* Buttons / UI */
button, .btn{ font-family: var(--font-sans); font-weight: 600; letter-spacing: 0.01em; }
.btn-primary{ @apply inline-flex items-center justify-center rounded-xl px-4 py-2; background: hsl(var(--primary)); color: hsl(var(--on-primary)); }
.btn-primary:hover{ filter: brightness(.95); }
.link-accent{ color: hsl(var(--primary)); }

/* Data & tables: tabular numbers for alignment */
.num, table td, .stat{
  font-feature-settings: "tnum" 1, "cv05" 1;
  font-variant-numeric: tabular-nums;
}

/* Code */
code, pre, .code { font-family: var(--font-mono); font-size: 0.95em; }
"@ | Set-Content -Encoding UTF8 -Path .\app\globals.css

# ---------- Fonts via next/font/google ----------
@"
import { Space_Grotesk, Inter, Newsreader, JetBrains_Mono } from "next/font/google";

export const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
export const sans    = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
export const serif   = Newsreader({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
export const mono    = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
"@ | Set-Content -Encoding UTF8 -Path .\app\fonts.ts

# ---------- Update layout to apply font vars ----------
@"
import "./globals.css";
import { display, sans, serif, mono } from "@/app/fonts";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Cumberland Flux",
  description: "Community Exploration & Conservation Group",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-skin-bg text-skin-text font-sans">
        <SiteHeader />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
"@ | Set-Content -Encoding UTF8 -Path .\app\layout.tsx

# ---------- Ensure Tailwind plugins ----------
npm i -D @tailwindcss/typography @tailwindcss/forms | Out-Null

# ---------- Commit & push ----------
git add tailwind.config.js app\globals.css app\fonts.ts app\layout.tsx
git commit -m "style(brand): integrate extended palette, semantic tokens, and Google Fonts"
git push origin main

Write-Host "✅ Extended palette + type hierarchy applied and pushed."
