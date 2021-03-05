    $.ajax({

   type:'POST',
   url: "http://120.126.19.100/home_title1.php",
   data: {},
   dataType:"text",

    success:function(data){
        // alert("success");
     document.getElementById('home_title1').innerHTML = data;
        }, 
       error:function(data)
       {
        alert("系統錯誤，錯誤代碼：TT00，請洽RD"); 
       }, 

   });