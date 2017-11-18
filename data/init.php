<?php
$db_host = 'w.rdc.sae.sina.com.cn';
$db_user = 'o01y31olol';
$db_password = 'lji03zim1hly34i5ihmihk10xmj3yy4mkihm5ww2';
$db_database = 'app_xbkapp';
$db_port = 3306;
$db_charset = 'UTF8';

$conn = mysqli_connect($db_host, $db_user, $db_password, $db_database, $db_port);
mysqli_query($conn, "SET NAMES $db_charset");
header('Access-Control-Allow-Credentials:true');
header('Access-Control-Allow-Origin:http://xbkapp.applinzi.com');


