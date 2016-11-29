$(document).ready(function () {
	$("#submit").click(function () {
		$.ajax({
			type: "POST",
			url: "php/reqfb.php",
			data: "user_mail=" + ($("#user_mail").val()) + "&peer_mail=" + ($("#peer_mail").val()),
			success: function (msg) {
				if (msg == 1) {
					$("#res").html("<h4 class='bg-success top-gap gap-bottom'>Your feedback Request has been saved</h4>");
					window.location.href = "#startp";
					document.getElementById("user_mail").value = "";
					document.getElementById("peer_mail").value = "";
				}
				else {
					window.location.href = "#startp";
					$("#res").html("<h4 class='bg-danger top-gap gap-bottom'>An error occured when submitting your feedback request</h4>");
				}
			}
		});
		return false;
	});
})