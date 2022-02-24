function swapStyleSheet(sheet) {
  document.getElementById("pagestyle").setAttribute("href", sheet);
}
function getTheme(){
  var value = localStorage.getItem('theme');
  return value;
}
function setTheme(theme){
  localStorage.setItem('theme', theme);
}
function chooseTheme(theme){
  swapStyleSheet(theme);
  setTheme(theme);
}
function showTheme(){
  swapStyleSheet(getTheme());
}
