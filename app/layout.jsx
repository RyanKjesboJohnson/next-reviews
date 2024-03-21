import Link from "next/link";
import NavBar from "../components/NavBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-orange-50 flex flex-col gap-2 min-h-screen  px-4 py-2">
        <header>
<NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="text-center text-xs border-t py-3">
          Game data and images courtesy of{" "}
          <a className='text-orange-800 hover:underline' href="https://rawg.io/" target="_blank">
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
