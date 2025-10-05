export default function SiteFooter(){
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600">
        © {new Date().getFullYear()} Cumberland Flux — Inclusive, activity-first community.
      </div>
    </footer>
  );
}
