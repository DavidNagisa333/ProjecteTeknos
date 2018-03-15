<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "UPDATE pressupost SET
nomPersona ='$data->nomPersona',  cognomPersona ='$data->cognomPersona',
situacioLaboral ='$data->situacioLaboral',id_persona ='$data->id_persona',demanda ='$data->demanda'
WHERE id = $data->id ";
$qry = $conn->query($sql);

$conn->close();
?>
