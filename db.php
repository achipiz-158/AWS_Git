<?php
$dsn = 'dblib:host=db-test.chrdtmiepdxg.us-west-2.rds.amazonaws.com:1433;dbname=test;';
$user = 'admin';
$password = 'Aa246680';

try {

  $dbh = new PDO($dsn, $user, $password);

  $result = $dbh->query("SELECT * 
    FROM usuario;");

  foreach ($result as $row) {
    echo '<pre>';
      print_r($row);
    echo '</pre>';
  }

} catch (PDOException $e) {

  echo 'Connection failed: ' . $e->getMessage();

}
?>
