// GAME LOOP

$(function () {
    $("button").on("click", init);
    $(".score").html = game.score;
});

// VARIABLES GLOBALES

var red_timing    = [0,900,1400,10090,14690,19290,23700,24400];
var blue_timing   = [1850,2050,2250,2450,2650,
                    2850,3050,3250,3450,3650,3850,
                    4050,4250,4450,4650,4850,5050,
                    5250,5450,5650,10600,15200,19800,24400];
var yellow_timing = [1950,2150,2350,2550,2750,
                    2950,3150,3350,3550,3370,
                    3950,4150,4350,4550,4750,
                    4950,5150,5350,5550,5750,24400];
var green_timing  = [7300,9750,11900,14350,16500,18950,21100,23100,24400];
var dab_timing    = [6200,8300,10800,12900,15400,17500,20000,22100];
var game = {};
game.score = 0;
var count = 0;
var $canvas = $('.canvas');

// FONCTIONS

function affichageScore(){
    var modal = document.getElementById('modal-score');
      modal.style.display="block";
      var afficheScore= document.getElementById('afficheScore');
      afficheScore.innerHTML = "Score : "+ game.score;
      var mGameOver = document.getElementById('end_game');
      var image = document.getElementById('img');
      var listImg = ["<img src='img/grandma.jpg'>","<img src='img/young.jpg'>"];
      var listQuote = ["SUPER! Tu es maintenant en concurrence avec Wladimir!","Sorry but Young metro don't trust you..."];

      if (game.score> 600) {
        image.innerHTML = listImg[0];
        mGameOver.innerHTML = listQuote[0];
      }
      else{
        image.innerHTML = listImg[1];
        mGameOver.innerHTML = listQuote[1];
      }
    }

function createDab() {
    var $cubeDab = $('<div></div>');
    $cubeDab.addClass("cube-dab");
    $cubeDab.addClass("dab");
    $cubeDab.css("left", 32);
    $canvas.append($cubeDab);
    $('.cube-dab').animate({
        top: 500,
        opacity: 1
    }, 2000, 'linear');

}
function createRed() {
    var $cubeRed = $('<div></div>');
    $cubeRed.addClass("cube");
    $cubeRed.addClass("red");
    $cubeRed.css("left", 32);
    $canvas.append($cubeRed);
    $('.cube').animate({
        top: 500,
        opacity: 1
    }, 2000, 'linear');

}


function createBlue() {
    var $cubeBlue = $('<div></div>');
    $cubeBlue.addClass("cube");
    $cubeBlue.addClass("blue");
    $cubeBlue.css("left", 103);
    $canvas.append($cubeBlue);
    $('.cube').animate({
        top: 500,
        opacity: 1
    }, 2000, 'linear');
}

function createYellow() {
    var $cubeYellow = $('<div></div>');
    $cubeYellow.addClass("cube");
    $cubeYellow.addClass("yellow");
    $cubeYellow.css("left", 178);
    $canvas.append($cubeYellow);
    $('.cube').animate({
        top: 500,
        opacity: 1
    }, 2000, 'linear');
}

function createGreen() {
    var $cubeYellow = $('<div></div>');
    $cubeYellow.addClass("cube");
    $cubeYellow.addClass("green");
    $cubeYellow.css("left", 250);
    $canvas.append($cubeYellow);
    $('.cube').animate({
        top: 500,
        opacity: 1
    }, 2000, 'linear');
}

var migos = document.getElementById("migos");
function playMigos() {
    migos.play();
}

function pauseMigos() {
    migos.pause();
}


function init() {
    $("button").css("display", "none");
    setTimeout(playMigos, 1450);
    for (var l = 0; l < dab_timing.length; l++) {
        setTimeout(createDab, dab_timing[l]);
    }
    for (var i = 0; i < red_timing.length; i++) {
        setTimeout(createRed, red_timing[i]);

    }
    for (var j = 0; j < blue_timing.length; j++) {
        setTimeout(createBlue, blue_timing[j]);
    }
    for (var k = 0; k < yellow_timing.length; k++) {
        setTimeout(createYellow, yellow_timing[k]);

    }
    for (var l = 0; l < green_timing.length; l++) {
        setTimeout(createGreen, green_timing[l]);
    }
    setTimeout(affichageScore, 27000);
}

/*function fivePoint() {
     game.score += 5;
     $(".score").text(game.score);
     console.log("5pts");
}*/

function tenPoint() {
    game.score += 10;
    $(".score").text(game.score);
    console.log("10pts");
}

function twentyPoint() {
    game.score += 20;
    $(".score").text(game.score);
    console.log("20pts");
}


