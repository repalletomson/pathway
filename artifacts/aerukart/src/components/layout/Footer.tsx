import { Link } from "wouter";
import { Twitter, Instagram, Linkedin, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-display font-bold text-2xl tracking-tight text-foreground">
                Aerukart<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground mt-4 max-w-xs">
              We help local businesses, startups, and SMEs establish a powerful online presence and grow through technology.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted-foreground hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-muted-foreground hover:text-accent transition-colors">Custom Websites</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-accent transition-colors">E-commerce</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-accent transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-accent transition-colors">Web Applications</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-accent transition-colors">SEO Optimization</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>123 Innovation Drive, Tech District<br />San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>hello@aerukart.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Aerukart. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}