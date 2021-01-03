import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
  <Nav/>
   <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals}
      isLargeRow={true} />
      <Row title="treandin now" fetchUrl={request.feachTreading} />
      <Row title="TopRated" fetchUrl={request.fetchTopRated} />
      <Row title="ActionMovies" fetchUrl={request.fethchActionMovies} />
      <Row title="ComedyMovies" fetchUrl={request.fethchComedyMovies} />
      <Row title="HorroMovies" fetchUrl={request.fethchHorroMovies} />
      <Row title="RomanceMovies" fetchUrl={request.fethchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fethchDocumentaries} />
    </div>
  );
}

export default App;
