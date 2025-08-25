import { usePlacePhotos } from "../hooks/usePlacePhotos";

export default function Gallery() {
  const { photos, loading, error } = usePlacePhotos();

  if (loading) return <p>Carregando galeria...</p>;
  if (error) return console.log(error.message)

  return (
    <section id="gallery" className="py-6 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Galeria</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((url, i) => (
                <img
                    key={i}
                    src={url}
                    alt={`Foto ${i + 1}`}
                    className="w-full h-48 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
                />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
