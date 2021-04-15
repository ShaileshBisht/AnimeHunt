import React from "react";
import "./AnimeCard.css";

function AnimeCard({
  image_url,
  title,
  synopsis,
  type,
  episodes,
  score,
  rated,
}) {
  return (
    <div className="animeCard">
      <div className="animeCard__box">
        <div className="animeCard__img">
          <img className="card__img" src={image_url} alt="" />
        </div>
        <div className="animeCard__content">
          <div className="animeCard__title">
            <p>{title}</p>
          </div>
          <div className="animeCard__details">
            <p>
              {type} / {rated}
            </p>
            <span>⭐ {score} / 10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
