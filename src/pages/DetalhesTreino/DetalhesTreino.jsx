import  { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PlanoContext } from '../../PlanoContext';

const DetalhesTreino = () => {
  const { id } = useParams();
  const { plano, concluirTreino } = useContext(PlanoContext);

  const treino = plano.find((treino) => treino.id === parseInt(id));

  if (!treino) {
    return <p>Treino não encontrado.</p>;
  }

  return (
    <div>
      <h1>{treino.name}</h1>
      <p>{treino.description}</p>
      <p>Duração: {treino.duration}</p>
      {treino.dataConclusao && <p>Data de Conclusão: {treino.dataConclusao}</p>}
      {!treino.dataConclusao && (
        <button onClick={() => concluirTreino(treino.id)}>Concluir Treino</button>
      )}
    </div>
  );
};

export default DetalhesTreino;