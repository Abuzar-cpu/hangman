let chances = 10;
let pictureId = 1;
let wordList = [
    "able",
    "about",
    "account",
    "acid",
    "across",
    "act",
    "addition",
    "adjustment",
    "advertisement",
    "after",
    "again",
    "against",
    "agreement",
    "air",
    "all",
    "almost",
    "among",
    "amount",
    "amusement",
    "and",
    "angle",
    "angry",
    "animal",
    "answer",
    "ant",
    "any",
    "apparatus",
    "apple",
    "approval",
    "arch",
];


/*
 *Selecting random word from the list above
 */
 let randomWord = wordList[Math.floor(Math.random() * 29)].toUpperCase();
 console.log(randomWord);

let letters = document.getElementsByClassName("letter");
let lettersTxt = [];

for (const letter of letters) {
    lettersTxt.push(letter.innerText);
}

/*
 *Adding onclick listener to all letters
 */
for (const letter of letters) {
    letter.setAttribute("onclick", "checkLetter(this)");
}


// document.addEventListener("keyup", func);

document.onkeyup = (e) => {
    checkLetter(letters[lettersTxt.indexOf(e.key.toUpperCase())]);
}


let word = document.getElementById("word");

/*
 *Adds underscores to give hint about word length
 */
for (let i = 0; i < randomWord.length; i++) {
    let lets = document.createElement("div");
    lets.innerText = "_";
    lets.style.margin = "10vh 3vw";
    lets.classList.add("guessedLetter");
    word.appendChild(lets);
}

unders = document.getElementsByClassName("guessedLetter");

/*
 *Checks the letter that was clicked
 * if the letter is incorrect checks if the user has lost or won
 * if none is true, decrements the chances count and marks letter as incorrect
 * then checks if the user won or lost
 */
function checkLetter(letterElement) {
    var letterInWord = false;
    var clickedLetter = letterElement.innerText.trim();

    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i].trim() === clickedLetter.trim()) {
            letterElement.classList.add("correct");
            unders[i].innerText = clickedLetter;
            letterInWord = true;
        }
    }

    if (!letterInWord) {
        if (!userWon() && !(chances <= 0)) {
            document.getElementById("manImg").setAttribute("src", "./assets/images/" + pictureId++ + ".jpg");
            letterElement.classList.add("wrong");
            chances--;
            document.getElementById("guessCount").innerText = "Remaining chances: " + chances;
        }
    }
    
    if (chances <= 0) {
        document.getElementById("word").style.color = "white";
        document.getElementById("word").style.backgroundColor = "red";
        document.getElementById("word").style.padding = "1vh 1vw";
        writeWord();
        return;
    }

    if (userWon()) {
        document.getElementById("word").style.backgroundColor = "lime";
        document.getElementById("word").style.padding = "1vh 1vw";
        return;
    }
    
}

/**
 * Function to check if the user won
 * User wins if all the underscores are replaced by letter
 */
userWon = () => {
    for (let underScore of unders) {
        if (underScore.innerText == '_') {
            return false;
        }
    }
    return true;
}


writeWord = () =>
{
    for(let i = 0; i < randomWord.length; i++)
    {
        unders[i].innerText = randomWord[i];
    }
}

reload = () =>
{
    window.location.reload();
}