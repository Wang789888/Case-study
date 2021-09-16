import Mock from 'mockjs'

const Random = Mock.Random;

var oneLists = Mock.mock('/api/getdataone',{
   'message|10' : [{
     // 属性 id 是一个自增数，起始值为 1，每次增 1
     'id|+1': 1,
     'title': _=>Random.ctitle(5, 10),  
     'date': '@date("yyyy-MM-dd")',
     'zhaiyao': '@paragraph(1, 3)',
     'click': 1,
     'image_url':_=>Random.dataImage('200x100', 'Hello Mock.js!'),
     'content':_=>Random.ctitle(2, 10), 
   }]
})
var twolist = Mock.mock('/api/getdatatwo',{
  'message|10' : [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'title': _=>Random.ctitle(5, 10),  
    'add_time': '@now',
    'zhaiyao': '@cparagraph(1, 3)',
    'click':1,
    'img': "@image('200x100', '#4A7BF7', 'Hello')",
    'sell_price|50-100':10,
    'market_price|100-200':10,
    'stock_quantity|100-200': 10,
    'content':'@ctitle(5)',
    'goods_no':'@natural(1000)',
  }]
})

export default {oneLists,twolist};