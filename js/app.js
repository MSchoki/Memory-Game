//how to play audio files: https://www.computerhilfen.de/info/audio-ton-ausgabe-im-browser-mit-html-5.html
const audioPair = new Audio('sounds/collect_coin.mp3');
const audioWon = new Audio('sounds/complete.mp3');
const audioError = new Audio('sounds/error.mp3');
const audioPlayCard = new Audio('sounds/play_card.mp3');


const picA = "img/baby.jpg";
const picB = "img/bamboo.jpg";
const picC = "img/dog.jpg";
const picD = "img/drip.jpg";
const picE = "img/landscape.jpg";
const picF = "img/nature.jpg";
const picG = "img/owl.jpg";
const picH = "img/cat.jpg";

const imgList = [picA, picA, picB, picB, picC, picC, picD, picD, picE, picE, picF, picF, picG, picG, picH, picH];
const cardList = document.querySelectorAll('.box');

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const shuffledImgList = shuffle(imgList);

// setting the images in the boxes as background:
let num = -1;
cardList.forEach(function (card) {
    num++;
    card.setAttribute('style', 'background-image: url(' + shuffledImgList[num] + ')');
});

const newGame = document.querySelector('.newGame');
newGame.addEventListener('click', restart);

//function to restart the game:
function restart() {
    document.location.reload();
}

//Using a framework for alerts: https://alertifyjs.com/
// dialog after finishing the game:
function JSalert() {
    alertify.alert("Congrats! You finished the game!");
    alertify.confirm("Your final score: " + counter + ". <br>" +
        "Time to win: " + minutes + " min. and " + seconds + " sec.. <br>" +
        "Your star rating: " + yellowStars + " Stars. <br><br>" +
        " Do you want to play again?", function (e) {
        if (e) {
            restart();
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
const points = document.querySelector('.points');
const secondTimer = document.querySelector('.second');
const minuteTimer = document.querySelector('.minute');
let seconds = 0;
let minutes = 0;
let firstCard = 'none';
let secondCard = 'none';
let foundPairs = 0;
const star = document.querySelector('.star');
const bonus = document.querySelector('.bonus');

//function for counting the seconds and minutes:
function clock() {
    seconds += 1;
    if (seconds === 60) {
        minutes += 1;
        seconds = 0;
    }
    //how to display 0 as 00 I looked up at:
    // https://stackoverflow.com/questions/8089875/show-a-leading-zero-if-a-number-is-less-than-10
    minuteTimer.textContent = String(minutes).padStart(2, 0);
    secondTimer.textContent = String(seconds).padStart(2, 0);
    if (foundPairs < 8) {
        let time = setTimeout(clock, 1000);
    }
}

clock();

const moveDisplay = document.querySelector('.move');
let moves = 0;
const fourthStar = document.querySelector('.fourthStar');
const thirdStar = document.querySelector('.thirdStar');
const secondStar = document.querySelector('.secondStar');
//counter for the remaining yellow stars:
let yellowStars = 4;

// function for a timesleep: https://www.heise.de/tipps-tricks/JavaScript-Sleep-und-setTimeout-4060840.html
function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function clickedBox(event) {
    click++;
    moves++;
    moveDisplay.textContent = String(moves);
    //after the following moves a yellow star gets blue:
    if (moves === 19) {
        fourthStar.className = "darkStar";
        yellowStars--;
    }
    if (moves === 27) {
        thirdStar.className = "darkStar";
        yellowStars--;
    }
    if (moves === 35) {
        secondStar.className = "darkStar";
        yellowStars--;
    }
    console.log('Klick:' + click);
    audioPlayCard.play();

    // after clicking the blue image is deleted so that the background image appears:
    if (click === 1) {
        firstCard = event.target.parentElement;
        firstCard.removeChild(firstCard.firstElementChild);

    }
    if (click === 2) {
        secondCard = event.target.parentElement;
        secondCard.removeChild(secondCard.firstElementChild);
    }

    // if the two clicked cards have the same img they disappear:
    if (firstCard.style.backgroundImage === secondCard.style.backgroundImage && click === 2) {
        foundPairs++;
        await Sleep(500); // pause for 0,5 sec
        //star and bonus appears:
        star.style.setProperty('visibility', 'visible');
        bonus.style.setProperty('visibility', 'visible');
        star.style.animationPlayState = 'running';
        audioPair.play();
        await Sleep(2000); // pause for 2 sec
        // star and bonus disappear:
        star.setAttribute('style', 'visibility: hidden');
        bonus.setAttribute('style', 'visibility: hidden');
        // background-imgs, border and shadow disappear:
        firstCard.removeAttribute('style', 'background-image');
        firstCard.setAttribute('style', 'border: 0px solid black; box-shadow: 0px 0px 0px 0px');
        secondCard.removeAttribute('style', 'background-image');
        secondCard.setAttribute('style', 'border: 0px solid black; box-shadow: 0px 0px 0px 0px');
        // removing hte Event Listener:
        firstCard.removeEventListener('click', clickedBox);
        secondCard.removeEventListener('click', clickedBox);
        counter += 20;
        points.textContent = counter.toString();
        click = 0;
        // if all pars are found:
        if (foundPairs === 8) {
            audioWon.play();
            JSalert();
        }
    }
    // if the images are not the same, the blue images are created again:
    else if (firstCard.style.backgroundImage != secondCard.style.backgroundImage && click === 2) {
        await Sleep(1000); // pause for 1 sec
        audioError.play();
        await Sleep(2000); // pause for 2 sec
        const back = '<img src="img/background.jpg" alt="blue background"/>';
        firstCard.insertAdjacentHTML('afterbegin', back);
        secondCard.insertAdjacentHTML('afterbegin', back);
        counter -= 5;
        points.textContent = counter.toString();
        click = 0;

    }
}

