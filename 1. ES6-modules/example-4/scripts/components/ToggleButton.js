class ToggleButton {
  constructor({className, firstText, secondText}){
    this.className = className;
    this.firstText = firstText;
    this.secondText = secondText;
    this.elem = null;
  }

  handleClick() {
    const {elem, firstText, secondText} = this;
    const newTextContent = (elem.textContent === firstText) ? secondText : firstText;
    elem.textContent = newTextContent;
  }

  render(){
    const toggleButton = document.createElement("button");
    toggleButton.classList.add(this.className);
    toggleButton.textContent = this.firstText;
    
    toggleButton.addEventListener("click", this.handleClick.bind(this));
    this.elem = toggleButton;
    return toggleButton;    
  }
}

export default ToggleButton;