let resultHome = document.getElementById("result-home");
let resultGuest = document.getElementById("result-guest");
let homeResult = 0
let guestResult = 0
let resultBgHome = document.getElementById("result-bg-home")
let resultBgGuest = document.getElementById("result-bg-guest")

function plusHome(score) {
    resultHome.textContent = homeResult + parseInt(score)
    homeResult += score
    winnerMark()
}

function plusGuest(score) { 
    resultGuest.textContent = guestResult + parseInt(score)
    guestResult += score
    winnerMark()
}

function noMark(team) {
    if (team === "home") {
        resultBgHome.classList.remove("winner-bg")
    } else if (team === "guest") {
        resultBgGuest.classList.remove("winner-bg")
    } else {
        resultBgHome.classList.remove("winner-bg")
        resultBgGuest.classList.remove("winner-bg")
    }
}

function reset() {
    resultHome.textContent = 0
    resultGuest.textContent = 0
    homeResult = 0
    guestResult = 0
    noMark()
}

function winnerMark() {
    if (homeResult > guestResult) {
        resultBgHome.classList.add("winner-bg")
        noMark("guest")
    } else if (homeResult < guestResult) {
        resultBgGuest .classList.add("winner-bg")
        noMark("home")
    } else {
        noMark()
    }

}