$(document).ready(function () {
	$("#search").click(function () {
		$.ajax({
			type: "POST",
			url: "php/read.php",
			data: "name=" + ($("#name").val()).toLowerCase() ,
			success: function (msg) {
				if (msg == 1) {
					$("#res").html("<h4 class='bg-success top-gap gap-bottom'>Your feedback for " + $("#name").val() + " has been saved</h4>");
					window.location.href = "#startp";
					document.getElementById("name").value = "";
					document.getElementById("strenghts-comments").value = "";
					document.getElementById("improvement-comments").value = "";
					document.getElementById("free-comments").value = "";
				}
				else {
					window.location.href = "#startp";
					$("#res").html("<h4 class='bg-danger top-gap gap-bottom'>An error occured when submitting your feedback</h4>");
				}
			}
		});
		return false;
	});
})