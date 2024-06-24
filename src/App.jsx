
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//componentes
import NavBar from './componentes/NavBar/NavBar';
import { PlanoProvider } from './PlanoContext';

//pages
import Home from './pages/Home/Home';
import MeuPlano from './pages/MeuPlano/MeuPlano';
import Historico from './pages/Historico/Historico';
import DetalhesTreino from './pages/DetalhesTreino/DetalhesTreino';

function App() {


  return (
    

    <BrowserRouter>
  <PlanoProvider>
    <NavBar />
    
    <Routes>

      <Route path='/' element={<Home />} />

      <Route path="/meu-plano" element={<MeuPlano />} />

      <Route path="/treino/:id" element={<DetalhesTreino />} />

      <Route path="/historico" element={<Historico />} />

    </Routes>
    </PlanoProvider>
    
    </BrowserRouter>
      
   
  )
}

export default App
