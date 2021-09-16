<template>
  <div>
    <h3>父组件</h3>
      <!-- 父传子父组件通过属性进行传值,父组件的数据绑定到submsg里面。-->
      <child :submsg = "info"></child>
  </div>
</template>

<script>
import child from './subcoms/children.vue'

export default {
  data() {
    return {
      info:'父组件的数据向子组件传递'
    }
  },
  components:{
    child
  }
}
</script>

<style lang="scss" scoped>

</style>