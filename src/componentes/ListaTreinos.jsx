import ItemTreino from './ItemTreino';

const ListaTreinos = ({ treinos, onAction, actionLabel }) => {
  return (
    <ul>
      {treinos.map((treino) => (
        <ItemTreino
          key={treino.id} // Certifique-se de que treino.id é único
          treino={treino}
          onAction={onAction}
          actionLabel={actionLabel}
        />
      ))}
    </ul>
  );
};

export default ListaTreinos;