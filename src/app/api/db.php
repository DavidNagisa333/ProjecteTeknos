<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "pressupost";
$conn = new mysqli($servername, $username, $password, $dbname);
?>
