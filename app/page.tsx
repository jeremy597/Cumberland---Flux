import Link from "next/link";

export default function Home(){
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">Belonging through action.</h1>
      <p className="max-w-2xl">
        Inclusive, alcohol-optional events—coffee socials, walks, skills, and conservation days.
      </p>
      <div className="flex gap-3">
        <Link href="/events" className="px-4 py-2 rounded-xl bg-cf-accent text-white">See events</Link>
        <Link href="/join" className="px-4 py-2 rounded-xl border">Join mailing list</Link>
      </div>
    </section>


<div className="p-4 my-4 bg-red-500 text-white text-xs">Tailwind test</div>



  );
}
