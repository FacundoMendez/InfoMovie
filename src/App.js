import './App.css';
import Nav from './components/nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy , Suspense} from 'react';
import Spinner from './components/assets/spinner/Spinner';

const LinkSections = lazy(() => import('./components/sections/linksSection/LinkSections'))
const ListLogin = lazy(() => import('./components/listLogin/ListLogin'))
const Home = lazy(() => import('./components/home/Home'))



function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route exact path='/listUser' element = {<ListLogin/>} />
          <Route exact path='/section/:roomId' element = {<LinkSections/>} />


          <Route exact path='/' element = {<Home/>} />
        </Routes>
      </Suspense>

    </BrowserRouter>
  );
}

export default App;
