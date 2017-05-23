'use strict'
//Deck object with 52 cards
//Deck can shuffle
//Deck can reset
//Deal random card
//Deal returns card and removes from deck

class Deck {
    constructor(){
        this.cards = this.generateCards();
    }

    shuffleDeck() {
        let currentIndex = this.cards.length;
        let randomIndex = 0;
        let temporaryValue = 0;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temporaryValue;
        }
    }

    dealCard(){
        let randomNum=Math.floor(Math.random()*this.cards.length);
        return this.cards.splice(randomNum,1)[0];
    }


    generateCards(){
        console.log('running card generator');
        let cardArray = [];
        var suits = ['c','d','h','s'];
        suits.forEach(function(value){
            console.log(value);
            for(let i=1;i<=13;i++){
                let card = {};
                card.suit=value;
                switch (i){
                    case 11:
                        card.name="Jack";
                        card.value=10;
                        card.img=`${value}j.png`;
                        break;
                    case 12:
                        card.name="Queen";
                        card.value=10;
                        card.img=`${value}q.png`;
                        break;
                    case 13:
                        card.name="King";
                        card.value=10;
                        card.img=`${value}k.png`;
                        break;
                    case 1:
                        card.name="Ace";
                        card.value=1;
                        card.img=`${value}${i}.png`;
                        break;
                    default:
                        card.name = i;
                        card.value = i;
                        card.img=`${value}${i}.png`;
                }
                cardArray.push(card);
            }
        });
        console.log(`Number of cards in Deck: ${cardArray.length}`);
        return cardArray;
    }
}

//Player has name
//Player has hand
//Player should be able to take card(deck deal method)
//Player should be able to discard
class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }

    takeCard (cardDealt) {
        this.hand.push(cardDealt);
    }

    discardCard(card){
        var self = this;
        this.hand.forEach(function(value, index, arr){
            if(card.name=value.name){
                if(card.suit=value.suit){
                    return self.hand.splice(index,1);
                }
            }
        });
    }
}

var newDeck = new Deck();
console.log(newDeck);
newDeck.shuffleDeck();
newDeck.shuffleDeck();
console.log(newDeck);

var newPlayer = new Player("Tom");
newPlayer.takeCard(newDeck.dealCard());
newPlayer.takeCard(newDeck.dealCard());
console.log(newPlayer.hand);
console.log(newDeck.cards.length);
newPlayer.discardCard({suit: 'c', name: 'King', value: 10, img: 'ck.png' });
