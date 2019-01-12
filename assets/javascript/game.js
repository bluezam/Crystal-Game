
$(document).ready(function(){
    
    /// random number
    var Random=Math.floor(Math.random()*120+20)
    
    $('#scoretoMatch').text(Random);


    /// total /// wins /// loses
    var playerTotal = 0;
    var wins= 0;
    var losses = 0;
    

    $('#wins').text(wins);
    $('#losses').text(losses);


    /// reset
    function reset(){
    Random=Math.floor(Math.random()*120+20);
    console.log(Random)
    $('#scoretoMatch').text(Random);
    num1= Math.floor(Math.random()*12+2);
    num2= Math.floor(Math.random()*12+4);
    num3= Math.floor(Math.random()*12+6);
    num4= Math.floor(Math.random()*12+8);
    playerTotal= 0;
    $('#totalScore').text(playerTotal);
    } 


    /// display winning
    function winner(){
    alert("Chicken Dinner");
    wins++; 
    $('#wins').text(wins);
    reset();
    }


    /// display losing
    function loser(){
    alert ("Git gud!");
    losses++;
    $('#losses').text(losses);
    reset();
    }


    /// gems
    var num1= Math.floor(Math.random()*4+2);
    var num2= Math.floor(Math.random()*6+4);
    var num3= Math.floor(Math.random()*8+6);
    var num4= Math.floor(Math.random()*12+8);


    /// clicking gems
    $('.gems1').on ('click', function(){
        playerTotal = playerTotal + num1;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal); 
            if (playerTotal == Random){
              winner();
            }
            else if ( playerTotal > Random){
              loser();
            }   
    })  
    $('.gems2').on ('click', function(){
        playerTotal = playerTotal + num2;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal); 
            if (playerTotal == Random){
              winner();
            }
            else if ( playerTotal > Random){
              loser();
            } 
    })  
    $('.gems3').on ('click', function(){
        playerTotal = playerTotal + num3;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);
              if (playerTotal == Random){
              winner();
            }
            else if ( playerTotal > Random){
              winner();
            } 
    })  
    $('.gems4').on ('click', function(){
        playerTotal = playerTotal + num4;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal); 
              if (playerTotal == Random){
              winner();
            }
            else if ( playerTotal > Random){
              loser();
            }

            
    });   
});