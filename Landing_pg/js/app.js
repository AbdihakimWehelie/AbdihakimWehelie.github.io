//stores the class data of each section in the div
const sections = document.querySelectorAll("section");
const navbarMenu = document.getElementById('navbar__list');



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
  SectionScroll(); 
}
)

//Get the button
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};


//Hides button if user is at the top of webpage
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the button is clicked by the user, scrolls to the top of the page
function topFunction() {
 window.scrollTo({
				top:0,
				behavior: 'smooth'
			});
}



//when a section of the nav bar is clicked, gets the link for said section and scrolls to it
function SectionScroll() {
	const links = document.querySelectorAll('a[href*=\\#]');

	links.forEach( link => {
		link.addEventListener('click', event => {
			event.preventDefault();//stops site from automatically following link
			const sectionLink = link.getAttribute('href');
			const num = sectionLink.substr(-1);
			const section = sections[num-1];
			const top = section.getBoundingClientRect().top + window.pageYOffset - navbarMenu.offsetHeight;
			window.scrollTo({
				top,
				behavior: 'smooth'
			});
		});
	});
}





//when a section is clicked, grants 'active' class to the section

function isSectionActive(){
	

		
		
	for(const section of sections)
	{
		
			const position= section.getBoundingClientRect();
	
				if (position.top <= 150 && position.bottom >= 150) {
				const id = section.getAttribute("id");   
				document.querySelector(`.${id}`).classList.add("active");
				section.classList.add("your-active-class");
			} 
			else {
				const id = section.getAttribute("id");  
				document.querySelector(`.${id}`).classList.remove("active");
			section.classList.remove("your-active-class");
	}

		
		
		
	}
	
}
  
document.addEventListener('scroll', function () {
    isSectionActive();
	
});
