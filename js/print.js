$(document).ready(function () {
	$("#resPrint").click(function () {
		divToPrint = document.getElementById('divprint');
		newWin = window.open('', 'Print-Window', 'width=400,height=400,top=100,left=100');
		newWin.document.open();
		newWin.document.write('<html><head><title>GEM Performance Feedback</title><link rel="stylesheet" type="text/css" href="css/mystyles.css" media="all" /><body   onload="window.print()">' + divToPrint.innerHTML + '</body>	<footer class="container"><div class="row"><em class="col-xs-5">&copy; Powered by API Team</em></div></footer></html>');
		newWin.document.close();
		setTimeout(function () { newWin.close(); }, 10);
        window.location.href = "read.html";
        return false;
	});
});