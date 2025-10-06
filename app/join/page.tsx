export default function Join() {
  return (
    <section className="max-w-xl space-y-4">
      <h1 className="text-3xl font-bold">Join our list</h1>
      <p className="text-skin-textMuted">Get event reminders and updates. We keep it low-volume.</p>
      <form name="join" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-3">
        <input type="hidden" name="form-name" value="join" />
        <p className="hidden">
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>
        <input required className="w-full border rounded-lg p-2" name="name" placeholder="Your name" />
        <input required className="w-full border rounded-lg p-2" name="email" type="email" placeholder="Email" />
        <button className="btn-primary">Subscribe</button>
      </form>
    </section>
  );
}
