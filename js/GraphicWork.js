;$(document).ready(function (){
	var num = 0;
	var scrollTop = 0;
	
	
	$(window).scroll(function(ev){
		var height = 18928;	//滚动条可以滚动的最大高度
		scrollTop = $(window).scrollTop();	//滚动条滚动的高度
		//console.log(scrollTop)
		num = scrollTop/height*100;			//滚动条滚动的百分比
		$('.line-inner').css('width',num+"%")		
		mouseWheel(document,upFn,downFn);
	});
	
	var chars = document.getElementsByClassName("chars");
	
	
	for(let i = 0 ; i < chars.lenght; i++){
		chars[i].stage = false;	//所有的都为隐藏状态
	};
	chars[0].stage = true;
	
	function downFn(){
		if(scrollTop >= 3500 && scrollTop <= 4500){
			if(chars[0].stage){
				$('.chars').eq(0).animate({
					top: -250,
					opacity: 0
				},1200)
				$('.chars').eq(1).animate({
					top: -82.5,
					opacity: 1
				},1200)
				chars[0].stage = false;
				chars[1].stage = true;
			}
			
		}
		if(scrollTop >= 8300 && scrollTop <= 9300 ){
			if(chars[1].stage){
				$('.chars').eq(1).animate({
					top: -250,
					opacity: 0
				},1200)
				$('.chars').eq(2).animate({
					top: -82.5,
					opacity: 1
				},1200)
				chars[1].stage = false;
				chars[2].stage = true;
			}		
		}
	}
	function upFn(){
		if(scrollTop >= 3500 && scrollTop <= 4500){
			if(chars[1].stage){
				$('.chars').eq(0).animate({
					top: -82.5,
					opacity: 1
				},1200)
				$('.chars').eq(1).animate({
					top: 250,
					opacity: 0
				},1200)
				chars[0].stage = true;
				chars[1].stage = false;
			}
		}
		if(scrollTop >= 8300 && scrollTop <= 9300){
			if(chars[2].stage){
				$('.chars').eq(1).animate({
					top: -82.5,
					opacity: 1
				},1200)
				$('.chars').eq(2).animate({
					top: 250,
					opacity: 0
				},1200)
				chars[1].stage = true;
				chars[2].stage = false;
			}
		}
	}
	
	
	
	function mouseWheel(element,upFn,downFn){
        element.onmousewheel = wheelFn;
        if( element.addEventListener ){
            element.addEventListener("DOMMouseScroll",wheelFn,false);
        }
        function wheelFn(ev){
            var direction = true;
            if(ev.wheelDelta){  //ie和chrome
                direction = ev.wheelDelta > 0 ? true : false;
            }else if(ev.detail){ //FF
                direction = ev.detail < 0 ? true : false;
            }

            if( direction ){  //向上
                typeof upFn === "function" && upFn();
            }else{  //向下
                typeof downFn === "function" && downFn();
            }
            //ev.preventDefault();
        }
    }
	
	
	
	
	
	
	
	
	
	
	
});
