<?php
require_once('class_configManager.php'); 
require_once('class_lineProfiles.php');  
require_once('class_lineController.php');  
require_once('line_config.php'); //設定

$host = '120.126.19.100';
//改成你登入phpmyadmin帳號
$user = 'remote';
//改成你登入phpmyadmin密碼
$passwd = 'gylab666';
//資料庫名稱
$database = 'newstest';
//實例化mysqli(資料庫路徑, 登入帳號, 登入密碼, 資料庫)
$connect = new mysqli($host, $user, $passwd, $database);
// mysqli_query($connect, 'SET CHARACTER SET utf8');

if (!session_id()) {
    session_start();
}

$code = $_GET['code'];
$state = $_GET['state'];
$session_state = $_SESSION['_line_state'];

unset($_SESSION['_line_state']);
if ($session_state !== $state) {
    echo '存取錯誤';
    exit;
}

$Line = new LineController();

$access_token = $Line->getAccessToken($code);//取得使用者資料
//$_SESSION['access_token']=$access_token;
setcookie("access_token",$access_token, time()+5);//把他記憶14天
$user = $Line->getLineProfile_access_token($access_token);//取得使用者資料

// print_r($user);

$user_id = $user->userId;
$name = $user->displayName;
$pic = $user->pictureUrl;
$connect->query("SET NAMES 'utf8'");
$insertSql = "INSERT IGNORE INTO userlogin(user_ID, name, pictureUrl) VALUES ('$user_id','$name','$pic') ";
$status = $connect->query($insertSql);
$_SESSION['USERID']=$user_id;
$sqltitle = "select * from userlogin where user_ID = '$user_id'";
$result = mysqli_query($connect,$sqltitle);
$arr=mysqli_fetch_array($result);
if($arr[score] >= 24)
{
	header('Location:http://120.126.19.100/home-grid-type2.html');
}
else if($arr[score]<24 && $arr[score]>0)
{
	header('Location:http://120.126.19.100/home-grid.html');
}
else if($arr[score] ==0)
{
	header('Location:http://120.126.19.100/assets/大五測驗/quiz.html');
}


/*
stdClass Object ( 
[userId] => 唯一ID 
[displayName] => LINE用戶自己設定的名字 
[pictureUrl] => AVARTA大頭圖
[statusMessage] => 用戶自己寫的狀態
)
*/
 