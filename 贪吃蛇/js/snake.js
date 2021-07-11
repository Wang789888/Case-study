(function(){
	var position = 'absolute';
	var elements = [];
	function Snake(options){
		options = options ||{};
		this.width = options.width || 20;
		this.height = options.height || 20;
		//蛇节移动的方向
		this.direction = options.direction ||'right';
		//蛇节的身体（第一个元素是蛇头）
		this.snakeBody = [
			{x: 3, y: 2,color: 'red'},
			{x: 2, y: 2,color: 'blue'},
			{x: 1, y: 2,color: 'blue'}
		];
	}

	Snake.prototype.render = function(map){
		//删除之前创建的蛇节
		remove();

		//把每个蛇节渲染到地图上
		for(var i = 0,len = this.snakeBody.length;i < len ; i++){
			var snakeBody = this.snakeBody[i];

			var div = document.createElement('div');
			map.appendChild(div);

			//记录当前蛇节
			elements.push(div);
			//console.log(map.appendChild(div))
			div.style.position = position;
			div.style.width = this.width + 'px';
			div.style.height = this.height + 'px';

			div.style.left = snakeBody.x * this.width + 'px';
			div.style.top = snakeBody.y * this.height + 'px';

			div.style.background = snakeBody.color;

		}
	}
	Snake.prototype.move = function(food,map){
		//控制蛇的身体移动（当前蛇节 到 上一个蛇节的位置）
		for (var i = this.snakeBody.length - 1;i > 0;i--){
			this.snakeBody[i].x = this.snakeBody[i - 1].x;
			this.snakeBody[i].y = this.snakeBody[i - 1].y;
		}
		//控制蛇头部的移动的方向
		var head = this.snakeBody[0];
		switch(this.direction){
			case'right':
				head.x += 1;
				break;
			case'left':
				head.x -= 1;
				break;
			case'top':
				head.y -= 1;
				break;
			case'bottom':
				head.y += 1;
				break;

		}
		//判断蛇头的坐标是否与食物的坐标重合
		var headX = head.x * this.width;
		var headY = head.y * this.height;
		if (headX === food.x && headY === food.y){
			//获取蛇的最后一节
			var last = this.snakeBody[this.snakeBody.length - 1];
			//创建最后一节，并将其放入snakeBody中，实现让蛇增加一节的效果
			this.snakeBody.push({
				x: last.x,
				y: last.y,
				color: last.color
			})
			
			//随机在地图上重新生成食物
			food.render(map);
	}
	}

	function remove(){
		for(var i = elements.length-1;i >= 0;i--){
			//删除div
			elements[i].parentNode.removeChild(elements[i]);
			//splice删除数组中元素，第一个元素从那开始删除，第二个元素删除几个元素
			elements.splice(i,1);
		}

	}

	

	window.Snake = Snake;

})()

//测试
// var map = document.getElementById('map');
// var snake = new	Snake();
// snake.render(map);