import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/pages/Navbar';
import Home from './component/pages/Home';
import Contact from './component/pages/Contact';
import About from './component/pages/About';
import Services from './component/pages/Services';
import Projets from './component/pages/Projets';
import ErrorPage from './component/pages/ErrorPage';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/projets' element={<Projets/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </>
  );
}

export default App;
