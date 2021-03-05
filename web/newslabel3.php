<?php
header('Access-Control-Allow-Origin: *');
$id2=$_POST['id'];

# 設定資料庫參數
$hostname= "120.126.19.100";		// 主機名稱
$username= "remote";			// 資料庫登入帳號
$password= "gylab666";		// 資料庫登入密碼
$database= "newstest";		// 資料庫名稱
	
# 建立SQL連線
$link = mysqli_connect( $hostname , $username , $password ); // 取得連線物件
mysqli_query($link, "SET NAMES 'UTF8'");                     // 設定編碼
mysqli_select_db($link, $database) or die("無法選擇資料庫");  // 選擇資料庫  
#reference: https://www.w3schools.com/howto/howto_css_notes.asp

//新聞標籤： 1. 媒體 2.媒體的老闆 3.何時的 4.哪裡的 5.作者 6.消息來源
$ws="SELECT * FROM `newslabel` WHERE id ='$id2'";
$wr= mysqli_query($link, $ws);
$w = mysqli_fetch_array($wr);
echo "●誰給的消息：" .$w[fromwho]."<br>";//6
    
?>