import React from "react";
import "./Search.css";
import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

function Search() {
  const [animeData, setAnimeData] = useState([]);
  const [search, setSearch] = useState("attackontitan");

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://api.jikan.moe/v3/search/anime?q=${search}&limit=16`)
        .then((resp) => resp.json())
        .then((data) => setAnimeData(data.results));
    };

    fetchData();
  }, [search]);

  console.log(animeData);

  return (
    <div className="search">
      <div className="search__box container">
        <div className="search__field">
          <input
            className="search-box"
            type="text"
            placeholder="Search...."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="animeDisplay__card">
          {animeData?.map(
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

export default Search;
