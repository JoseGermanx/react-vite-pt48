
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail_people/:id' element={<h1>Hola</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
