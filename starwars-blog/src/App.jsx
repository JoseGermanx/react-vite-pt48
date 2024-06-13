
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Detail from './views/Detail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:type/:id' element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
