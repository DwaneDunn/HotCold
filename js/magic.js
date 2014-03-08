$(document).ready(function() {
    
    // Variables
    var answer = Math.floor((Math.random() * 100) + 1);
        console.log("Computer random number is: " + answer);
    var numOfGuesses = 0;
    var guesses =[];
    var distance = null;
    var prevDistance = null;
    
        function getGuess(){
            $("#submit").click(game);
            $("guess").keydown(function(enter){
                if(enter.keyCode == 13){game();}
            }); //end .keydown
        } // end func getGuess

        getGuess();
    
        function game() {
            var guess = parseInt($('#guess').val());
                if(guess !== null && $.isNumeric(guess) && (1 < guess < 101)) {
                    $('#guess').val('');
                    numOfGuesses += 1;
                    guesses.push(guess);
                    distance = Math.abs(answer - guess);
                    prevDistance = Math.abs(answer - guesses[guesses.length -2]);
                        if(guess === answer){
                            $('#hint').html('Ha! You got it in ' + numOfGuesses + 'attempts. Random number was ' + answer);
                        }
                        else {
                            console.log(guess, answer, prevDistance, distance);
                            if(isNaN(prevDistance)){
                                $('#hint').html('Guess lower. Last guess: ' + guess);
                            }
                            else if (guess < answer){
                                $('#hint').html('Guess higher. Last guess: ' + guess);
                            }
                            else if (distance > prevDistance){
                                if(guess > answer){
                                    $('#hint').html('Getting colder, guess lower. Last guess: ' + guess);
                                }
                                else if (guess < answer){
                                    $('#hint').html('getting colder, go higher. Last guess: ' + guess);
                                }
                                else if (distance < prevDistance){
                                    if (guess > answer){
                                        $('#hint').html('Getting hotter, guess lower. Last guess: ' + guess);
                                    }
                                    else if (guess < answer){
                                        $('#hint').html('getting hotter, guess higher. Last guess: ' + guess);
                                    }
                                } 
                                else if (distance === prevDistance){
                                    if (guess > answer){
                                        $('#hint').html('almost got it, but lower. Last guess: ' + guess);
                                    }
                                    else if (guess < answer) {
                                        $('#hint').html('almost there, go higher. Last guess: ' + guess);
                                    } 
                                } 
                                else {
                                    $('#hint').html('Oh o, guess must be between 1 and 100');
                                }
                            }
                        } // end else
                } // end var guess if

                $('#newGame').click(function (e){
                    e.preventDefault();
                    answer = Math.floor((Math.random() * 100) + 1);
                    console.log(answer);
                    numOfGuesses = 0;
                    guesses = [];
                    distance = null;
                    prevDistance = null;
                    $('#hint').html('');
                    $('#guess').val('');
                });
            
        } // end func game
    
}); // end of document ready
