<?php
require("conexion.php");
header('Access-Control-Allow-Origin:http://localhost:4200'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
$conexion = conexion();

  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, "INSERT INTO `alumnos` (`Matricula`, `Nombres`, `Apellido_Paterno`, `Apellido_Materno`,`Edad`) VALUES
                  ('$params->Matricula','$params->Nombres','$params->Apellido_Paterno','$params->Apellido_Materno','$params->Edad')");    
  
  
  
  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'SE REGISTRO EXITOSAMENTE EL USUARIO';

  header('Content-Type: application/json');

  echo json_encode($response); // MUESTRA EL JSON GENERADO
?>