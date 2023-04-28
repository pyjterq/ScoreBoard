let resultHome = document.getElementById("result-home");
let resultGuest = document.getElementById("result-guest");
let homeResult = 0
let guestResult = 0
// let winerMark = document.querySelector(".")

function plusHome(score) {
    resultHome.textContent = homeResult + parseInt(score)
    homeResult += score
}

function plusGuest(score) { 
    resultGuest.textContent = guestResult + parseInt(score)
    guestResult += score
}

function reset() {
    resultHome.textContent = 0
    resultGuest.textContent = 0
    homeResult = 0
    guestResult = 0
}
