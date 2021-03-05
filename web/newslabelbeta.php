<?php
		# 設定資料庫參數
		$hostname= "120.126.19.100";		// 主機名稱
		$username= "remote";			// 資料庫登入帳號
		$password= "gylab666";		// 資料庫登入密碼
		$database= "newstest";		// 資料庫名稱
	
		# 建立SQL連線
		$link = mysqli_connect( $hostname , $username , $password ); // 取得連線物件
		mysqli_query($link, "SET NAMES 'UTF8'");                     // 設定編碼
        mysqli_select_db($link, $database) or die("無法選擇資料庫");  // 選擇資料庫
  
        #reference: https://www.w3schools.com/howto/howto_css_notes.asp
    ?>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
div {
  margin-bottom: 15px;
  padding: 4px 12px;
}

.info {
  background-color: #e7f3fe;
  border-left: 6px solid #2196F3;
  padding: 25px 6px 6px 6px;
}

.news{
    border-left: 6px;
}

button {
  width: 80px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background: #23c2c2;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
    }
</style>
</head>
<body>

<h2>Notes</h2>
<?php

        $sql = "SELECT * FROM `bingnews2` WHERE id = 2";
        $result = mysqli_query($link, $sql) or die("無法送出" . mysqli_error( ));
    ?>
<div class ="news"><?php while ($row = mysqli_fetch_array($result)){?>
        <div><?= $row['title'];?></div> <!--功能相當於php echo -->
        <div><?= $row['text'];?></div> 
        <div><?= $row['url'];?></div>
        <div><?= $row['provider'];?></div>
        <div><?= $row['pubdate'];?></div>
        <?php } ?>
    </div>
    
    <?php
      $sql = "SELECT * FROM `bingnews2` WHERE id = 2";
      $result = mysqli_query($link, $sql) or die("無法送出" . mysqli_error( ));
    ?>
<div class="info">
  <p><strong>◎新聞標籤!</strong>
    <?php while ($r = mysqli_fetch_array($result) ){?> 
    <div>●哪間媒體： <?= $r['provider']; }?> </div>
    
    <?php
      $ms="SELECT * FROM `media` JOIN `bingnews2` ON bingnews2.provider = media.provider AND bingnews2.id=2";
      $mr= mysqli_query($link, $ms)or die("無法送出" . mysqli_error( ));
      while ($m = mysqli_fetch_array($mr) ){?>

    <div>●誰的媒體：<?php echo $m['owner'];  }?></div>
    <div>●誰寫的報導： 功能待測試 </div>
    <?php
      $ws="SELECT * FROM `newslabel` JOIN `bingnews2` ON bingnews2.id = newslabel.id AND bingnews2.id=2";
      $wr= mysqli_query($link, $ws)or die("無法送出" . mysqli_error( ));
      while ($w = mysqli_fetch_array($wr) ){?>

    <div>●誰給的消息：<?php echo $w['fromwho'];  }?> </div>

    <form action="" method ="post">
    <div>----→請幫我們從文章中判斷消息來源：(如已有資料將不重複新增) <input type="text" name="source" style="font-size:12pt;height:20px;width:100px;" > 
        <input type="submit" name="insert" value="輸入">
      <?php
      $w = mysqli_num_rows($wr);
      if(isset($_POST['insert']) && $w==0){
        $sug= $_POST['source'];
        $insert = "INSERT INTO newslabel(id, author, fromwho) VALUES(2,NULL,'$sug')";
        mysqli_query($link, $insert)or die("已有重複資料" ) ;
        echo "<br/><br/><span>新增成功...!!</span>";
      }
      ?>
    </div>
    </form>
    
    <?php
      $sql = "SELECT * FROM `bingnews2` WHERE id = 2";
      $result = mysqli_query($link, $sql) or die("無法送出" . mysqli_error( ));
      while ($r = mysqli_fetch_array($result) ){?> 
    <div>●何時的新聞：<?php echo $r['pubdate'];?> </div>     <?php } ?>
    <div>●哪裡的新聞： 台灣 or others</div>
  </p>
</div>

</body>
</html>

