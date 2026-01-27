import Link from "next/link";
import { Mail, FileText, Linkedin, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Thank You Section */}
        <div className="mb-12">
          <div className="flex items-start gap-3 mb-2">
            <div className="w-1 h-8 bg-primary mt-1" />
            <h2 className="text-3xl font-bold text-foreground">Thank You!</h2>
          </div>
          <p className="text-muted-foreground ml-4 mb-6">
            Thanks for reading up till this point! Feel free to contact/ reach out to me :)
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-1 border border-border rounded-full px-4 py-2 w-fit ml-4">
            <Link
              href="mailto:e0958350@u.nus.edu"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
            <Link
              href="/docs/resume.pdf"
              target="_blank"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Resume"
            >
              <FileText className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/joe-chua/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/wasjoe1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
          <p>Last Edited: 24-01-2026</p>
          <p>
            {`© ${currentYear} Joe Chua. Built with React & TypeScript.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
