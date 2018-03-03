// Possible answers
var letters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
                "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
                "w", "x", "y", "z" ]; 


// Game Stats
var game = {
        wins: 0,
        loses: 0,
        counter: 9,

        // Lose reset
        lose: function(){
        this.loses++;
        this.counter = 9
        },

        // Win reset
        win: function(){
        this.wins++;
        this.counter = 9;
        }

};


// User inputs
document.onkeyup = function (){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
   
    // Answer Letter
    var answer = letters[Math.floor(Math.random()*letters.length)];  

    // Logic for guess counter
    if(userGuess != answer) {
        game.counter --;
    }
  
        
    // Logic for Winning conditions
    if(userGuess === answer){
        console.log("You Win!");
        game.win();

    }

    // logic for Losing conditions
    if(game.counter === 0){
        console.log("You Lose!");
        game.lose();

    }

    // Game Stats
    var html = "<h1>The Psychic Game</h1>" +
    "<p>Guess what letter is on my mind.</p>" + 
    "<p>wins: " + game.wins + "</p>" +
    "<p>losses: " + game.loses + "</p>" +
    "<p>guesses remaing: " + game.counter + "</p>" ;
    
    document.querySelector("#game").innerHTML = html;

            
          
            
    
}
