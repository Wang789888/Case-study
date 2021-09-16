import Mock from 'mockjs'
// Mock.Random 是一个工具类，用于生成各种随机数据
const Random = Mock.Random;

function getData(){
  let datalist= [];
  for (let i = 0; i < 3; i++) {
    let newData = {
      url: Random.url(),
      img: Random.image('200x100', '#FF6600'),
      date: Random.date() + ' ' + Random.time() 
    }
    datalist.push(newData)
  }
  return {
    data: datalist
  }
}
const data = Mock.mock('/demo','get',getData)
export default {data};