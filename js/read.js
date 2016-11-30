$(document).ready(function () {
	$("#search").click(function () {
		user_mail = ($("#user_mail").val()).toLowerCase();
		$.getJSON("php/read.php", { user_mail: user_mail }, function (json) {
			if (typeof json !== 'undefined') {
				$("#res").html("<h4 class='bg-success top-gap gap-bottom'>You have " + json.length + " merged feedbacks</h4>");
				$("#tabStr").append("<th>Feedback Responder</th><th>Strenghts/WoW Moment</th><th>Potential Improvement</th><th>Comments</th>");
				$("#resPrint").append("<button type='print' name='print' class='btn btn-default sborder' id='print'><strong>Print Feedback</strong></button>");
				for (i = 0; i < json.length; i++) {
					$("#tabStr").append("<tr><td></td><td>" + json[i].str_comment + "</td><td>" + json[i].imp_comment + "</td><td>" + json[i].free_comment + "</td></tr>");
				}
				window.location.href = "#res";
				document.getElementById("user_mail").value = "";
			}
		});
		return false;
	});
});