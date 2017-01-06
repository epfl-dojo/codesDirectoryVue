<template>
<div>
  <h1>Directory!</h1>
  <ul class="directory">
    <li class="codeItem" v-for="code in codes">{{code.repoUri}}</li>
  </ul>
</div>
</template>

<script>
  export default {
    props: ['codes']
  }
</script>