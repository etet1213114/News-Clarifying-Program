var getUrlString =location.href;
var url = new URL(getUrlString);
var id = url.searchParams.get('id');
$.ajax({

   type:'POST',
   url: "http://120.126.19.100/adultbeta.php",
   data: {id},
   dataType:"text",

      success:function(data){
        document.getElementById('adultbeta').innerHTML = data;
      // alert ("success543811");
        }, 
       error:function(data)
       {
        alert("系統錯誤，錯誤代碼：FL01，請洽RD。"); 
       }, 

   });