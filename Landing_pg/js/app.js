/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 
 * 
*/
const mybutton=document.getElementById("myBtn");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function navLink(section){
	
	
	const ul= document.createElement("ul");
	const elemt=document.createElement("a");
	const links= `#${section.id}`;
	const navName= section.getAttribute("data-nav");
	
	
	elemt.setAttribute("href", links);
    elemt.setAttribute("class", `menu__link ${section.id}`);
	elemt.setAttribute("class", `menu__link ${section.id}`);
    elemt.textContent = navName;
	
	
	ul.appendChild(elemt);
	
	return ul;
	
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNav(){
	
	const navbar= document.getElementById("navbar__list");
	
	for(const section of sections){
		const linkElement = createNavLink(section);
    navbar.appendChild(linkElement);
	}
	
}





// Add class 'active' to section when near top of viewport

function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    // You can play with the values in the "if" condition to further make it more accurate. 
    if (box.top <= 150 && box.bottom >= 150) {
      // Apply active state on the current section and the corresponding Nav link.
    } else {
      // Remove active state from other section and corresponding Nav link.
    }
  }
}




// Scroll to anchor ID using scrollTO event

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


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

document.addEventListener("DOMContentLoaded", function(){
	
	buildNav();
}
)


window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}





// Scroll to section on link click

// Set sections as active