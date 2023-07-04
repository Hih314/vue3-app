<template>
  <login></login>
</template>

<script setup> 
  import login from './components/login.vue'
  import { onMounted } from 'vue'
 
onMounted(() => {
  document.body.style.setProperty('--el-color-primary', '#3473e6');
  document.body.style.setProperty('--el-color-primary-light-9', '#3473e6');
  document.body.style.setProperty('--el-color-primary-light-3', '#3473e6');
})
</script>

<style scoped>

</style>