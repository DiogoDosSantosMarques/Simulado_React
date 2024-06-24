import { useContext } from 'react';
import ListaTreinos from '../../componentes/ListaTreinos';
import { PlanoContext } from '../../PlanoContext';

const MeuPlano = () => {
  const { plano, removerDoPlano } = useContext(PlanoContext);

  return (
    <div>
      <h1>Meu Plano</h1>
      <ListaTreinos
        treinos={plano}
        onAction={removerDoPlano}
        actionLabel="Remover"
      />
    </div>
  );
};

export default MeuPlano;
