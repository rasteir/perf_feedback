$(document).ready(function () {
	$("#submit").click(function () {
		$.ajax({
			type: "POST",
			url: "php/insert_updatestatus.php",
			data: "user_mail=" + ($("#user_mail").val()).toLowerCase() + "&peer_mail=" + ($("#peer_mail option:selected").val()).toLowerCase() + "&strenghts_comments=" + $("#strenghts-comments").val() + "&improvement_comments=" + $("#improvement-comments").val() + "&free_comments=" + $("#free-comments").val(),
			success: function (msg) {
				if (msg == 1) {
					$("#res").html("<h4 class='bg-success top-gap gap-bottom'>Your feedback for " + $("#peer_mail").val() + " has been saved</h4>");
					$("#peer_mail option:selected").remove();
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