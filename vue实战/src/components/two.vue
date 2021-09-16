<template>
  <div>
    <h1>父组件</h1>
    <Button type="primary" @click="getData">获取数据</Button>
    <!--1.1、父组件在引用子组件时，通过属性绑定（v-bind：）的形式，把需要传递给子组件的数据，传递到子组件内部，供子组件使用 -->
    <!-- 2.1、父组件向子组件传递方法，使用事件绑定机制 v-on，自定义一个事件属性，传递给子组件 -->
    <child v-bind:fData="data1" :fMessage="data2" @show="showFather"></child>
  </div>
</template>
 
<script>

import child from './subcoms/subtwo.vue'

export default {
  data () {
    return {
      data1: '父组件数据data1',
      data2: '父组件数据data2',
      fromSon1: '',
      fromSon2: ''
    };
  },
  methods: {
    showFather (a, b) {
      this.fromSon1 = a;
      this.fromSon2 = b;
      console.log('触发了父组件的方法' + '======' + a + '======' + b);
    },
    getData () {
      console.log(this.fromSon1);
      console.log(this.fromSon2);
    }
  },
  components:{
    child
  }
}
</script> 
</script>

<style lang="scss" scoped>

</style>