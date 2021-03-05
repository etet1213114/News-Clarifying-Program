$.ajax({

    type:'POST',
    url: "http://120.126.19.100/favor_str.php",
    data: {},
    dataType:"text",
 
     success:function(data){
         // alert("success");
      document.getElementById('favorite_title').innerHTML = data;
         }, 
        error:function(data)
        {
         alert("系統錯誤，錯誤代碼：TT00，請洽RD"); 
        }, 
 
    });