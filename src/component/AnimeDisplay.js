import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import "./AnimeDisplay.css";

function AnimeDisplay() {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://api.jikan.moe/v3/search/anime?q=naruto&limit=16")
        .then((resp) => resp.json())
        .then((data) => setAnimeData(data.results));
    };

    fetchData();
  }, []);

  return (
    <div className="animeDisplay">
      <div className="animeDisplay__box container">
        <div className="animeDisplay__title">
          <h1>
            “Whatever you do, enjoy it to the fullest. That is the secret of
            life.” – Rider
          </h1>
        </div>
        <div className="animeDisplay__card">
          {animeData.map(
            ({
              mal_id,
              image_url,
              title,
              synopsis,
              type,
              episodes,
              score,
              rated,
            }) => (
              <AnimeCard
                key={mal_id}
                image_url={image_url}
                title={title}
                synopsis={synopsis}
                type={type}
                episodes={episodes}
                score={score}
                rated={rated}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default AnimeDisplay;
