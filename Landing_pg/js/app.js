const sections = document.querySelectorAll("section");


function createNavLink(section) {
    const li = document.createElement("ul");
    const aElem = document.createElement("a");
    const link = `#${section.id}`;
    const name = section.getAttribute("data-nav");
    aElem.setAttribute("href", link);
    aElem.setAttribute("class", `menu__link ${section.id}`);
	aElem.setAttribute("class", `menu__link ${section.id}`);
    aElem.textContent = name;
    li.appendChild(aElem);
    return li;
}
// build the nav

function buildNavMenu() {
  const nav = document.getElementById("navbar__list");
  for (const section of sections) {
    const linkElement = createNavLink(section);
    nav.appendChild(linkElement);
  }
}



document.addEventListener("DOMContentLoaded", function() {
  //Build navigation menu when the DOM is ready
  buildNavMenu();
}
)


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


document.addEventListener("scroll", function() {
  makeActive();
});



const debounce = (func, delay) => { 
    let debounceTimer 
    return function() { 
        const context = this
        const args = arguments 
            clearTimeout(debounceTimer) 
                debounceTimer 
            = setTimeout(() => func.apply(context, args), delay) 
    } 
} 
showMenuDebounced= debounce(() => {
    const nav = document.getElementById('nav');
    nav.style.display = 'block';
} , 100);
document.addEventListener('scroll', function (e){
    nav.style.display = 'block';
    setTimeout(function hideNav(){
        showMenuDebounced();
    }, 3000);
  });
  
  
  
//Get the button
var mybutton = document.getElementById("myBtn");

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

