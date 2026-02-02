"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Github, Twitter, Linkedin, Sun, Moon, Rss } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

// Custom Substack icon (Lucide doesn't have one)
const Substack = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const navigation = [
  { name: "Posts", href: "/blog" },
  { name: "About", href: "/about" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/tomwalczak", icon: Github },
  { name: "Substack", href: "https://tomwalczak.substack.com", icon: Substack },
  { name: "Twitter", href: "https://x.com/tom_walchak", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/in/tom-walczak", icon: Linkedin },
  { name: "RSS", href: "/rss.xml", icon: Rss },
];

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-4xl items-center mx-auto px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg">Tom Walczak</span>
        </Link>
        
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === item.href || pathname.startsWith(item.href + "/")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                asChild
              >
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              </Button>
            );
          })}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </header>
  );
}
