"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, FileText, Linkedin, Github, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About Me", href: "#about" },
  { label: "Tech Arsenal", href: "#tech" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setActiveSection(href.replace("#", ""));
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#about" className="flex items-center gap-2">
            <Image
              src="/logos/profile.jpg"
              alt="Joe Chua"
              width={32}
              height={32}
              className="rounded-full object-cover"
              // className="object-cover w-full h-full" classes from the other image tag
              priority
            />
            <span className="font-semibold text-foreground">Joe Chua</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.href.replace("#", "")
                    ? "border border-border text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-1 border border-border rounded-full px-3 py-1.5">
            <Link
              href="mailto:e0958350@u.nus.edu"
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </Link>
            <Link
              href="/docs/resume.pdf"
              target="_blank"
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Resume"
            >
              <FileText className="w-4 h-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/joe-chua/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link
              href="https://github.com/joechua"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.href.replace("#", "")
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border px-4">
              <Link
                href="mailto:e0958350@u.nus.edu"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="/docs/resume.pdf"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FileText className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/joe-chua/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/joechua"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
