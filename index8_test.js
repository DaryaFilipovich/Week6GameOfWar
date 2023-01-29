let expect = chai.expect;



    describe("Checking if shuffle method works", function() {
        it("shuffled deck (deck1) should be different from unshuffled deck (deck2)", function() {
            let deck1 = new DeckOfCards();
            let deck2 = new DeckOfCards();
            deck1.createDeck();
            deck1.shuffleDeck();
            expect(deck1).to.not.equal(deck2);
        });
    });


 

  

  
   









