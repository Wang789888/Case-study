<template>
	<div>
			<button @click="fasong">fasong</button>
			<button @click="demo">demo</button>
			<!--第二种 mock 的实现方法 -->
      <button v-on:click="getUser()" >获取用户信息</button>
      <button  @click="getMenu()" >获取菜单信息</button>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	 metaInfo: {
      title: 'This is the test',  
    },
		data() {
			return {
				
			}
		},
  created() {
    this.demo();
  },
	methods:{
			fasong(){
				this.$http.get('/msg1').then(result => {
					console.log(result)
				})
			},
			demo(){
				// console.log('ok')
				axios.get('/demo').then(res =>{
					console.log(res)
					// console.log(res.body.data)
				})
			},
			getUser(){
				
			}
		}
}
</script>

<style lang="scss" scoped>

</style>
