

$(document).ready(function() {


var teams = ["Arsenal", "Bournemouth", "Brighton & Hove Albion", "Burnley", "Cardiff City", "Chelsea", "Crystal Palace", "Everton", "Fullham", "Huddersfield Town", "Leicester City", "Liverpool", "Manchester City", "Manchester United", "Newcastle United", "Southampton", "Tottenham Hotspur", "Watford", "West Ham United", "Wolverhampton Wanderers"];

//QUESTIONS//

var questions = ["What club did Virgil Van Duke play for before he joined Liverpool in 2017?", 
                "Sir Alex Ferguson and Christiano Ronaldo both made a name for themselves at which club?", 
                "Which club calls their home field Vicarage Road?",
                "What team made a surprise title run in 2015 beating the imfamous 5000-1 odds?",
                "Which club had to spend the entirety of last season at Wembley Stadium as their home       field underwent a complete remake?",
                "Which club is famously sponsored by Fly Emirates?",
                "Which club became the first 'Centurions' by earning over 100 points over the season?",
                "Mark noble is the long-time captian of what team?",
                "Deandre Yedlin, famous American left-back, playhs for which team?"
                ];

var answers = ["Southampton", "Manchester United", "Watford", "Leicester City",                                         "Tottenham Hotspur", "Arsenal", "Manchester City", "West Ham United",                                   "Newcastle United"
                ];


var wingifs = [
    '<iframe src="https://giphy.com/embed/HG6mDIgFdRkUo" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/van-virgil-dijk-HG6mDIgFdRkUo"></a></p>',
    '<iframe src="https://giphy.com/embed/NvLzDSmFEGY6c" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/soccer-cristiano-ronaldo-cr7-NvLzDSmFEGY6c">via GIPHY</a></p>',





];

var lossgifs = [
        '<iframe src="https://giphy.com/embed/XpDYwAwJs2R0s" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/southamptonfc-love-heart-valentines-day-XpDYwAwJs2R0s"></a></p>',

        '<iframe src="https://giphy.com/embed/rnm4TpzG30F8Y" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/football-soccer-rnm4TpzG30F8Y"></a></p>',
        

]

var iterator = 0;

var currenta;

var response1 = 0;

var response2 = 0;

var response3 = 0;

var blankanswers = $("#answerfield");

// var item1 = $("#item1");
// var item2 = $("#item2");
// var item3 = $("#item3");
// var item4 = $("#item4");

// console.log(item1);
// console.log(item2);
// console.log(item3);
// console.log(item4);


currenta = currenta;




//PULL QUESTION//

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
    $("#item" + y[i]).text(responses[i]).attr('id', "wrong");
    }
}


displayanswers();

}



resetq();



$("#wrong").click( function() {
    console.log("clicked");
    alert("Nope!!");
    $("#answerfield").html('<div class="col-sm-7 mr-5">' + lossgifs[(iterator - 1)] + '</div> <div class="col-sm-4 ml-3"><h1>Oh no... The actual answer was ' + currenta + '</h1></div>');
    setTimeout(fiveSeconds, 1000 * 5);
    function fiveSeconds() {
        $("#answerfield").empty();
        $("#answerfield").html(             
        '<div class="col-sm-8 mr-auto ml-auto"><ul><li class="border rounded p-3 m-4" id="item1">One</li><li class="border rounded p-3 m-4" id="item2">Two</li><li class="border rounded p-3 m-4" id="item3">Three</li><li class="border rounded p-3 m-4" id="item4">Four</li></ul></div>');
        resetq();
        console.log("Time-Up!");

    };
    
});

$("#correct").click( function() {
    alert("Good Guess!!");
    $("#answerfield").html('<div class="col-sm-7 mr-5">' + wingifs[(iterator - 1)] + '</div> <div class="col-sm-4 ml-3"><h1>Nice Job!! You selected ' + currenta + '</h1></div>');
    setTimeout(fiveSeconds, 1000 * 5);
    function fiveSeconds() {
        $("#answerfield").empty();
        $("#answerfield").replaceWith(blankanswers);
        resetq();
        console.log(blankanswers);
        console.log("Time-Up!");
    };

    console.log(blankanswers);
});
console.log(blankanswers);

});


