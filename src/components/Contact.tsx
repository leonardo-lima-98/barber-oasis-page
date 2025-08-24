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
            Agende seu horário ou tire suas dúvidas. Estamos prontos para oferecer 
            a melhor experiência em barbearia da cidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="border-0 bg-background hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center flex-shrink-0">
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

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 bg-background shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">
                  Agende seu Horário
                </CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contato para confirmar.
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone/WhatsApp</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(11) 9 9999-9999"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Serviço Desejado</Label>
                    <Select onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corte">Corte de Cabelo</SelectItem>
                        <SelectItem value="barba">Barba & Bigode</SelectItem>
                        <SelectItem value="sobrancelha">Sobrancelha</SelectItem>
                        <SelectItem value="combo-premium">Combo Premium</SelectItem>
                        <SelectItem value="pacote-mensal">Pacote Mensal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Data Preferida</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="time">Horário Preferido</Label>
                      <Select onValueChange={(value) => handleInputChange("time", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o horário" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="09:00">09:00</SelectItem>
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="11:00">11:00</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                          <SelectItem value="15:00">15:00</SelectItem>
                          <SelectItem value="16:00">16:00</SelectItem>
                          <SelectItem value="17:00">17:00</SelectItem>
                          <SelectItem value="18:00">18:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Observações (opcional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Alguma observação especial sobre o serviço?"
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gold-gradient hover:shadow-gold text-lg py-6"
                  >
                    Solicitar Agendamento
                  </Button>
                </form>
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