import Header from "@/components/Header";
import "./globals.css";
import Provider from "./Provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {/* Header */}
          <Header />
          {/* Navbar */}

          {/* Searchbox */}
          {children}
        </Provider>
      </body>
    </html>
  );
}
