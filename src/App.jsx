
import './App.css'
import Cover from './Components/Cover'
import Row from './Components/Row'
import requests from './request'
import Navigationbar from './Components/Navigationbar'
function App() {


  return (
    <>
    <Navigationbar/>
    <Cover fetchUrl={requests.fetchNetflixOriginals}/>
      {/* <h1>netflix</h1> */}
      <Row isPoster='true' title='Trending Movies' fetchUrl={requests.fetchTrending} />
     {/*  <Row title='Trending Movies' fetchUrl={requests.fetchTrending} /> */}
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />

    </>
  )
}

export default App
