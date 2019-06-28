const picA = "img/baby.jpg";
const picB = "img/bamboo.jpg";
const picC = "img/dog.jpg";
const picD = "img/drip.jpg";
const picE = "img/landscape.jpg";
const picF = "img/nature.jpg";
const picG = "img/owl.jpg";
const picH = "img/strawberry.jpg";
const picI = "img/sunset.jpg";

const imgList = [picA, picA, picB, picB, picC, picC, picD, picD, picE, picE, picF, picF, picG, picG, picH, picH, picI, picI,];

const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const card5 = document.querySelector('.card5');
const card6 = document.querySelector('.card6');
const card7 = document.querySelector('.card7');
const card8 = document.querySelector('.card8');
const card9 = document.querySelector('.card9');
const card10 = document.querySelector('.card10');
const card11 = document.querySelector('.card11');
const card12 = document.querySelector('.card12');
const card13 = document.querySelector('.card13');
const card14 = document.querySelector('.card14');
const card15 = document.querySelector('.card15');
const card16 = document.querySelector('.card16');
const card17 = document.querySelector('.card17');
const card18 = document.querySelector('.card18');

// creates a random number between a given range:
function rand(range) {
    return Math.ceil(Math.random() * 1000) % range + 1;
}
// variable for the number of remaining imgs in the list:
let listRest = 18;
let listNumber = rand(listRest) - 1;
console.log(listNumber);
const img1 = imgList[listNumber]; // a random img of the list
imgList.splice(listNumber, 1); // the chosen img is deleted from the list
listRest--;
console.log(img1);
card1.setAttribute('style', 'background-image: url(' + img1 + ')');

listNumber = rand(listRest) - 1;
console.log(listNumber);
const img2 = imgList[listNumber]; // a random img of the list
imgList.splice(listNumber, 1); // the chosen img is deleted from the list
listRest--;
console.log(img2);
card2.setAttribute('style', 'background-image: url(' + img2 + ')');

listNumber = rand(listRest) - 1;
console.log(listNumber);
const img3 = imgList[listNumber]; // a random img of the list
imgList.splice(listNumber, 1); // the chosen img is deleted from the list
listRest--;
console.log(img3);
card3.setAttribute('style', 'background-image: url(' + img3 + ')');

listNumber = rand(listRest) - 1;
console.log(listNumber);
const img4 = imgList[listNumber]; // a random img of the list
imgList.splice(listNumber, 1); // the chosen img is deleted from the list
listRest--;
console.log(img4);
card4.setAttribute('style', 'background-image: url(' + img4 + ')');

listNumber = rand(listRest) - 1;
console.log(listNumber);
const img5 = imgList[listNumber]; // a random img of the list
imgList.splice(listNumber, 1); // the chosen img is deleted from the list
listRest--;
console.log(img5);
card5.setAttribute('style', 'background-image: url(' + img5 + ')');

listNumber = rand(listRest) - 1;
console.log(listNumber);
const img6 = imgList[listNumber]; // a random img of the list
imgList.splice(listNumber, 1); // the chosen img is deleted from the list
listRest--;
console.log(img6);
card6.setAttribute('style', 'background-image: url(' + img6 + ')');

listNumber = rand(listRest) - 1;
console.log(listNumber);
const img7 = imgList[listNumber]; // a random img of the list
imgList.splice(listNumber, 1); // the chosen img is deleted from the list
listRest--;
console.log(img7);
card7.setAttribute('style', 'background-image: url(' + img7 + ')');

listNumber = rand(listRest) - 1;
console.log(listNumber);
const img8 = imgList[listNumber]; // a random img of the list
imgList.splice(listNumber, 1); // the chosen img is deleted from the list
listRest--;
console.log(img8);
card8.setAttribute('style', 'background-image: url(' + img8 + ')');

listNumber = rand(listRest) - 1;
console.log(listNumber);
const img9 = imgList[listNumber]; // a random img of the list
imgList.splice(listNumber, 1); // the chosen img is deleted from the list
listRest--;
console.log(img9);
card9.setAttribute('style', 'background-image: url(' + img9 + ')');

listNumber = rand(listRest) - 1;
console.log(listNumber);
const img10 = imgList[listNumber]; // a random img of the list
imgList.splice(listNumber, 1); // the chosen img is deleted from the list
listRest--;
console.log(img10);
card10.setAttribute('style', 'background-image: url(' + img10 + ')');

