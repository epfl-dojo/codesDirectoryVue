<template>
<div>
  <h1>Directory!</h1>
  <div class="directory">
    <code-item :code="code" class="codeItem" v-for="code in codes">{{code.repoUri}}</code-item>
  </div>
</div>
</template>

<script>
  import CodeItem from './CodeItem'
  export default {
    props: ['codes'],
    components: {
      CodeItem
    }
  }
</script>