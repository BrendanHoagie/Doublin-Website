let card = document.querySelector('.card');
let pages = document.querySelectorAll('.page');
let currentPage = 0;
let numPages = pages.length - 1;
let isHovering = false;

// Handles hover events to open/close the book cover
card.addEventListener('mouseenter', () => {
  isHovering = true;
  card.style.transform = 'rotateZ(-10deg)';
});

card.addEventListener('mouseleave', () => {
  isHovering = false;
  card.style.transform = 'rotateZ(0deg)';
});

// Scroll event listener to change pages
document.addEventListener('wheel', (e) => {
  if (!isHovering) return;

  if (e.deltaY > 0) {
    // Scroll down (next page)
    if (currentPage < numPages) {
      currentPage++;
      updatePages();
    }
  } else {
    // Scroll up (previous page)
    if (currentPage > 0) {
      currentPage--;
      updatePages();
    }
  }
});

// function to flip the pages while keeping rotations correct
function updatePages() {
  pages.forEach((page, index) => {
    // keep rotational alignment correct between each page
    let rotation = (index - currentPage) * 90;
    if (index == (currentPage - 1) || index == currentPage){
      page.style.transform = `rotateY(${rotation}deg)`;
    }
  });
}

// problem with flipping through the first time for some reason,
// need to flip through once to fix this
window.addEventListener('load', () => {
  // Hide all pages initially
  pages.forEach((page) => {
    page.style.visibility = 'hidden';
  });

  currentPage = 0;

  // Perform initial setup for rotation and simulate flipping through pages
  pages.forEach((page, index) => {
    let rotation = (index - currentPage) * 90;
    if (index == currentPage) {
      page.style.transform = `rotateY(${rotation}deg)`;
    }
    currentPage += 1;
  });

  // After the flip animation finishes (timeout=500 to match the duration of the flip)
  setTimeout(() => {
    // Unhide pages and reset the visibility
    pages.forEach((page) => {
      page.style.visibility = 'visible';
    });

    currentPage = 0;
  }, 500);
});