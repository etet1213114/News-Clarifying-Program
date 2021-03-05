$.ajax({

type: 'POST',
url: "http://120.126.19.100/favoritehide.php",
data: {},
dataType:"text",

 success:function(data){
     if(data=="")
{
  $("#favorite_id2").hide();
}
else
{
   $("#favorite_id2").show();
}
    }, 
   error:function(data)
   {
     alert("系統錯誤，代碼：fav01，請洽RD");
   }, 

})