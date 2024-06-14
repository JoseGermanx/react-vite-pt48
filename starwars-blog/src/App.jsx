
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Detail from './views/Detail';
import Favorites from './views/Favorites';
import NavBar from './components/NavBar';
import NotFound from './views/404';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:type/:id' element={<Detail/>} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
