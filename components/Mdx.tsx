import type { ReactNode } from "react";
import type { MDXComponents } from "mdx/types";

export const mdxStyles = {
  wrapper: "prose prose-neutral max-w-none prose-headings:font-display prose-p:leading-7 prose-a:text-[hsl(var(--primary))] prose-strong:text-skin-text prose-li:marker:text-skin-textMuted prose-hr:border-skin-border",
  h1: "h1",
  h2: "h2 mt-10",
  h3: "h3 mt-8",
  p: "mt-4",
  a: "link-accent underline-offset-4 hover:underline",
  ul: "list-disc ml-6 mt-4",
  ol: "list-decimal ml-6 mt-4",
  li: "my-1",
  blockquote: "pullquote border-l-4 pl-4 border-skin-border bg-skin-surface/40 rounded-r-lg py-2",
  code: "code",
  pre: "code block rounded-xl border border-skin-border bg-skin-surface p-4 overflow-x-auto",
  hr: "my-8 border-skin-border",
  table: "w-full border-collapse my-6 text-sm",
  th: "border-b border-skin-border text-left pb-2 font-semibold",
  td: "border-b border-skin-border py-2",
};

export function Mdx({ children }: { children: ReactNode }) {
  return <div className={mdxStyles.wrapper}>{children}</div>;
}

export const mdxComponents: MDXComponents = {
  h1: (p) => <h1 className={mdxStyles.h1} {...p} />,
  h2: (p) => <h2 className={mdxStyles.h2} {...p} />,
  h3: (p) => <h3 className={mdxStyles.h3} {...p} />,
  p:  (p) => <p className={mdxStyles.p}  {...p} />,
  a:  (p) => <a className={mdxStyles.a}  {...p} />,
  ul: (p) => <ul className={mdxStyles.ul} {...p} />,
  ol: (p) => <ol className={mdxStyles.ol} {...p} />,
  li: (p) => <li className={mdxStyles.li} {...p} />,
  blockquote: (p) => <blockquote className={mdxStyles.blockquote} {...p} />,
  code: (p) => <code className={mdxStyles.code} {...p} />,
  pre:  (p) => <pre  className={mdxStyles.pre}  {...p} />,
  hr:   (p) => <hr   className={mdxStyles.hr}   {...p} />,
  table:(p) => <table className={mdxStyles.table} {...p} />,
  th:   (p) => <th   className={mdxStyles.th} {...p} />,
  td:   (p) => <td   className={mdxStyles.td} {...p} />,
};
