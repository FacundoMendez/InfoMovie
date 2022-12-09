import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { lazy , Suspense} from 'react';
import Spinner from './components/assets/spinner/Spinner';
import Home from './components/home/Home';

const Nav = lazy(() => import('./components/nav/Nav'))
const DetalladaTv = lazy(() => import('./components/detallada/DetalladaTv'))
const DetalladaMovie = lazy(() => import('./components/detallada/DetalladaMovie'))
const TrendingSection = lazy(() => import('./components/sections/linksSection/movieSections/TrendingSection'))
const ContentSearch = lazy(() => import('./components/contentSearch/ContentSearch'))
const LinkSections = lazy(() => import('./components/sections/linksSection/movieSections/LinkSections'))
const ListLogin = lazy(() => import('./components/listLogin/ListLogin'))



function App() {

/*   const [loginConnected , setLoginConnected ] = useState([])  *//* verify connected user */
/* 
  useEffect(() => { */

      /* detecta si hay token de login */
/*       
    if(sessionStorage.getItem("token") !== null){
      setLoginConnected(true)
    }else{
      setLoginConnected(false)
    }

  },[loginConnected]) */

  return (
/*     <Context.Provider value={{setLoginConnected , loginConnected}}> */
      <BrowserRouter>
        <Nav/>

        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route exact path='/search/:submit' element = {<ContentSearch/>} />
            <Route exact path='/listUser' element = {<ListLogin/>} />
            <Route exact path='/section/:roomId' element = {<LinkSections/>} />
            <Route exact path='/trending' element = {<TrendingSection/>} />
            <Route exact path='/movie/:id' element = {<DetalladaMovie/>} />
            <Route exact path='/tv/:idTv' element = {<DetalladaTv/>} />

            <Route exact path='/' element = {<Home/>} />
            {/* <Route exact path='/' element = {<Login/>} /> */}
          </Routes>
        </Suspense>
      
      </BrowserRouter>
/*     </Context.Provider> */
  );
}

export default App;
