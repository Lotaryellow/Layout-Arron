const body = document.c;
window.addEventListener("DOMContentLoaded", () => {
  // Timer
  const deadline = "2023-04-12";
  function getTimeRemaining(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / 1000 / 60) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      timeInterval = setInterval(updateClock, 60000);
    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endTime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(`:    ${t.hours}`);
      minutes.innerHTML = getZero(":  " + t.minutes);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline);
});

// slider

const slider = document.querySelector(".slider__field");
slider.addEventListener("touchstart", handleTouchStart, false);
slider.addEventListener("touchend", handleTouchEnd, false);
let offset = 0;
let x1 = null;
let x2 = null;

function handleTouchStart(event) {
  const firstTouch = event.touches[0];
  x1 = firstTouch.clientX;
}

function handleTouchEnd(event) {
  const lastTouch = event.changedTouches[0];
  x2 = lastTouch.clientX;

  offset = offset + 285;

  if (x1 > x2) {
    if (screen.width < 321) {
      slider.style.transform = `translate(-${offset}px, 0px)`;
    }
  }
  if (offset > 1200) {
    offset = 0;
  }
}

//sliderGift

const sliderGift = document.querySelector(".sliderField");
sliderGift.addEventListener("touchstart", handleTouchStartGift, false);
sliderGift.addEventListener("touchend", handleTouchEndGift, false);
let coord = 0;
let xGift1 = null;
let xGift2 = null;

function handleTouchStartGift(event) {
  const firstTouchGift = event.touches[0];
  xGift1 = firstTouchGift.clientX;
}

function handleTouchEndGift(event) {
  const lastTouchGift = event.changedTouches[0];
  xGift2 = lastTouchGift.clientX;

  coord = coord + 320;

  if (screen.width < 321) {
    if (xGift1 > xGift2) {
      sliderGift.style.transform = `translate(-${coord}px, 0px)`;
    }
  }
  if (coord > 1800) {
    coord = -320;
  }
}

// sliderGift1920
const leftBtnGift = document.querySelector(".leftBtnGift");
const rightBtnGift = document.querySelector(".rightBtnGift");

point = 0;
leftBtnGift.addEventListener("click", moveLeft);
rightBtnGift.addEventListener("click", moveRight);

function moveRight() {
  if (screen.width > 769) {
    console.log(point);
    point = point + 320;
    sliderGift.style.transform = `translate(-${point}px, 0px)`;
    if (point > 740) {
      point = -320;
    }
  }
}

function moveLeft() {
  if (screen.width > 769) {
    console.log(point);
    if (point <= 0) {
      point = point + 960;
      sliderGift.style.transform = `translate(-${point}px, 0px)`;
      return;
    }
    if (point <= 960) {
      point = point - 320;
      sliderGift.style.transform = `translate(-${point}px, 0px)`;
    }
  }
}

// modalCons

const closeModal = document.querySelector(".modalCons__close");
const modalWindow = document.querySelector(".modalCons");

document.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.id === "openConsModal") {
    modalWindow.classList.add("active");
  }
});
closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modalWindow.classList.remove("active");
});

// modalOrder

const btnOrderModal = document.querySelector("#modalCons_finish");
const modalOrder = document.querySelector(".modalOrder");
const modalOrderClose = document.querySelector(".modalOrder__close");

btnOrderModal.addEventListener("click", () => {
  modalWindow.classList.remove("active");
  modalOrder.classList.add("activeOrder");
});

modalOrderClose.addEventListener("click", () => {
  modalOrder.classList.remove("activeOrder");
});

//burgerMenu

const burger = document.querySelector(".navBtn");
const burgerBody = document.querySelector(".headermenu");
const closeHeaderMenu = document.querySelector(".closeHeaderMenu");

burger.addEventListener("click", () => {
  burgerBody.classList.add("activeMenu");
});

closeHeaderMenu.addEventListener("click", () => {
  burgerBody.classList.remove("activeMenu");
});
