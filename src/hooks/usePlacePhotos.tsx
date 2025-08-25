import { useState, useEffect } from "react";

export function usePlacePhotos() {
  const place_id = import.meta.env.VITE_place_id
  const api_key = import.meta.env.VITE_api_key
  
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=photos&key=${api_key}&reviews_sort=newest`;
    const fetchData = async () => {
      try {
        const res = await fetch(`https://corsproxy.io/?${encodeURIComponent(API_URL)}`);
        const data = await res.json();

        if (data.result?.photos) {
          const urls = data.result.photos.slice(0, 9).map((p) => 
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${p.photo_reference}&key=${api_key}`
          );
          setPhotos(urls);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { photos, loading, error };
}
