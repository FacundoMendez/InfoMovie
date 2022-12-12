import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { lazy , Suspense} from 'react';
import Spinner from './components/assets/spinner/Spinner';
import Home from './components/home/Home';
import ContentFavs from './components/favs/ContentFavs';

const Nav = lazy(() => import('./components/nav/Nav'))
const LinkSectionsTv = lazy(() => import('./components/sections/linksSection/tvSections/LinkSectionsTv'))
const TrendingSectionTv = lazy(() => import('./components/sections/linksSection/tvSections/TrendingSectionTv'))
const DetalladaTv = lazy(() => import('./components/detallada/DetalladaTv'))
const DetalladaMovie = lazy(() => import('./components/detallada/DetalladaMovie'))
const TrendingSection = lazy(() => import('./components/sections/linksSection/movieSections/TrendingSection'))
const ContentSearch = lazy(() => import('./components/contentSearch/ContentSearch'))
const LinkSections = lazy(() => import('./components/sections/linksSection/movieSections/LinkSections'))



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

  const favMovies = localStorage.getItem("favs")

  let tempMovieInFavs;

  if (favMovies === null){
    tempMovieInFavs = []
  }else{
    
  }

  const addOrRemoveFavs = (e) => {
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgUrl = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h5").innerText;
    const overview = parent.querySelector("p").innerText
    const movieData = {
      imgUrl , title, overview , 
      id: btn.dataset.movieId
    }
  }


  return (
/*     <Context.Provider value={{setLoginConnected , loginConnected}}> */
      <BrowserRouter>
        <Nav/>

        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route exact path='/search/:submit' element = {<ContentSearch/>} />
            <Route exact path='/section/movies/:roomId' element = {<LinkSections/>} />
            <Route exact path='/section/series/:tvId' element = {<LinkSectionsTv/>} />
            <Route exact path='/trending/movies' element = {<TrendingSection/>} />
            <Route exact path='/trending/series' element = {<TrendingSectionTv/>} />
            <Route exact path='/movie/:id' element = {<DetalladaMovie/>} />
            <Route exact path='/tv/:idTv' element = {<DetalladaTv/>} />
            <Route exact path='/favs' render= {(props) => <ContentFavs addOrRemoveFavs={addOrRemoveFavs} {...props} /> } />
            <Route exact path='/' element = {<Home/>} />
            {/* <Route exact path='/' element = {<Login/>} /> */}
          </Routes>
        </Suspense>
      
      </BrowserRouter>
/*     </Context.Provider> */
  );
}

export default App;
