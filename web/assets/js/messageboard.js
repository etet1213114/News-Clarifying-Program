 var getUrlString =location.href;
 var url = new URL(getUrlString);
 var flag = url.searchParams.get('id');
   $.ajax({
 
 	 type: 'POST',
 	 url: "http://120.126.19.100/message.php",
 	 data: {flag},
 	 dataType:"text",

 	  success:function(data){
         // alert("留言板");
         document.getElementById('testmessageboard').innerHTML=data;
       
        }, 
       error:function(data)
       {
       	alert("系統錯誤，代碼：MS02，請洽RD");
       },	

   })
