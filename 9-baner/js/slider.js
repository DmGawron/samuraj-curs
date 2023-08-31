import Slide from "./slide.js";

export default class Slider {

  #image
  #title
  #dots
  #active
  #slides
  #indexInterval
  #time

	constructor(slideList, imageSelector,titleSelector, dotsSelector,time = 3000,active = 0) {
		this.#image = document.querySelector(imageSelector);
		this.#title = document.querySelector(titleSelector);
		this.#dots = [...document.querySelectorAll(dotsSelector)];
		// Interfejs
		this.#time = time;
		this.#active = active;
    this.#slides = [];
    this.#indexInterval = null 

    for(const slide of slideList) {
      this.#addSlide(new Slide(slide.img, slide.text));
    }
    console.log(this.#slides);

    window.addEventListener("keydown",(e) => this.#keyChangeSlide(e));
	}

  #addSlide(slide) {
    this.#slides.push(slide);
  }

  start() {
    this.#indexInterval =  setInterval(() => this.#changeSlide(), this.#time);
  }

  #changeDot() {
	const activeDot = this.#dots.findIndex((dot) => dot.classList.contains("active"));
	this.#dots[activeDot].classList.remove("active");
	this.#dots[this.#active].classList.add("active");
};

#changeSlide() {
	this.#active++;
	if (this.#active === this.#slides.length) {
		this.#active = 0;
	}
	this.#image.src = this.#slides[this.#active].image;
	this.#title.textContent = this.#slides[this.#active].text;
	this.#changeDot();
};


#keyChangeSlide(e) {
	// console.log(e.keyCode);
	if (e.keyCode == 37 || e.keyCode == 39) {
		clearInterval(this.#indexInterval);
		e.keyCode == 37 ? this.#active-- : this.#active++;
		if (this.#active === this.#slides.length) {
			this.#active = 0;
		} else if (this.#active < 0) {
			this.#active = this.#slides.length - 1;
		}

		this.#image.src = this.#slides[this.#active].image;
		this.#title.textContent = this.#slides[this.#active].text;
		this.#changeDot();
		this.start()
	}
};
}

// Implementacje

// const changeDot = () => {
// 	const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
// 	dots[activeDot].classList.remove("active");
// 	dots[active].classList.add("active");
// };

// const changeSlide = () => {
// 	active++;
// 	if (active === slideList.length) {
// 		active = 0;
// 	}
// 	image.src = slideList[active].img;
// 	h1.textContent = slideList[active].text;
// 	changeDot();
// };
// let indexInterval = setInterval(changeSlide, time);

// // Klawisze
// const keyChangeSlide = (e) => {
// 	console.log(e.keyCode);
// 	if (e.keyCode == 37 || e.keyCode == 39) {
// 		clearInterval(indexInterval);
// 		e.keyCode == 37 ? active-- : active++;
// 		if (active === slideList.length) {
// 			active = 0;
// 		} else if (active < 0) {
// 			active = slideList.length - 1;
// 		}
// 		image.src = slideList[active].img;
// 		h1.textContent = slideList[active].text;
// 		changeDot();
// 		indexInterval = setInterval(changeSlide, time);
// 	}
// };


