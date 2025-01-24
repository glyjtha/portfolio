console.log("IT’S ALIVE!");

// Define the pages array
let pages = [
  { url: "",         title: "Home" },
  { url: "projects/", title: "Projects" },
  { url: "contact/",  title: "Contact" },
  { url: "cv/",       title: "CV" },
  { url: "https://glyjtha.github.io/portfolio/", title: "GitHub" }
];

// 1) Create a <nav> and prepend it to <body>
let nav = document.createElement("nav");
document.body.prepend(nav);

// 2) Detect if we are on the home page via <html class="home">
const ARE_WE_HOME = document.documentElement.classList.contains("home");

// 3) Build each link in a loop
for (let p of pages) {
  let url   = p.url;
  let title = p.title;

  url = !ARE_WE_HOME && !url.startsWith('http') ? '../' + url : url;
  

  // Create the anchor element
  let a = document.createElement('a');
  a.href = url;
  a.textContent = title;
  nav.append(a);
  
  if (a.host === location.host && a.pathname === location.pathname) {
    a.classList.add('current');
  }

  if(a.host!=location.host){
    a.target = '_blank'
  }
}

console.log("Navigation built!");
