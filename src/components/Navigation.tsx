import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, createElement } from "react";
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const links: {
    to: string;
    label: string;
    external?: boolean;
  }[] = [{
    to: "/",
    label: "Trampoline"
  }, {
    to: "/bowling",
    label: "Bowling"
  }, {
    to: "/karaoke",
    label: "Karaoké"
  }, {
    to: "/quiz-boxing",
    label: "Quiz Boxing"
  }, {
    to: "/billard",
    label: "Billard"
  }, {
    to: "/anniversaire-enfant",
    label: "Anniversaire Enfant"
  }, {
    to: "/entreprises",
    label: "Entreprises"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span style={{
            color: '#0A1F44'
          }} className="text-2xl font-extrabold">
              Valence Fun Park
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map(link => link.external ? <a key={link.to} href={link.to} target="_blank" rel="noopener noreferrer" className="text-lg font-medium transition-colors" style={{
            color: '#0A1F44'
          }}>
                  {link.label}
                </a> : <Link key={link.to} to={link.to} className="text-lg font-medium transition-colors" style={{
            color: isActive(link.to) ? '#F57C51' : '#0A1F44'
          }}>
                  {link.label}
                </Link>)}
            {createElement('guidap-use-giftcard-button')}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" style={{
          color: '#0A1F44'
        }} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 space-y-2 bg-white">
            {links.map(link => link.external ? <a key={link.to} href={link.to} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block py-2 px-4 rounded-lg text-lg font-medium transition-colors hover:bg-gray-100" style={{
          color: '#0A1F44'
        }}>
                  {link.label}
                </a> : <Link key={link.to} to={link.to} onClick={() => setIsOpen(false)} className="block py-2 px-4 rounded-lg text-lg font-medium transition-colors hover:bg-gray-100" style={{
          color: isActive(link.to) ? '#F57C51' : '#0A1F44',
          backgroundColor: isActive(link.to) ? 'rgba(245, 124, 81, 0.1)' : 'transparent'
        }}>
                  {link.label}
                </Link>)}
            <div className="flex flex-col gap-2 pt-2 px-4">
              {createElement('guidap-use-giftcard-button')}
            </div>
          </div>}
      </div>
    </nav>;
};