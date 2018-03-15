<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";

$sql = "INSERT INTO pressupost (nomPersona, cognomPersona, situacioLaboral, id_persona, demanda)
VALUES ('$data->nomPersona', '$data->cognomPersona', '$data->situacioLaboral', '$data->id_persona','$data->demanda')";
if($data->nomPersona){
	$qry = $conn->query($sql);
}
$conn->close();
return "saved";
?>
