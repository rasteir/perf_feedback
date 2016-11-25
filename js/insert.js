$(document).ready(function () {
	$("#submit").click(function () {
		$.ajax({
			type: "POST",
			url: "php/insert.php",
			data: "firstname=" + $("#firstname").val() + "&lastname=" + $("#lastname").val()+ "&strenghts-comments=" + $("#strenghts-comments").val()+ "&improvement-comments=" + $("#improvement-comments").val()+ "&free-comments=" + $("#free-comments").val(),
			success: function (msg) {
				if (msg == 1) {
					$("#res").html("<p>Your feedback for "+$("#firstname").val()+" has been saved</p>");
					window.location.href = "index.html"
					document.getElementById("firstname").value = "";
					document.getElementById("lastname").value = "";
					document.getElementById("strenghts-comments").value = "";
					document.getElementById("improvement-comments").value = "";
					document.getElementById("free-comments").value = "";
				}
				else {
					$("#res").html("<p>An error occured when submitting your feedback</p>");
				}
			}
		});
		return false;
	});
})