import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "How to Join", href: "#join" },
    { name: "Store", href: "#store" },
    { name: "Discord", href: "https://discord.gg/ultimatemc", external: true },
    { name: "About Us", href: "#about" },
  ];

  const handleSmoothScroll = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glassmorphism"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <span className="font-minecraft text-white text-lg hover:text-blue-200 transition-colors duration-300">
                UltimateMC
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-200 transition-colors duration-300 text-sm font-medium"
                  >
                    {item.name}
                  </a>
                ) : (
                  <button
                    onClick={() => handleSmoothScroll(item.href)}
                    className="text-white hover:text-blue-200 transition-colors duration-300 text-sm font-medium"
                  >
                    {item.name}
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="glassmorphism hover:bg-white/20 transition-all duration-300 group"
            >
              <motion.div whileHover={{ scale: 1.1, rotate: 180 }} transition={{ duration: 0.3 }}>
                {theme === "light" ? (
                  <Sun className="h-5 w-5 text-white" />
                ) : (
                  <Moon className="h-5 w-5 text-white" />
                )}
              </motion.div>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 glassmorphism rounded-lg p-4"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <motion.div key={item.name} whileHover={{ x: 10 }}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-200 transition-colors duration-300 text-sm font-medium block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        handleSmoothScroll(item.href);
                        setMobileMenuOpen(false);
                      }}
                      className="text-white hover:text-blue-200 transition-colors duration-300 text-sm font-medium text-left w-full"
                    >
                      {item.name}
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
