/*
 * Create a list that holds all of your cards
 */
const cards = document.getElementsByClassName('card')
let cardList= [...cards]

let cardBoard= document.querySelector('.deck')
console.log(cardBoard)

let openCards=[];
//  * Display the cards on the page

document.body.onload= startGame()
 function startGame(){
     openCards=[];
//  *   - shuffle the list of cards using the provided "shuffle" method below
   cardList= shuffle(cardList);
    //  *   - loop through each card and create its HTML
    for (let i =0 ; i<cardList.length; i++){
        cardBoard.innerHTML="";
        [].forEach.call(cardList, function (item) {
            cardBoard.appendChild(item);
        });
        cardList[i].classList.remove('show', 'open', 'match')
    }
 }
//  *   - add each card's HTML to the page
//  *

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



//   set up the event listener for a card. If a card is clicked:



//  *  - display the card's symbol (put this functionality in another function that you call from this one)
//  *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
for (let i = 0; i < cardList.length; i++) {
    cardList[i].addEventListener("click", displayCards())

}

function displayCards() {
    // console.log(position)
    this.classList.toggle("show");
    this.classList.toggle("open");
    // this.classList.toggle("disabled");
    const position= $(this.target).attr('id')
    console.log(position)
    }
//  *  - if the list already has another card, check to see if the two cards match
function cardopned(){

    openCards.push(tobeArray);
    console.log(openCards)
    let openCardsLength = openCards.length;
    if (openCardsLength ===2 ){

        // if(openCards[0].type === openCards[1].type){
        //    matchedCards()
        // }
        // else{   
        //     console.log('unmach')
        // }
    }

}

function matchedCards(){
     openCards[0].classList.add("match");
     openCards[1].classList.add("match");
     openCards[0].classList.remove("show", "open");
     openCards[1].classList.remove("show", "open");
}
//  *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
//  *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
//  *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
//  *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
//  */
