$(function(){
			let lis=$('.banner>li');
			let imgW=lis.width();
			let now=next=0;
			let t=setInterval(fn,3000);
			function fn(){
				next++;
				if(lis.length==next){
					next=0;
				}
				lis.eq(next).css({left:imgW});
				lis.eq(next).animate({left:0});
				lis.eq(now).animate({left:-imgW});
				now=next;
			}
		})