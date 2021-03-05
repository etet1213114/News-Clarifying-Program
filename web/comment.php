<?php
header('Access-Control-Allow-Origin: *');
$name=$_POST["author"];
// echo $name; 名稱寫入
$connect=$_POST["email"];
// echo $email; email寫入
$comment=$_POST["comment"];
$flag = $_POST["flag"];
$time = date("Y-m-d H:i:s",strtotime('+ 0HOUR'));
$server ='120.126.19.100';
$id ='remote';
$pwd='gylab666';
$dbname = 'newstest';
$link = mysqli_connect($server,$id,$pwd,$dbname);
mysqli_select_db($link,$dbname)or die ("無法選擇資料庫".mysqli_error());
mysqli_query($link, 'SET CHARACTER SET utf8');
mysqli_query($link,  "SET collation_connection = 'utf8_general_ci'");
$sqltitle = "select * from bingnews2 where id = $flag";
$result = mysqli_query($link,$sqltitle);
 $arr=mysqli_fetch_array($result);
$title=$arr[title];
// echo $title;
$sql ="insert into textboard (title,name,connect,text,time) VALUES('$title','$name','$connect','$comment','$time')";
mysqli_query($link,$sql)or die ("無法新增".mysqli_error());


?>