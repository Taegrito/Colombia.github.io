<?php
require 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $correo = $_POST['correo'];
    $identificacion = $_POST['identificacion'];
    $contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT); // Encriptar contraseña

    $sql = "INSERT INTO registro (nombre, apellido, correo, identificacion, contrasena) 
            VALUES ('$nombre', '$apellido', '$correo', '$identificacion', '$contrasena')";

    if ($conn->query($sql) === TRUE) {
        // Redirigir a la página de inicio de sesión después del registro exitoso
        header("Location: login.html");
        exit(); // Detener la ejecución del script después de la redirección
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
