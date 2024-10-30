<?php
require 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $identificacion = $_POST['identificacion'];
    $contrasena = $_POST['contrasena'];

    $sql = "SELECT * FROM registro WHERE identificacion = '$identificacion'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($contrasena, $row['contrasena'])) {
            // Redirigir a la página de bienvenida
            header("Location: juego.html");
            exit(); // Asegúrate de usar exit() para detener la ejecución del script
        } else {
            echo "Contraseña incorrecta.";
        }
    } else {
        echo "No se encontró el usuario.";
    }
    

    $conn->close();
}
?>
