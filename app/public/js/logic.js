$(document).ready(function() {

	// Code that makes modals trigger on click
	$('.modal-trigger').leanModal();

	// When we click the submit button...
	$("#submit").click(function(){

		// Checking to see if user input a name & image.
		if ( $('#nameInput').val() == null || $('#imageInput').val() == null ) {
			alert("Please fill out all questions!");
			return false;
		};

		// Checking to see if user answered all of the survey questions.
		for (var i = 1; i <= 10; i++) {
			if ( $("input:radio[name=question"+i+"]:checked").val() == null ) {
				alert("Please fill out all questions!");
				return false;
			};
		};

		// Creating an array to hold the answers.
		var scoreArray = [];

		// Looping through the answers and pushing them to the array. 
		for (var i = 1; i <= 10; i++) {
			scoreArray.push( $("input:radio[name=question"+i+"]:checked").val() );
		}

		// Creating an object that stores all of the input given by the user.
		var person = {
			name: $('#nameInput').val(),
			image: $('#imageInput').val(),
			scores: scoreArray
		};

		// Storing our current URL in a variable.
		var currentURL = window.location.origin;

		// Making an AJAX post request. The server calculates the match and sends back the info in the data object.
		$.post(currentURL + '/api/survey', person).done(function(data){

			// Opens our modal.
			$('#modal1').openModal();

			// Populate out modal with information about the match.
			$('#modalArea').empty()
			var picture = '<img class="circle" src="'+data.image+'"">';
			$('#modalArea').append("<h5>" + data.name + " !</h5>")
			$('#modalArea').append(picture)

		});

	});

});