// 动态网站开发


//引入模块
const http = require('http');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');
const scoreData = require('./scores.json');

//创建服务器
http.createServer((req,res)=>{
	//路由（请求路径+请求方式）
	//查询成绩入口地址 /query
	if(req.url.startsWith('/query' && req.method == 'GET')){
		//读取文件
		fs.readFile(path.join(__dirname,'index.html'),'utf8',(err,content)=>{
			if(err){
				//指定响应类型
				res.writeHead(500,{
					'Cntent-Type':'text/plain;charset=utf8'
				})
				res.end('服务器错误');
			}
			res.end(content);
		});
	}else if(req.url.startsWith('./score') && req.method =='GET'){  //获取成绩的结果 /score
		//获取提交过来的参数
		let pdata = '';
		//绑定事件
		req.on('data',(chunk)=>{
			//拼接数据
			pdata += chunk;
		});
		req.on('end',()=>{
			//字符串转成对象
			let obj = querystring.parse(pdata);
			//根据考号得到成绩
			let result = scoreData[obj.code];
			//读取文件
			fs.readFile(path.join(__dirname,'result.html'),'utf8',(err,content)=>{
				if (err) {
					res.writeHead(500,{
						'Cntent-Type':'text/plain;charset=utf8'
					});
					res.end('服务器错误');
				}
				//返回内容之前要进行数据渲染（实际上为字符串替换）
				content = content.replace('$$chinese$$',result.chinese);
				content = content.replace('$$math$$',result.math);
				content = content.replace('$$english$$',result.english);
				content = content.replace('$$summary$$',result.summary);

				res.end(content);
			});
		});
		
	}
	
	
}).listen(3000,()=>{
	console.log('running...')
});