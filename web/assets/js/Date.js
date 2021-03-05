function ShowDate() {
    var Today=new Date();
    var week;
    if(new Date().getDay()==0)week= "Sunday" ;
    if(new Date().getDay()==1)week= "Monday" ;
    if(new Date().getDay()==2)week= "Tuesday" ;
    if(new Date().getDay()==3)week= "Wednesdy" ;
    if(new Date().getDay()==4)week= "Thursday" ;
    if(new Date().getDay()==5)week= "Friday" ;
    if(new Date().getDay()==6)week= "Saturday" ;
    var month;
    if(new Date().getMonth()==0)month= "January" ;
    if(new Date().getMonth()==1)month= "Feburary" ;
    if(new Date().getMonth()==2)month= "March" ;
    if(new Date().getMonth()==3)month= "April" ;
    if(new Date().getMonth()==3)month= "April" ;
    if(new Date().getMonth()==5)month= "June" ;
    if(new Date().getMonth()==6)month= "July" ;
    if(new Date().getMonth()==7)month= "August" ;
    if(new Date().getMonth()==8)month= "September" ;
    if(new Date().getMonth()==9)month= "October" ;
    if(new Date().getMonth()==10)month= "November" ;
    if(new Date().getMonth()==11)month= "December" ;
    document.getElementById('showbox').innerHTML=week+ ", " +Today.getDate()+"&nbsp;&nbsp;" + month+"&nbsp;&nbsp;" + Today.getFullYear();	
}  