import { useParams } from "react-router-dom";

function PetView(props) {
  const { pets } = props;

  const { petId } = useParams();

  console.log("Route params: ", typeof petId);

  const pet = pets.find((pet) => pet.id === parseInt(petId, 10));

  // useEffect(() => {
  //   fetch(`http://example.com/products/${productId}`)
  // })

  return (
    <main>
      <h2>{pet.name}</h2>
    </main>
  );
}

export default PetView;
