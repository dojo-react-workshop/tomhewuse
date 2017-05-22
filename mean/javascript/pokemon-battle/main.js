/**
 * Created by Hew4803 on 5/22/17.
 */
var game = {
    players: [],
    addPlayer: function(name){
        players.push(playerConstructor(name));
    }
};
function playerConstructor(name){
    player = {};
    player.name = name;
    player.hand = [];
    player.addCard = function(card){
        player.hand.push(card);
    };
    return player;
};


function getRandomCard(){
    let randomNum=Math.floor(Math.random()*151);
    var card=null;
    $.ajax({
        url: `http://pokeapi.co/api/v1/pokemon/${randomNum}`,
        success: function(data){
            console.log(card);
            card=data.name;
            console.log(card)
        }
    });
}
getRandomCard();