window.onload=function() {
	let banner=document.querySelector('.banner');
	let lis=banner.querySelectorAll('li');
	let left=banner.querySelector('.banner-left');
	let right=banner.querySelector('.banner-right');
	let now=3;
	let num=0;
	let t=setInterval(move,3000);

	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,3000);
	}

	right.onclick=function(){
		move();
	}
	left.onclick=function(){
		
		moveL();
	}

	function move(){
		num++;
		if(num==lis.length){
			num=0;
		};
		for(let i=0;i<lis.length;i++){
			
			animate(lis[i],{opacity:0});

		};
		animate(lis[num],{opacity:1});
	};
	function moveL(){
		now--;
		if(now<0){
			now=2;
		};
		for(let i=0;i<lis.length;i++){
			
			animate(lis[i],{opacity:0});

		};
		animate(lis[now],{opacity:1});
	}

	let wu=document.querySelector('.wu');
	let ls=wu.querySelectorAll('li');
	for(let i=0;i<ls.length;i++){
		ls[i].onclick=function(){
			let left=document.querySelector('.last-left');
			let huns=left.querySelectorAll('.hun');
			for(let j=0;j<huns.length;j++){
				
				animate(huns[j],{opacity:0});
			}
			animate(huns[i],{opacity:1});
			
		}
		
	};

	let sbanner=document.querySelector('.sbanner');
	let lies=sbanner.querySelectorAll('li');
	let num0=0;
	let t0=setInterval(move0,3000);
	function move0(){
		num0++;
		if(num0==lies.length){
			num0=0;
		};
		for(let i=0;i<lies.length;i++){
			
			animate(lies[i],{opacity:0});

		};
		animate(lies[num0],{opacity:1});
	};
	let icon_up=document.querySelector('.icon_up');
	let img1=icon_up.querySelector('img');
	console.log(img1.pageTop);
};












