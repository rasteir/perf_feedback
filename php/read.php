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
if(isset($_GET['user_mail'])) {
	$req = $bdd->prepare("SELECT str_comment, imp_comment,free_comment FROM gf_feedback WHERE asker_mail=?");
	$req->execute(array($_GET['user_mail']));
	$res = $req->fetchAll(PDO::FETCH_ASSOC);
	$json=json_encode($res);
	$json = str_replace('\n', " /", $json);
	$json = str_replace('\r', " /", $json);
	echo $json;
}
?>



