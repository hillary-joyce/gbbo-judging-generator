// Set game play variables
var gameOver = false;
var maryPoints = 0;
var paulPoints = 0;
// set array of possible comments from the judges
var maryBerryArray = [{
    comment: "It’s not quite baked through",
    points: 1
  },
  {
    comment: "That is a perfect sponge",
    points: 5
  },
  {
    comment: "The flavor is really beautiful",
    points: 4
  },
  {
    comment: "It looks unfinished",
    points: 2
  },
  {
    comment: "You’ve got a smashing shine on your glaze",
    points: 5
  },
	{
    comment: "I think you were very brave, but unfortunately it didn’t pay off",
    points: 3
  },
	{
    comment: "All the flavors and textures go together",
    points: 4
  },
	{
    comment: "All those flavors are a perfect marriage",
    points: 5
  },
	{
    comment: "It’s all a little informal but the flavor is there",
    points: 3
  },
	{
    comment: "Your icing is too runny",
    points: 1
  }
];

var paulHollywoodArray = [{
    comment: "Flavors good. Textures awful.",
    points: 2
  },
  {
    comment: "It’s quite close textured",
    points: 1
  },
  {
    comment: "That dough is raw",
    points: 1
  },
  {
    comment: "The flavor is there but the texture’s all wrong",
    points: 3
  },
  {
    comment: "You’ve got a beautiful genoese there",
    points: 4
  },
	{
    comment: "I'm not getting any of the flavor",
    points: 2
  },
	{
    comment: "It's underbaked. Needed another 2 minutes.",
    points: 1
  },
	{
    comment: "It's got a soggy bottom",
    points: 2
  },
	{
    comment: "That’s lovely",
    points: 4
  },
	{
    comment: "*handshake*",
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
  $(".mary-comment").text('"' + maryBerryArray[maryRandom].comment + '"');

  var paulRandom = Math.floor(Math.random() * paulHollywoodArray.length);
  $(".paul-comment").text('"' + paulHollywoodArray[paulRandom].comment + '"');

  var score = paulHollywoodArray[paulRandom].points + maryBerryArray[maryRandom].points;
  if (score < 4) {
    $(".game-result").text("You have to leave the tent...but we'll miss you so!")
  } else if (score < 8) {
    $(".game-result").text("You've made it to the next week!");
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
