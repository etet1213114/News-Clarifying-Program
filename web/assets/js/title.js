var getUrlString =location.href;
var url = new URL(getUrlString);
var id = url.searchParams.get('id');
$.ajax({

   type:'POST',
   url: "http://120.126.19.100/title.php",
   data: {id},
   dataType:"text",

      success:function(data){
      document.getElementById('title').innerHTML = data;
      // alert ("success2");
        }, 
       error:function(data)
       {
        alert("系統錯誤，錯誤代碼：TT15，請洽RD"); 
       }, 

   });