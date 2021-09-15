import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>Pets Adoption Website</h1>
      <ul>
        <li>
          <Link to="/pets">Our Beautiful Pets waiting for you</Link>
        </li>
      </ul>
    </main>
  );
}

export default Home;
