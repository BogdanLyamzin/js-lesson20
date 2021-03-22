export function createToggleButton({className, firstText, secondText}){
  const toggleButton = document.createElement("button");
  toggleButton.classList.add(className);
  toggleButton.textContent = firstText;
  
  toggleButton.addEventListener("click",function(){
    const newTextContent = (this.textContent === firstText) ? secondText : firstText;
    this.textContent = newTextContent;
  } );
  return toggleButton;
}