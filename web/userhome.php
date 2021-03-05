<?php
session_start();
$login=$_SESSION['USERID'];
$openness=$_POST["openness"];
if($login!="")
{
$server ='120.126.19.100';
$id ='remote';
$pwd='gylab666';
$dbname = 'newstest';
$link = mysqli_connect($server,$id,$pwd,$dbname);
mysqli_select_db($link,$dbname)or die ("無法選擇資料庫".mysqli_error());
mysqli_query($link, 'SET CHARACTER SET utf8');
mysqli_query($link,  "SET collation_connection = 'utf8_general_ci'");
// $sqliuser="select * from userlogin where user_ID = $login "
$sqli = "UPDATE userlogin SET score='$openness' WHERE user_ID ='$login'";
mysqli_query($link,$sqli)or die ("無法修改".mysqli_error());

echo "$openness";
}
?>