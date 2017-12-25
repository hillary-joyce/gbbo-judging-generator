// Set game play variables
var gameOver = false;
var maryPoints = 0;
var paulPoints = 0;
// set array of possible comments from the judges
var maryBerryArray = [{
    comment: "scrummy!",
    points: 1
  },
  {
    comment: "comment2",
    points: 2
  },
  {
    comment: "comment3",
    points: 3
  },
  {
    comment: "comment4",
    points: 4
  },
  {
    comment: "comment5",
    points: 5
  }
];

var paulHollywoodArray = [{
    comment: "Raw!",
    points: 1
  },
  {
    comment: "comment2",
    points: 2
  },
  {
    comment: "comment3",
    points: 3
  },
  {
    comment: "comment4",
    points: 4
  },
  {
    comment: "comment5",
    points: 5
  }
];

//game reset funciton
function reset() {
  maryPoints = 0;
  paulPoints = 0;
  $(".mary-comment").empty();
  $(".paul-comment").empty();
  gameOver = false;
	$(".judging-result-div").css("display", "none");
};

function onYourMarks() {
	$(".container").css("display","block");
  $(".on-your-marks").css("display", "block");
  setTimeout(function() {
    $("#onYourMarks").fadeIn(400)
  }, 500);
  setTimeout(function() {
    $("#onYourMarks").fadeOut(400)
  }, 2000);
  setTimeout(function() {
    $("#getSet").fadeIn(400)
  }, 2500);
  setTimeout(function() {
    $("#getSet").fadeOut(400)
  }, 4000);
  setTimeout(function() {
    $("#bake").fadeIn(400)
  }, 4500);
  setTimeout(function() {
    $("#bake").fadeOut(400)
  }, 6000);
  setTimeout(function() {
    $(".on-your-marks").css("display", "none")
  }, 6500);
}

function judging() {
	$(".judging-result-div").fadeIn(400);
  var maryRandom = Math.floor(Math.random() * maryBerryArray.length);
  $(".mary-comment").text(maryBerryArray[maryRandom].comment);

  var paulRandom = Math.floor(Math.random() * paulHollywoodArray.length);
  $(".paul-comment").text(paulHollywoodArray[paulRandom].comment);

  var score = paulHollywoodArray[paulRandom].points + maryBerryArray[maryRandom].points;
  if (score < 4) {
    $(".game-result").text("You have to leave the tent...but we'll miss you so!")
  } else if (score < 8) {
    $(".game-result").text("you've made it to the next week");
  } else if (score > 7) {
    $(".game-result").text("You're this week's star baker!");
  }
};

// play game
function playGame() {
  reset();
  if (gameOver === false) {
    onYourMarks();
		setTimeout(function(){judging()},7000);

    gameOver = true;
  }
};

$("#playGame").click(function() {
  $(".page-header").css("display", "none");
  playGame();
});

$("#playAgain").click(playGame);
