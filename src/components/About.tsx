import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Scissors } from "lucide-react";
import interiorImage from "@/assets/barbershop-interior.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excelência",
      description: "Buscamos sempre a perfeição em cada corte, utilizando técnicas apuradas e produtos de alta qualidade."
    },
    {
      icon: Users,
      title: "Relacionamento",
      description: "Construímos laços duradouros com nossos clientes, oferecendo um atendimento personalizado e acolhedor."
    },
    {
      icon: Clock,
      title: "Tradição",
      description: "Respeitamos as técnicas clássicas da barbearia, combinando-as com as tendências mais modernas."
    },
    {
      icon: Scissors,
      title: "Paixão",
      description: "Cada corte é uma obra de arte. Nossa paixão pela profissão se reflete no resultado final."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Nossa História
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A <span className="font-semibold text-accent">Elite Barber</span> nasceu da paixão pela arte 
              da barbearia tradicional, combinada com técnicas modernas e um atendimento diferenciado. 
              Há mais de 5 anos, transformamos não apenas o visual dos nossos clientes, mas também 
              sua autoestima e confiança.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nosso espaço foi cuidadosamente projetado para oferecer uma experiência única, 
              onde cada detalhe reflete nosso compromisso com a qualidade e o bem-estar. 
              Aqui, tradição e modernidade se encontram para criar o visual perfeito para você.
            </p>

            {/* Mission */}
            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Elevar a autoestima masculina através de serviços de barbearia de excelência, 
                proporcionando uma experiência única que combina técnica, qualidade e atendimento 
                personalizado em um ambiente acolhedor e sofisticado.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Clientes satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Taxa de satisfação</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={interiorImage}
              alt="Interior elegante da Barbearia Elite com decoração sofisticada"
              className="w-full h-[500px] object-cover rounded-lg shadow-card"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-primary mb-4">
              Nossos Valores
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nossa jornada e garantem a excelência em cada atendimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 bg-muted/30 hover:bg-muted/50 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-3">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;