
var c=document.getElementById("warField");
var cxt=c.getContext("2d");

//cube_length=20;
/*不要问我为什么不用更简单的方法*/
var color_storage=new Map();
color_storage.set("background","#7FFFD4");
color_storage.set("plane","#FF0000");
color_storage.set("block","#000000");
color_storage.set("bullet","#FF0000");

var cube_storage=new Array();
for(var i=0;i<600;i++)
{
	cube_storage[i]="background";
}

var plane_position=new Array();
plane_position[0]=580;
plane_position[1]=581;
plane_position[2]=582;
plane_position[3]=561;

bullet_position=new Array();
bullet_position[0]=plane_position[3]-20;
block_position=new Array();

function adjust_plane()
{
	for(var i=0;i<4;i++)
	{
		cube_storage[plane_position[i]]="plane";
	}
}
function paint()
{
	for(var i=0;i<600;i++)
	{
		cxt.fillStyle=color_storage.get(cube_storage[i]);
		cxt.fillRect(20*(i%20),i-(i%20),20,20);
	}
}
function bullet_move()
{
	for(var i=0;i<bullet_position.length;i++)
	{
		if(bullet_position[i]<20)
		{
			cube_storage[bullet_position[i]]="background";
			bullet_position.splice(i,1);
		}
		else
		{
			cube_storage[bullet_position[i]]="background";
			bullet_position[i]-=20;
			cube_storage[bullet_position[i]]="bullet";
		}

	}
	paint();	
}
function block_move()
{
	temp_number=Math.round(Math.random()*21);
	block_position.push(temp_number);
	for(var i=0;i<block_position.length;i++)
	{
		if(block_position[i]>580)
		{
			cube_storage[block_position[i]]="background";
			block_position.splice(i,1);
		}
		else
		{
			cube_storage[block_position[i]]="background";
			block_position[i]+=20;
			cube_storage[block_position[i]]="block";
		}

	}
	paint();	
}
function knock()
{
	for(var i=0;i<bullet_position.length;i++)
	{
		for(var j=0;j<block_position.length;j++)
		{
			if(bullet_position[i]==block_position[j])
			{
				cube_storage[bullet_position[i]]="background";				
				bullet_position.splice(i,1);
				block_position.splice(j,1);
			}
		}
	}
	//死亡机制
	for(var i=0;i<plane_position.length;i++)
	{
		for(var j=0;j<block_position.length;j++)
		{
			if(block_position[j]==plane_position[i])
			{
				window.location.href='dead.html';
			}
		}
	}
}

adjust_plane();
paint();
setInterval("block_move()",500);
setInterval("bullet_move()",100);
setInterval("knock()",100);
document.onkeydown=function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e && e.keyCode==37){
		if(plane_position[0]>580)
		{
			for(var i=0;i<4;i++)
			{
				cube_storage[plane_position[i]]="background";
				plane_position[i]-=1;
				cube_storage[plane_position[i]]="plane";
			}
			paint();
		}
	}
	if(e && e.keyCode==39){ 
		if(plane_position[2]<599)
		{
			for(var i=0;i<4;i++)
			{
				cube_storage[plane_position[i]]="background";
			}
			for(var i=0;i<4;i++)
			{
				plane_position[i]+=1;
				cube_storage[plane_position[i]]="plane";
			}
			paint();
		}

	}            
	if(e && e.keyCode==32){ 
		bullet_position.push(plane_position[3]-20);
	}
};

