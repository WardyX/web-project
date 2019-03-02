var plans=new Array();
var plans_show="";
var day=new Date();
window.onload = function()
{
	if(localStorage.getItem("flag")=="true")
	{
		window.location.href='check.html';
	}
}
function subOne()
{
	plans.push(document.getElementById("plan").value);
	plans_show+=document.getElementById("plan").value;
	plans_show+="\n";
	document.getElementById("show").innerText=plans_show;
	document.getElementById("plan").value="";
}
function subAll()
{
	localStorage.setItem("plans",JSON.stringify(plans));
	localStorage.setItem("flag",true);
	localStorage.setItem("count",'0');
	localStorage.setItem("lastDay",String(day.getDate()-1));
	window.location.href='check.html';
}
