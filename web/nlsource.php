<?php
header('Access-Control-Allow-Origin: *');
$id2=$_POST['id'];
$sug= $_POST['src'];

# 設定資料庫參數
$hostname= "120.126.19.100";		// 主機名稱
$username= "remote";			// 資料庫登入帳號
$password= "gylab666";		// 資料庫登入密碼
$database= "newstest";		// 資料庫名稱
	
# 建立SQL連線
$link = mysqli_connect( $hostname , $username , $password ); // 取得連線物件
mysqli_query($link, "SET NAMES 'UTF8'");                     // 設定編碼
mysqli_select_db($link, $database) or die("無法選擇資料庫");  // 選擇資料庫  

$ws="SELECT * FROM `newslabel` WHERE id='$id2'";
$wr= mysqli_query($link, $ws);
$w = mysqli_num_rows($wr);
if($sug=="")
    {
    	  echo "<br/><br/><span>請勿輸入空資料</span>";	
    }
if($w==0 &&$sug!=""){ 
    $insert = "INSERT INTO newslabel(id, fromwho, atwhere) VALUES('$id2', '$sug',NULL)";
    mysqli_query($link, $insert)or die("無法寫入" ) ;
    //echo "<br/><br/><span>新增成功...!!</span>";
    }
    
else{
    $update = "UPDATE newslabel SET fromwho='$sug' WHERE id='$id2' ";
    mysqli_query($link, $update)or die("無法寫入" ) ;
    //echo "<br/><br/><span>新增成功...!!</span>";
}
?>