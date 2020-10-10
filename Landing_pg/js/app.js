//stores the class data of each section in the div
const sections = document.querySelectorAll("section");

// creates the sections to be added to the nav, including links to their divs
function makeNavLinks(section) {
    const ul = document.createElement("ul");
    const Elemnt = document.createElement("a");
    const NavLink = `#${section.id}`;
    const NavName = section.getAttribute("data-nav");
    Elemnt.setAttribute("href", NavLink);
    Elemnt.setAttribute("class", `menu__link ${section.id}`);
	Elemnt.setAttribute("class", `menu__link ${section.id}`);
    Elemnt.textContent = NavName;
    ul.appendChild(Elemnt);
    return ul;
}


// gets the information of the navbar and appendChild() using the infomation stored in the sections variable 
function createMenu() {
  const nav = document.getElementById("navbar__list");
  for (const section of sections) {
    const linkElement = makeNavLinks(section);
    nav.appendChild(linkElement);
  }
}



document.addEventListener("DOMContentLoaded", function() {
  //When the DOM is loaded, call the function to build the nav
  createMenu();
}
)

//Get the button
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const navbarMenu = document.getElementById('navbar__list');
//select sections


  //build a nav
  //this loop iterates through sections
  for (section of sections){
    //create li  
    let list = document.createElement('li');
    //get id for list
    list.id = section.id;
    //add class to section
    list.className.add('menu__link');    
    //get content of section
    list.innerText = section.dataset.nav;
    //creating nav bar
    navbarMenu.appendChild(list);
  }  
// make section active
function makeActive(){
  for (section of sections) {
    const box = section.getBoundingClientRect();
    if(box.top <= 150 && box.bottom >= 150){
      const nav_item = document.querySelector('.navbar__menu');
      nav_item.classList.add('your-active-class');
      nav_item.classList.add('active');
    }else{
      const nav_item = document.querySelector('.menu__link');
      nav_item.classList.remove('your-active-class');
      nav_item.classList.remove('active');
    }
  }
}

document.addEventListener('scroll', function(){
  makeActive()
});


