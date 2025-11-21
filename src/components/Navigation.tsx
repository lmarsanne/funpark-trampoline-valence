import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, createElement } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Trampoline" },
    { to: "/karaoke", label: "Karaoké" },
    { to: "/quiz-boxing", label: "Quiz Boxing" },
    { to: "/bowling", label: "Bowling" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Fun Park Valence
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-lg font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {createElement('guidap-use-giftcard-button')}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-4 rounded-lg text-lg font-medium transition-colors ${
                  isActive(link.to)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/80 hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2 px-4">
              {createElement('guidap-use-giftcard-button')}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
