<?php
header('Access-Control-Allow-Origin: *');
$server='120.126.19.100';
$id='remote';
$pwd='gylab666';
$dbname='newstest';
$link = mysqli_connect($server,$id,$pwd,$dbname);
mysqli_select_db($link,$dbname)or die ("無法選擇資料庫".mysqli_error());
mysqli_query($link, 'SET CHARACTER SET utf8');  
mysqli_query($link,  "SET collation_connection = 'utf8_general_ci'");
$sqli="select * from bingnews2 ORDER BY rand() LIMIT 1";
$result = mysqli_query($link,$sqli);
while($arr=mysqli_fetch_array($result)){
	 echo"<figure><a href='post-gallery.html?id=$arr[id]'><img src=$arr[imageurl]></a></figure>";
	 echo "<a href='post-gallery.html?id=$arr[id]'>$arr[title]</a>";
}

 // echo "<p> $arr[title]</p>";
// echo "<h3 class='alith_post_title'><p> <img alt='' src='$arr[title]'></p></h3>
//   <div class='single-content animate-box'>
//   <div class='dropcap column-1 animate-box'>
//  <p> $arr[url]</p>";



   
?>