listNumber = rand(listRest) - 1;
console.log(listNumber);
const img11 = imgList[listNumber]; // a random img of the list
imgList.splice(listNumber, 1); // the chosen img is deleted from the list
listRest--;
console.log(img11);
card11.setAttribute('style', 'background-image: url(' + img11 + ')');

listNumber = rand(listRest) - 1;
console.log(listNumber);
const img12 = imgList[listNumber]; // a random img of the list
imgList.splice(listNumber, 1); // the chosen img is deleted from the list
listRest--;
console.log(img12);
card12.setAttribute('style', 'background-image: url(' + img12 + ')');

listNumber = rand(listRest) - 1;
console.log(listNumber);
const img13 = imgList[listNumber]; // a random img of the list
imgList.splice(listNumber, 1); // the chosen img is deleted from the list
listRest--;
console.log(img13);
card13.setAttribute('style', 'background-image: url(' + img13 + ')');

listNumber = rand(listRest) - 1;
console.log(listNumber);
const img14 = imgList[listNumber]; // a random img of the list
imgList.splice(listNumber, 1); // the chosen img is deleted from the list
listRest--;
console.log(img14);
card14.setAttribute('style', 'background-image: url(' + img14 + ')');

listNumber = rand(listRest) - 1;
console.log(listNumber);
const img15 = imgList[listNumber]; // a random img of the list
imgList.splice(listNumber, 1); // the chosen img is deleted from the list
listRest--;
console.log(img15);
card15.setAttribute('style', 'background-image: url(' + img15 + ')');

listNumber = rand(listRest) - 1;
console.log(listNumber);
const img16 = imgList[listNumber]; // a random img of the list
imgList.splice(listNumber, 1); // the chosen img is deleted from the list
listRest--;
console.log(img16);
card16.setAttribute('style', 'background-image: url(' + img16 + ')');

listNumber = rand(listRest) - 1;
console.log(listNumber);
const img17 = imgList[listNumber]; // a random img of the list
imgList.splice(listNumber, 1); // the chosen img is deleted from the list
listRest--;
console.log(img17);
card17.setAttribute('style', 'background-image: url(' + img17 + ')');

listNumber = rand(listRest) - 1;
console.log(listNumber);
const img18 = imgList[listNumber]; // a random img of the list
imgList.splice(listNumber, 1); // the chosen img is deleted from the list
listRest--;
console.log(img18);
card18.setAttribute('style', 'background-image: url(' + img18 + ')');


const boxes = document.querySelectorAll('.box');

// every box gets an eventListener:
boxes.forEach(function (box) {
    box.addEventListener('click', clickedBox);
});


// variable for checking if the first card or second card was clicked:
let click = 0;
//counter for the points:
let counter = 0;
const points = document.querySelector('span');
var firstCard = 'none';
var secondCard = 'none';

function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function clickedBox(event) {
    click++;
    console.log('Klick:' + click);

    if (click === 1) {
        firstCard = event.target.parentElement;
        console.log(firstCard);
        firstCard.removeChild(firstCard.firstElementChild);
        console.log(firstCard.style.backgroundImage);

    }
    if (click === 2) {
        secondCard = event.target.parentElement;
        console.log(secondCard);
        secondCard.removeChild(secondCard.firstElementChild);
        }

    // if the two clicked cards have the same img they disappear:
    if (firstCard.style.backgroundImage === secondCard.style.backgroundImage && click === 2) {

        console.log("Vor der sleep-Funktion. Die Bilder sind gleich.");
        await Sleep(3000); // Pausiert die Funktion für 3 Sekunden
        console.log("Nach der Sleep Funktion");

        firstCard.removeAttribute('style', 'background-image');
        firstCard.setAttribute('style', 'border: 0px solid black');
        secondCard.removeAttribute('style', 'background-image');
        secondCard.setAttribute('style', 'border: 0px solid black');
        firstCard.removeEventListener('click', clickedBox);
        secondCard.removeEventListener('click', clickedBox);
        counter += 20;
        points.textContent = counter.toString();
        click = 0;
    }
    else if (firstCard.style.backgroundImage != secondCard.style.backgroundImage && click === 2) {
        console.log("Vor der sleep-Funktion. Die Bilder sind verschieden.");
        await Sleep(3000); // Pausiert die Funktion für 3 Sekunden
        console.log("Nach der Sleep Funktion");
        const back = '<img src="img/background.jpg" alt="blue background"/>';
        firstCard.insertAdjacentHTML('afterbegin', back);
        secondCard.insertAdjacentHTML('afterbegin', back);
        counter -= 5;
        points.textContent = counter.toString();
        click = 0;

     }
}

