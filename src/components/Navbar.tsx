import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Button from "./Button";
import { Github } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
          : "bg-background/0 backdrop-blur-md py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-background rounded-full animate-pulse-slow"></div>
              </div>
              <span className="text-xl font-semibold text-foreground">
                Brain<span className="gradient-text">Heart</span>
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#why"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Why It Matters
            </a>
            <a
              href="#vision"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Vision
            </a>
            <a
              href="#tech"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Tech Stack
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              icon={<Github className="h-5 w-5" />}
              className="hidden sm:flex"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              GitHub
            </Button>
            <Button
              variant="tech"
              size="sm"
              onClick={() => window.open("#get-involved", "_self")}
            >
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
