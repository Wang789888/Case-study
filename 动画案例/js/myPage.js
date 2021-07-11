
$(function(){
	var k = $(window).height();//当前整个盒子的高度
	var flag = false;//控制动画
	$(".next").click(function(event){
		$.fn.fullpage.moveSectionDown();
	})
    $('#fullpage').fullpage({
    	//是否显示项目导航
    	navigation: true,
    	//滚动速度，单位为毫秒
    	scrollingSpeed: 1200,

    	//回调函数，当屏幕动画结束后才开始执行
    	afterLoad: function(anchorLink,index){
    		if(index == 2 ){
    			//往第二屏幕滑动的时候，next先小时，等所有动画都完毕，next才出现
    			$(".next").fadeOut();
    			$(".search").show().animate({"right": 370},1500,function(){
    				$(".search-words").animate({"opacity": 1},500,function(){
    					$(".search").hide();
    					//图片往右上角缩小
    					$(".search-02-1").show().animate({"height":30,"right": 300,"bottom":452},500,function(){
    						//flag = true;//表示所有动画执行完毕
    					});
    					//同时沙发图片变大
    					$(".good1").show().animate({"height": 218},500);
    					//同时.word2文字显示出来
    					$(".word2").animate({"opacity": 1},500,function(){
    						$(".next").fadeIn();
    					});
    				});
    			});
    		}
    	},
    	//当刚开始滚动时执行如下代码
    	onLeave:function(index,nextIndex,direction){
    		$(".next").fadeOut();
    		if(index == 2 && nextIndex == 3 ){
    			//沙发往第三屏幕走的距离 = 当前屏幕高度 - box2到底部的高度 - 沙发到select的距离
    			 $(".safa3").show().animate({"bottom": -(k - 250),"width":207,"left": 260},2000,function(){
    			 	$(".img-01-a").animate({"opacity": 1},500,function(){
    			 		$(".btn-01-a").animate({"opacity": 1},500,function(){
    			 			$(".next").fadeIn();
    			 		});
    			 	});
    			 });
    			 $(".cover").show();
    			// alert(1)
    		}
    		if(index == 3 && nextIndex ==4){
    			$(".safa3").hide();
    			//沙发从第三屏幕倾斜掉到第四屏幕
    			$(".safa4").show().animate({"bottom": -((k-250)+50),"left": 260},2000,function(){
    				$(this).hide();//动画完毕之后自动隐藏
    				$(".car-safa").show();
    				//购物车开始往右走
    				$(".car").animate({"left": "150%"},2000,function(){
    					$(".note").show();
    					$(".note-img,.words-04-a").animate({"opacity": 1},1000,function(){
    						$(".next").fadeIn();
    					});
    				});
    			});
    		}
    		if(index == 4 && nextIndex == 5){
    			//从4切换到5时，小手上来点击鼠标后的一系列显示
    			$(".hand-05").animate({"bottom": 0},2000,function(){
    				$(".mouse-05-a").animate({"opacity": 1});
    				$(".t1f-05").show().animate({"bottom": 70},1000,function(){
    					$(".order-05").animate({"bottom": 390},function(){
    						$(".words-05").addClass("words-5-3D");
    						$(".next").fadeIn();
    					});
    				})
    			})
    		}
    		if(index == 5 && nextIndex == 6){
    			//从5切换到6时
    			$(".t1f").animate({"bottom":-(k-500),"left":"40%","width":65},1500,function(){
    				$(this).hide();
    			});
    			$(".box-06").animate({"left":"38%"},1500,function(){

    				$(this).animate({"bottom": 40},500,function(){

    					$(this).hide();

    					//使用backgroundPositionX修改X坐标，达到图片在x轴移动的效果
    					$(".section6").animate({"backgroundPositionX": "100%"},4000,function(){
    						//当背景动画执行完毕 boy大小复原
    						$(".boy").animate({"height": 305,"bottom": 116},1000,function(){
    							$(this).animate({"right":500},500,function(){
    								//模拟打开门
    								$(".door").animate({"opacity":1},200,function(){
    									$(".girl").show().animate({"right":350,"height":306},500,function(){
    										$(".pop-07").show();
    										$(".next").fadeIn();
    									});
    								});
    							});
    						});	
    					});
    					$(".words-06-a").animate({"left":"30%"},2000)
    					$(".pop-06").show();
    				})
    			})
    		}
    		if(index == 6 && index ==7){
    			//定时器
    			setTimeout(function(){
    				$(".star").animate({"width":120},500,function(){
    					$(".good-07").show();
    					$(".next").fadeIn();
    				});
    			},1000);
    		}
    		//这是第8屏幕
    		$(".beginShoping").hover(function(){
    			$(".btn-08-a").toggle();//toggle()是显示和隐藏的切换
    		});
    		//手跟随鼠标移动
    		$(document).mousemove(function(event){
    			//把鼠标在页面的坐标给hand大手left top
    			var x = event.pageX - $(".hand-08").width()/2;
    			var y = event.pageY + 10;
    			//手的top值不能小于minY
    			var minY = k - 449;
    			if(y < minY){
    				$(".hand-08").css({"left": x,"top": minY});
    			}else{
    				$(".hand-08").css({"left": x,"top": y});
    			}
    			
    		});
    		//当我们点击再来一次的时候，分俩步进行
    		$(".again").click(function(event){
    			//1、返回第1屏幕
    			$.fn.fullpage.moveTo(1);
    			//2、将所有动画复原(动画的元素清除行内样式就可以)
    			$("img,.move").attr("style","");
    		});

    	},

    });
});	