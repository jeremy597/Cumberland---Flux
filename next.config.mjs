import createMDX from "@next/mdx";

// Configure MDX (official Next.js plugin) with useful remark/rehype addons
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-gfm")],
    rehypePlugins: [
      require("rehype-slug"),
      [require("rehype-autolink-headings"), { behavior: "wrap", properties: { className: ["anchor"] } }],
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["tsx", "ts", "jsx", "js", "mdx"], // allow MDX in /app
};

export default withMDX(nextConfig);
