import { useState } from "react";
import bird from "./images/bird.svg";
import cat from "./images/cat.svg";
import cow from "./images/cow.svg";
import dog from "./images/dog.svg";
import gator from "./images/gator.svg";
import horse from "./images/horse.svg";
import heart from "./images/heart.svg";

// 'animalImage' array is having same name for its 'key' and 'value'
// so it can be used with single name like used below (object property shorthand)
const animalImage = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ animal }) {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    // increments the clickCount(state) value when the element is clicked
    setClickCount(clickCount + 1);
  }

  return (
    <div className="animal" onClick={handleClick}>
      {/* sets default import of particular animal image path as source of image by accessing the value of object with bracket notation */}
      <img src={animalImage[animal]} alt="animal" style={{ width: 100 }} />
      <img
        src={heart}
        alt="heart"
        style={{ width: 10 + 10 * clickCount }}
        className="heart"
      />
    </div>
  );
}

export default AnimalShow;
