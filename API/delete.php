<?php 
  header("Access-Control-Allow-Origin: *", 'http://localhost:4200'); 
  header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, "DELETE FROM alumnos WHERE Matricula=$_GET[Matricula]");
    
  
  class Result {}

  //DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = "Usuario eliminado correctamente";
  header('Content-Type:application/json');
  echo json_encode($response);
  ?>