import {createContext, useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';

export const PlanoContext = createContext();

export const PlanoProvider = ({ children }) => {

  const navigate = useNavigate()


  const [plano, setPlano] = useState(() => {

    const savedPlano = localStorage.getItem('plano')

    return savedPlano ? JSON.parse(savedPlano) : []

  })



  const [historico, setHistorico] = useState(() => {

    const savedHistorico = localStorage.getItem('historico')
    return savedHistorico ? JSON.parse(savedHistorico) : []

  })


  useEffect(() => {

    localStorage.setItem('plano', JSON.stringify(plano));

  }, [plano])


  useEffect(() => {

    localStorage.setItem('historico', JSON.stringify(historico));

  }, [historico])



  const adicionarAoPlano = (treino) => {
    if (!plano.some((item) => item.id === treino.id)) {
      setPlano((prevPlano) => {
        const novoPlano = [...prevPlano, treino];
        return novoPlano;
      });
    }
    navigate('/meu-plano');
  };

  
  const removerDoPlano = (treinoId) => {

    setPlano((prevPlano) => {
      const novoPlano = prevPlano.filter((treino) => treino.id !== treinoId);
      localStorage.setItem('plano', JSON.stringify(novoPlano)); // Atualiza localStorage
      return novoPlano;
    });
   
  };


  const concluirTreino = (treinoId) => {
    const treino = plano.find((treino) => treino.id === treinoId);
    if (treino) {
      treino.dataConclusao = new Date().toLocaleDateString();
      setHistorico([...historico, treino]);
      removerDoPlano(treinoId);
    }
  };

  return (
    <PlanoContext.Provider value={{ plano, adicionarAoPlano, removerDoPlano, concluirTreino, historico }}>
      {children}
    </PlanoContext.Provider>
  );
};