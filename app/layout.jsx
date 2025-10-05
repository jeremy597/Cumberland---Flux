import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = { title: "Cumberland Flux", description: "Community Exploration & Conservation Group" };

export default function RootLayout({ children }:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <SiteHeader/>
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <SiteFooter/>
      </body>
    </html>
  );
}
