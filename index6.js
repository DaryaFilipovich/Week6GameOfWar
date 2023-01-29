class Card {
    constructor(suit, rank, value) {
     this.suit = suit;
     this.rank = rank;
     this.value = value;
    }

    
  }


class Deck {
    constructor() {
    this.deckOfCards = [];
}
deckOfCards = [];
createDeck() {
    let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    let ranks = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
    let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    for (let i = 0; i < 4; i++) {
        for (let j = 2; j < 15; j++) {
                this.deckOfCards.push(new Card(suits[i], ranks[j], values[j]));
        }
    }
   }
   
   

   shuffleDeck() {
    for (let i = newDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = newDeck[i];
    newDeck[i] = newDeck[j];
    newDeck[j] = temp;
    }
}

drawInHand() {
    for(let i = 0; i < 26; i++) {
        let drawnCard1 = this.deckOfCards.pop();
        player1.hand.push(drawnCard1);
        let drawnCard2 = this.deckOfCards.pop();
        player2.hand.push(drawnCard2);
    }
}

}

class Player {
    constructor(name, hand, score) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    } 
    
}

let player1 = new Player("Sam");
let player2 = new Player("Tom");


class GameOfWar {
    

    startGame(){
             
            
        newDeck.createDeck();
        newDeck.shuffleDeck();
        newDeck.drawInHand();
        
        this.flip();
        this.finalScore();
  
        
      }
  
              
    flip() {
    
   
    for (let i = 0; i > 26; i++) {
        let topCard1 = player1.hand.pop();
        let topCard2 = player2.hand.pop();
        
           console.log("Round 1:" + player1.name + "'s card is: " 
            + topCard1.rank + "of " + topCard1.suit + player2.name + "'s card is: " 
            + topCard2.rank + "of " + topCard2.suit);
    
    if (player1.topCard1.value > player2.topCard2.value) {
        player1.score++;
        console.log(player1.name + " 's current score is:" + player1.score);
        console.log(player1.name + "wins this round!");
    } else if (player2.topCard2.value > player1.topCard1.value) {
        player2.score++;
        console.log(player2.name + " 's current score is:" + player2.score);
        console.log(player2.name + "wins this round!");
    } else if (player1.topCard1.value == player2.topCard2.value){
        console.log("This round is a draw!");
   }
   }
}

   

       
      finalScore()  {
        if (player1.score > player2.score) {
               console.log(player1.name + "wins the game with a final score of " + player1.score);
            } else if (player2.score > player1.score) {
                console.log(player2.name + "wins the game with a final score of " + player2.score);
            } else {
                console.log("It is a draw!");
        }
      
    
    
    
    }

}


   
    
let newDeck = new Deck();
console.log(newDeck.deckOfCards);
let game = new GameOfWar();
game.startGame();



