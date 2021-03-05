$.ajax({

type: 'POST',
url: "http://120.126.19.100/useridlogin.php",
data: {},
dataType:"text",

 success:function(data){
     document.getElementById('userlogin').innerHTML = data;
   // alert("登入成功");
    }, 
   error:function(data)
   {
     alert("登入異常，請洽RD");
   },	

})
function changetype(){
	var getUrlString =location.href;
	var url = new URL(getUrlString);
  if(url=='http://120.126.19.100/home-grid.html')
  {
      setTimeout('location= "http://120.126.19.100/home-grid-type2.html"',100);
  }
  else if(url=='http://120.126.19.100/home-grid-type2.html')
  {
     setTimeout('location= "http://120.126.19.100/home-grid.html"',100);
  }
  
}