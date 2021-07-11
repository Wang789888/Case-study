
$(function(){
	setTimeout(function() {
	 	$(".section1").addClass('comein');
	 }, 200);

    $('#fullpage').fullpage({
    	//显示项目符号
    	navigation: true,
    	//可循环滚动
    	loopBottom: true,

    	onLeave: function(index,nextIndex,direction){
    		// 当我们离开第一屏幕的时候，section1 就移除 comein 
    		$(".section1").removeClass('comein');

    		if (index == 1) {
    			//给section1多添加一个comein属性
    			$(".section1").addClass('comein');
    		}

    		if(nextIndex == 2){
    			$(".p2").css("transform","translateX(-50%) translateY(-50%) translateZ(0px) scale(1)");
    		}else{
    			$(".p2").css("transform","translateX(-50%) translateY(-50%) translateZ(2000px) scale(1)")
    		}

    		if(nextIndex == 3){
    			$(".box").css("transform","translateZ(-50px) rotateX(30deg)");
    			$(".txt").css("transform","translateZ(0px) rotateX(0deg)");
    		} 
    		if(nextIndex == 4) {
    			$(".box").css("transform", "translateZ(-200px) rotateX(-45deg) translateX(3000px)")
    			$(".txt").css("transform", "translateZ(1200px) rotateY(-60deg)")
    		}
    	}
    });
});