import  { useContext } from 'react';
import { PlanoContext } from '../../PlanoContext';

const Historico = () => {
  const { historico } = useContext(PlanoContext);

  return (
    <div>
      <h1>Histórico de Treinos</h1>
      <ul>
        {historico.map((treino) => (
          <li key={treino.id}>
            <h2>{treino.name}</h2>
            <p>Duração: {treino.duration}</p>
            <p>Data de Conclusão: {treino.dataConclusao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Historico;
