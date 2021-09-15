import { useHistory } from "react-router-dom";

function PetList(props) {
  const { pets } = props;

  const history = useHistory();

  return (
    <ul>
      {pets.map((pet, index) => {
        return (
          <li key={index}>
            <h3>{pet.name}</h3>
            <button onClick={() => history.push(`/pets/${pet.id}`)}>
              View
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default PetList;
