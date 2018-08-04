//TRIVIA GAME
//Start Screen: instructions and Start Button.

$(document).ready(function(){
	$("div#gameBody").html(`
		<p>You will have X minutes to complete the following trivia questions. Good luck!</p>
		<h2 id='startButton'>Click to Start</h2>
	`);

	$("div#startButton").click(startGame());
	});

function startGame(){
	$("div#gameBody").html(`
		<h2>test</h2>
	`)
}

	/*
Start Button: Calls the Quiz Screen.
Quiz Screen: Timer, Questions, and Done button.
Timer: Counts down from X seconds. When the timer reaches 0, quiz results are recorded, a "time's up" message is displayed, and the Results Screen is called.
Questions: Multiple choice or true/false. Allow ~5 seconds per question. Don't allow more than one answer.
Done Button: stops the timer, records results and calls the Results Screen.
Results Screen: correct answers, incorrect/missing answers, percentage score, rank, Play Again? button.
Play Again? Button: Calls the quiz screen and resets the timer.

Trivia topic ideas: television, Star Wars, Batman comics, animation history, diseases, random Wikipedia results, the Miller-Boyett Universe, video games, Sega, JavaScript, color names.

Question ideas:
Which of the following is NOT a polygon:
	A. Lozenge
	B. W-curve
	C. Golden rhombus
	D. Golygon

Which of these counties is in the state of Michigan:
	A. Quay
	B. Humboldt
	C. Leelanau
	D. Faribault

What is the official language of the Republic of Benin?
	A. English
	B. Kituba
	C. Tagalog
	D. French

Which of the following philosophers was Danish?
	A. Immanuel Kant
	B. Baruch Spinoza
	C. Søren Kierkegaard
	D. Cesare Beccaria

Select the amphibian.
	A. Eastern blue-tongued lizard
	B. European fire-bellied toad
	C. Blue sea squirt
	D. Coelacanth

What were Recep Tayyip Erdoğan's professions prior to becoming President of Turkey?
	A. Semi-pro footballer, mayor
	B. Student of chemical engineering and Marxist philosophy
	C. Government spokesperson, Minster for the Environment and Nuclear Safety
	D. Steel manufacturing executive, Secretary General of the Liberal Democratic Party
*/