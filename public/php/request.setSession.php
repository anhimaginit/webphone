<?php
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : $_SERVER['HTTP_HOST'];
header('Access-Control-Allow-Origin: ' . $origin);
header('Access-Control-Allow-Methods: POST, OPTIONS, GET, PUT');
header('Access-Control-Allow-Credentials: true');

if (!session_id()) session_start();

$user = $_POST['user'];

//print_r($data); die();
foreach ($user as $key => $value) {
    $_SESSION[$key] = $value;
}
$acl = $_POST['acl'];
$role = $_POST['role'];
$_SESSION["acl"] = $acl;
$_SESSION["role"] = $role;
//print_r($_SESSION); die();
$_SESSION['user_agent'] = $_SERVER['HTTP_USER_AGENT'];
$_SESSION['web_phone'] = 1;
$_tmp = '';
$_tmp2 = '';
if ($_SERVER['HTTP_HOST'] == 'localhost') {
    $_tmp = 'https://phone.at1ts.com/';
    $_tmp2 = 'http://localhost/webphone/public';
} else {
    $_tmp = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on' ? 'https' : 'http') . '://api.' . $_SERVER['HTTP_HOST'];
    $_tmp2 = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on' ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'];
}

$_SESSION['server_host'] = $_tmp2;
$_SESSION['server_api'] = $_tmp;


echo json_encode($_SESSION['web_phone']);
