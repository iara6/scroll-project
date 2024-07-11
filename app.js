/* set date */
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

/* close links */
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener("click", () => {
  const containerHeight = linksContainer.getBoundingClientRect().height; // 0
  const linksHeight = links.getBoundingClientRect().height;
  // console.log(linksHeight); //201.5625
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

/* fixed navigation bar */
/* scroll to top button */
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  // console.log(window.pageYOffset);
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  // console.log(navHeight); // 102

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    topLink.classList.add("show-link")
  } else {
    topLink.classList.remove("show-link");
  }
});

/* precise smooth scroll */
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // navigate to a specific spot
    const id = e.currentTarget.getAttribute('href').slice(1); // slice will skip the hashtag, will start with index 1, e.g. #about -> about
    
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height; // console.log(navHeight); // 102
    const containerHeight = linksContainer.getBoundingClientRect().height; // 0
    const fixedNav = navbar.classList.contains("fixed-nav");

    let position = element.offsetTop - navHeight;
    
    if (!fixedNav) {
      position = position - navHeight;
    }

    if (navHeight > 102) {
      position = position + containerHeight;
    } // (for a smaller display width)

    window.scrollTo({
      left: 0,
      top: position
    })
    linksContainer.style.height = 0; // closes the links container (for a smaller display width)
  })
});