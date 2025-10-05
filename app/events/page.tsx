import { events } from "./data";

export default function Events(){
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Upcoming Events</h1>
      <ul className="grid md:grid-cols-2 gap-6">
        {events.map((e,i)=>(
          <li key={i} className="rounded-2xl border p-5">
            <h2 className="text-xl font-semibold">{e.title}</h2>
            <p className="mt-1 text-sm">{new Date(e.date).toLocaleDateString()} {e.time?`• ${e.time}`:""}</p>
            <p className="text-sm text-slate-600">{e.location}</p>
            {e.description && <p className="mt-3">{e.description}</p>}
            {e.rsvp && (
              <form name="event-rsvp" method="POST" data-netlify="true" className="mt-4 space-y-2">
                <input type="hidden" name="form-name" value="event-rsvp"/>
                <input type="hidden" name="event" value={e.title}/>
                <input required className="w-full border rounded-lg p-2" name="name" placeholder="Your name"/>
                <input required className="w-full border rounded-lg p-2" name="email" type="email" placeholder="Email"/>
                <textarea className="w-full border rounded-lg p-2" name="notes" placeholder="Notes (optional)"/>
                <button className="px-4 py-2 rounded-xl bg-cf-accent text-white">RSVP</button>
              </form>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
