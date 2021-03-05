<?php
	$arr=[
		'1.jpg',
		'2.jpg',
		'3.jpg',
		'4.jpg',
		'5.jpg',
		'6.jpg',
		'7.jpg',
		'8.JPG',
		'9.JPG',
		'10.JPG',
		'11.JPG',
		'12.JPG'
	];
	
	 $ar=array_rand($arr,1);
	
?>
<!DOCTYPE html>

<html>

<head>
	<title>彩蛋</title>
</head>
<body>
	
	<div id='pic'>
		<center><img src='http://120.126.19.100/assets/images/eggimg/<?php echo $arr[$ar]?>'></center></div>
	<div id='tt' class="timeout"></div>
<style type="text/css">
	.timeout{
		text-align: center;
		font-size:30px;
	}
</style>
<script type="text/javascript">
	var tt = 4; 
function timego(){ 
tt--; 
document.getElementById("tt").innerHTML = "將於"+tt+"sec後返回主頁"; 
if(tt==0){ 
window.location.href='http://120.126.19.100/home-grid.html'; 
return false; 
} 
} 
var timer = window.setInterval("timego()",1000); 
	</script>
	</body>