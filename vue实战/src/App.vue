<template>
  <div>
    <router-link to="/index">
      <el-button>父组件1</el-button>
    </router-link>
    <router-link to="/children">
      <el-button type="primary">子组件1</el-button>
    </router-link>
    <router-link to="/two">
      <el-button >父组件2</el-button>
    </router-link>
    <router-link to="/twochildren">
      <el-button type="primary">子组件2</el-button>
    </router-link>
    

    <router-view>
      
    </router-view>
  </div>
</template>

<script>

</script>


<style>

</style>
