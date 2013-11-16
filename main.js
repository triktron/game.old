var ak_lr = 3;
var ak_ud = 3;
var jump_time = 4;

function main() {
	if (ak_lr == 1 && parseInt(document.getElementById('turtel').style.left) > 50) {
		document.getElementById('turtel').style.left = (parseInt(document.getElementById('turtel').style.left) - 4) + "px";
	}
	if (ak_lr == 2 && parseInt(document.getElementById('turtel').style.left) < 275) {
		document.getElementById('turtel').style.left = (parseInt(document.getElementById('turtel').style.left) + 4) + "px";
	}
	if (jump_time == 1) {
		jump1();
	} else if (jump_time == 2) {
		jump2();
	} else if (jump_time == 3) {
		jump3();
	}
	
	setTimeout(function(){main();},1000/30);
}

function move(e)
{
	if(window.event)
	{
		var keyCode = window.event.keyCode;
	}
	else
	{
		var keyCode = e.which
	}
	if (keyCode == 37 && parseInt(document.getElementById('turtel').style.left) > 50) {
		ak_lr = 1;
	} else if (keyCode == 39 && parseInt(document.getElementById('turtel').style.left) < 280) {
		ak_lr = 2;
	} else {
		ak_lr = 3;
	}
	if (keyCode == 38 && jump_time == 3) {
		jump_time = 1;
	}
}

function jump1() {
	if (parseInt(document.getElementById('turtel').style.top) > 270 ) {
		document.getElementById('turtel').style.top = (parseInt(document.getElementById('turtel').style.top) - 4) + "px";
	} else {
		jump_time = 2;
	}
}
function jump2() {
	if (parseInt(document.getElementById('turtel').style.top) > 230 ) {
		document.getElementById('turtel').style.top = (parseInt(document.getElementById('turtel').style.top) - 2) + "px";
	} else {
		jump_time = 3;
	}
}
function jump3() {
	if (parseInt(document.getElementById('turtel').style.top) != 340 ) {
		document.getElementById('turtel').style.top = (parseInt(document.getElementById('turtel').style.top) + 4) + "px";
	} else {
		jump_time = 4;
	}
}

main();