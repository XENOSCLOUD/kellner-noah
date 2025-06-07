"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toggle";
import { Logo } from "@/components/logo";
import { Menu } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function OnePageNavigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Update active section
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }

      // Update scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = Math.min(scrolled / documentHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const activeIndex = navItems.findIndex(item => item.href.slice(1) === activeSection);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
        style={{ scaleX: scrollProgress }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress }}
        transition={{ duration: 0.1 }}
      />

      <header className="fixed top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center">
            {/* Logo - Left */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection("#home")}
                className="flex items-center space-x-2 transition-all duration-300 hover:opacity-80 hover:scale-105"
                aria-label="Go to home section"
              >
                <Logo />
              </button>
            </div>

            {/* Centered Navigation */}
            <div className="flex-1 flex justify-center">
              <nav className="hidden lg:flex items-center relative">
                {/* Navigation Container */}
                <div className="relative bg-background/40 backdrop-blur-sm border border-border/50 rounded-full px-2 py-2 shadow-lg">
                  {/* Navigation Grid */}
                  <div className="relative grid grid-cols-5 gap-2">
                    {/* Active Indicator */}
                    <motion.div
                      className="absolute inset-y-1 bg-primary/20 rounded-full border border-primary/30"
                      animate={{
                        x: `${activeIndex * 100}%`
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                      style={{
                        width: `calc(100% / 5)`,
                        left: 0
                      }}
                    />

                    {/* Navigation Items */}
                    {navItems.map((item, index) => (
                      <button
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                        className={cn(
                          "relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 z-10 rounded-full min-w-[80px] text-center",
                          activeSection === item.href.slice(1)
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </nav>

              {/* Mobile Navigation - Centered */}
              <nav className="lg:hidden flex items-center">
                <div className="bg-background/40 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    {navItems.find(item => item.href.slice(1) === activeSection)?.label || "Home"}
                  </span>
                </div>
              </nav>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <ModeToggle />
              
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="lg:hidden relative overflow-hidden hover:bg-primary/10"
                  >
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-6 mt-8">
                    <div className="text-lg font-semibold mb-4">Navigation</div>
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={cn(
                          "text-left text-lg font-medium transition-all duration-300 hover:translate-x-2 group relative overflow-hidden rounded-lg p-3",
                          activeSection === item.href.slice(1)
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        )}
                      >
                        <div className="flex items-center space-x-3">
                          <motion.div
                            className="w-2 h-2 bg-primary rounded-full"
                            animate={{
                              scale: activeSection === item.href.slice(1) ? 1 : 0,
                              opacity: activeSection === item.href.slice(1) ? 1 : 0
                            }}
                            transition={{ duration: 0.2 }}
                          />
                          <span>{item.label}</span>
                        </div>
                        
                        {/* Mobile hover effect */}
                        <motion.div
                          className="absolute left-0 top-0 h-full w-1 bg-primary"
                          initial={{ scaleY: 0 }}
                          whileHover={{ scaleY: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.button>
                    ))}
                    
                    {/* Mobile Progress Indicator */}
                    <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-2">Page Progress</div>
                      <div className="w-full bg-background rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          animate={{ width: `${scrollProgress * 100}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {Math.round(scrollProgress * 100)}% complete
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}