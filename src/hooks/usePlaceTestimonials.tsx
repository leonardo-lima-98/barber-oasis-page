import { useState, useEffect } from "react";

export function usePlaceTestimonials() {
  const place_id = import.meta.env.VITE_place_id
  const api_key = import.meta.env.VITE_api_key
  
  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoading] = useState(true);
  const [errorReviews, setError] = useState(null);

  useEffect(() => {
    const API_URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=reviews&key=${api_key}&reviews_sort=newest`;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://corsproxy.io/?${encodeURIComponent(API_URL)}`
        );
        const data = await res.json();

        if (data.result.reviews) {
          const reviews = data.result.reviews
            // .slice(0, 3) // limita a 3
            .map((r) => ({
              name: r.author_name,
              role: "Cliente",
              content: r.text,
              rating: r.rating,
              time: r.relative_time_description,
              name_url: r.author_url,
              image: r.profile_photo_url || "👤",
            }));
          setReviews(reviews);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { reviews, loadingReviews, errorReviews };
}