// FONCTIONS RELATIVES AUX BOUTONS EST EVENTS

//@TODO factoriser la fonction

$(document).keydown(function (e) {
    //parametre a modifier pour l'attribution des points/remove
    var accuracy = 30;
    //check event for the red
    event.stopPropagation();
    if (e.which == "65") {
        // redTargetY = 372
        $('.red').each(function () {
            var $red = $(this);
            var redPosition = $red.position();
            var redY = parseInt(redPosition.top);
            var redTargetposition = $('.redtarget').position();
            var redTargetY = parseInt(redTargetposition.top);
            if (redY >= redTargetY - accuracy && redY <= redTargetY + accuracy) {
                tenPoint();
                $red.remove();
                // } else if (redY >= redTargetY - 70 && redY <= redTargetY + 70) {
                //     fivePoint();
            }
        })
    }
    if (e.which == "90") {
        // blueTargetY = 372
        $('.blue').each(function () {
            var $blue = $(this);
            var bluePosition = $blue.position();
            var blueY = parseInt(bluePosition.top);
            var blueTargetPosition = $('.bluetarget').position();
            var blueTargetY = parseInt(blueTargetPosition.top);
            if (blueY >= blueTargetY - accuracy && blueY <= blueTargetY + accuracy) {
                tenPoint();
                $blue.remove();
                // } else if (blueY >= blueTargetY - 70 && blueY <= blueTargetY + 70) {
                //     fivePoint();
            }
        })
    }
    if (e.which == "69") {
        // blueTargetY = 372
        $('.yellow').each(function () {
            var $yellow = $(this);
            var yellowPosition = $yellow.position();
            var yellowY = parseInt(yellowPosition.top);
            var yellowTargetPosition = $('.yellowtarget').position();
            var yellowTargetY = parseInt(yellowTargetPosition.top);
            if (yellowY >= yellowTargetY - accuracy && yellowY <= yellowTargetY + accuracy) {
                tenPoint();
                $yellow.remove();
                // } else if (blueY >= blueTargetY - 70 && blueY <= blueTargetY + 70) {
                //     fivePoint();
            }
        })
    }
    if (e.which == "82") {
        // blueTargetY = 372
        $('.green').each(function () {
            var $green = $(this);
            var greenPosition = $green.position();
            var greenY = parseInt(greenPosition.top);
            var greenTargetPosition = $('.greentarget').position();
            var greenTargetY = parseInt(greenTargetPosition.top);
            if (greenY >= greenTargetY - accuracy && greenY <= greenTargetY + accuracy) {
                tenPoint();
                $green.remove();
                // } else if (blueY >= blueTargetY - 70 && blueY <= blueTargetY + 70) {
                //     fivePoint();
            }
        })
    }
     if (e.which == "32") {
        // blueTargetY = 372
        $('.dab').each(function () {
            var $dab = $(this);
            var dabPosition = $dab.position();
            var dabY = parseInt(dabPosition.top);
            var greenTargetPosition = $('.greentarget').position();
            var greenTargetY = parseInt(greenTargetPosition.top);
            if (dabY >= greenTargetY - accuracy && dabY <= greenTargetY + accuracy) {
                twentyPoint();
                $dab.remove();
                // } else if (blueY >= blueTargetY - 70 && blueY <= blueTargetY + 70) {
                //     fivePoint();
            }
        })
    }
});

// effet sur les "touches"

$(document).keydown(function (e) {
    if (e.which == 65) {
        e.preventDefault();
        $(".redtarget").animate({opacity: 'toggle'}, "fast").delay(10).fadeIn(10);
    } else if (e.which == 90) {
        e.preventDefault();
        $(".bluetarget").animate({opacity: 'toggle'}, "fast").delay(10).fadeIn(10);
    } else if (e.which == 69) {
        e.preventDefault();
        $(".yellowtarget").animate({opacity: 'toggle'}, "fast").delay(10).fadeIn(10);
    } else if (e.which == 82) {
        e.preventDefault();
        $(".greentarget").animate({opacity: 'toggle'}, "fast").delay(10).fadeIn(10);
    } else if (e.which == 32) {
        e.preventDefault();
        $(".redtarget").animate({opacity: 'toggle'}, "fast").delay(10).fadeIn(10);
        $(".bluetarget").animate({opacity: 'toggle'}, "fast").delay(10).fadeIn(10);
        $(".yellowtarget").animate({opacity: 'toggle'}, "fast").delay(10).fadeIn(10);
        $(".greentarget").animate({opacity: 'toggle'}, "fast").delay(10).fadeIn(10);
    }
});
