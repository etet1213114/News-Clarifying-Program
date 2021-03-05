<?php
header('Access-Control-Allow-Origin: *');
$id2=$_POST['id'];
$newarr=[];//腥羶色詞
$checkarr=[];//腥羶色標題
// $test=[];//在新聞標題中的腥羶色詞
$server='120.126.19.100';
$id='remote';
$pwd='gylab666';
$dbname='newstest';
$link = mysqli_connect($server,$id,$pwd,$dbname);     
mysqli_select_db($link,$dbname)or die ("無法選擇資料庫".mysqli_error());
mysqli_query($link, 'SET CHARACTER SET utf8');		
mysqli_query($link,  "SET collation_connection = 'utf8_general_ci'");
  $sql2 = "select * FROM words18";
  $result = mysqli_query($link, $sql2) or die("無法送出" . mysqli_error( ));
      	
        while( $arr2=mysqli_fetch_array($result))
        {
              array_push($newarr,$arr2['words']);  
        }
        foreach ($newarr as $value) {
       $sql = "select * from bingnews2 WHERE title LIKE '%$value%'";

       $check = mysqli_query($link,$sql);
       while($arr3=mysqli_fetch_array($check))
          {
              array_push($checkarr,$arr3['title']);
              // array_push($test, $value);
          }
      
       }
$sqli="select * from bingnews2 WHERE id='$id2'";
$result2 = mysqli_query($link,$sqli);
$arr=mysqli_fetch_array($result2);
if($arr!="")//防堵
	{	
		$title=$arr['title'];//title字串
		// $rst;
		// $long=strlen($title);
		// $newtitle;
		if(in_array($arr['title'],$checkarr))//判斷此新聞標題是否包含於腥羶色標題陣列
		{
		// $sql4 = "select * from words18 WHERE words LIKE '%$title%'";
		// $changecolor=mysqli_query($link,$sql4);
		// $arr4=mysqli_fetch_array($changecolor);
 			foreach ($newarr as $value2) {
				$rst = strpos($title,$value2);
				$newtitle = substr($title,0,$rst);
				$newtitle2 = substr($title,$rst);
				if($newtitle!="" && $newtitle2!="")
				{	
					echo "<h1><span>$newtitle</span><span style='color:#D3D3D3'>$newtitle2</span></h1>"."<br>"."<br>";
					break;
				}
				
				}
			
		
		echo "<div><p><img src='$arr[imageurl]'></p></div>";
		echo "<div style=word-break:break-all;text-align:justify;border-style:dashed;padding:20px;border-color:#596673><h3> $arr[text] </h3></div>";
		
		
	}
		else{
		echo "<h1><p> $title </p></h1>"."<br>"."<br>";
		echo "<div><p><img src='$arr[imageurl]'></p></div>";
		echo "<div style=word-break:break-all;text-align:justify;border-style:dashed;padding:20px;border-color:#596673><h3> $arr[text] </h3></div>";
		}
	}
else
	{
		 	
		echo "<p><meta http-equiv='refresh' content='0;url=http://120.126.19.100/404.php'></p>";
	}


			
?>