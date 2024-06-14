
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//componentes
import NavBar from './componentes/NavBar/NavBar';

//pages
import Home from './pages/Home/Home';


function App() {


  return (
    <>

    <BrowserRouter>

    <NavBar />
    
    <Routes>

      <Route path='/' element={<Home />} />

    </Routes>
    
    
    </BrowserRouter>
      
    </>
  )
}

export default App
