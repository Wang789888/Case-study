    //1.获取界面元素
	var box = my$('box');
	var screen = box.children[0];
	var ul = screen.children[0];
	var ol = screen.children[1];

	var arr = my$('arr');
	var arrLeft = my$('left');
	var arrRight = my$('right');

	//图片的位置
	var imgWidth = screen.offsetWidth;

	//2.动态生成序号 = 页面上有多少张图片
	var count = ul.children.length;

	for(var i = 0; i < count; i++){
		//给ol中创建li标签
		var li = document.createElement('li');
		//将li放入父容器ol中
		ol.appendChild(li);
		//设置标签之间的内容，将li设置为i+1;
		setInnerText(li,i + 1);

		//点击序号，动画模式轮播切换图片
		//将liClick函数赋值
		li.onclick = liClick;

		// 让当前li记录他的索引
    	// 设置标签的自定义属性
    	li.setAttribute('index', i);
	}
	 //定义ol中的li的点击事件
	 function liClick(){
	 	//取消其他li高亮显示，只让当前li高亮显示
	 	for(var i = 0;i < ol.children.length;i++){

	 		var li = ol.children[i];

	 		li.className = '';

	 	}

	 	//让当前li高亮显示
	 	this.className = 'current';

	 	//3.点击序号，以动画的方式切换到当前点击的图片位置
	 	//图片的位置
	 	var imgWidth = screen.offsetWidth;

	 	//获取自定义属性
	 	var liIndex = parseInt(this.getAttribute('index'));
	 	
	 	//调用animate函数
	 	animate(ul, -liIndex * imgWidth);


	 	//让全局变量index和li中的index保持一致（全局变量如果与局部变量重名只可访问局部变量）
	 	//全局变量用来记录当前索引
	 	index = liIndex;
	 }

	 //让序号1高亮显示
	 ol.children[0].className = 'current'; 	

	 //鼠标移入与移出
	 box.onmouseenter=function(){
	 	arr.style.display = 'block';
	 	//清除定时器
	 	clearInterval(timerId);
	 }

	 box.onmouseleave=function(){
	 	arr.style.display = 'none';
	 	//重新开启定时器,让图片自动轮播
	 	timerId = setInterval(function(){
	 		arrRight.click();
	 	},2000);
	 }

	 //实现上一张和下一张的功能 
	 //下一张
	 var index = 0;
	 arrRight.onclick = function(){
	 	//判断是否是克隆的第一张图片，如果是克隆的第一张图片，此时修改ul的坐标，显示真正的第一张图片
	 	if(index === count){
	 		//将克隆图片变到第一张图片
	 		ul.style.left = '0px';
	 		index = 0;
	 	}
	 	//总共有5张图片，但是还有一张克隆的图片 克隆的图片索引是5
	 	index++;
	 	if(index < count){
	 		// animate(ul, -index * imgWidth);
	 		//获取图片对应的序号，让序号点击,顺便让序号与图片保持一致
	 		ol.children[index].click();
	 	}else{
	 		//如果是最后一张图片 以动画的方式，移动到克隆的第一张图片
	 		animate(ul, -index *imgWidth);
	 		//取消所有序号的高亮显示，让第一个序号高亮显示
	 		for(var i = 0;i < ol.children.length;i++){
	 			var li = ol.children[i];
	 			li.className = '';
	 		}
	 		ol.children[0].className = 'current';
	 	}
	 }
	 //上一张
	 arrLeft.onclick = function(){
	 	//如果当前是第一张图片，此时要偷偷的切换到最后一张图片的位置（克隆的第一张图片）
	 	if(index ===0){
	 		index = count;
	 		ul.style.left = -index * imgWidth + 'px';
	 	}

	 	index--;
	 	ol.children[index].click();

	 	// //如果不是第一张的话，index--
	 	// if(index >0){
	 	// 	index--;
	 	// 	//animate(ul,-index * imgWidth);
	 	// 	ol.children[index].click();
	 	// }
	 }
	 //无缝滚动
	 //获取ul中的第一个li
	 var firstLi = ul.children[0];
	 //克隆li cloneNode()表示复制节点
	 //参数：true 复制节点中的内容；false 只复制当前节点，不复制里面的内容
	 var cloneLi = firstLi.cloneNode(true);
	 ul.appendChild(cloneLi);


	 //自动切换图片
	 var timerId = setInterval(function(){
	 	//切换到下一张图片
	 	arrRight.click();
	 },2000);
	 