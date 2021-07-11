//封装的静态服务功能（服务器功能）

const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');

//(req,res,root)代表request对象，response对象，静态资源根路径
exports.staticServer = (req,res,root)=>{
	fs.readFile(path.join(__dirname,req.url),(err,fileContent)=>{
		if(err){
			//没有找到对应文件
			res.writeHead(404,{
				'Cntent-Type':'text/plain;charset=utf8'
			});
			res.end("页面加载失败");
		}else{
			//默认类型text/html
			let dtype = 'text/html';
			//获取请求文件的后缀
			let ext = path.extname(req.url);
			//如果请求的文件后缀合理，就获取到标准的相应格式
			if(mime[ext]){
				dtype = mime[ext];
			}
			//如果响应的内容是文本，就设置成Utf8编码
			if(dtype.startsWith('text')){
				dtype +='; charset=utf8'
			}
			//设置响应头信息
			res.writeHead(200,{
				'Cntent-Type':dtype
			});

			res.end(fileContent);
		}
	});
}