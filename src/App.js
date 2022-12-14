import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { lazy , Suspense} from 'react';
import Home from './components/home/Home';
import Preload from './components/preload/Preload';

const Nav = lazy(() => import('./components/nav/Nav'))
const LinkSectionsTv = lazy(() => import('./components/sections/linksSection/tvSections/LinkSectionsTv'))
const TrendingSectionTv = lazy(() => import('./components/sections/linksSection/tvSections/TrendingSectionTv'))
const DetalladaTv = lazy(() => import('./components/detallada/DetalladaTv'))
const DetalladaMovie = lazy(() => import('./components/detallada/DetalladaMovie'))
const TrendingSection = lazy(() => import('./components/sections/linksSection/movieSections/TrendingSection'))
const ContentSearch = lazy(() => import('./components/contentSearch/ContentSearch'))
const LinkSections = lazy(() => import('./components/sections/linksSection/movieSections/LinkSections'))


function App() {
  return (
      <BrowserRouter>
        <Nav/>
        <Suspense fallback={<Preload/>}>
          <Routes>
            <Route exact path='/search/:submit' element = {<ContentSearch/>} />
            <Route exact path='/section/movies/:roomId' element = {<LinkSections/>} />
            <Route exact path='/section/series/:tvId' element = {<LinkSectionsTv/>} />
            <Route exact path='/trending/movies' element = {<TrendingSection/>} />
            <Route exact path='/trending/series' element = {<TrendingSectionTv/>} />
            <Route exact path='/movie/:id' element = {<DetalladaMovie/>} />
            <Route exact path='/tv/:idTv' element = {<DetalladaTv/>} />
            <Route exact path='/' element = {<Home/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
  );
}

export default App;
