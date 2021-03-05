var getUrlString =location.href;
var url = new URL(getUrlString);
var flag = url.searchParams.get('id');
$.ajax({

type: 'POST',
url: "http://120.126.19.100/favoritehide.php",
data: {},
dataType:"text",

 success:function(data){
     if(data=="")
{
  $("#favorite_id").hide();
}
else
{
   $("#favorite_id").show();
}
    }, 
   error:function(data)
   {
     alert("系統錯誤，代碼：fav01，請洽RD");
   }, 

})
 $("#submit").click(function()
 	 {
   $.ajax({

 	 type: 'POST',
 	 url: "http://120.126.19.100/comment.php",
 	 data: {author:$("#Name").val(),email:$("#email").val(),comment:$("#comment").val(),flag},
 	 dataType:"text",

 	  success:function(data){
         alert("留言成功!");
         
       
        }, 
       error:function(data)
       {
       	alert("系統錯誤，代碼：MS01，請洽RD");
       },	

   })
})
 
$("#favorite_id").click(function()
{
$.ajax({

type: 'POST',
url: "http://120.126.19.100/favorite.php",
data: {flag,userid:$("#userlogin").text()},
dataType:"text",

 success:function(data){
     alert(data);
     // alert(typeof(loginornot));
    }, 
   error:function(data)
   {
     alert("系統錯誤，代碼：MS02，請洽RD");
   },	

})
})