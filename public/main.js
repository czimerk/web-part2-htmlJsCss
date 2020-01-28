var headlineTextElement = document.getElementById("headline-text");
headlineTextElement.innerHTML = "Webprogramozás mindenkinek!";

var navigationBar = document.getElementById("navigation-bar");
addNavLink(navigationBar, "index.html", "Főoldal");
addNavLink(navigationBar, "aboutme.html", "Rólam");
addNavLink(navigationBar, "works.html", "Munkáim");
addNavLink(navigationBar, "tutorials.html", "Gyakorló példák");

function addNavLink(navBarElement, page, label){
    var link = document.createElement("a");
    link.setAttribute("href", page);
    link.innerHTML = label;
    navBarElement.appendChild(link);
}