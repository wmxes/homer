$(function(){
	$('.banner-right').on('click',function(){
		let next=$('.active').next();
		move(next,'left');
		if(next.length){
			move(next,'left');
		}else{
			next=$('li').eq(0);
			move(next,'left')
		}
	})
	function move(obj,dir){
		let active=$('.active');
		active.addClass(dir).queue(function(){
			$(this).removeClass('left').removeClass('active');
			$(this).dequeue();
		})
		let d=dir=='left'?'right':'left';
		obj.addClass(d);
		// obj[0].offsetWidth;
		obj.removeClass(d).addClass('active');
	}
	$('.banner-left').on('click',function(){
		let prev=$('.active').prev();
		moveL(prev,'right');
		if(prev.length){
			moveL(prev,'right');
		}else{
			prev=$('li').eq(0);
			moveL(prev,'right')
		}
	})
	function moveL(obj,dir){
		let active=$('.active');
		active.addClass(dir).queue(function(){
			$(this).removeClass('right').removeClass('active');
			$(this).dequeue();
		})
		let d=dir=='right'?'left':'right';
		obj.addClass(d);
		// obj[0].offsetWidth;
		obj.removeClass(d).addClass('active');
	}
})