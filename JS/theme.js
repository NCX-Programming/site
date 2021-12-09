function swapStyleSheet(sheet) {
  document.getElementById("pagestyle").setAttribute("href", sheet);
}
function getTheme(){
  var value = localStorage.getItem('darktheme');
  return value;
}
function setTheme(darktheme){
  localStorage.setItem('darktheme', darktheme);
}
function chooseTheme(theme){
  swapStyleSheet(theme);
  setTheme(theme);
}
function showTheme(){
  swapStyleSheet(getTheme());
}
