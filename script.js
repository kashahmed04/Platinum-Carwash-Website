/*
TODO:

finish site
add SEO stuff from document
make everything more responsive
comment files
fix up styling and wording of things
add local Business schema markup into head of HTML 
make sure favicon is good and big enough and good across all devices
make links on page work properly
add images needed
fix alt text for images when it is finalized 
make hover effects and colors for it consistent across the site
make sure all socials are properly formatted the same and contact information as well
make sure everyhting is aligned correctly
fix links to things when needed like socials when create facebook
local Business Schema Markup replace URL and image with our own image and domain when created (create the schema when site is fully done)
make sure priavated things are removed before posting site 
make sure grammar is consistent on site along with sentences
check if things need to be highlighted when we navigate to them
embed platinum carwash pin on embeded google map based on google business profile when get login
fix social media icons if it looks weird on mobile 
check grammar and hyphens for things needed as well as capitalization
fix up see the wash section on mobile with images
make sure hyphens are fine in code and site and not highlighted yellow in code editor
make sure all hover / click / other effects match on whole page same with buttons and anything else 
add leave us a review section and link to reviews like go car wash or add embedded reviews 
do things in discovery doc and make sure those items are completed
fix leave a review section when link is generated on google business profile 
add hpone / email icons if needed 
make photo scetion more modern (and all site)
make sure no extra HTML CSS or JS in code that is not needed 
fix fonts, content, responsiveness, and photos more modern
add embedded customer reviews on site
use same aspect ratio for see the wash and use 16.9 for dog wash 
fix photo alignment for (the stylesfor the 320 x 568 and 768 x 1024 
overlap for thesee the wash section and now my 320 x 568is doing this again butthe 768 x1024 is fine)
make sure favicons work for all device types and sizes (apple, etc.)
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

// ===============================
// MOBILE NAVIGATION
// ===============================
const hamburger = document.querySelector('.hamburger');
const heroNav = document.querySelector('.hero-nav');
const menuLinks = document.querySelectorAll('.hero-menu a');

// Open/close menu when hamburger is clicked
if (hamburger && heroNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    heroNav.classList.toggle('open');
  });
}

//auto-close menu when a link is clicked
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    heroNav.classList.remove('open');
    hamburger.classList.remove('active');
  });
});


// ===============================
// FAQ 
// ===============================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Close all FAQ items
    faqItems.forEach(faq => faq.classList.remove("active"));

    // Reopen clicked item if it wasn't already open
    if (!isActive) item.classList.add("active");
  });
});


// ===============================
// SMOOTH SCROLL (with menu close first)
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    e.preventDefault();

    // Close mobile menu BEFORE scrolling
    heroNav.classList.remove("open");
    hamburger.classList.remove("active");

    // Slight delay ensures clean animation
    setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 10);
  });
});


// ===============================
// IMAGE PLACEHOLDERS
// ===============================
const dogImg = document.querySelector(".dog-image img");
if (dogImg && !dogImg.src) {
  dogImg.src = "https://via.placeholder.com/800x500?text=Dog+Wash+Image";
}


