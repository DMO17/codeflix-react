import "./Card.css";

export const Card = ({ movieImg, year, price }) => {
  return (
    <div className="movie-card">
      <img src={movieImg} alt="gemini man movie 2019" />
      <div className="movie-year">{year}</div>
      <div className="movie-price">{price}</div>
    </div>
  );
};
