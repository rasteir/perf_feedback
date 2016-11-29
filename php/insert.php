<?php
$conf = parse_ini_file ("confdb/confdb.ini",TRUE);
$host=($conf["HOST"]);
$dbname=($conf["DBNAME"]);
$dbuser=($conf["DBUSER"]);
$dbpwd=($conf["DBPWD"]);

try {
	$bdd = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $dbuser, $dbpwd);
} catch (Exception $e) {
	die('Database access error : ' . $e->getMessage());
}
$req = $bdd->prepare("INSERT INTO gf_feedback (peer_mail,str_comment,imp_comment,free_comment) VALUES (:peer_mail,:str,:imp,:free)");
$req->execute(array(':peer_mail' => $_POST['peer_mail'],':str' => $_POST['strenghts-comments'],':imp' => $_POST['improvement-comments'],':free' => $_POST['free-comments']));
echo "1";
?>



