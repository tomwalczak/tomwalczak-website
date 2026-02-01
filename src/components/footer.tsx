import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/tomwalczak", icon: Github },
  { name: "Twitter", href: "https://x.com/tom_walchak", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/in/tom-walczak", icon: Linkedin },
  { name: "Email", href: "mailto:tom@tomwalczak.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Tom Walczak. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
