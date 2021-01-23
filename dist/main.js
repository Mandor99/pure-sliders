document.title = document.title.toUpperCase(); // start slider-1

let sliderOne = [];
const img1 = 'images/img1.png';
const img2 = 'images/img2.png';
const img3 = 'images/img3.png';
const img4 = 'images/img4.png';
const img5 = 'images/img5.png';
sliderOne[0] = img1;
sliderOne[1] = img2;
sliderOne[2] = img3;
sliderOne[3] = img4;
sliderOne[4] = img5;
let counterOfSliderOne = 0;

function changeImagesInSliderOne() {
  document.slide.src = sliderOne[counterOfSliderOne];

  if (counterOfSliderOne < sliderOne.length - 1) {
    counterOfSliderOne++;
  } else {
    counterOfSliderOne = 0;
  }

  setTimeout(changeImagesInSliderOne, 2500);
} // end slider-1
//start slider 2


let slidesInSlider2 = document.getElementsByClassName('slide');
let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let slidesTwoArr = [...slidesInSlider2];
let counterOfSliderTwo = 0; //to reset slides in every change with display none

function resetSlideTwo() {
  slidesTwoArr.forEach(img => {
    img.style.display = 'none';
  });
} //to start the main slide with display block && reset the rest


function startSlideTwo() {
  resetSlideTwo();
  slidesTwoArr[0].style.display = 'block';
} //when u click on arrow left


arrowLeft.addEventListener('click', function () {
  // when it == first index
  if (counterOfSliderTwo == 0) {
    counterOfSliderTwo = slidesTwoArr.length; // as the slideLeftTwo() will add -- to counter
  }

  slideLeftTwo();
});

function slideLeftTwo() {
  resetSlideTwo(); // it start from last index, min-1 to make the prev index is block after reseting them

  slidesTwoArr[counterOfSliderTwo - 1].style.display = 'block';
  counterOfSliderTwo--;
} //when u click on arrow right


arrowRight.addEventListener('click', function () {
  // when it == last index
  if (counterOfSliderTwo == slidesTwoArr.length - 1) {
    counterOfSliderTwo = -1; //as the slideRightTwo() will add ++ to counter
  }

  slideRightTwo();
});

function slideRightTwo() {
  resetSlideTwo(); // it start from zero, plus+1 to make the next index is block after reseting them

  slidesTwoArr[counterOfSliderTwo + 1].style.display = 'block';
  counterOfSliderTwo++;
} //end slider 2
// start slider3


const slider3Right = document.getElementById('next-slider3');
const slider3Left = document.getElementById('prev-slider3');
const carouselInSlider3 = document.querySelector('.carousel-slider3');
const carouselImgInSlider3 = document.querySelectorAll('.carousel-slider3 img');
carousel3Arr = [...carouselImgInSlider3]; // arr[0, 1, 2, 3, 4]

let size = carousel3Arr[0].clientWidth; // the width of the image = 1280px

let counterOfSlider3 = 1; //not zero to make the carousel start from arr[1]

/* 
    length = 5 / 
    [0] => last-clone == [3] == length - 2
    [1] => on it when translateX = -1280 *1
    [2] => on it when translateX = -1280 *2
    [3] => on it when translateX = -1280 *3
    [4] => first-clone == [1] == length - ( 4 ==> counter )
*/
// to make margin left=1280px to not start from last-clone (translatex: -1280 * 1)

carouselInSlider3.style.transform = `translateX(${-size * counterOfSlider3}px)`; //arrow rigth increase the counter to increase the translateX

slider3Right.addEventListener('click', function () {
  console.log(counterOfSlider3); //if we on first-clone we return ( this happen when we click quickly many times as we will be on the index[0])

  if (counterOfSlider3 >= carousel3Arr.length - 1) return; //if first-clone return none

  counterOfSlider3++; //when it be = last index will not view images so we made the prev if() and the next event ('transitionend')
  //when will be 4(first-clone) => will be [1](length - counter) with (transitionend)

  carouselInSlider3.style.transform = `translateX(${-size * counterOfSlider3}px)`;
});
slider3Left.addEventListener('click', function () {
  console.log(counterOfSlider3);
  if (counterOfSlider3 <= 0) return; //if = last-clone return none *that's if we don't use transitionend event in the next function

  counterOfSlider3--; //when will be 0(last-clone) => will be [3](length - 2) with (transitionend)

  carouselInSlider3.style.transform = `translateX(${-size * counterOfSlider3}px)`;
}); //this function to make it infinity and don't stop when we is on the last-clone or first-clone

carouselInSlider3.addEventListener('transitionend', function () {
  if (carousel3Arr[counterOfSlider3].id === 'last-clone') {
    // carouselInSlider3.style.transform = "none";
    counterOfSlider3 = carousel3Arr.length - 2; // make count = 5-2=3 return to the same img but not the last-clone as will make transitionX to it . as the counter was = 0 and we need it to be 3

    carouselInSlider3.style.transform = `translateX(${-size * counterOfSlider3}px)`;
  }

  if (carousel3Arr[counterOfSlider3].id === 'first-clone') {
    // carouselInSlider3.style.transform = "none";
    counterOfSlider3 = carousel3Arr.length - counterOfSlider3; //as the counter was = 4 an dwe need it to be 1

    carouselInSlider3.style.transform = `translateX(${-size * counterOfSlider3}px)`;
  }
}); //end slider3
// start slider4

const slidesOf4 = document.querySelectorAll('.slide-of4');
const prevOf4 = document.getElementById('prev-slider4');
const nextOf4 = document.getElementById('next-slider4');
const slides4Arr = [...slidesOf4];
let auto = true;
let slideIntervalAuto;
intevalTime = 3000; //for auto slide

