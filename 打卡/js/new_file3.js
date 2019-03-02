
	document.write("你完成了今天的任务"+"<br/>");
	document.write("你的打卡次数为"+localStorage.getItem("count"));
function refresh()
{
	localStorage.removeItem("plans");
	localStorage.setItem("flag",false);
	localStorage.removeItem("count");
	localStorage.removeItem("lastDay");
	window.location.href='index.html';
}