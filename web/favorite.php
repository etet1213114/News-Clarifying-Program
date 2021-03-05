<?php
$servername = "120.126.19.100";
$user = "remote";
$password = "gylab666";
$dbname = 'newstest';
$conn = mysqli_connect($servername, $user, $password,$dbname);
mysqli_query($conn,'SET CHARACTER SET utf8');
mysqli_select_db($conn,$dbname)or die ("無法選擇資料庫".mysqli_error());
$id = $_POST["flag"];
$userid=$_POST["userid"];
$arrid=[];
$arruser=[];
$sqli = "SELECT * FROM user_favorite";
$result = mysqli_query($conn,$sqli);
 while ($arr=mysqli_fetch_array($result)) 
 {
 	array_push($arrid,$arr['articleid']);
 	array_push($arruser,$arr['user']);
 }
$nums=mysqli_num_rows($result);
if($nums > 0 )
{

	if(in_array($userid,$arruser) && in_array($id,$arrid))
	{
		echo "您已新增過此新聞，請勿重複新增";
	}
	
	else
	{
		$sql ="insert into user_favorite (user,articleid) VALUES('$userid','$id')";
		mysqli_query($conn,$sql)or die ("無法新增".mysqli_error()); 
		echo "新增成功";   
	}
}
else
{
	$sql2 ="insert into user_favorite (user,articleid) VALUES('$userid','$id')";
		mysqli_query($conn,$sql2)or die ("無法新增".mysqli_error()); 
		echo "新增成功";   
}
// $row = mysqli_fetch_assoc($result);
// $temp = $articleid = $row['articleid'];
// $temp .= $id . ';';
		// $sql ="insert into user_favorite (user,articleid) VALUES('$userid','$id')";
		// mysqli_query($conn,$sql)or die ("無法新增".mysqli_error()); 
		// echo "新增成功";   

?>