<?php

// DATOS DE CONEXION A LA BASE DE DATOS
function conexion() {
  $conexion = mysqli_connect('localhost:3306', 'root', '', 'escuela');
  
  return $conexion;
}

?>