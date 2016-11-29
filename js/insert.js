$(document).ready(function () {
	$("#submit").click(function () {
		$.ajax({
			type: "POST",
			url: "php/insert.php",
			data: "peer_mail=" + ($("#peer_mail").val()).toLowerCase() + "&strenghts-comments=" + $("#strenghts-comments").val() + "&improvement-comments=" + $("#improvement-comments").val() + "&free-comments=" + $("#free-comments").val(),
			success: function (msg) {
				if (msg == 1) {
					$("#res").html("<h4 class='bg-success top-gap gap-bottom'>Your feedback for " + $("#peer_mail").val() + " has been saved</h4>");
					window.location.href = "#startp";
					document.getElementById("peer_mail").value = "";
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