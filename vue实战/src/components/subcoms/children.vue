<template>
  <div class="child">
    <h3>子页面</h3>
    <p>接受父组件传递过来的值----{{submsg}}</p>
  </div>
</template>

<script>
export default {
  // 通过props(此参数不可变)接收
  props:['submsg'],
  data() {
    return {
      flag:true
    }
  },

  // watch:{//非常重要，不然为空
  //   submsg(newVal,oldVal){
  //     this.submsg = newVal
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.child{
  background-color: plum;
}
</style>