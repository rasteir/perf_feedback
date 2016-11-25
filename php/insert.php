<?php
try {
	$bdd = new PDO('mysql:host=localhost;dbname=gemfeedback;charset=utf8', 'root', 'root');
} catch (Exception $e) {
	die('Database access error : ' . $e->getMessage());
}
	
$sql=$bdd->query("INSERT INTO gf_feedback (first_name, last_name,str_comment,imp_comment,free_comment) VALUES ('$_POST[firstname]','$_POST[lastname]','$_POST[strenghts-comments]','$_POST[improvement-comments]','$_POST[free-comments]')");

if (!mysql_query($sql,$bdd))
  {
  die('Error: ' . mysql_error());
  }
echo "1";
 
mysql_close($bdd)
?>