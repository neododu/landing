$(window).scroll(function(){
	var quick = $("#quick");
	var win_w = $(window).width();
	var position = $(window).scrollTop();
	
	if(win_w <= 1000){
		if(position > 0){
			quick.removeClass("mobile");
		}else{
			quick.addClass("mobile");
		}
	}
	
	
	if(quick.hasClass("open") == true){
		quick.removeClass("open");
	}
});

function quick_open(sns){
	let $quick = $("#quick");
	let $sns = $(".snsBox");
	
	if($quick.hasClass("open") == false){
		$quick.addClass("open");
		$sns.find(".boxItem").removeClass("open");
		$sns.find("."+sns).addClass("open");
	}else{
		
		if($sns.find("."+sns).hasClass("open") == true){
			$quick.removeClass("open");	
		}else{
			$sns.find(".boxItem").removeClass("open");
			$sns.find("."+sns).addClass("open");
		}
	}
}


/* 마이페이지 메뉴 슬라이드 세팅
**************************************************************/
var init = false;

/* 각 미디어쿼리별 슬라이드 작동여부 결정
**************************************************************/
function swiperMode() {
	let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1000px)');
	let desktop = window.matchMedia('(min-width: 1001px)');

	var visual = $("#visual");
	var $_quick = $("#quick");
	
	// 모바일사이즈 일때 작동
	if(mobile.matches) {
		if (!init) {
			init = true;			
			
			
			$_quick.addClass("mobile");
		}	
		
		visual.height($(window).innerHeight());
	}
	// PC에서 비활성화
	else if(desktop.matches) {
		init = false;	
		
		$_quick.removeClass("mobile");
		visual.height($(window).innerHeight());
		
	}	
}

/* On Load
**************************************************************/
window.addEventListener('load', function() {
	swiperMode();
});

//ios vh 오류 수정용 스크립트
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh + 'px');

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {	
	swiperMode();
	
	let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
});