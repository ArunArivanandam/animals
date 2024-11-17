// 'named import' is used for 'useState', so that only relevant code is imported not the entire library,
// also benefits performance, clarity and avoids namespace conflicts
import { useState } from "react";
import AnimalShow from "./AnimalShow";
// A side-effect import
import "./App.css";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  // returns random animal from the array
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  // 'useState' hook initializes the 'animals' variable (state) to empty array
  // 'setAnimals' is a function through which state is updated
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    // The argument of setAnimals() is used to change the state
    // here, spread operatior is used to place current elements of animals array inside a new array, and  'getRandomAnimal()' adds one more random animal at the end of the array
    setAnimals([...animals, getRandomAnimal()]);
  };

  // Map function iterates over animals array and creates a <AnimalShow/> component for each animal, and each animal and its index value is passed into the component via props
  // index is used as unique key value for rendering purposes
  const animalList = animals.map((animal, index) => {
    return <AnimalShow animal={animal} key={index} />;
  });

  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          height: 50,
          width: 100,
          borderRadius: 5,
          backgroundColor: "papayawhip",
        }}
      >
        Show Animal
      </button>
      <p className="animal-list">{animalList}</p>
    </div>
  );
}

export default App;
