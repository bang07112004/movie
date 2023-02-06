"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

function Provider({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 bg-gray-300 transition-colors duration-500 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}

export default Provider;
