import {createList, createMenu as renderMenu} from "./functions.js"; 
import { peopleListOptions } from "./options.js";

/*
peopleListOptions = {
  ulClassName: "people-list",
  liClassName: "people-list-item",
  listContent: ["Person 1", "Person 2", "Person 3", "Person 4", "Person 5"]
};
*/

const peopleList = createList(peopleListOptions);
document.body.prepend(peopleList)

// const topMenuHandler = function(e){
//   console.log(e)
//   e.preventDefault();
//   alert(`Вы нажали на ${e.target.textContent}`)
// }

// const topMenu = renderMenu(peopleListOptions, "click", topMenuHandler )
// document.body.prepend(topMenu)