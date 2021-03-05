var getUrlString =location.href;
var url = new URL(getUrlString);
var id = url.searchParams.get('id');
//新聞標籤： 1. 媒體 2.媒體的老闆 3.何時的 4.哪裡的 5.作者 6.消息來源
$.ajax({ //1~4

   type:'POST',
   url: "http://120.126.19.100/newslabel.php",
   data: {id},
   dataType:"text",

      success:function(data){
      document.getElementById('info1').innerHTML = data;
       //alert ("success 1");
        }, 
       error:function(data)
       {
        alert("系統錯誤，錯誤代碼：NL01，請洽RD"); 
       }, 

   });
$.ajax({ //5
    
   type:'POST',
      url: "http://120.126.19.100/newslabel2.php",
      data: {id},
      dataType:"text",
   
         success:function(data){
         document.getElementById('info2').innerHTML = data;
         // alert ("success2");
           }, 
          error:function(data)
          {
           alert("系統錯誤，錯誤代碼：NL02，請洽RD"); 
          }, 
   
      });
$.ajax({ //6
    
   type:'POST',
      url: "http://120.126.19.100/newslabel3.php",
      data: {id},
      dataType:"text",
   
         success:function(data){
         document.getElementById('info3').innerHTML = data;
         // alert ("nl03");
           }, 
          error:function(data)
          {
           alert("系統錯誤，錯誤代碼：NL03，請洽RD"); 
          }, 
   
      });


$("#insert1").click(function(){ 
   $.ajax({
      
      type:'POST', //post 方式傳送
      url: "http://120.126.19.100/nlwhere.php",
      data: {whe:$("#where").val(), id }, //php取src為變數
      dataType:"text",
   
         success:function(data){
         document.getElementById('whinsert').innerHTML = data;
         if(confirm('檢測字元中...')){window.location.reload();}
           }, 
          error:function(data)
          {
           alert("系統錯誤，錯誤代碼：NL04，請洽RD"); 
          }, 
   
      });

   });
$("#insert2").click(function(){
   $.ajax({
      
      type:'POST', //post 方式傳送
      url: "http://120.126.19.100/nlauthor.php",
      data: {aut:$("#author").val(), id }, 
      dataType:"text",
   
         success:function(data){
         document.getElementById('auinsert').innerHTML = data;
         if(confirm('新增成功!!!')){window.location.reload();}
           }, 
          error:function(data)
          {
           alert("系統錯誤，錯誤代碼：NL05，請洽RD"); 
          }, 
   
      });

   });
$("#insert3").click(function(){ //誰給的消息 的input box button
   $.ajax({
      
      type:'POST', //post 方式傳送
      url: "http://120.126.19.100/nlsource.php",
      data: {src:$("#source").val(), id }, 
      dataType:"text",
   
         success:function(data){
         document.getElementById('srcinsert').innerHTML = data;
         if(confirm('檢測字元中')){window.location.reload();}
           }, 
          error:function(data)
          {
           alert("系統錯誤，錯誤代碼：NL06，請洽RD"); 
          }, 
   
      });

   });
