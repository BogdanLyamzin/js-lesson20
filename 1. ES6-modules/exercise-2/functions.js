/*    
<ul class="people-list">
  <li class="people-list-item">Person 1</li>
  <li class="people-list-item">Person 2</li>
  <li class="people-list-item">Person 3</li>
  <li class="people-list-item">Person 4</li>
  <li class="people-list-item">Person 5</li>
</ul>
*/



// export const createList = (options)=> {
//   const ul = document.createElement("ul");
//   ul.classList.add(options.ulClassName);

//   const ulItems = options.listContent.map(text => `<li class="${options.liClassName}">${text}</li>`).join("");
//   ul.insertAdjacentHTML("beforeend", ulItems);
//   return ul;
// };

/*
const peopleListOptions = {
  ulClassName: "people-list",
  liClassName: "people-list-item",
  listContent: ["Person 1", "Person 2", "Person 3", "Person 4", "Person 5"]
};
*/

export const createList = ({ulClassName, liClassName, listContent })=> {
  const ul = document.createElement("ul");
  ul.classList.add(ulClassName);

  const ulContent = listContent.map(text => `
    <li class="${liClassName}">${text}</li>`).join("");
    console.log(ulContent)
  ul.insertAdjacentHTML("beforeend", ulContent);

  return ul;
};


export const createMenu = (options, eventType, handleClick)=> {
  options.listContent = options.listContent.map(item => `<a href="#">${item}</a>`);
  const menu = createList(options);
  const menuItems = menu.querySelectorAll("a");
  menuItems.forEach(item => item.addEventListener(eventType, handleClick))
  return menu;
}