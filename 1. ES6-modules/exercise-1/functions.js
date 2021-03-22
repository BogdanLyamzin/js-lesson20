export const replaceClass = function(elem, oldClass, newClass){
  elem.classList.remove(oldClass);
  elem.classList.add(newClass)
}