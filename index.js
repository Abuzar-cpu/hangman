let chances = 6;

let letters = document.getElementsByClassName("letter");

for (const letter of letters) {
    letter.setAttribute("onclick", "checkLetter(this)");
}


let randomWord = "HELLO".toUpperCase();

let word = document.getElementById("word");

for(let i = 0; i < randomWord.length; i++)
{
    let lets = document.createElement("div");
    lets.innerText = "_";
    lets.style.margin = "10vh 3vw";
    lets.classList.add("guessedLetter");
    word.appendChild(lets);
}

unders = document.getElementsByClassName("guessedLetter");

function checkLetter(letterElement) {
    if(userWon())
    {
        alert("You won");
        return;
    }
    if(chances <= 0)
    {
        alert("Game over");
        return;
    }
    var letterInWord = false;
    var clickedLetter = letterElement.innerText.trim();
    
    for (let i = 0; i < randomWord.length; i++) {
        if(randomWord[i].trim() === clickedLetter.trim())
        {
            letterElement.classList.add("correct");
            unders[i].innerText = clickedLetter;
            letterInWord = true;
        }
    }
    if (!letterInWord)
    {
        letterElement.classList.add("wrong");
        chances--;
        document.getElementById("guessCount").innerText = "Remaining chances: " + chances;
    }
}

userWon = () =>
{
    for (let underScore of unders) {
        if(underScore.innerText == '_')
        {
            return false;
        }
    }
    return true;
}
