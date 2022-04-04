<?php
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : $_SERVER['HTTP_HOST'];
header('Access-Control-Allow-Origin: ' . $origin);
header('Access-Control-Allow-Methods: POST, OPTIONS, GET, PUT');
header('Access-Control-Allow-Credentials: true');

session_start();
if (isset($_SESSION['u_id'])){
    session_destroy();
    session_unset();
    header('Location: ../login.php');
}

//echo json_encode(true);