if (auto) {
  slideIntervalAuto = setInterval(() => nextSlideOf4(), intevalTime);
}

function nextSlideOf4() {
  const current4 = document.querySelector('#slider4 .current'); // current4.classList.remove('current'); // it's right and when make it inside if() right also

  if (current4.nextElementSibling) {
    current4.classList.remove('current');
    current4.nextElementSibling.classList.add('current');
  } else {
    current4.classList.remove('current');
    slides4Arr[0].classList.add('current');
  } // setTimeout(()=> current4.classList.remove('current'));

}

function prevSlideOf4() {
  const current4 = document.querySelector('#slider4 .current'); // current4.classList.remove('current');

  if (current4.previousElementSibling) {
    current4.classList.remove('current');
    current4.previousElementSibling.classList.add('current');
  } else {
    current4.classList.remove('current');
    slides4Arr[slides4Arr.length - 1].classList.add('current');
  } // setTimeout(()=> current4.classList.remove('current'));

} //setTimeout() & addEventListener() we must use arrow function inside it[ ()=> next() ] or the ressult of the function  like [ next ]


nextOf4.addEventListener('click', () => {
  nextSlideOf4();

  if (auto) {
    clearInterval(slideIntervalAuto);
    slideIntervalAuto = setInterval(() => nextSlideOf4(), intevalTime);
  }
}); // this is style == the next addEventListner 
// nextOf4.addEventListener('click', nextSlideOf4); // or must use the result of function

prevOf4.addEventListener('click', () => {
  prevSlideOf4();

  if (auto) {
    clearInterval(slideIntervalAuto);
    slideIntervalAuto = setInterval(() => nextSlideOf4(), intevalTime);
  }
}); // must be in arrow function
// end slider4
// start slider5

const mainImgIn5 = document.querySelector('#slider5 .main-img img');
const thumbnailsContainer = document.querySelector('#slider5 .thumbnails');
const thumbnail = document.querySelectorAll('#slider5 .thumbnails img');
let thumbnailArr5 = [...thumbnail];
thumbnailsContainer.style.gridTemplateColumns = `repeat(${thumbnailArr5.length}, 1fr)`;
thumbnailArr5.forEach(img => {
  img.addEventListener('click', e => {
    //to change the src of main img
    mainImgIn5.src = img.src; //to remove class selected from all imgs of thumbnalis

    thumbnailArr5.forEach(img => img.classList.remove('selected')); //to add the class selected for the clicked thumbnail

    img.classList.add('selected'); // to add class fade-in to current img 

    mainImgIn5.classList.add('fade-in'); // to remove the calss after finishing the animation every 400ms to can use it again with the same effect    

    setTimeout(() => mainImgIn5.classList.remove('fade-in'), 400);
  });
});
/* 
    this the same prev function==>
        outer function called back into the element 
        to effect on the element => u'll use e.target.****
*/
// thumbnailArr5.forEach(img=> img.addEventListener('click', changeSrc));
// function changeSrc(e){
//     thumbnailArr5.forEach(img=>img.classList.remove('selected'));
//     mainImgIn5.src = e.target.src;
//     e.target.classList.add('selected');
//     // setTimeout(()=> e.target.style.opacity = 1, 400);
// }
// end slider5
//start slider6

const slider6Content = document.querySelector('#slider6 .content p');
const imgs6Arr = [...document.querySelectorAll('#slider6 .imgs img')];
const nextIn6 = document.getElementById('next-slider6');
const prevIn6 = document.getElementById('prev-slider6');
const pullets = document.querySelector('#slider6 .indicators');
let currentIn6 = 1; // console.table(imgs6Arr);
// create the pullets depends on imgsLength

imgs6Arr.forEach((_, i) => {
  const item = document.createElement('li');
  item.setAttribute('data-index', i + 1);
  item.appendChild(document.createTextNode(i + 1));
  pullets.append(item);
});
const pullet = [...document.querySelectorAll('.indicators li')];
pullet[0].classList.add('active'); // make main function to change the content & move the classes[disabled on arrows, active on pullet current on imgs] depends on current number 

function main() {
  //to change the content depends on current slide
  slider6Content.textContent = `this slider is ${currentIn6}`; // add/remove active from the pullets 

  pullet.forEach(ele => ele.classList.remove('active'));
  pullet[currentIn6 - 1].classList.add('active'); // add/remove current class from the img slider

  imgs6Arr.forEach(img => img.classList.remove('current'));
  imgs6Arr[currentIn6 - 1].classList.add('current'); // add/remove disabled class form arrows

  currentIn6 == 1 ? prevIn6.classList.add('disabled') : prevIn6.classList.remove('disabled');
  currentIn6 == imgs6Arr.length ? nextIn6.classList.add('disabled') : nextIn6.classList.remove('disabled');
} // next function


function nextSlide6() {
  if (currentIn6 == imgs6Arr.length) {
    return;
  } else {
    currentIn6++;
    main();
  }
}

function prevSlide6() {
  if (currentIn6 == 1) {
    return;
  } else {
    currentIn6--;
    main();
  }
}

nextIn6.addEventListener('click', nextSlide6);
prevIn6.addEventListener('click', prevSlide6);
pullet.forEach(ele => {
  ele.addEventListener('click', () => {
    currentIn6 = parseInt(ele.getAttribute('data-index'));
    main();
  });
}); //end slider6

document.addEventListener("DOMContentLoaded", function () {
  changeImagesInSliderOne();
  startSlideTwo();
  main();
});