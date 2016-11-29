$(document).ready(function () {
	$("#user_mail").change(function () {
		user_mail = ($("#user_mail").val()).toLowerCase();
		$.getJSON("php/answer.php", { user_mail: user_mail }, function (json) {
			if (typeof json !== 'undefined') {
				sel = document.getElementById('peer_mail');
				for (i = 0; i < json.length; i++) {
					opt = document.createElement('option');
					opt.innerHTML = json[i].asker_mail;
					opt.value = json[i].asker_mail;
					sel.appendChild(opt);
				}
			}
			window.location.href = "#res";
		});
		return false;
	});
});