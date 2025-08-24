import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Scissors } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center">
              <Scissors className="w-6 h-6 text-primary" />
            </div>
            <span className="text-2xl font-heading font-bold text-primary">
              Elite Barber
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("prices")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Preços
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button - Desktop */}
          <Button
            variant="default"
            className="hidden md:flex bg-gold-gradient hover:shadow-gold"
            onClick={() => scrollToSection("contact")}
          >
            Agendar Horário
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("prices")}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Preços
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Contato
              </button>
              <Button
                variant="default"
                className="w-full bg-gold-gradient hover:shadow-gold"
                onClick={() => scrollToSection("contact")}
              >
                Agendar Horário
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;