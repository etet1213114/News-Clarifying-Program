<?php
header('Access-Control-Allow-Origin: *');
$category=$_POST['category'];
$server='120.126.19.100';
$id='remote';
$pwd='gylab666';
$dbname='newstest';
$link = mysqli_connect($server,$id,$pwd,$dbname);
mysqli_select_db($link,$dbname)or die ("無法選擇資料庫".mysqli_error());
mysqli_query($link, 'SET CHARACTER SET utf8');  
mysqli_query($link,  "SET collation_connection = 'utf8_general_ci'");
$sqli="select * from bingnews2 WHERE category='$category' order by id desc";
$result = mysqli_query($link,$sqli);
$rows = mysqli_num_rows($result);
if($rows!=0)
{
$i=1;
while($arr=mysqli_fetch_array($result)){
	
		echo "<figure><a href='post-gallery.html?id=$arr[id]'><img src=$arr[imageurl]></a></figure>"."<br>";
		echo "<a href='post-gallery.html?id=$arr[id]'>$i. $arr[title]</a>"."<br><br>";
		$i++;
}
}
else
{
	echo "<p><meta http-equiv='refresh' content='0;url=http://120.126.19.100/404.php'></p>";
}

?>