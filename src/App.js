import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import NewsSearch from './views/NewsSearch';
import ImageSearch from './views/ImageSearch';


import SearchResult from './views/SearchResult';
import ImageResult from './views/ImageResult';
import NewsResult from './views/NewsResult';
import Bookmarked from './views/Bookmarked';

import Navbar from './components/Navbar';
import ResultNavbar from './components/ResultNavbar';

import { Routes, Route, Link, useParams } from "react-router-dom";

function App() {
  const params = useParams()

  return (
    <div className="App">
     
     
     <Navbar></Navbar>
     <ResultNavbar></ResultNavbar>
      <Routes>
      
        <Route path='/' element={ <Home></Home>} />
        <Route path='images' element={ <ImageSearch></ImageSearch>} />
        <Route path='news' element={ <NewsSearch></NewsSearch>} />
        <Route path='res' element={ <SearchResult></SearchResult>} />
        <Route path='img' element={ <ImageResult></ImageResult>} />
        <Route path='nws' element={ <NewsResult></NewsResult>} />
        <Route path='bookmarked' element={ <Bookmarked></Bookmarked>} />

      </Routes>
      <div >
      
      </div>
    </div>
  );
}

export default App;
