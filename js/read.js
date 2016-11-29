$(document).ready(function () {
	$("#search").click(function () {
		peer_mail = ($("#peer_mail").val()).toLowerCase();
		$.getJSON("php/read.php", { peer_mail: peer_mail }, function (json) {
			if (typeof json !== 'undefined') {
				$("#res").html("<h4 class='bg-success top-gap gap-bottom'>You have " + json.length + " merged feedbacks</h4>");
				$("#resStr").append("<p class='col-xs-12'><strong><u>Strenghts/WoW Moment/Main Accomplishments:</u></strong></p>");
				$("#resImp").append("<p class='col-xs-12'><strong><u>Opportunities for Improvement or Growth:</u></strong></p>");
				$("#resCom").append("<p class='col-xs-12'><strong><u>Free Comments:</u></strong></p>");
				$("#resPrint").append("<button type='print' name='print' class='btn btn-default sborder' id='print'><strong>Print Feedback</strong></button>");
				for (i = 0; i < json.length; i++) {
					$("#tabStr").append("<tr><td>" + json[i].str_comment + "</td></tr>");
					$("#tabImp").append("<tr><td>" + json[i].imp_comment + "</td></tr>");
					$("#tabCom").append("<tr><td>" + json[i].free_comment + "</td></tr>");
				}
				window.location.href = "#res";
				document.getElementById("peer_mail").value = "";
			}
		});
		return false;
	});
});