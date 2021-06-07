/* ***********头部******************* */
var par = document.getElementById("par");
var chi = document.getElementById("chi");
var num = 0;
par.onclick = function() {
	num++;
	if (num % 2 == 0) {
		chi.style.display = "none";
	} else {
		chi.style.display = "block";
	}
}

function hide() {
	$(".sub-nav").css("display", "none"); /*隐藏函数，就是将二级菜单隐藏*/
}
/*以下是第二部分*/
$("nav .nav ul>li").mouseenter(
	function() {
		$(this).find(".sub-nav").slideDown();
	});
$("nav .nav ul>li").mouseleave(
	function() {
		// $(".sub_nav").slideUp();   /*鼠标离开后又隐藏*/
		$(this).find(".sub-nav").slideUp();
});

var btn=document.getElementById("btn");
var btn01=document.getElementById("btn01");
var btn02=document.getElementById("btn02");
var btn03=document.getElementById("btn03");
var btnnum=0;
var nav=document.getElementById("nav");
btn.onclick=function(){
	btnnum++;
	if(btnnum%2==0){
		btn02.style.display="block";
		btn01.style.transform="rotate(0)";
		btn01.style.top="0";
		btn03.style.transform="rotate(0)";
		btn03.style.top="16px";
		nav.style.transform="rotateY(90deg)";
		this.style.zIndex="2"
	}else{
		btn02.style.display="none";
		btn01.style.transform="rotate(45deg)";
		btn01.style.top="10px";
		btn03.style.transform="rotate(-45deg)";
		btn03.style.top="10px";
		nav.style.transform="rotateY(0)";
	}
	
}

