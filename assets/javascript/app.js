//TRIVIA GAME

$(document).ready(function(){

var timeLeft = 60;

function timeUp(){
	alert("Time's up.");
}

// Start Screen.
$("div#gameBody").html(`
	<p>You will have one minute to answer the following trivia questions. Good luck!</p>
	<h2 class="button" id='startButton'>Click to start</h2>
`);

// Call the Quiz Screen and start the countdown timer.
$("h2#startButton").click(function(){
	console.log("Clicked the Start Button.");
	$("div#gameBody").html(`
		<h2 id="timer">Timer</h2>
		<ol>
			<li>Which of the following is NOT a polygon?</li>
				<input type="radio" name="question1" id="choice1-1">
				<label for="choice1-1">A. Lozenge</label><br>
				<input type="radio" name="question1" id="choice1-2">
				<label for="choice1-2">B. W-curve</label><br>
				<input type="radio" name="question1" id="choice1-3">
				<label for="choice1-3">C. Golden rhombus</label><br>
				<input type="radio" name="question1" id="choice1-4">
				<label for="choice1-4">D. Golygon</label><br>
			<li>Which of these counties is in the state of Michigan?</li>
				<input type="radio" name="question2" id="choice2-1">
				<label for="choice2-1">A. Quay</label><br>
				<input type="radio" name="question2" id="choice2-2">
				<label for="choice2-2">B. Humboldt</label><br>
				<input type="radio" name="question2" id="choice2-3">
				<label for="choice2-3">C. Leelanau</label><br>
				<input type="radio" name="question2" id="choice2-4">
				<label for="choice2-4">D. Faribault</label><br>
			<li>What is the official language of the Republic of Benin?</li>
				<input type="radio" name="question3" id="choice3-1">
				<label for="choice3-1">A. English</label><br>
				<input type="radio" name="question3" id="choice3-2">
				<label for="choice3-2">B. Kituba</label><br>
				<input type="radio" name="question3" id="choice3-3">
				<label for="choice3-3">C. Tagalog</label><br>
				<input type="radio" name="question3" id="choice3-4">
				<label for="choice3-4">D. French</label><br>
			<li>Which of these philosophers was Danish?</li>
				<input type="radio" name="question4" id="choice4-1">
				<label for="choice4-1">A. Immanuel Kant</label><br>
				<input type="radio" name="question4" id="choice4-2">
				<label for="choice4-2">B. Baruch Spinoza</label><br>
				<input type="radio" name="question4" id="choice4-3">
				<label for="choice4-3">C. Søren Kierkegaard</label><br>
				<input type="radio" name="question4" id="choice4-4">
				<label for="choice4-4">D. Cesare Beccaria</label><br>
			<li>Select the amphibian.</li>
				<input type="radio" name="question5" id="choice5-1">
				<label for="choice5-1">A. Eastern blue-tongued lizard</label><br>
				<input type="radio" name="question5" id="choice5-2">
				<label for="choice5-2">B. European fire-bellied toad</label><br>
				<input type="radio" name="question5" id="choice5-3">
				<label for="choice5-3">C. Blue sea squirt</label><br>
				<input type="radio" name="question5" id="choice5-4">
				<label for="choice5-4">D. Coelacanth</label><br>
			<li>What were Recep Tayyip Erdoğan's professions prior to becoming President of Turkey?</li>
				<input type="radio" name="question6" id="choice6-1">
				<label for="choice6-1">A. Semi-pro footballer, mayor</label><br>
				<input type="radio" name="question6" id="choice6-2">
				<label for="choice6-2">B. Student of chemical engineering and Marxist philosophy</label><br>
				<input type="radio" name="question6" id="choice6-3">
				<label for="choice6-3">C. Government spokesperson, Minster for the Environment and Nuclear Safety</label><br>
				<input type="radio" name="question6" id="choice6-4">
				<label for="choice6-4">D. Steel manufacturing executive, Secretary General of the Liberal Democratic Party</label>
		</ol>
		<h2 class="button">Click to submit</h2>
	`)
	// Start timer from 60 seconds.
	setTimeout(timeUp, 10000);
	timeLeft--;
	$("#timer").text(timeLeft);
});

});

/*
Quiz Screen: Timer, Questions, and Done button.
Timer: Counts down from X seconds. When the timer reaches 0, quiz results are recorded, a "time's up" message is displayed, and the Results Screen is called.
Questions: Multiple choice or true/false. Allow ~5 seconds per question. Don't allow more than one answer.
Done Button: stops the timer, records results and calls the Results Screen.
Results Screen: correct answers, incorrect/missing answers, percentage score, rank, Play Again? button.
Play Again? Button: Calls the quiz screen and resets the timer.

*/