

$(document).ready(function() {

    var gameStarted = false;        
    var totalScore = 0;
    var randomTotal;
    var wins = 0;
    var loses = 0;
    var randomNumber1;
    var randomNumber2;
    var randomNumber3;
    var randomNumber4;

    $(document).on('keypress', function(e) {

        
        if(!gameStarted){
        //generate a new random number between 1 and 8.
       
        randomTotal = Math.floor(Math.random()*(120-19+1)+19);

        $(".startGame").text("");

        randomNumber1 = Math.floor(Math.random() * 12) + 1;
        randomNumber2 = Math.floor(Math.random() * 12) + 1;

        while(randomNumber1 == randomNumber2){
          randomNumber2 = Math.floor(Math.random() * 12) + 1;
        }

        randomNumber3 = Math.floor(Math.random() * 12) + 1;

        while(randomNumber1 == randomNumber3 || randomNumber2 == randomNumber3){

          randomNumber3 = Math.floor(Math.random() * 12) + 1;
        }

        randomNumber4 = Math.floor(Math.random() * 12) + 1;

        while(randomNumber1 == randomNumber4 || randomNumber2 == randomNumber4 || randomNumber3 == randomNumber4){

          randomNumber4 = Math.floor(Math.random() * 12) + 1;
        }

         
        //$("#page_navigation1").attr("id","page_navigation1");

        $('#crystal1').attr("value", randomNumber1);

        $('#crystal2').attr("value", randomNumber2);

        $('#crystal3').attr("value", randomNumber3);

        $('#crystal4').attr("value", randomNumber4);


        console.log("randomTotal: " + randomTotal);
             
        console.log("randomNumber1: " + randomNumber1);
             
        console.log("randomNumber2: " + randomNumber2);
             
        console.log("randomNumber3: " + randomNumber3);

        console.log("randomNumber4: " + randomNumber4);        
       
        gameStarted = true;        

        $("#computer-pick").text(randomTotal);
      
    }
    else{       
     

    }  

    });


    $(".crystal").click(function(e) {


      if(gameStarted){
        
      totalScore = totalScore + parseInt($(this).attr("value"));
      $("#result").text(totalScore);

      console.log(totalScore);

      if(totalScore == randomTotal){
        
        wins = wins + 1;
        $(".wins").text("Wins: " + wins);
        console.log("Wins: " + wins);
        randomNumber1 = 0;
        randomNumber2 = 0;
        randomNumber3 = 0;
        randomNumber4 = 0;
        randomTotal = 0;
        totalScore = 0;  
        gameStarted = false;
        $('#crystal1').attr("value", randomNumber1);

        $('#crystal2').attr("value", randomNumber2);

        $('#crystal3').attr("value", randomNumber3);

        $('#crystal4').attr("value", randomNumber4);
        $("#result").text("");
        $("#computer-pick").text("");

      }
      else if(totalScore > randomTotal){       

        loses = loses + 1;          
        console.log("Loses: " + loses);         
        $(".losses").text("Loses: " + loses);
        $(".startGame").text("You Lost. Press any key to start the game again");
        $('.startGame').attr("style", "color: Red");    
        randomNumber1 = 0;
        randomNumber2 = 0;
        randomNumber3 = 0;
        randomNumber4 = 0;
        randomTotal = 0;
        totalScore = 0; 
        gameStarted = false;
        $('#crystal1').attr("value", randomNumber1);

        $('#crystal2').attr("value", randomNumber2);

        $('#crystal3').attr("value", randomNumber3);

        $('#crystal4').attr("value", randomNumber4);
        $("#result").text("");
        $("#computer-pick").text("");

      }     
    }
        
    });

  });





 

 