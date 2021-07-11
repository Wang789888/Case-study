// 处理请求路径的分支
// 1、req对象时Clas: http.IncomingMessage的实例对象
// 2、res对象时Class: http.ServerResponse的实例对象

// const http = require('http');

// http.createServer((req,res)=>{
// 	//req.url 可以获取URL中的路径（端口之后部分）
// 	//res.end(req.url);
// 	//startsWith代表以某个字符串开始
// 	if(req.url.startsWith('/index')){
// 		//write向客户端响应内容，可以写多次
// 		res.write('hello');
// 		//end方法用来完成响应，只能执行一次
// 		res.end();
// 	}else if(req.url.startsWith('about')){
// 		res.end('about');
// 	}else{
// 		res.end('no content');
// 	}
// }).listen(3000,()=>{
// 	console.log('running...');
// })
//------------------------------------
// const http = require('http');
// const path = require('path');
// const fs = require('fs');
// //读取文件函数(根据路径读取文件的内容，并且响应到浏览器端)
// let readFile = (pathUrl,res)=>{
// 	fs.readFile(path.join(__dirname,pathUrl),'utf8',(err,failContent)=>{
// 		if(err){
// 			res.end('server error');
// 		}else{
// 			res.end(failContent);
// 		}
// 	});
// }

// http.createServer((req,res)=>{
// 	//处理路径的分发操作
// 	if(req.url.startsWith('/index')){
// 		readFile('index.html',res);
// 	}else if(req.url.startsWith('/about')){
// 		readFile('about.html',res);
// 	}else if(req.url.startsWith('/list')){
// 		readFile('list.html',res);
// 	}else{
// 		//writeHead用来设置响应类型和编码
// 		res.writeHead(200,{
// 			'Cntent-Type':'text/plain; charset=utf8'
// 		})
// 		res.end('页面查找失败');
// 	}
// }).listen(3000,()=>{
// 	console.log('running...');
// })
//以上根据分支查找文件不灵活，应使用url访问页面
//-------------------------------------
const http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer((req,res)=>{
	fs.readFile(path.join(__dirname,req.url),(err,fileContent)=>{
		if(err){
			//没有找到对应的文件
			res.writeHead(404,{
				'Cntent-Type':'text/plain;charset=utf8'
			})
			res.end('页面加载失败');
		}else{
			res.end(failContent);
		}
	});
}).listen(3000,()=>{
	console.log('running...');
})