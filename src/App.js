import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./styles.css";
import PetsList from "./components/PetsList";
import PetView from "./components/PetView";
import Home from "./pages/Home";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";

const petsData = [
  {
    id: 1,
    name: "Lilly",
    ageInYears: 3,
    type: "cat"
  },
  {
    id: 2,
    name: "Zeus",
    ageInYears: 4.5,
    type: "dog"
  }
];

export default function App() {
  const [pets, setPets] = useState(petsData);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/pets">
        <PetsList pets={pets} />
      </Route>
      <Route exact path="/pets/:petId">
        <PetView pets={pets} />
      </Route>
    </Switch>
  );
}
