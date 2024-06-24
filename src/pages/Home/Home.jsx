import ListaTreinos from "../../componentes/ListaTreinos"
import { PlanoContext } from "../../PlanoContext"
import { useContext } from "react";


const Home = () => {

  const { adicionarAoPlano } = useContext(PlanoContext);

  const treinos = [
    {
      id: 1,
      name: 'Treino de Força',
      description: 'Exercícios para fortalecer os músculos.',
      duration: '45 minutos',
    },
    {
      id: 2,
      name: 'Treino Cardio',
      description: 'Exercícios para melhorar a resistência cardiovascular.',
      duration: '30 minutos',
    },
    {
      id: 3,
      name: 'Treino de Flexibilidade',
      description: 'Exercícios para melhorar a flexibilidade do corpo.',
      duration: '20 minutos',
    },
  ];

  return (
    <div>
      <h1>Treinos Recomendados</h1>
      <ListaTreinos
        treinos={treinos}
        onAction={adicionarAoPlano}
        actionLabel="Adicionar ao Meu Plano"
      />
    </div>
  );
 
}

export default Home
