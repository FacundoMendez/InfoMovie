import './App.css';
import Nav from './components/nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy , Suspense} from 'react';
import Spinner from './components/assets/spinner/Spinner';
import TrendingSection from './components/sections/linksSection/TrendingSection';
import Home from './components/home/Home';
import DetalladaMovie from './components/detallada/DetalladaMovie';
import DetalladaTv from './components/detallada/DetalladaTv';

const LinkSections = lazy(() => import('./components/sections/linksSection/LinkSections'))
const ListLogin = lazy(() => import('./components/listLogin/ListLogin'))



function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route exact path='/listUser' element = {<ListLogin/>} />
          <Route exact path='/section/:roomId' element = {<LinkSections/>} />
          <Route exact path='/trending' element = {<TrendingSection/>} />
          <Route exact path='/movie/:id' element = {<DetalladaMovie/>} />
          <Route exact path='/tv/:idTv' element = {<DetalladaTv/>} />

          <Route exact path='/' element = {<Home/>} />
        </Routes>
      </Suspense>

    </BrowserRouter>
  );
}

export default App;
