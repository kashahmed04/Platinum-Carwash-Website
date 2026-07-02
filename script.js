/*
TODO:

make sure favicons work across all browser types and devices
update readme / github when site is done
make sure all photos are straight on website 
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


