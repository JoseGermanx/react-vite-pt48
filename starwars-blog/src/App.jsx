
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Detail from './views/Detail';
import Favorites from './views/Favorites';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:type/:id' element={<Detail/>} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
