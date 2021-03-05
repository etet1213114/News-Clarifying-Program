<?php
require_once('class_configManager.php'); 
require_once('class_lineProfiles.php');  
require_once('class_lineController.php');  
require_once('line_config.php'); //設定

if (!session_id()) {
    session_start();
}

$Line = new LineController();

if(isset($_COOKIE['access_token'])){
    $access_token=$_COOKIE['access_token'];
    $user = $Line->getLineProfile_access_token($access_token);//取得使用者資料
    print_r($user);
}
?>
<html>     
<head>     
<meta http-equiv="refresh" content="1;url=http://120.126.19.100/home-grid.html">     
</head>     
</html> 