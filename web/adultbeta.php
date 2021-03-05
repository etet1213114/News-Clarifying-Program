<?php
    header('Access-Control-Allow-Origin: *');
    # 設定資料庫參數
    $id2=$_POST['id'];
		$hostname= "120.126.19.100";		// 主機名稱
		$username= "remote";			// 資料庫登入帳號
		$password= "gylab666";		// 資料庫登入密碼
		$database= "newstest";		// 資料庫名稱
	   $newarr=[];
     $checkarr=[];
		# 建立SQL連線
		$link = mysqli_connect( $hostname , $username , $password ); // 取得連線物件
		mysqli_query($link, "SET NAMES 'UTF8'");                     // 設定編碼
        mysqli_select_db($link, $database) or die("無法選擇資料庫");  // 選擇資料庫
        $sql3 = "select * FROM words18";
        $result = mysqli_query($link, $sql3) or die("無法送出" . mysqli_error( ));
      
        while( $arr=mysqli_fetch_array($result))
        {
              array_push($newarr,$arr['words']);  
        }
      
      // $result = mysqli_query($link, $sql) or die("無法送出" . mysqli_error( ));
      // $rows = mysqli_num_rows($result);    // 取得 Tuple 數
      $arr=mysqli_fetch_array($result);
      $sql2="SELECT * FROM bingnews2 WHERE id='$id2'";
      $result2=mysqli_query($link,$sql2) or die("non" . mysqli_error());
      $arr2=mysqli_fetch_array($result2);

       foreach ($newarr as $value) {
       $sql = "select * from bingnews2 WHERE title LIKE '%$value%'";
       $check = mysqli_query($link,$sql);
       while($arr3=mysqli_fetch_array($check))
          {
              array_push($checkarr,$arr3['title']);
          }
      
       }
      // print_r($checkarr);
      // while($arr=mysqli_fetch_array($result)) 
      // { 
      //     array_push($newarr, $arr['title']);
      // }
     
        if(in_array($arr2['title'],$checkarr))
        {
           echo "警告!     文章內可能有腥羶色字眼";
        }
        else
        {
          echo "文字應用應屬普遍級";
        }

     
      // while($arr=mysqli_fetch_array($result)) 
      // { 
        // $console=in_array($arr2['title'],$arr);
        // if($console==true)
        // {
        //    echo "警告!     文章內可能有腥羶色字眼";
           
        // }

      // }
        
    ?>

