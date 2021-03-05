<?php
header('Access-Control-Allow-Origin: *');
$id2=$_POST['id'];
$aut= $_POST['aut'];

# 設定資料庫參數
$hostname= "120.126.19.100";		// 主機名稱
$username= "remote";			// 資料庫登入帳號
$password= "gylab666";		// 資料庫登入密碼
$database= "newstest";		// 資料庫名稱
	
# 建立SQL連線
$link = mysqli_connect( $hostname , $username , $password ); // 取得連線物件
mysqli_query($link, "SET NAMES 'UTF8'");                     // 設定編碼
mysqli_select_db($link, $database) or die("無法選擇資料庫");  // 選擇資料庫  

$ws="SELECT * FROM `bingnews2` WHERE id='$id2'";
$wr= mysqli_query($link, $ws);
$wrow = mysqli_fetch_array($wr);

if(is_null($wrow[author]) ){ 
    $update = "UPDATE bingnews2 SET author='$aut' WHERE id='$id2' ";
    mysqli_query($link, $update)or die("無法寫入" ) ;
    //echo "<br/><br/><span>新增成功...!!</span>";
    }

?>