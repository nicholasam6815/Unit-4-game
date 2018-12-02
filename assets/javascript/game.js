// Institute Variables

var targNum = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/blue.jpeg", "./assets/images/green.jpeg", "./assets/images/red.jpeg", "./assets/images/yellow.jpeg"];

// Functions

	function randTargNum () {
		targNum = Math.floor(Math.random() * 102) + 19;
	}

	function resetCryst () {
		for (var i = 0; i < images.length; i++) {
			var cryst = $("<img>");
			cryst.addClass("cryst");
			cryst.attr("src", images[i]);
			cryst.attr("value", (Math.floor(Math.random() * 12) + 1));
			cryst.attr("height", "100");
			$(".cryst-images").append(cryst);
		}
	}

	function resetHTML () {
		$(".target-number").html(targNum);
		$(".win-count").html("<p>Wins: " + wins + "</p>");
		$(".lose-count").html("<p>Losses: " + losses + "</p>");
		$(".score-number").html(counter);
		$(".cryst-images").empty();
	}

	function totalReset () {
		randTargNum ();
		counter = 0;
		resetHTML ();
		resetCryst ();
	}

// Running Code

	// Inital Page Set Up
	randTargNum();
	resetHTML ();
	resetCryst ();

// Click Functions
	function crystClick () {
		//attr returns first value of selected html element
		counter += parseInt($(this).attr("value"));
		$(".score-number").html(counter);
		if (counter == targNum) {
			wins++;
			totalReset();
		}
		else if (counter > targNum) {
			losses++;
			totalReset();
		};
	};

	$(document).on("click", ".cryst", crystClick);