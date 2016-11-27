$(document).ready(function () {
	$("#search").click(function () {
		name=($("#name").val()).toLowerCase();
		$.getJSON("php/read.php", { name: name }, function (json) {
	console.log(json);	
});
return false;
	});
});