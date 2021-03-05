<?php
header('Access-Control-Allow-Origin: *');
session_start();
$line_userid=$_SESSION['USERID'];
$servername = "120.126.19.100";
$user = "remote";
$password = "gylab666";
$dbname = 'newstest';
$conn = mysqli_connect($servername, $user, $password,$dbname);
mysqli_query($conn,'SET CHARACTER SET utf8');
mysqli_select_db($conn,$dbname)or die ("無法選擇資料庫".mysqli_error());
//查詢並更改相應的user_favorite
$sql = "select * from user_favorite INNER JOIN bingnews2 ON user_favorite.articleid=bingnews2.id WHERE user='$line_userid'";
// $sqli="select  from bingnews2 ";
// $result = mysqli_query($conn,$sql);

// $userid="select * from user_favorite WHERE user='$line_userid'";
$result = mysqli_query($conn,$sql);
while($arr=mysqli_fetch_array($result))
{
	
		echo"<a href='post-gallery.html?id=$arr[id]'><img src=$arr[imageurl]></a>";
		echo "<a href='post-gallery.html?id=$arr[id]'>$arr[title]</a>"."<br><br><br>";
		// echo $arr[articleid];

	
}

?>