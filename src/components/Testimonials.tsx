import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { usePlaceInfo } from "@/hooks/usePlaceInfo";
import { usePlaceTestimonials } from "@/hooks/usePlaceTestimonials";

const Testimonials = () => {
  const { reviews, loadingReviews, errorReviews  } = usePlaceTestimonials();
  const { placeInfo, loadingPlaceInfo, errorPlaceInfo } = usePlaceInfo();
  
  return (
    <section id="testimonials" className="py-10 bg-muted/50">
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

        {/* Testimonials Grid */}
        {loadingReviews ? (
          <p>Carregando Indicadores...</p>
        ) : errorReviews ? (
          <p className="text-red-500">Erro: {errorReviews.message}</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="border-0 bg-background hover:shadow-card transition-all duration-300 h-80 flex flex-col"
              >
                <CardContent className="p-6 flex flex-col flex-grow">
                  {/* Rating Stars */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex-col-2 flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {review.time}
                    </p>
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed italic line-clamp-6">
                    "{review.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center text-xl mr-4 overflow-hidden">
                      <img src={review.image} alt={review.name} className="w-full h-full object-cover"/>
                    </div>
                    <div>
                      <a href={review.name_url} target="_blank" rel="noopener noreferrer">
                        <h4 className="font-semibold text-primary">{review.name}</h4>
                      </a>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Card de + Mais Avaliações */}
            <Card className="border-2 border-dashed border-accent bg-background hover:shadow-card transition-all duration-300 h-80 flex items-center justify-center">
              <a
                href="https://maps.google.com/?cid=13191679926128011682" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2"
              >
                <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center text-accent text-3xl font-bold">
                  +
                </div>
                <span className="text-primary font-semibold">Mais avaliações</span>
              </a>
            </Card>
          </div>
        )}
        
        {/* Trust Indicators */}
        {loadingPlaceInfo ? (
          <p>Carregando Indicadores...</p>
        ) : errorPlaceInfo ? (
          <p className="text-red-500">Erro: {errorPlaceInfo.message}</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">
                {placeInfo ? placeInfo.rating: " - "}
              </div>
              <div className="text-sm text-muted-foreground">Avaliação média</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">
                {placeInfo ? placeInfo.total: " - "}
              </div>
              <div className="text-sm text-muted-foreground">Total de avaliações</div>
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
        )}
      </div>
    </section>
  );
};

export default Testimonials;