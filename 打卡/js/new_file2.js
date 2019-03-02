var achieve=new Array;
var today=new Date();
if(localStorage.getItem("lastDay")==today.getDate().toString())
{
	window.location.href='done.html';
}
achieve=JSON.parse(localStorage.getItem("plans"));
for (x in achieve)
	{
		document.write(achieve[x]+"<br/>");		
	}
function through()
{
	achieve[0]+="a";
}
function refresh()
{
	localStorage.removeItem("plans");
	localStorage.setItem("flag",false);
	localStorage.removeItem("count");
	localStorage.removeItem("lastDay");
	window.location.href='index.html';
}
function done()
{
	localStorage.count=String(parseInt(localStorage.getItem("count"))+1);
	localStorage.lastDay=String(today.getDate());
	window.location.href='done.html';
}
