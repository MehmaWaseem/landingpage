//---------------------------------punchlines slideshow----------------------
var punchlineIndex = 0;
displayPunchlines();
function displayPunchlines(){
  var i;
  var punchlines = document.getElementsByClassName("punchline");
  for(i=0;i<punchlines.length;i++)
  {
    punchlines[i].style.display = "none";
  }
  punchlineIndex++ ;
  if (punchlineIndex > punchlines.length) {punchlineIndex = 1}
  punchlines[punchlineIndex-1].style.display= " initial";
  setTimeout(displayPunchlines, 3000);
}

//---------------------------------images slideshow------------------------------
var imageIndex = 0;
displayimages();
function displayimages(){
  var i;
  var images = document.getElementsByClassName("imageslider");
  for(i=0;i<images.length;i++)
  {
    images[i].style.display = "none";
  }
  imageIndex++ ;
  if (imageIndex > images.length) {imageIndex = 1}
  images[imageIndex-1].style.display= " initial";
  setTimeout(displayimages, 3000);
}

//----------------------------------scroll to a particular div-------------------
var buttons = document.getElementsByClassName('scbtn');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    document.querySelector('.page2').scrollIntoView({
      behavior: 'smooth'
    });
  });
}
 

//----------------------------------transition of text------------------------------------
function handleIntersection_t(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // When element enters the viewport
      entry.target.style.opacity = 1;
    } else {
      // When element exits the viewport after entering
      entry.target.style.opacity = 0;
    }
  });
}
var observer = new IntersectionObserver(handleIntersection_t, { threshold: 0.5 });
var targetElement_h1 = document.querySelector('.h1_content');
var targetElement_p1 = document.querySelector('.p1_content');
observer.observe(targetElement_h1);
observer.observe(targetElement_p1);

//var targetElement_h2 = document.querySelector('.h2_content');
//var targetElement_p2 = document.querySelector('.p2_content');
//observer.observe(targetElement_h2);
//observer.observe(targetElement_p2);


//--------------------------------popping of text-----------------------------------------
function handleIntersection_p(entries, observer_p) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-popup');
    } else {
      entry.target.classList.remove('show-popup');
    }
  });
}

var observer_p = new IntersectionObserver(handleIntersection_p, { threshold: 0.5 });
var targetElements = document.querySelectorAll('.p2_content');
targetElements.forEach(element => observer_p.observe(element));