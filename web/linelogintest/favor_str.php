<?php
$servername = "120.126.19.100";
$user = "remote";
$password = "gylab666";
$dbname = 'newstest';
$conn = mysqli_connect($servername, $user, $password,$dbname);
mysqli_query($conn,'SET CHARACTER SET utf8');
mysqli_select_db($conn,$dbname)or die ("無法選擇資料庫".mysqli_error());
//查詢並更改相應的user_favorite
$sql = "SELECT articleid FROM user_favorite LEFT JOIN bingnews2 ON user_favorite.articleid = bingnews2.id;
$sqli="select * from bingnews2 ";
$result = mysqli_query($conn,$sql);
while($arr=mysqli_fetch_array($result))
{	
	echo"<figure><a href='post-gallery.html?id=$arr[id]'><img src=$arr[imageurl]></a></figure>";
	echo "<a href='post-gallery.html?id=$arr[id]'>$arr[title]</a>"."<br><br><br>";

}
?>