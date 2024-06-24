import { Link } from "react-router-dom";

const ItemTreino = ({ treino, onAction, actionLabel }) => {
  return (
    <li key={treino.id}>
      <h2>{treino.name}</h2>
      <p>{treino.description}</p>
      <p>Duração: {treino.duration}</p>

      <Link to={`/treino/${treino.id}`}>Ver Detalhes</Link>

      <button onClick={() => onAction(treino)}>
      
        {actionLabel}
      </button>
    </li>
  );
};

export default ItemTreino;
