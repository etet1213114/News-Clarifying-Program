<?php
// header("refresh:3;url=http://120.126.19.100/home-grid.html");
$notfound=['如果我有什麼讓你不舒服的地方,麻煩你自己克服一下。','賴床是對周末最起碼的尊重。','世上只有騙子是真心的,因為他是真心騙你的。',
'所謂的好學生只不過是做壞事沒有被老師發現而已。','拋出去的磚頭不一定能引玉,倒有可能砸到人。','我演過的最完美的戲就是裝作上課能聽懂的樣子
','考試是一個人的事,可是分數卻是七大姑八大姨以及隔壁老王等一幫子閒雜人等的事。','生活會讓你苦一陣子,等你適應以後,再讓你苦一輩子。',
'上帝為你關了一扇門,又為你開了一扇窗,住在十五樓的你,應該知道要怎麼做了吧。','用錢當然買不到快樂,只要有錢,別人會想辦法讓你快樂。',
'純友誼還是存在的,長得越醜,就越純。','如果你覺得每天都累得跟狗一樣,那你真的誤會了,狗都沒你那麼累。','薪水就像月經,一個月來一次,一個禮拜就沒了。',
'單身是一種選擇,只不過不是我選的。'];
$ar=array_rand($notfound,1);
?>
<!DOCTYPE html>

<html>

<head>

<title>404 NOT FOUND!</title>

</head>


<body>
	<br>
	<br>
	<br>
	<br>
	<div class="title">404 網頁不存在</div>
	<span style="font-size:23px"><center><dfn>The requested URL was not found on this server.</dfn><center></span>
	<div class="goodsentence">
		<?php echo $notfound[$ar] ?>
	</div>
	<img class="image" src="http://120.126.19.100/assets/images/404.png">
	<div class="timeout"id="tt">
		
	</div>

<!-- <img src="http://120.126.19.100/assets/images/404.png"> -->
<!-- <p><meta http-equiv='refresh' content='3;url=http://120.126.19.100/home-grid.html'></p> -->
<!-- <style type="text/css">
	body{
			background-image:url('http://120.126.19.100/assets/images/404.png');
　			background-repeat:no-repeat;
		}
</style>
<script type="text/javascript">
	setTimeout(function(){},0);

</script> -->
<style type="text/css">

	.title{

		text-align: center;
		font-size:100px;
	}
	.goodsentence{
		/*background-color: black;*/
		text-align: center;
		color: red;
		font-size:20px;
	}
	.image{
		margin:auto;
           /* background-color: #f4f405;*/
            width:40%;
            height:40%;
	}
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



</html>