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
if(isset($_GET['name'])) {
	$req = $bdd->prepare("SELECT str_comment, imp_comment,free_comment FROM gf_feedback WHERE name=?");
	$req->execute(array($_GET['name']));
	$res = $req->fetchAll(PDO::FETCH_ASSOC);
	$json=json_encode($res);
	echo $json;
}
?>



