import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, MessageSquare } from "lucide-react";
import { usePlaceInfo } from "@/hooks/usePlaceInfo";

const Contact = () => {
  const { placeInfo, loadingPlaceInfo, errorPlaceInfo } = usePlaceInfo();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: placeInfo ? placeInfo.infoAddrs : "carregando",
      detail: placeInfo ? placeInfo.detailAddrs : "carregando",
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 9 9999-9999",
      detail: "WhatsApp disponível"
    },
    {
      icon: Clock,
      title: "Funcionamento",
      info: "Seg a Sex: 9h às 19h",
      detail: "Sáb: 8h às 16h"
    }
  ];

  return (
    <section id="contact" className="py-6 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Venha nos visitar ou tire suas dúvidas. Atendemos por ordem de chegada 
            para oferecer a melhor experiência em barbearia da cidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="border-0 bg-background hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-foreground font-medium">
                        {item.info}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Card */}
          <div className="space-y-4">
            <Card className="border-0 bg-background shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">
                  Atendimento por Ordem de Chegada
                </CardTitle>
                <p className="text-muted-foreground">
                  Não trabalhamos com agendamentos. Venha até nossa loja e seja atendido por ordem de chegada.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="p-2 bg-muted rounded-lg">
                  <h4 className="font-semibold text-primary mb-1">
                    Como funciona?
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Chegue na barbearia durante nosso funcionamento</li>
                    <li>• Aguarde sua vez na fila</li>
                    <li>• Seja atendido pelos nossos profissionais</li>
                    <li>• Tempo médio de espera: 15-30 minutos</li>
                  </ul>
                </div>
                
                <div className="p-2 bg-accent/10 rounded-lg border border-accent/20">
                  <h4 className="font-semibold text-accent mb-2">
                    💡 Dica Especial
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Para menor tempo de espera, recomendamos vir entre terça e quinta-feira, 
                    de manhã ou meio da tarde.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
        {/* Quick Actions */}
        <div className="mt-5 w-full max-w-sm mx-auto space-y-4">
          <Button
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
          
          <Button
            variant="outline"
            className="w-full"
            onClick={() => window.open("tel:+5511999999999", "_blank")}
          >
            <Phone className="w-4 h-4 mr-2" />
            Ligar Agora
          </Button>
        </div>

        {/* Map Section */}
        <section id="map" className="mt-6">
          <Card className="border-0 bg-background shadow-card overflow-hidden">
            <CardContent className="p-0">
              <div className="h-80 bg-muted flex items-center justify-center">
                <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBW6iL7oU9puJavBHzH-wPzSt1bm-ogyS8&q=Estilo+Boss+Barbearia,Cachoeira+do+Bom+Jesus,Florianópolis,SC&zoom=15"
                width="100%" 
                height="100%" 
                loading="lazy">
                </iframe>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </section>
  );
};

export default Contact;