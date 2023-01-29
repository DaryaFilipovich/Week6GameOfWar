class DeckOfCards {
    constructor(suit, value, rank){ // constructor for the card
        this.suit = suit;
        this.value = value;
        this.rank = rank;
    }
    
    deckOfCards = []; //initializing empty deck array to be filled with cards
    createDeck() {
        let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
        let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

        for (let i=0; i < 4; i++) { //loop to iterate through all suites and ranks to create all the cards
            for (let j=0; j < 13; j++){
                let newCard = {};
                newCard.suit = suits[i];
                newCard.rank = ranks[j];
                switch (ranks[j]) { //assigning values to the cards depending on ranks
                    case "Ace":
                        newCard.value = 14;
                        break;
                    case "King":
                        newCard.value = 13;
                        break;
                    case "Queen":
                        newCard.value = 12;
                        break;
                    case "Jack":
                        newCard.value = 11;
                        break;
                    default:
                        newCard.value = ranks[j];
                }
                this.deckOfCards.push(newCard);// filling a deck with cards
            }
        }    
    }

    shuffleDeck() { // shuffling deck
        let shuffledDeck = this.deckOfCards;
        for (let i = shuffledDeck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = shuffledDeck[i];
        shuffledDeck[i] = shuffledDeck[j];
        shuffledDeck[j] = temp;
        };
        return shuffledDeck;
    }

    

    }

    class Player {
        constructor(name, hand, score) { // constructor for a Player
            this.name = name;
            this.hand = hand;
            this.score = score;
        }
        
    }
    

    class GameOfWar {
        start() { // method to play the game
        let deck = new DeckOfCards;
         deck.createDeck();// creating and 
         deck.shuffleDeck();//shuffling our deck
         
              

         let player1 = new Player("Sam", deck.deckOfCards.slice(0, 26), 0);//instantiating 2 players
         let player2 = new Player("Tom", deck.deckOfCards.slice(26, 52), 0);// each player is dealt equal amount of cards from the deck
         
         for (let i = 0; i < player1.hand.length; i++) {// playing 26 rounds (equal to the amount of cards
            if(player1.hand[i].value > player2.hand[i].value) {//each player has) 
                player1.score++;
                     // comparing players' cards for each round, incrementing the respective score and displaying the updated score   
            console.log(player1.name + " 's current score is:" + player1.score);
            console.log(player1.name + " wins this round!");
        } else if (player2.hand[i].value > player1.hand[i].value) {
            player2.score++;
            console.log(player2.name + " 's current score is:" + player2.score);
            console.log(player2.name + " wins this round!");
        } else if (player1.hand[i].value == player2.hand[i].value){
            console.log("This round is a draw!");     
        }
    }
    if (player1.score > player2.score) {//determining the winner and displayimg final score
        console.log(player1.name + " wins the game with a final score of " + player1.score + "!");
     } else if (player2.score > player1.score) {
         console.log(player2.name + " wins the game with a final score of " + player2.score + "!");
     } else {
         console.log("It is a draw! Nobody wins!");
    }
  }
}


  const newGame = new GameOfWar;
  newGame.start();
    