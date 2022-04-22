let cards = [ ]
let sum = 0

let hasBlackJack = false
let isAlive = false

let message = ""

let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

let player = {
    name: "Kahuha",
    chips: 160
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": " + player.chips

function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1
    if(randomCard > 10){
        return 10
    }
    else if(randomCard === 1){
        return 11
    }
    else{
        return randomCard
    } 
}

function startGame(){
    isAlive = true
    let firstCard  = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){

    cardEl.textContent = "Cards: "
    for(i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum 

    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You've got Blackjack"
        hasBlackJack = true
    } else {
        message = "You are out of the game"
        hasBlackJack = false
        isAlive = false
    }

    messageEl.textContent =  message
}

function newCard(){
    if(hasBlackJack === false && isAlive === true){
        let nuCard = getRandomCard()
        sum += nuCard
        cards.push(nuCard)
        renderGame() 
    }
}
