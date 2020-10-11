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
	Elemnt.setAttribute("class", `your-active-class`);
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



/* Add class 'active' to section when near top of viewport
function activateNavLinks(id) {
	const allNavLists = document.querySelectorAll(".navbar__link")
	allNavLists.forEach((navLink) => {
		if (navLink.childNodes[0].id.substring(1) === id) {
			console.log(true)
				navLink.childNodes[0].classList.add("demo-class");
			} else {
				console.log(false)
				navLink.childNodes[0].classList.remove("demo-class");
			}
		}
	)
}
function activeClassAssign() {
	sections.forEach((section) =>
		window.addEventListener("scroll", function(){
			if (section.getBoundingClientRect().top + 200 < window.innerHeight &&
				section.getBoundingClientRect().bottom + 200 > window.innerHeight) {
				section.classList.add("your-active-class");
				activateNavLinks(section.id);
			} else {
				section.classList.remove("your-active-class");
			}
		})
	);
}*/

const topMenu = document.getElementById('navbar__list');

const navItems = document.getElementsByClassName("menu__link");

function sectionActive () {
    for (const section of sections) {
        const boxPlace = section.getBoundingClientRect();
        if (boxPlace.top <= 150 && boxPlace.bottom >= 150) {
            const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.add("active");
            section.classList.add("your-active-class");
        } else {
            const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.remove("active");
            section.classList.remove("your-active-class");
            
            
        }
    }
}




