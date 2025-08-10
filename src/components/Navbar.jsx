import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  Home,
  User,
  Code2,
  FolderKanban,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "AboutUs", href: "/about", icon: User },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Projects", href: "#projects", icon: FolderKanban },
  { name: "Contact", href: "#contact", icon: Phone },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <style>{`
        .shining-text {
          background: linear-gradient(
            90deg,
            #ffffff 0%,
            #fffee2ff 25%,
            #f8eedeff 50%,
            #9c9c9cff 75%,
            #ffffff 100%
          );
          background-size: 400% auto;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: shine 3s ease-in-out infinite;
          font-weight: bold;
          display: inline-block;
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
        }

        @keyframes shine {
          0% {
            background-position: 400% center;
          }
          100% {
            background-position: -100% center;
          }
        }

        .underline-hover {
          position: relative;
        }

        .underline-hover::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 2px;
          background-color: white;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .underline-hover:hover::after {
          transform: scaleX(1);
        }
      `}</style>

      <nav
        className={cn(
          "fixed top-4 left-1/2 transform -translate-x-1/2 z-50",
          "rounded-3xl shadow-xl transition-all duration-300 px-6 py-3 backdrop-blur-md",
          "border border-white/20 bg-white/10 dark:bg-black/20",
          isScrolled ? "scale-100" : "scale-100"
        )}
      >
        <div className="flex items-center justify-between gap-4 max-w-screen-xl mx-auto">
          {/* Logo - Bigger and spaced left */}
          <a
            href="#hero"
            className="text-2xl font-bold text-primary flex items-center ml-2 mr-8"
          >
            <span className="shining-text text-3xl">ctrl</span>
            <span className="ml-1 text-purple text-lg">.A</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map(({ name, href, icon: Icon }, key) => (
              <a
                key={key}
                href={href}
                className="text-sm font-semibold text-white/80 hover:text-white underline-hover transform transition duration-300 hover:scale-125 hover:-translate-y-1 hover:drop-shadow-lg flex items-center gap-2"
                style={{ perspective: "500px" }}
              >
                <Icon className="w-4 h-4" />
                {name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Glassy Sidebar */}
        <div
          className={cn(
            "fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white/10 dark:bg-black/30 backdrop-blur-xl border-l border-white/20 z-40",
            "transition-transform duration-500 ease-in-out md:hidden rounded-l-2xl shadow-2xl",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={28} />
          </button>

          <div className="flex flex-col items-start gap-6 px-8 pt-24 text-white">
            {navItems.map(({ name, href, icon: Icon }, key) => (
              <a
                key={key}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 text-lg font-medium hover:text-gray-300 transition-all"
              >
                <Icon className="w-5 h-5" />
                {name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};
