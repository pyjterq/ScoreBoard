let resultHome = document.getElementById("result-home");
let resultGuest = document.getElementById("result-guest");
let homeResult = 0
let guestResult = 0
let resultBgHome = document.getElementById("result-bg-home")
let resultBgGuest = document.getElementById("result-bg-guest")


document.getElementById("point-home-1").addEventListener("click", plusHome1)
function plusHome1() { plusHome(1)} 
document.getElementById("point-home-2").addEventListener("click", plusHome2)
function plusHome2() { plusHome(2)}
document.getElementById("point-home-3").addEventListener("click", plusHome3)
function plusHome3() { plusHome(3)}

function plusHome(score) {
    resultHome.textContent = homeResult + parseInt(score)
    homeResult += score
    winnerMark()
}


document.getElementById("point-guest-1").addEventListener("click", plusGuest1)
function plusGuest1() { plusGuest(1)}
document.getElementById("point-guest-2").addEventListener("click", plusGuest2)
function plusGuest2() { plusGuest(2)}
document.getElementById("point-guest-3").addEventListener("click", plusGuest3)
function plusGuest3() { plusGuest(3)}

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