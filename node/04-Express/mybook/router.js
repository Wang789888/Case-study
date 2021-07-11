//路由模块

//加载express模块
const express = require('express');
const router = express.Router();
const service = require('./service.js');


//在router上绑定具体的路由(业务模块)
router.get('/',service.showIndex);

//添加图书(跳转到图书的页面)
router.get('/toAddBook',service.toAddBook);
//添加图书（提交表单）
router.post('/addBook',service.addBook);

//编辑图书，跳转到编辑页面
router.get('/toEditBook',service.toEditBook);
//编辑图书提交表单
router.post('/editBook',service.editBook);

//导出路由
module.exports = router;