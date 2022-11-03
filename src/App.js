import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Info from './Component/Info'
import Header from './Component/Header'

function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/country/:name' element={<Info />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
