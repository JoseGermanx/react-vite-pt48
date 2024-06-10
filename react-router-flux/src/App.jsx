import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import AddContact from './views/AddContact';
import UpdateContact from './views/UpdateContact';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><Home /></>} />
      <Route path='/add-contact' element={<AddContact />} />
      <Route path='/update-contact/:id' element={<UpdateContact />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
