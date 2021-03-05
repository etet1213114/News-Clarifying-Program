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
$sqli="select * from bingnews2 ORDER BY rand() LIMIT 8";
$result = mysqli_query($link,$sqli);
$i=1;
while($arr=mysqli_fetch_array($result))
{	
	$sub_text=mb_strcut($arr[text],0,400,'utf-8');
	$s="..";

	echo "<h6> <a href='post-gallery.html?id=$arr[id]'>$i. $arr[title]</a> </h6>";
	echo "<p> $sub_text .$s</p>"."<br><br>";
	$i++;
}
?> 