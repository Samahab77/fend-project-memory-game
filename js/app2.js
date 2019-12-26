const cards = document.getElementsByClassName('card')
let cardList = [...cards]
let cardBoard = document.querySelector('.deck')
let openCards = [];
let moves=0;
let counter= document.querySelector('.moves')


document.body.onload = startGame()

function startGame() {
    openCards = [];
    //  *   - shuffle the list of cards using the provided "shuffle" method below
    cardList = shuffle(cardList);
    //  *   - loop through each card and create its HTML
    for (let i = 0; i < cardList.length; i++) {
        cardBoard.innerHTML = "";
        [].forEach.call(cardList, function (item) {
            cardBoard.appendChild(item);
        });
        cardList[i].classList.remove('show', 'open', 'match')
    }
    moves=0;
    counter.innerHTML = moves;

    /////reset timer 
    let timer = document.querySelector('.timer')
    let min=0 ,sec=0, time=0;
     timer.innerHTML = min + ": " + sec;
     clearInterval(time);

}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



for (let i = 0; i < cardList.length; i++) {

    cardList[i].addEventListener("click", displayCards)
   cardList[i].addEventListener("click", cardopned)


}

function displayCards() {
    // console.log(position)
    this.classList.toggle("show");
    this.classList.toggle("open");
    // this.classList.toggle("disabled");
   

}
function cardopned() {

    openCards.push(this);
    // console.log(openCards)
    let openCardsLen = openCards.length;
    if (openCardsLen === 2) {
       countMove()
        if(openCards[0].id=== openCards[1].id){
            matchedCard();
        
            }   
        else{  
            
            unmatchedCard();
            
        }
    }
}
let matchedCardList = []
function matchedCard(){
   
    
    openCards.forEach(e=>{
        e.classList.add("match")
        e.classList.remove("show")
        e.classList.remove("open");
    })
    
       
        matchedCardList.push(openCards[0])
        matchedCardList.push(openCards[1])
         console.log(matchedCardList)
         if (matchedCardList.length === 16) {
             console.log("win")
             let endTime = timer.innerHTML;
             let rating = document.querySelector('.stars').innerHTML;
             matchedCardList=[]
             Swal.fire(
                 'congradulations! your time is :' + endTime,
                 'your stars rate is:' + rating,
                 'success'
             )
            //  alert('congradulations ', 'your time is :'+ endTime,
            //  'your star rate is:'+ rating,
            //      'play agen');
             startGame()

            console.log(endTime + ':' + rating)

        }
         openCards = [];
}

function unmatchedCard(){
    openCards[0].classList.add("unmatched");
    openCards[1].classList.add("unmatched");
    // console.log('unmach')
    setTimeout(function () {
        openCards[0].classList.remove("unmatched", "open", "show");
        openCards[1].classList.remove("unmatched", "open", "show");
        openCards = [];

    },500)

}
let starRate = document.getElementsByClassName('fa-star');
let starRateList = [...starRate]
// to count the move 
function countMove(){
    moves++;
    counter.innerHTML = moves;

     if (moves === 1) {
         sec = 0;
         min = 0;
         startTimer();
         
     }
//star rate
     if (moves > 8 && moves <= 12) {
         for (let i = 0; i < 3; i++) {
             starRateList[i].opacity = 1;
         }
     }else if (moves > 12 && moves <= 16) {
            for (let i = 0; i < 3; i++) {
                if (i > 3) {
                   starRateList[i].style.opacity = 0.1;
                }
            }
        }else if (moves > 16) {
            for (let i = 0; i < 3; i++) {
                if (i > 0) {
                    starRateList[i].style.opacity = 0.1;
                } 

        }

 }
}
//timer 
let sec=0 ,min=0 ,time;
let timer = document.querySelector('.timer')

function startTimer(){
        time = setInterval(function () {
                timer.innerHTML = min + ": " + sec;
                // console.log(timer)
                sec++;
                if (sec == 60) {
                    min++;
                    sec = 0;
                } 
        }, 1000)
        
}

// function endEame(){
//     if (matchedCardList==16){
//         console.log("win")
//     }
// }
// for (let i = 0; i < cardsList.length; i++) {
//     if (cardsList[i].classList === 'matched') {
//         matchedCardList.push(this);
//         console.log(matchedCardList)


