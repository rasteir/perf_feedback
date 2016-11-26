<?php
try {
	$bdd = new PDO('mysql:host=localhost;dbname=gemfeedback;charset=utf8', 'root', 'root');
} catch (Exception $e) {
	die('Database access error : ' . $e->getMessage());
}
$req = $bdd->prepare("INSERT INTO gf_feedback (name,str_comment,imp_comment,free_comment) VALUES (:name,:str,:imp,:free)");
$req->execute(array(':name' => $_POST['name'],':str' => $_POST['strenghts-comments'],':imp' => $_POST['improvement-comments'],':free' => $_POST['free-comments']));
echo "1";
?>



