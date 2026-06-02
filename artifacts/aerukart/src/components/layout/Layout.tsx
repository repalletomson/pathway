import { Link, useLocation } from "wouter";
import { ThemeProvider } from "../theme-provider";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="aerukart-theme">
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}