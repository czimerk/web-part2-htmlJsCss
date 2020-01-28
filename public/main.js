var headlineTextElement = document.getElementById("headline-text");
headlineTextElement.innerHTML = "Webprogramozás mindenkinek!";

var homeLink = document.createElement("a");
var aboutMeLink = document.createElement("a");
var worksLink = document.createElement("a");

homeLink.setAttribute("href", "index.html");
aboutMeLink.setAttribute("href", "aboutme.html");
worksLink.setAttribute("href", "works.html");

homeLink.innerHTML = "Főoldal";
aboutMeLink.innerHTML = "Rólam";
worksLink.innerHTML = "Munkáim";

var navigationBar = document.getElementById("navigation-bar");
navigationBar.appendChild(homeLink);
navigationBar.appendChild(aboutMeLink);
navigationBar.appendChild(worksLink);