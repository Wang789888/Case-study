//应用中间件
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
//挂载内置中间件
app.use(express.static());


//挂载参数处理中间件（post）
app.use(bodyParser.urlencoded({extended:false}));
//处理json格式的参数
app.use(bodyParser.json());


//处理get提交的参数
app.get('/login',(req,res)=>{
	let data = req.query;
	
	res.send('get data');
});


//处理post提交的参数
app.post('/login',(req,res)=>{
	//如何得到数据呢？    data为表单传递过来的数据
	let data = req.body;
	// console.log(data);
	if(data.username == 'admin' && data.password == '123'){
		res.send('post success');
	}else{
		res.send('post failure');
	}
	res.send('ok');
});

app.put('/login',(req,res)=>{
	res.end('put data');
})

app.delete('/login',(req,res)=>{
	res.end('delete data');
})


app.listen(3000,()=>{
	console.log('running...');
})