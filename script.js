// basic selection 

const buttonEl = document.querySelector("button");
const diceMoverEl = document.querySelector("#dice_mover");
const diceHistoryEl = document.querySelector(".dice_history");

let historyList = [];

const roleUpdater = () => {
    const randomValue = Math.floor((Math.random() * 6) + 1);
    const diceFace = getDiceFace(randomValue);

    diceMoverEl.innerHTML = diceFace;

    historyList.push(randomValue);
    updateHistory();
}

const updateHistory = () => {
    diceHistoryEl.innerHTML = "";

    for(let i = 0; i < historyList.length; i++) {
        const liEl = document.createElement("li");

        liEl.innerHTML = `<span>Roll ${i + 1} :</span><span>${getDiceFace(historyList[i])}</span>`;

        diceHistoryEl.appendChild(liEl);
    }
}

const getDiceFace = (randomValue) => {
    switch(randomValue) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}

buttonEl.addEventListener("click", () => {
    diceMoverEl.classList.add("arafat-animation");

    setTimeout(() => {
        diceMoverEl.classList.remove("arafat-animation");
        roleUpdater();
    }, 1000);
    
})