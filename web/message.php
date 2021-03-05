<?php
$flag = $_POST["flag"];
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
$sqliselect="select * from textboard where title = '$title'";
$result_selct = mysqli_query($link,$sqliselect);
while($arr_select=mysqli_fetch_array($result_selct))
{	
	echo "<li>User Name：$arr_select[name]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$arr_select[time]";
	// echo "<span class='comment-date'>$arr_select[time]</span>";
	echo "<br>"."Commend：".$arr_select[text];
	echo "</li>"."<br>";
	 // echo "<br>".$arr_select[text];
}
?>