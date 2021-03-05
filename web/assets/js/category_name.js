var getUrlString =location.href;
var url = new URL(getUrlString);
var category = url.searchParams.get('category');
$.ajax({

    type:'POST',
    url: "http://120.126.19.100/category_name.php",
    data: {category},
    dataType:"text",
    
 
     success:function(data){
        //  alert("success543811");
      document.getElementById('category_name').innerHTML = data;
         }, 
        error:function(data)
        {
         alert("系統錯誤，錯誤代碼：CAT00，請洽RD"); 
        }, 
 
    });