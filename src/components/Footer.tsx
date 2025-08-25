import { Scissors, Instagram, Facebook, MessageSquare } from "lucide-react";
import { usePlaceInfo } from "@/hooks/usePlaceInfo";


const Footer = () => {
  const { placeInfo, loadingPlaceInfo, errorPlaceInfo } = usePlaceInfo();

  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Preços", href: "#prices" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Sobre Nós", href: "#about" },
    { name: "Contato", href: "#contact" }
  ];

  const services = [
    "Corte de Cabelo",
    "Barba & Bigode", 
    "Sobrancelha",
    "Combo Premium",
    "Pacote Mensal"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center">
                <Scissors className="w-10 h-10 text-white" />
              </div>
              <span className="text-2xl font-heading font-bold">
                Estilo Boss
              </span>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed">
              Transformando estilos há mais de 5 anos. Onde tradição e 
              modernidade se encontram para criar o visual perfeito.
            </p>

            <div className="space-y-2 text-sm">
              <p className="text-primary-foreground/80">
                📍 {placeInfo ? placeInfo.vicinity : "carregando"}
              </p>
              <p className="text-primary-foreground/80">
                📞 (11) 9 9999-9999
              </p>
              <p className="text-primary-foreground/80">
                🕒 Seg-Sex: 9h às 19h | Sáb: 8h às 16h
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-0.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-primary-foreground/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
            <div className="space-y-3">
              <button
                onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                className="w-full bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </button>
              <button
                onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </button>
              <button
                onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Elite Barber. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-primary-foreground/60 hover:text-accent transition-colors">
                Política de Privacidade
              </button>
              <button className="text-primary-foreground/60 hover:text-accent transition-colors">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;