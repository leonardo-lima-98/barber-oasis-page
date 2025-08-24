import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    toast({
      title: "Agendamento solicitado!",
      description: "Entraremos em contato em breve para confirmar seu horário.",
    });
    setFormData({
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua das Flores, 123",
      detail: "Centro, São Paulo - SP"
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
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Venha nos visitar ou tire suas dúvidas. Atendemos por ordem de chegada 
            para oferecer a melhor experiência em barbearia da cidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

            {/* Quick Actions */}
            <div className="space-y-3">
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
          </div>

          {/* Info Card */}
          <div className="space-y-6">
            <Card className="border-0 bg-background shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">
                  Atendimento por Ordem de Chegada
                </CardTitle>
                <p className="text-muted-foreground">
                  Não trabalhamos com agendamentos. Venha até nossa loja e seja atendido por ordem de chegada.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">
                    Como funciona?
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Chegue na barbearia durante nosso funcionamento</li>
                    <li>• Aguarde sua vez na fila</li>
                    <li>• Seja atendido pelos nossos profissionais</li>
                    <li>• Tempo médio de espera: 15-30 minutos</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
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

        {/* Map Section */}
        <div className="mt-16">
          <Card className="border-0 bg-background shadow-card overflow-hidden">
            <CardContent className="p-0">
              <div className="h-64 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-muted-foreground">
                    Mapa interativo será carregado aqui
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Rua das Flores, 123 - Centro, São Paulo - SP
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;