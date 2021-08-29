<template>
	<div>
			<button @click="fasong">fasong</button>
			<button @click="demo">demo</button>
	</div>
</template>

<script>
export default {
	
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
				this.$http.get('/demo').then(res =>{
					console.log(res)
					console.log(res.body.data)
				})
			}
		}
}
</script>

<style lang="scss" scoped>

</style>
