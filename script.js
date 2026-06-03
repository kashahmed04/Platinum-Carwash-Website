/*
TODO:

finish site
make more responsive
comment files
fix up styling and wording of things
make logos links to something or just homepage
remove blue line on recommended if needed 
add local Business schema markup into head of HTML 
make sure favicon is good andbig enough
fix scrolling when we click on something in the menu to go to the item and not a below it
*/

//--------top barnavigation--------
const hamburger = document.querySelector('.hamburger');
const heroNav = document.querySelector('.hero-nav');

if (hamburger && heroNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    heroNav.classList.toggle('open');
  });
}

//--------FAQ--------
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    const isOpen = answer.style.display === "block";

    faqItems.forEach(i => {
      i.querySelector(".faq-answer").style.display = "none";
      i.querySelector(".faq-toggle").textContent = "+";
    });

    if (!isOpen) {
      answer.style.display = "block";
      item.querySelector(".faq-toggle").textContent = "–";
    } else {
      answer.style.display = "none";
      item.querySelector(".faq-toggle").textContent = "+";
    }
  });
});

//smooth scroll 
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

//image placeholders
// const heroImg = document.querySelector(".hero-image img");
// if (heroImg && !heroImg.src) {
//   heroImg.src = "https://via.placeholder.com/800x500?text=Hero+Image";
// }

const dogImg = document.querySelector(".dog-image img");
if (dogImg && !dogImg.src) {
  dogImg.src = "https://via.placeholder.com/800x500?text=Dog+Wash+Image";
}

const mapBox = document.querySelector(".location-map");
if (mapBox && mapBox.children.length === 0) {
  mapBox.style.backgroundImage =
    "url('https://via.placeholder.com/800x400?text=Map+Placeholder')";
  mapBox.style.backgroundSize = "cover";
  mapBox.style.backgroundPosition = "center";
}
