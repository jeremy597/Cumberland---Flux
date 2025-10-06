import { allPages } from "contentlayer/generated";
import { Mdx, mdxComponents } from "@/components/Mdx";
import { useMDXComponent } from "next-contentlayer/hooks";

export const metadata = {
  title: "About • Cumberland Flux",
  description: "About Cumberland Flux",
};

export default function AboutPage() {
  const doc = allPages.find(p => p.slug === "about");
  if (!doc) {
    return (
      <section className="prose max-w-3xl">
        <h1>About</h1>
        <p>Content not found. Make sure <code>content/pages/about.mdx</code> exists.</p>
      </section>
    );
  }
  const MDX = useMDXComponent(doc.body.code);
  return (
    <section className="mx-auto max-w-3xl px-4">
      <article className="mt-4">
        <Mdx>
          <MDX components={mdxComponents} />
        </Mdx>
      </article>
    </section>
  );
}
