var result=0;
var surface="";
var temp_number=0;
function f1()
{
	var number=1;
	surface+="1";
	document.getElementById("calculate").innerText=surface;
	f_calAnswer(number);
}
function f2()
{
	var number=2;
	surface+="2";
	document.getElementById("calculate").innerText=surface;
	f_calAnswer(number);
}
function f3()
{
	var number=3;
	surface+="3";
	document.getElementById("calculate").innerText=surface;
	f_calAnswer(number);
}
function f4()
{
	var number=4;
	surface+="4";
	document.getElementById("calculate").innerText=surface;
	f_calAnswer(number);
}
function f5()
{
	var number=5;
	surface+="5";
	document.getElementById("calculate").innerText=surface;
	f_calAnswer(number);
}
function f6()
{
	var number=6;
	surface+="6";
	document.getElementById("calculate").innerText=surface;
	f_calAnswer(number);
}
function f7()
{
	var number=7;
	surface+="7";
	document.getElementById("calculate").innerText=surface;
	f_calAnswer(number);
}
function f8()
{
	var number=8;
	surface+="8";
	document.getElementById("calculate").innerText=surface;
	f_calAnswer(number);
}
function f9()
{
	var number=9;
	surface+="9";
	document.getElementById("calculate").innerText=surface;
	f_calAnswer(number);
}
function f0()
{
	var number=0;
	surface+="0";
	document.getElementById("calculate").innerText=surface;
	f_calAnswer(number);
}
function f_add()
{
	surface+="+";
	document.getElementById("calculate").innerText=surface;
}
function f_getAnswer()
{
	result+=temp_number;
	document.getElementById("calculate").innerText=String(result);
}
function f_refresh()
{
	result=0;
	surface="";
	temp_number=0;
	document.getElementById("calculate").innerText=surface+" ";
}
function f_calAnswer(number)
{
	if(surface.lastIndexOf("+")==(surface.length-2)&&surface.indexOf("+")>=0)
	{
		result+=temp_number;
		temp_number=0;
		temp_number+=number;
	}
	else
	{
		temp_number*=10;
		temp_number+=number;
	}
}