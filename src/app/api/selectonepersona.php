<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "SELECT * FROM pressupost WHERE id_persona = $data->id";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
     $data = array() ;
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo "0 results";
}
$conn->close();
?>