import type { MDXComponents } from "mdx/types";

// Map native markdown elements to your tokenized Tailwind classes.
// Next's MDX runtime will call this when rendering any .mdx file.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ className, ...props }) => <h1 className={["h1", className].filter(Boolean).join(" ")} {...props} />,
    h2: ({ className, ...props }) => <h2 className={["h2 mt-10", className].filter(Boolean).join(" ")} {...props} />,
    h3: ({ className, ...props }) => <h3 className={["h3 mt-8", className].filter(Boolean).join(" ")} {...props} />,
    p:  ({ className, ...props }) => <p className={["mt-4", className].filter(Boolean).join(" ")} {...props} />,
    a:  ({ className, ...props }) => <a className={["link-accent underline-offset-4 hover:underline", className].filter(Boolean).join(" ")} {...props} />,
    ul: ({ className, ...props }) => <ul className={["list-disc ml-6 mt-4", className].filter(Boolean).join(" ")} {...props} />,
    ol: ({ className, ...props }) => <ol className={["list-decimal ml-6 mt-4", className].filter(Boolean).join(" ")} {...props} />,
    li: ({ className, ...props }) => <li className={["my-1", className].filter(Boolean).join(" ")} {...props} />,
    blockquote: ({ className, ...props }) => <blockquote className={["pullquote border-l-4 pl-4 border-skin-border bg-skin-surface/40 rounded-r-lg py-2", className].filter(Boolean).join(" ")} {...props} />,
    code: ({ className, ...props }) => <code className={["code", className].filter(Boolean).join(" ")} {...props} />,
    pre: ({ className, ...props }) => <pre className={["code block rounded-xl border border-skin-border bg-skin-surface p-4 overflow-x-auto", className].filter(Boolean).join(" ")} {...props} />,
    hr: ({ className, ...props }) => <hr className={["my-8 border-skin-border", className].filter(Boolean).join(" ")} {...props} />,
    table: ({ className, ...props }) => <table className={["w-full border-collapse my-6 text-sm", className].filter(Boolean).join(" ")} {...props} />,
    th: ({ className, ...props }) => <th className={["border-b border-skin-border text-left pb-2 font-semibold", className].filter(Boolean).join(" ")} {...props} />,
    td: ({ className, ...props }) => <td className={["border-b border-skin-border py-2", className].filter(Boolean).join(" ")} {...props} />,
  };
}
