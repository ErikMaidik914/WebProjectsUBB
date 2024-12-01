<?php
  $db_name ="users";
  $db_host = "localhost"; 
  $db_user = "root";
  $db_password = "";

  $conn = mysqli_connect($db_host, $db_user, $db_password, $db_name);

  if(!$conn){
    die('Connection Failed: '.mysqli_connect_error());
  }
?>