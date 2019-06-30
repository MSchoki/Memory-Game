var audioPair = new Audio('sounds/collect_coin.mp3');
var audioWon = new Audio('sounds/complete.mp3');
var audioError = new Audio('sounds/error.mp3');
var audioPlayCard = new Audio('sounds/play_card.mp3');


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
const cardList = document.querySelectorAll('.box');

// function for creating a shuffled list:
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

const shuffledImgList = shuffle(imgList);

// setting the images in the boxes as background:
let num = -1;
cardList.forEach(function (card) {
    num++;
    card.setAttribute('style', 'background-image: url(' + shuffledImgList[num] + ')');
});


function JSalert() {
// A confirm dialog
    alertify.alert("Congrats! You finished the game!");
    alertify.confirm("Your final score: " + counter + ". <br> Do you want to play again?", function (e) {
        if (e) {
            document.location.reload();
        }
        else {
            alertify.alert("Thank you for playing!");
        }
    });
}

// every card gets an eventListener:
cardList.forEach(function (card) {
    card.addEventListener('click', clickedBox);
});


// variable for checking if the first card or second card was clicked:
let click = 0;
//counter for the points:
let counter = 0;
const points = document.querySelector('span');
var firstCard = 'none';
var secondCard = 'none';
var foundPairs = 0;
const star = document.querySelector('.star');
const bonus = document.querySelector('.bonus');

// function for a timesleep:
function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function clickedBox(event) {
    click++;
    console.log('Klick:' + click);
    audioPlayCard.play();

    // after clicking the the blue image is deleted so that the background image appears:
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
        foundPairs++;
        star.style.setProperty('visibility', 'visible');
        bonus.style.setProperty('visibility', 'visible');
        star.style.animationPlayState= 'running';
        console.log(star);
        await Sleep(1000); // Pausiert die Funktion für 1 Sekunden
        audioPair.play();
        console.log("Vor der sleep-Funktion. Die Bilder sind gleich.");
        await Sleep(1000); // Pausiert die Funktion für 1 Sekunden
        console.log("Nach der Sleep Funktion");
        star.setAttribute('style', 'visibility: hidden');
        bonus.setAttribute('style', 'visibility: hidden');
        firstCard.removeAttribute('style', 'background-image');
        firstCard.setAttribute('style', 'border: 0px solid black; box-shadow: 0px 0px 0px 0px');
        secondCard.removeAttribute('style', 'background-image');
        secondCard.setAttribute('style', 'border: 0px solid black; box-shadow: 0px 0px 0px 0px');
        firstCard.removeEventListener('click', clickedBox);
        secondCard.removeEventListener('click', clickedBox);
        counter += 20;
        points.textContent = counter.toString();
        click = 0;
        if (foundPairs === 9) {
            audioWon.play();
            JSalert();
        }
    }
    // if the images are not the same, the blue images are created again:
    else if (firstCard.style.backgroundImage != secondCard.style.backgroundImage && click === 2) {
        await Sleep(1000); // Pausiert die Funktion für 1 Sekunden
        audioError.play();
        console.log("Vor der sleep-Funktion. Die Bilder sind verschieden.");
        await Sleep(2000); // Pausiert die Funktion für 2 Sekunden
        console.log("Nach der Sleep Funktion");
        const back = '<img src="img/background.jpg" alt="blue background"/>';
        firstCard.insertAdjacentHTML('afterbegin', back);
        secondCard.insertAdjacentHTML('afterbegin', back);
        counter -= 5;
        points.textContent = counter.toString();
        click = 0;

    }
}

