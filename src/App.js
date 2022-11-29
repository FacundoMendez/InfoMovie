import './App.css';
import Nav from './components/nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListLogin from './components/listLogin/ListLogin';
import Home from './components/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route exact path='/listUser' element = {<ListLogin/>} />
        <Route exact path='/' element = {<Home/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
