<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    
    // Obtener  datos 
    $Nombre = $_GET['Nombre'];

    // Crear línea con datos del ganador
    $linea = "Ha ganado el " . $Nombre . "\n";

    // Guardar los datos en el archivo ganadores.txt con 'a' se añade los datos al final del archivo
    $archivo = fopen("./datos/ganadores.txt", "a"); 
    fwrite($archivo, $linea);
    fclose($archivo);

}
?>