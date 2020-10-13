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



function sectionActive(){

    const scrollHeight = window.pageYOffset;
    const innerHeight = window.innerHeight;


    for(let i = 1; i <= sections.length; i++){

        let section = document.getElementById(`section${i}`);
        const listId = document.getElementById(`secLi_${i}`);
        const secTop = section.getBoundingClientRect().top;
        const secBot = section.getBoundingClientRect().bottom;
        // console.log(secTop);
        // console.log(secBot);
        // console.log(section.offsetHeight);

        // if ( (section.offsetHeight * i) <= scrollHeight <= (section.offsetHeight * (i+1))
        // && (0 <= secTop <= section.offsetHeight)
        // && (secBot <= section.offsetHeight)
        // )
        if(secTop < innerHeight/3 && secBot > innerHeight/3)  
        {
            listId.classList.add('active');
        }
        else{
            listId.classList.remove('active');
        }
    }

    console.log(innerHeight);

    //for the back to top button
    const sec = document.getElementById('section1');
    if (scrollHeight > sec.offsetHeight){
        topBtn.classList.add('show-link');
    }
    else{
        topBtn.classList.remove('show-link');
    }

   
     
};



window.addEventListener('scroll', function(){
    sectionActive();
});


/*
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

document.addEventListener("DOMContentLoaded", function() {
  //When the DOM is loaded, call the function to build the nav
  sectionActive();
}
)
*/

  

