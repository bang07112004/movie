import BackToTopButton from "@/components/BackToTopButton ";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import "./globals.css";
import Provider from "./Provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-amber-400">
        <Provider>
          {/* Header */}
          <Header />
          {/* Navbar */}
          <Navbar />
          {/* Searchbox */}
          <SearchBox />
          {children}
          <BackToTopButton />
        </Provider>
      </body>
    </html>
  );
}
