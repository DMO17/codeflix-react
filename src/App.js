// import logo from './logo.svg';
import "./App.css";
import { Banner } from "./components/Banner";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

const movieDataFromApi = [
  {
    movieImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuWqcuohrunW44IQ8SocM_qkkzhIWBRADOw&usqp=CAU",
    year: 2019,
    price: "$65.99",
  },
  {
    movieImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNX5_VOVaaOJioFhLQq74zRk-DdyZWXyQ8Ow&usqp=CAU",
    year: 2020,
    price: "$45.99",
  },
  {
    movieImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJj2K2UyNBvi4O01hwn6FuOhH2oq09v4GCQ&usqp=CAU",
    year: 2002,
    price: "$35.99",
  },
  {
    movieImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4fwBRP85_xPA3rm4GArz6IKo8Y9upb7Q7w&usqp=CAU",
    year: 2022,
    price: "$25.99",
  },
  {
    movieImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQudt5t_EZf55GHHTHhDogYg1HvLhU3-3Y6bQ&usqp=CAU",
    year: 2019,
    price: "$15.99",
  },
  {
    movieImg:
      "https://m.media-amazon.com/images/M/MV5BZDJlYzMyZTctYzBiMi00Y2E5LTk4YzgtNzU5YzE0MDZkY2EwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg",
    year: 2019,
    price: "$25.99",
  },
  {
    movieImg:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    year: 2019,
    price: "35.99",
  },
  {
    movieImg:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    year: 2019,
    price: "$15.99",
  },
  {
    movieImg:
      "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    year: 2019,
    price: "$15.99",
  },
  {
    movieImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLiRlKl43uPUydYQmWoTmKSkUavuSnTNWoPQ&usqp=CAU",
    year: 2019,
    price: "$15.99",
  },
  {
    movieImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuWqcuohrunW44IQ8SocM_qkkzhIWBRADOw&usqp=CAU",
    year: 2019,
    price: "$65.99",
  },
  {
    movieImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNX5_VOVaaOJioFhLQq74zRk-DdyZWXyQ8Ow&usqp=CAU",
    year: 2020,
    price: "$45.99",
  },
  {
    movieImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJj2K2UyNBvi4O01hwn6FuOhH2oq09v4GCQ&usqp=CAU",
    year: 2002,
    price: "$35.99",
  },
  {
    movieImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4fwBRP85_xPA3rm4GArz6IKo8Y9upb7Q7w&usqp=CAU",
    year: 2022,
    price: "$25.99",
  },
  {
    movieImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQudt5t_EZf55GHHTHhDogYg1HvLhU3-3Y6bQ&usqp=CAU",
    year: 2019,
    price: "$15.99",
  },
  {
    movieImg:
      "https://m.media-amazon.com/images/M/MV5BZDJlYzMyZTctYzBiMi00Y2E5LTk4YzgtNzU5YzE0MDZkY2EwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg",
    year: 2019,
    price: "$25.99",
  },
  {
    movieImg:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    year: 2019,
    price: "35.99",
  },
  {
    movieImg:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    year: 2019,
    price: "$15.99",
  },
  {
    movieImg:
      "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    year: 2019,
    price: "$15.99",
  },
  {
    movieImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLiRlKl43uPUydYQmWoTmKSkUavuSnTNWoPQ&usqp=CAU",
    year: 2019,
    price: "$15.99",
  },
];

function App() {
  return (
    <div>
      <Header />;
      <Banner />
      <main>
        <section>
          <h2 className="sub-title">UK Top 5</h2>
          <div className="movies-container">
            {movieDataFromApi.map((card) => (
              <Card
                movieImg={card.movieImg}
                price={card.price}
                year={card.year}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
