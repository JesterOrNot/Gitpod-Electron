var isDarkTheme = true;
var list = [];
window.onload = addAllNotes();
function addAllNotes() {
    list = localStorage.getItem("list").split(",");
    for (var i = 1; i < list.length; i++) {
        var para = document.createElement("p");
        var node = document.createTextNode(list[i]);
        para.appendChild(node);
        var element = document.getElementById("div1");
        element.class = "html_node";
        element.appendChild(para);
    }
}
function deleteAll() {
    localStorage.list = [];
    var div = document.getElementById("div1");
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}
function addNote() {
    var z = prompt("add a note");
    if (z === null || z.length == 0) {
        alert("I refuse to make a empty note!!");
        return;
    }
    var para = document.createElement("p");
    var node = document.createTextNode(z);
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);
    element.class = "html_node";
    list.push(z);
    localStorage.list = list;
}
function about() {
    alert("Made by: Sean Hellum and Teddy Clarke\nhttps://github.com/JesterOrNot\nhttps://github.com/thecla1");
}
function lightTheme() {
    var root = document.querySelector(':root');
    root.style.setProperty('--theme', '#F3F3F3');
    root.style.setProperty('--body', '#F3F3F3');
    root.style.setProperty("--button", "#31363F");
    root.style.setProperty('--text', '#31363F');
    root.style.setProperty("--menu", "#EBEAF0");
    root.style.setProperty('--welcome_text', '#31363F');
    root.style.setProperty('--welcome_body', '#F3F3F3');
    isDarkTheme = false;
}
function darkTheme() {
    var root = document.querySelector(':root');
    root.style.setProperty('--theme', '#31363F');
    root.style.setProperty('--body', '#31363F');
    root.style.setProperty("--button", "#D6D8DA");
    root.style.setProperty('--text', '#F3F3F3');
    root.style.setProperty("--menu", "#24292E");
    root.style.setProperty('--welcome_text', '#D6D8DA');
    root.style.setProperty('--welcome_body', '#31363F');
    isDarkTheme = true;
}
function wipPlaceHolder() {
    alert("Sorry this is still a WIP.");
}
function toggleTheme() {
    if (isDarkTheme) {
        lightTheme();
    } else {
        darkTheme();
    }
}
