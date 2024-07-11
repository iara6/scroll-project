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