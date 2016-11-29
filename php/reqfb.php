<?php
$conf = parse_ini_file ("confdb/confdb.ini",TRUE);
$host=($conf["HOST"]);
$dbname=($conf["DBNAME"]);
$dbuser=($conf["DBUSER"]);
$dbpwd=($conf["DBPWD"]);

$peerlist = $_POST['peer_mail'];
$peerArray = explode(';', $peerlist);

try {
	$bdd = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $dbuser, $dbpwd);
} catch (Exception $e) {
	die('Database access error : ' . $e->getMessage());
}
foreach ($peerArray as $peermail) {
	$req = $bdd->prepare("INSERT INTO gf_reqfb (asker_mail,responder_mail) VALUES (:asker_mail,:responder_mail)");
	$req->execute(array(':asker_mail' => $_POST['user_mail'],':responder_mail' => $peermail));
}
echo "1";
?>



