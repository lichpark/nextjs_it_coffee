import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Heder";
import Menu from "./components/Menu";

export const revalidate = 0;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header>
          <Menu />
        </Header>
        {children}
        <footer>footer position</footer>
      </body>
    </html>
  );
}
