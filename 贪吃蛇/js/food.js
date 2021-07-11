
//自调用函数，开启一个新的作用域，避免命名冲突
(function(){
	//局部作用域
	var position = 'absolute';
	//定义存储删除的元素，为删除做准备
	var elements = [];

	//定义构造函数 options?
	function Food(options){

		//设置food对象属性
		options = options || {};
		this.x = options.x || 0;
		this.y = options.y || 0;

		this.width = options.width || 20;
		this.height = options.height || 20;

		this.color = options.color || 'pink';

	}

	//把food渲染到地图上
	Food.prototype.render = function(map){
		//删除之前创建的
		remove();
		//随机生成x和y的值
		this.x = Tools.getRandom(0,map.offsetWidth/this.width - 1) * this.width;
		this.y = Tools.getRandom(0,map.offsetHeight/this.height - 1) * this.height;

		//动态创建一个div元素，也就是页面上发food
		var div = document.createElement('div');
		map.appendChild(div);

		//将food对应元素记录在element中
		elements.push(div);

		//设置div的样式
		div.style.position = position;
		div.style.left = this.x +'px';
		div.style.top = this.y + 'px';
		div.style.width = this.width +'px';
		div.style.height = this.height +'px';
		div.style.background = this.color;

	}
	function remove(){
		for(var i = elements.length-1;i >= 0;i--){
			//删除元素（获取元素的父节点，删除当前元素）
			elements[i].parentNode.removeChild(elements[i]);
			//删除数组中元素，第一个元素从那开始删除，第二个元素删除几个元素
			elements.splice(i,1);
		}
	}
	//让food构造函数，在外部可以访问
	window.Food = Food;
})()





//测试
// var map = document.getElementById('map');
// var food = new Food();
// food.render(map);