<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "INSERT INTO pressupost (nomPersona, cognomPersona, situacioLaboral, ingressos, demanda)
VALUES ('$data->nomPersona', '$data->cognomPersona', '$data->situacioLaboral', '$data->ingressos', '$data->demanda')";
if($data->nomPersona){
	$qry = $conn->query($sql);
}
$conn->close();
?>
