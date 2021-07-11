//模板引擎

let template = require('art-template');

let html = template(__dirname + '/score.art',{
	chinese:'128',
	math:'122',
	english:'100',
	summary:'200'
});
console.log(html);