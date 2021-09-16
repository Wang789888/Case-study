<template>
  <div>
    <h1>子组件</h1>
    <p>下面是父组件传过来的数据</p>
    <!-- 1.3、子组件中使用props数组 中定义好的数据 -->
    <p>第一个数据：{{fData}}</p>
    <p>第二个数据：{{fMessage}}</p>
    <!-- 2.2、在子组件中定义一个sonClick方法；
         2.4、调用定义的sonClick方法，就可以触发父组件传递过来的方法了-->
    <Button type="primary" @click="sonClick">触发父组件方法</Button>
  </div>
</template>
 
<script>
export default {
  // 1.2、把父组件传递过来的数据， 在 props数组接收
  props: ['fData', 'fMessage'],
  data () {
    return {
      sonMessage: '子组件数据sonMessage',
      sonData: '子组件数据sonData'
    };
  },
  methods: {
    // 2.3、在方法中，利用  $emit  触发 父组件传递过来的，挂载在当前实例上的事件，还可以传递参数
    sonClick () {
      this.$emit('show', this.sonMessage, this.sonData);
    }
  }
}
</script> 

<style lang="scss" scoped>
.child{
  background-color: aqua;
}
</style>