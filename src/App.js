import React from "react";
import "./App.css";
import {originals,action,comedyMovies,horrorMovies,actionMovies,romanceMovies,documentaries} from './urls'
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Banner />
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedyMovies} title='Comedy Movies' isSmall/>
      <RowPost url={horrorMovies} title='Horror Movies' />
      <RowPost url={actionMovies} title='Action Movies' isSmall/>
      <RowPost url={romanceMovies} title='Romance Movies'/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
