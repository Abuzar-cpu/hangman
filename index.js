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
    if(userWon())
    {
        document.getElementById("word").style.backgroundColor = "lime";
        document.getElementById("word").style.padding = "1vh 1vw";
        return;
    }
    if(chances <= 0)
    {
        document.getElementById("word").style.color = "white";
        document.getElementById("word").style.backgroundColor = "red";
        document.getElementById("word").style.padding = "1vh 1vw";
        return;
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
