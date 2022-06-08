window.addEventListener('load', themeButtons, false);

function themeButtons() {
    showTheme();

    let lightButton = document.getElementById("lightTheme");
    let roseButton = document.getElementById("roseTheme");
    let darkButton = document.getElementById("darkTheme");
    let blackButton = document.getElementById("blackTheme");

    lightButton.onclick = function() {
        chooseTheme("");
        return false;
    }

    roseButton.onclick = function() {
        chooseTheme("/css/rose.css");
        return false;
    }

    darkButton.onclick = function() {
        chooseTheme("/css/dark.css");
        return false;
    }

    blackButton.onclick = function() {
        chooseTheme("/css/black.css");
        return false;
    }
}
function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);
}
function getTheme(){
    return localStorage.getItem('theme');
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
  