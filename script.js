let card = document.querySelector('.card');
let cover = document.querySelector('.cover');
let pages = document.querySelectorAll('.page');
let currentPage = 0;

let isHovering = false;

card.addEventListener('mouseenter', () => {
	isHovering = true;
	cover.style.transform = 'rotateY(-135deg)';
});

card.addEventListener('mouseleave', () => {
	isHovering = false;
	cover.style.transform = 'rotateY(0deg)';
});

document.addEventListener('wheel', (e) => {
	if (!isHovering) return;

	if (e.deltaY > 0) {
		// Scroll down (turn the page forward)
		if (currentPage < pages.length - 1) {
			currentPage++;
			card.classList.add('flipped');
		}
	// Scroll up (turn the page backward)
	} else {
		if (currentPage > 0) {
			currentPage--;
			card.classList.remove('flipped');
		}
	}
});
