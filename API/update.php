<?php 
  header('Access-Control-Allow-Origin: http://localhost:4200'); 
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, 
  "UPDATE alumnos SET Nombres='$params->Nombres',Apellido_Paterno='$params->Apellido_Paterno',Apellido_Materno='$params->Apellido_Materno', Edad='$params->Edad'
    WHERE `Matricula`=$params->Matricula");
    
   
    // GENERA LOS DATOS DE RESPUESTA
    class Result{}
    $response = new Result();
    $response->resultado = 'OK';
    $response->mensaje = 'EL USUARIO SE ACTUALIZO EXITOSAMENTE';
  
    header('Content-Type: application/json');
  
    echo json_encode($response); // MUESTRA EL JSON GENERADO
  ?>