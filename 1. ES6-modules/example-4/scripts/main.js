import {createToggleButton} from "./functions/index.js";
import ToggleButton from "./components/ToggleButton.js";

const toggleButtonOptions = {
  className: "btn",
  firstText: "Click me!",
  secondText: "Eat me!"
};

// const firstToggleButton = createToggleButton(toggleButtonOptions)

// document.body.append(firstToggleButton);

const firstToggleButton = new ToggleButton(toggleButtonOptions)
document.body.append(firstToggleButton.render());
const userName = prompt("Ввведите ваше имя");

firstToggleButton.firstText = `Click me, ${userName}`;
firstToggleButton.secondText = `Eat me, ${userName}`