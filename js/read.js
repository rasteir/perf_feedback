$(document).ready(function () {
	$("#search").click(function () {
		name = ($("#name").val()).toLowerCase();
		$.getJSON("php/read.php", { name: name }, function (json) {
			if (typeof json !== 'undefined') {
				$("#res").html("<h4 class='bg-success top-gap gap-bottom'>You have " + json.length + " merged feedbacks</h4>");
				$("#resStr").append("<p class='col-xs-12'><strong><u>Strenghts/Whoo Moment/Main Accomplishments:</u></strong></p>");
				$("#resImp").append("<p class='col-xs-12'><strong><u>Opportunities for Improvement or Growth:</u></strong></p>");
				$("#resCom").append("<p class='col-xs-12'><strong><u>Free Comments:</u></strong></p>");
				//$("#resPrint").append("<button type='print' name='print' class='btn btn-default sborder' id='print' onclick='printDiv();'><strong>Print Feedback</strong></button>");
				for (i = 0; i < json.length; i++) {
					$("#tabStr").append("<tr><td>" + json[i].str_comment + "</td></tr>");
					$("#tabImp").append("<tr><td>" + json[i].imp_comment + "</td></tr>");
					$("#tabCom").append("<tr><td>" + json[i].free_comment + "</td></tr>");
				}
				window.location.href = "#res";
				document.getElementById("name").value = "";
			}
		});
		return false;
	});

	/*function PrintDiv() {
		divToPrint = document.getElementById('divprint');
		newWin = window.open('', 'Print-Window', 'width=400,height=400,top=100,left=100');
		newWin.document.open();
		newWin.document.write('<html><body   onload="window.print()">' + divToPrint.innerHTML + '</body></html>');
		newWin.document.close();
		setTimeout(function () { newWin.close(); }, 10);
	};*/
});