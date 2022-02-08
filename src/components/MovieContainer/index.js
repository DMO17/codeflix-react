import { Card } from "../Card";
import "./MovieContainer.css";

export const MovieContainer = ({ movieData }) => {
  return (
    <section>
      <h2 className="sub-title">UK Top 5</h2>
      <div className="movies-container">
        {movieData.map((movie) => (
          <Card
            movieImg={movie.movieImg}
            price={movie.price}
            year={movie.year}
          />
        ))}
      </div>
    </section>
  );
};
