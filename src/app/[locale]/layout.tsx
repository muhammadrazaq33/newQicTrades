import Footer from "@/components/shared/layout/Footer";
import "./globals.css";
import AppProvider from "@/components/shared/AppProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
        <Footer/>
      </body>
    </html>
  );
}
