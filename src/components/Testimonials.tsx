import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Executivo",
      content: "Simplesmente a melhor barbearia da cidade! O atendimento é impecável e o resultado sempre supera minhas expectativas. Já sou cliente há 2 anos e nunca pensei em trocar.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Rafael Santos",
      role: "Empresário",
      content: "Profissionais extremamente qualificados e um ambiente acolhedor. O cuidado com os detalhes é impressionante. Recomendo para todos que buscam qualidade premium.",
      rating: 5,
      image: "👨‍💻"
    },
    {
      name: "João Pedro",
      role: "Advogado",
      content: "A Elite Barber transformou completamente meu visual. Desde o primeiro atendimento me senti em casa. A pontualidade e profissionalismo são exemplares.",
      rating: 5,
      image: "👨‍⚖️"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que eles têm a dizer sobre nossa experiência.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-background hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center text-xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <h3 className="text-2xl font-heading font-bold text-primary mb-4">
            Quer fazer parte desta experiência?
          </h3>
          <p className="text-muted-foreground mb-6">
            Agende seu horário e descubra por que somos a escolha de centenas de clientes satisfeitos.
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gold-gradient text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-gold transition-all duration-300"
          >
            Agendar Agora
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">5.0</div>
            <div className="text-sm text-muted-foreground">Avaliação média</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">1000+</div>
            <div className="text-sm text-muted-foreground">Clientes atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">98%</div>
            <div className="text-sm text-muted-foreground">Recomendam</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">5+</div>
            <div className="text-sm text-muted-foreground">Anos no mercado</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;