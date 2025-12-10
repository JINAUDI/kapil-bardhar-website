import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: "home", label: "Home", route: null },
    { id: "legacy", label: "Our Legacy", route: "/our-legacy" },
    { id: "team", label: "Our Team", route: null },
    { id: "practice", label: "Practice Areas", route: null },
    { id: "clients", label: "Our Clients", route: null },
    { id: "judgments", label: "Judgments", route: null },
  ];

  const handleNavClick = (id: string, route: string | null) => {
    if (route) {
      navigate(route);
    } else {
      onNavigate(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-3 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-primary-foreground">B&B</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-foreground">Bardhar & Bardhar</h1>
              <p className="text-xs text-muted-foreground">Associates</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.route)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeSection === item.id
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => handleNavClick("contact")}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)]"
            >
              Request Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.route)}
                  className={`px-4 py-3 text-left rounded-md transition-colors ${
                    activeSection === item.id
                      ? "bg-secondary text-primary font-medium"
                      : "text-muted-foreground hover:bg-secondary/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => handleNavClick("contact")}
                className="mt-4 bg-gradient-to-r from-primary to-accent text-primary-foreground"
              >
                Request Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
