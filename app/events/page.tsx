import events from "@/content/events.json";
import type { EventItem } from "@/lib/types";
import Link from "next/link";

export const metadata = { title: "Events • Cumberland Flux" };

export default function EventsPage() {
  const list = events as EventItem[];
  return (
    <section className="mx-auto max-w-3xl px-4">
      <h1 className="text-3xl font-bold">Events</h1>
      <ul className="mt-6 space-y-4">
        {list.map(e => (
          <li key={e.slug} className="card rounded-xl p-4">
            <h3 className="text-lg font-semibold">{e.title}</h3>
            <p className="text-skin-textMuted">{e.date}{e.time ? ` • ${e.time}` : ""} • {e.location}</p>
            {e.description && <p className="mt-2">{e.description}</p>}
            <div className="mt-3 flex gap-3">
              <Link className="link-accent" href={`/events/writeups/${e.slug}`}>Read notes</Link>
              {e.rsvp && <a className="link-accent" href="/join">RSVP</a>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
