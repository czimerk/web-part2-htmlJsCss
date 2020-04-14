
var navigationBar = document.getElementById("navigation-bar");
addNavLink(navigationBar, "index.html", "Home");
addNavLink(navigationBar, "aboutme.html", "About me");
addNavLink(navigationBar, "works.html", "My works");
addNavLink(navigationBar, "tutorials.html", "Tutorials");

function addNavLink(navBarElement, page, label){
    var link = document.createElement("a");
    link.setAttribute("href", page);
    link.innerHTML = label;
    navBarElement.appendChild(link);
}