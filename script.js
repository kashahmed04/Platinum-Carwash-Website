/*
TODO:

update photos from photo shoot when its done
add SEO stuff from document
add local Business schema markup into head of HTML 
add images needed
local Business Schema Markup replace URL and image with our own image and domain when created (create the schema when site is fully done)
make sure priavated things are removed before posting site 
embed platinum carwash pin on embeded google map based on google business profile when get login
fix up see the wash section on mobile with images
do things in discovery doc and make sure those items are completed
use same aspect ratio for see the wash and use 16.9 for dog wash 
fix photo alignment for (the stylesfor the 320 x 568 and 768 x 1024 
overlap for thesee the wash section and now my 320 x 568 is doing this again butthe 768 x1024 is fine)
make sure favicons work for all device types and sizes (apple, etc.)
test on all device types and android
responsiveness test dimensions

320 × 568
375 × 667
390 × 844
768 × 1024
820 × 1180
912 × 1368
1366 × 768
1920 × 1080
*/


//mobile navigation
const hamburger = document.querySelector('.hamburger');
const heroNav = document.querySelector('.hero-nav');
const menuLinks = document.querySelectorAll('.hero-menu a');

//open/close menu when hamburger is clicked
if (hamburger && heroNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    heroNav.classList.toggle('open');
  });
}

//auto close menu when a link is clicked
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    heroNav.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// FAQ 
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  //select the current question
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    //check if the current FAQ item is already open
    const isActive = item.classList.contains("active");

    //close all FAQ items
    faqItems.forEach(faq => faq.classList.remove("active"));

    //reopen clicked item if it wasn't already open
    if (!isActive) item.classList.add("active");
  });
});

//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    //get the destination section ID 
    const href = link.getAttribute("href");

    //safety checks 
    //ignore empty anchor  links and ignore telephone links 
    if (!href || href === "#") return;
    if (href.startsWith("tel:") || href.startsWith("mailto:")) return;

    //locate target section
    const target = document.querySelector(href);
    //exit if target does not exist 
    if (!target) return;

    //prevent the default jump to anchor behavior 
    e.preventDefault();

    //close mobile navigation if open 
    heroNav.classList.remove("open");
    hamburger.classList.remove("active");

    //smoothly scroll to the target section
    setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  });
});

//select all the telephone links 
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
  link.addEventListener("click", (e) => {
    //prevent parent click handles from firing 
    e.stopPropagation();
  });
});

// IMAGE PLACEHOLDERS (WILL REMOVE WHEN PHOTOS ARE TAKEN)
const dogImg = document.querySelector(".dog-image img");
if (dogImg && !dogImg.src) {
  dogImg.src = "https://via.placeholder.com/800x500?text=Dog+Wash+Image";
}


