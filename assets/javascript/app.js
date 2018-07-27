

$(document).ready(function() {


var teams = ["Arsenal", "Bournemouth", "Brighton & Hove Albion", "Burnley", "Cardiff City", "Chelsea", "Crystal Palace", "Everton", "Fullham", "Huddersfield Town", "Leicester City", "Liverpool", "Manchester City", "Manchester United", "Newcastle United", "Southampton", "Tottenham Hotspur", "Watford", "West Ham United", "Wolverhampton Wanderers"];

//QUESTIONS//

var questions = ["What club did Virgil Van Dijk play for before he joined Liverpool in 2017?", 
                "Sir Alex Ferguson and Christiano Ronaldo both made a name for themselves at which club?", 
                "Which club calls their home field Vicarage Road?",
                "What team made a surprise title run in 2015 beating the imfamous 5000-1 odds?",
                "Which club had to spend the entirety of last season at Wembley Stadium as their home       field underwent a complete remake?",
                "Which club is famously sponsored by Fly Emirates?",
                "Which club became the first 'Centurions' by earning over 100 points over the season?",
                "Mark noble is the long-time captian of what team?",
                "Deandre Yedlin, famous American left-back, plays for which team?"
                ];

var answers = ["Southampton", "Manchester United", "Watford", "Leicester City",                                         "Tottenham Hotspur", "Arsenal", "Manchester City", "West Ham United",                                   "Newcastle United"];


var wingifs = [
    //VanDijk
    '<iframe src="https://giphy.com/embed/HG6mDIgFdRkUo" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/van-virgil-dijk-HG6mDIgFdRkUo"></a></p>',
    //Ronaldo
    '<iframe src="https://giphy.com/embed/NvLzDSmFEGY6c" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/soccer-cristiano-ronaldo-cr7-NvLzDSmFEGY6c"></a></p>',
    //Watford
    '<iframe src="https://giphy.com/embed/26FeXhOAl7BWDneLK" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bbc-football-soccer-26FeXhOAl7BWDneLK"></a></p>',
    //Leicester
    '<iframe src="https://giphy.com/embed/l0G17J4cp6n6Rs7Ty" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lcfc-epl-leicester-city-fc-l0G17J4cp6n6Rs7Ty"></a></p>',
    //Spurs
    '<iframe src="https://giphy.com/embed/l1J9JV2qoJqTHncMo" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/spursofficial-football-soccer-l1J9JV2qoJqTHncMo"></a></p>',
    //Arsenal
    '<iframe src="https://giphy.com/embed/l3nSNQL3G3MILAZSE" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/arsenal-football-soccer-l3nSNQL3G3MILAZSE"></a></p>',
    //Man City
    '<iframe src="https://giphy.com/embed/3oEjI0P5bpSNHmtsly" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mcfc-3oEjI0P5bpSNHmtsly"></a></p>',
    //Mark Noble
    '<iframe src="https://giphy.com/embed/3ohs4he2U4U1rVVigM" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/west-ham-united-3ohs4he2U4U1rVVigM"></a></p>',
    //Deandre Yedlin
    '<iframe src="https://giphy.com/embed/3oEjHO1C8A7O90DhS0" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/3oEjHO1C8A7O90DhS0"></a></p>',




];

var lossgifs = [
    //Van Dijk
    '<iframe src="https://giphy.com/embed/XpDYwAwJs2R0s" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/southamptonfc-love-heart-valentines-day-XpDYwAwJs2R0s"></a></p>',
    //Ronaldo
    '<iframe src="https://giphy.com/embed/rnm4TpzG30F8Y" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/football-soccer-rnm4TpzG30F8Y"></a></p>',
    //Watford
    '<iframe src="https://giphy.com/embed/1UUa9X1s4R4XhweIGP" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lfc-premier-league-liverpool-1UUa9X1s4R4XhweIGP"></a></p>',
    //Leicester
    '<iframe src="https://giphy.com/embed/2SKHtZ8boNV04" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/premier-league-leicester-city-robert-huth-2SKHtZ8boNV04"></a></p>',
    //Spurs
    '<iframe src="https://giphy.com/embed/3ohhwetF9vMQkohl4Y" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/spursofficial-football-soccer-3ohhwetF9vMQkohl4Y"></a></p>',
    //Arsenal
    '<iframe src="https://giphy.com/embed/Jrly0ycrj0eVG" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/things-arsenal-Jrly0ycrj0eVG"></a></p>',
    //Man City
    '<iframe src="https://giphy.com/embed/3oKIPgsesMuaaa4rfO" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mcfc-manchester-city-man-3oKIPgsesMuaaa4rfO"></a></p>',
    //Mark Noble
    '<iframe src="https://giphy.com/embed/l4EpfnNsdc0aR7QT6" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bbc-funny-football-l4EpfnNsdc0aR7QT6"></a></p>',
    //Deandre Yedlin
    '<iframe src="https://giphy.com/embed/26xBuewBUXMFlzTDq" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ussoccer-no-way-unbelievable-26xBuewBUXMFlzTDq"></a></p>',


]

var iterator = 0;

var currenta;

var response1 = 0;

var response2 = 0;

var response3 = 0;

currenta = currenta;

var questioncounter = 0;

var timernum = 30;

var intervalId;


//PULL QUESTION//

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    timernum--;
    $("#timer").html("<h4>" + timernum + "</h4>")
    if (timernum === 0) {
        alert("You ran out of time!!")
        $("#answerlist").html('<div class="col-sm-7 mr-5">' + lossgifs[(iterator - 1)] + '</div> <div class="row"><h3>The answer was ' + currenta + '. Try to answer faster next time!</h3></div>');
        setTimeout(sevenSeconds, 1000 * 7);
        clearInterval(clearInterval);
        timernum = 37;
        clearInterval(clearInterval);
    }

}




run();


function resetq() {
    




    function pullquestion() {


        
        var currentq = questions[iterator];

        $("#questionfield").text(currentq);

        currenta = answers[iterator];

        console.log("Current Answer is " + currenta);

        iterator++;  

        console.log("iterator " + iterator);





    }

    pullquestion();




    //RANDOMIZE RESPONSES//

    function randoresponses() {
        response1 = teams[(Math.floor(Math.random() * teams.length))]
        console.log(response1);
        response2 = teams[(Math.floor(Math.random() * teams.length))]
        console.log(response2);
        response3 = teams[(Math.floor(Math.random() * teams.length))]
        console.log(response3);

        if ((response1===response2)||(response1===response3)||(response2===response3)||(currenta===response1)||(currenta===response2)||(currenta===response3)) {
            randoresponses();

        }

    }

    randoresponses();



    //DISPLAY RESPONSES//

    function displayanswers() {

        var responses = [response1, response2, response3];
        
        //CORRECT//
        var value1 = (Math.floor(Math.random() * 4) + 1);
        console.log(value1);
        $("#item" + value1).text(currenta).attr('id', 'correct');

        //WRONG//
        var y = [1, 2, 3, 4]

        y = jQuery.grep(y, function(value) {
        return value != value1;

        });

        console.log(y);

        for (i=0; i<y.length; i++) {
        $("#item" + y[i]).text(responses[i]).attr('id', "wrong" + i + "");
        }
    }


    displayanswers();

    }



    resetq();

    function sevenSeconds() {
        $("#answerlist").empty();
        $("#answerlist").append(
            $('<li/>')
            .addClass("border rounded p-3 m-4")
            .attr('id', "item1")

                .text("Test")
            );
            $("#answerlist").append(
                $('<li/>')
                .addClass("border rounded p-3 m-4")
                .attr('id', "item2")

                .text("Test")
            );     
            $("#answerlist").append(
                $('<li/>')
                .addClass("border rounded p-3 m-4")
                .attr('id', "item3")

                .text("Test")
            );     
            $("#answerlist").append(
                $('<li/>')
                .addClass("border rounded p-3 m-4")
                .attr('id', "item4")

                .text("Test")
            );     

            questioncounter++;
            console.log("question counter is: " + questioncounter);

            if (questioncounter === 9) {
                alert("Game  over! Press ok to start over");
                iterator = -1;
            
                response1 = 0;
            
                response2 = 0;
            
                response3 = 0;
            
                currenta = currenta;
            
                questioncounter = 0;
            
                timernum = 30;
            
                intervalId;
            
                $("#answerlist").empty();
                $("#answerlist").append(
                    $('<li/>')
                    .addClass("border rounded p-3 m-4")
                    .attr('id', "item1")
            
                        .text("Test")
                    );
                    $("#answerlist").append(
                        $('<li/>')
                        .addClass("border rounded p-3 m-4")
                        .attr('id', "item2")
            
                        .text("Test")
                    );     
                    $("#answerlist").append(
                        $('<li/>')
                        .addClass("border rounded p-3 m-4")
                        .attr('id', "item3")
            
                        .text("Test")
                    );     
                    $("#answerlist").append(
                        $('<li/>')
                        .addClass("border rounded p-3 m-4")
                        .attr('id', "item4")
            
                        .text("Test")
                    );     
            
                    resetq();

                

            
                }


                resetq();




    

    $("#wrong0").on("click", function() {
        alert("Nope!!");
        $("#answerlist").html('<div class="col-sm-7 mr-5">' + lossgifs[(iterator - 1)] + '</div> <div class="row"><h3>Oh no... The actual answer was ' + currenta + '</h3></div>');
        setTimeout(sevenSeconds, 1000 * 7);
        clearInterval(clearInterval);
        timernum = 37;
        clearInterval(clearInterval);
        
        
    });

    $("#wrong1").on("click", function() {
        alert("Nope!!");
        $("#answerlist").html('<div class="col-sm-7 mr-5">' + lossgifs[(iterator - 1)] + '</div> <div class="row"><h3>Oh no... The actual answer was ' + currenta + '</h3></div>');
        setTimeout(sevenSeconds, 1000 * 7);
        clearInterval(clearInterval);
        timernum = 37;
        clearInterval(clearInterval);
        
    });

    $("#wrong2").on("click", function() {
        alert("Nope!!");
        $("#answerlist").html('<div class="col-sm-7 mr-5">' + lossgifs[(iterator - 1)] + '</div> <div class="row"><h3>Oh no... The actual answer was ' + currenta + '</h3></div>');
        setTimeout(sevenSeconds, 1000 * 7);
        clearInterval(clearInterval);
        timernum = 37;
        clearInterval(clearInterval);
        
    });



    $("#correct").on("click", function() {
        alert("Good Guess!!!");
        $("#answerlist").html('<div class="col-sm-7 mr-5">' + wingifs[(iterator - 1)] + '</div> <div class="row"><h3>Good Guess! The answer was ' + currenta + '</h3></div>');
        setTimeout(sevenSeconds, 1000 * 7);
        timernum = 37;
        clearInterval(clearInterval);


        
    });



    };

$("#wrong0").on("click", function() {
    console.log("clicked");
    alert("Nope!!");
    $("#answerlist").html('<div class="col-sm-7 mr-5">' + lossgifs[(iterator - 1)] + '</div> <div class="row"><h3>Oh no... The actual answer was ' + currenta + '</h3></div>');
    setTimeout(sevenSeconds, 1000 * 7);
    clearInterval(clearInterval)
    timernum = 37;
    clearInterval(clearInterval);
    
});

$("#wrong1").on("click", function() {
    console.log("clicked");
    alert("Nope!!");
    $("#answerlist").html('<div class="col-sm-7 mr-5">' + lossgifs[(iterator - 1)] + '</div> <div class="row"><h3>Oh no... The actual answer was ' + currenta + '</h3></div>');
    setTimeout(sevenSeconds, 1000 * 7);
    clearInterval(clearInterval)
    timernum = 37;
    clearInterval(clearInterval);
    
});

$("#wrong2").on("click", function() {
    console.log("clicked");
    alert("Nope!!");
    $("#answerlist").html('<div class="col-sm-7 mr-5">' + lossgifs[(iterator - 1)] + '</div> <div class="row"><h3>Oh no... The actual answer was ' + currenta + '</h3></div>');
    setTimeout(sevenSeconds, 1000 * 7);
    clearInterval(clearInterval)
    timernum = 37;
    clearInterval(clearInterval);
    
});


$("#correct").on("click", function() {
    console.log("clicked");
    alert("Good Guess!!!");
    $("#answerlist").html('<div class="col-sm-7 mr-5">' + wingifs[(iterator - 1)] + '</div> <div class="row"><h3>Good Guess! The answer was ' + currenta + '</h3></div>');
    setTimeout(sevenSeconds, 1000 * 7);
    timernum = 37;
    clearInterval(clearInterval);



    
});





});


