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

$sql = "SELECT * FROM `bingnews2` WHERE id='$id2'";
$result = mysqli_query($link, $sql);
$r = mysqli_fetch_array($result);
echo "●哪間媒體： $r[provider] <br>"; //1
    
$ms="SELECT * FROM `media` JOIN `bingnews2` ON bingnews2.provider = media.provider AND bingnews2.id='$id2'";
$mr= mysqli_query($link, $ms);
$m = mysqli_fetch_array($mr);
echo "●誰的媒體： $m[owner]<br>"; //2
echo "●何時的新聞： $r[pubdate] <br>"; //3
echo "&nbsp;&nbsp;請協助從文章中判斷「新聞發生地點」、「新聞作者」、「消息來源」：(如有資料將不重複新增)<br>"; 

$ws="SELECT * FROM `newslabel` WHERE id ='$id2'";
$wr= mysqli_query($link, $ws);
$w = mysqli_fetch_array($wr);
echo "●哪裡的新聞： $w[atwhere]  <br>";//4
    
?>