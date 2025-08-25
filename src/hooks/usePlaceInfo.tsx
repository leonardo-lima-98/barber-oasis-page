import { useState, useEffect } from "react";

export function usePlaceInfo() {
  const place_id = import.meta.env.VITE_place_id
  const api_key = import.meta.env.VITE_api_key
  
  const [placeInfo, setPlaceInfo] = useState(null);
  const [loadingPlaceInfo, setLoading] = useState(true);
  const [errorPlaceInfo, setError] = useState(null);

  useEffect(() => {
    const API_URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=name,rating,user_ratings_total,vicinity&key=${api_key}&reviews_sort=newest`;
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://corsproxy.io/?${encodeURIComponent(API_URL)}`
        );
        const data = await res.json();

        if (data.result) {
            setPlaceInfo({
            name: data.result.name,
            rating: data.result.rating,
            total: data.result.user_ratings_total,
            vicinity: data.result.vicinity,
            infoAddrs: data.result.vicinity.substring(0, data.result.vicinity.lastIndexOf(" - ")).trim(),
            detailAddrs: data.result.vicinity.substring(data.result.vicinity.lastIndexOf(" - ") + 1).replace("-", "").trim(),
          });
          console.log(placeInfo);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { placeInfo, loadingPlaceInfo, errorPlaceInfo };
}
