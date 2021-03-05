var getUrlString =location.href;
var url = new URL(getUrlString);
var category = url.searchParams.get('category');
$.ajax({

    type:'POST',
    url: "http://120.126.19.100/category1.php",
    data: {category},
    dataType:"text",
    
 
     success:function(data){
        //  alert("success");
      document.getElementById('category_id').innerHTML = data;
         }, 
        error:function(data)
        {
         alert("系統錯誤，錯誤代碼：CAT01，請洽RD"); 
        }, 
 
    });
    