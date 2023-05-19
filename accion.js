const slider = document.querySelector('.slider');
const cards = Array.from(slider.children);

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0;

cards.forEach((card, index) => {
  const slideImage = card.querySelector('img');
  slideImage.addEventListener('dragstart', (e) => e.preventDefault());
  // Touch events
  card.addEventListener('touchstart', touchStart(index));
  card.addEventListener('touchend', touchEnd);
  card.addEventListener('touchmove', touchMove);
  // Mouse events
  card.addEventListener('mousedown', touchStart(index));
  card.addEventListener('mouseup', touchEnd);
  card.addEventListener('mousemove', touchMove);
  card.addEventListener('mouseleave', touchEnd);
});

// Disable context menu on slider
slider.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

function touchStart(index) {
  return function (event) {
    currentIndex = index;
    startPos = getPositionX(event);
    isDragging = true;
    animationID = requestAnimationFrame(animation);
    slider.classList.add('grabbing');
  };
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -100 && currentIndex < cards.length - 1) {
      currentIndex += 1;
    }
    if (movedBy > 100 && currentIndex > 0) {
      currentIndex -= 1;
    }
    setPositionByIndex();
  slider.classList.remove('grabbing');
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -cards[0].offsetWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}

window.addEventListener('resize', setPositionByIndex);
