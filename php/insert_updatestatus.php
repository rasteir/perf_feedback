<?php
$conf = parse_ini_file ("confdb/confdb.ini",TRUE);
$host=($conf["HOST"]);
$dbname=($conf["DBNAME"]);
$dbuser=($conf["DBUSER"]);
$dbpwd=($conf["DBPWD"]);

header('Content-Type: text/plain; charset=utf-8');
try {
	$bdd = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $dbuser, $dbpwd);
} catch (Exception $e) {
	die('Database access error : ' . $e->getMessage());
}

$req = $bdd->prepare("INSERT INTO gf_feedback (peer_mail,str_comment,imp_comment,free_comment) VALUES (:peer_mail,:str,:imp,:free)");
$req->execute(array(':peer_mail' => $_POST['peer_mail'],':str' => $_POST['strenghts-comments'],':imp' => $_POST['improvement-comments'],':free' => $_POST['free-comments']));

if(isset($_POST['user_mail'])) {
	$asker = $_POST['peer_mail'];
 	$responder = $_POST['user_mail'];
 
 	$req = $bdd->prepare("UPDATE gf_reqfb SET status=1 WHERE responder_mail=:responder AND asker_mail=:asker");
 	$req ->bindparam(':responder', $responder,PDO::PARAM_STR);
 	$req ->bindparam(':asker', $asker,PDO::PARAM_STR);
 	$req ->execute();
}
echo 1;
?>



