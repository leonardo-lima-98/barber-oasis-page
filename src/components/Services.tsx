import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Users, Eye, Package, SendHorizonal } from "lucide-react";


const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Corte de Cabelo",
      description: "Cortes clássicos e modernos, personalizados para seu estilo e formato de rosto.",
      features: ["Lavagem inclusa", "Finalização profissional", "Consultoria de estilo"]
    },
    {
      icon: Users,
      title: "Barba & Bigode",
      description: "Aparos precisos, design de barba e tratamentos para manter sua barba sempre impecável.",
      features: ["Aparador profissional", "Hidratação", "Produtos premium"]
    },
    {
      icon: Eye,
      title: "Sobrancelha",
      description: "Design e modelagem de sobrancelhas masculinas para um visual mais marcante.",
      features: ["Técnica especializada", "Formato natural", "Acabamento perfeito"]
    },
    {
      icon: Package,
      title: "Pacotes Completos",
      description: "Combine nossos serviços e economize com pacotes especiais.",
      features: ["Desconto especial", "Atendimento completo", "Experiência premium"]
    }
  ];

  return (
    <section id="services" className="py-10 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para o homem moderno, 
            utilizando técnicas tradicionais e equipamentos de última geração.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 bg-background">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-orange transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="p-4 bg-accent/10 rounded-lg border border-accent/20 text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Não encontrou o que procura?
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Entre em contato conosco!
          </p>
          <Button
            variant="outline"
            className="w-60"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <strong>
            Fale conosco
            </strong>
            <SendHorizonal className="w-4 h-4 mr-2" />
          </Button>
        </div> */}
        
      </div>
    </section>
  );
};

export default Services;