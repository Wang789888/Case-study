(function(){
	var that;  //用来记录游戏对象
	function Game(map){
		this.food = new Food();
		this.snake = new Snake();
		this.map = map;
		that = this;
	}
	Game.prototype.start = function(){
		//把蛇和食物对象，渲染到地图上
		this.food.render(this.map);
		this.snake.render(this.map);

		//开始蛇移动的逻辑
		//让蛇移动起来
		//当蛇遇到边界游戏结束
		runSnake();
		//通过键盘控制蛇移动的方向
		bindKey();
		//当蛇遇到食物，做出相应的处理
		
		
	}
	//通过键盘控制蛇移动的方向
	function bindKey(){
		document.addEventListener('keydown',function(e){
			//通过点击获取上下左右键的keyCode值
			 console.log(e.keyCode);
			//left--37; right--39;top--38;bottom--40
			switch(e.keyCode){
				case 37:
					that.snake.direction = 'left';
					break;
				case 38:
					that.snake.direction = 'top';
					break;
				case 39:
					that.snake.direction = 'right';
					break;
				case 40:
					that.snake.direction = 'bottom';
					break;	
			}


		},false);
	}


	//私有函数 控制蛇移动
	function runSnake(){
		var timerId = setInterval(function(){
			//定时器的function中this是指向window对象的，因此要在所指向函数中定义
			//this.snake.move();
			//要获取游戏对象中的蛇属性
			that.snake.move(that.food,that.map);
			that.snake.render(that.map);

			//当蛇遇到边界游戏结束（获取蛇头坐标，并判断）
			var maxX = that.map.offsetWidth / that.snake.width;
			var maxY = that.map.offsetHeight / that.snake.height;
			var headX = that.snake.snakeBody[0].x;
			var headY = that.snake.snakeBody[0].y;
			if(headX < 0 || headX >= maxX){
				alert('游戏结束');
				//清除定时器
				clearInterval(timerId);
			}
			if(headY < 0 || headY >= maxY){
				alert('游戏结束');
				//清除定时器
				clearInterval(timerId);
			}



		},150);
	}

	window.Game = Game;
})()


//测试
// var map = document.getElementById('map');
// var game = new Game(map);
// game.start();