import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Corte Clássico",
      price: "35",
      description: "Perfeito para quem busca um visual clássico e elegante",
      features: [
        "Corte personalizado",
        "Lavagem e finalização",
        "Consultoria de estilo",
        "Produtos premium"
      ],
      popular: false
    },
    {
      name: "Combo Premium",
      price: "65",
      description: "Nosso pacote mais completo para o visual perfeito",
      features: [
        "Corte + Barba",
        "Lavagem e finalização",
        "Design de sobrancelha",
        "Hidratação facial",
        "Produtos premium",
        "Atendimento VIP"
      ],
      popular: true
    },
    {
      name: "Barba & Bigode",
      price: "25",
      description: "Mantenha sua barba sempre impecável",
      features: [
        "Aparador profissional",
        "Design personalizado",
        "Hidratação",
        "Produtos especiais"
      ],
      popular: false
    },
    {
      name: "Pacote Mensal",
      price: "120",
      description: "Para quem quer estar sempre no visual",
      features: [
        "2 cortes no mês",
        "2 barbas no mês",
        "Sobrancelha inclusa",
        "Desconto de 30%",
        "Agendamento prioritário"
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="prices" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Nossos Preços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Qualidade premium com preços justos. Escolha o serviço ideal para você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-card ${
                plan.popular 
                  ? 'border-accent shadow-gold scale-105' 
                  : 'border-border hover:border-accent/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold-gradient text-primary px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">R$ {plan.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gold-gradient hover:shadow-gold' 
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                  onClick={scrollToContact}
                >
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-primary mb-2">
            Dúvidas sobre nossos preços?
          </h3>
          <p className="text-muted-foreground mb-4">
            Entre em contato conosco e tire todas as suas dúvidas. 
            Oferecemos consultas gratuitas para novos clientes.
          </p>
          <Button variant="outline" onClick={scrollToContact}>
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;