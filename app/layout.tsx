import Script from "next/script";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Script id="theme-init" strategy="beforeInteractive">{`
          (function () {
            try {
              var key = "theme";
              var stored = localStorage.getItem(key);
              var theme =
                stored === "dark" || stored === "light"
                  ? stored
                  : (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
              document.documentElement.dataset.theme = theme;
            } catch (e) {}
          })();
        `}</Script>
        
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
