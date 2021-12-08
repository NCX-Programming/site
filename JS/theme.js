function swapStyleSheet(sheet) {
  document.getElementById("pagestyle").setAttribute("href", sheet);
}
function getTheme(){
  var value = localStorage.getItem('darktheme');
  return value == '1';
}
function setTheme(darktheme){
  localStorage.setItem('darktheme', (darktheme ? '1' : '0'));
}
function menu(id){
  if(!getTheme()) {
      document.getElementById(id).style.display = "block";
      setTheme(true);
  } else {
      document.getElementById(id).style.display = "none";
      setTheme(false);
  }
}
function toggleTheme(){
  if(getTheme()){
    swapStyleSheet("");
    setTheme(false);
  }
  else {
    swapStyleSheet("/CSS/dark.css");
    setTheme(true);
  }
}
function showTheme(){
  if(!getTheme()){
    swapStyleSheet("");
  }
  else {
    swapStyleSheet("/CSS/dark.css");
  }
}
