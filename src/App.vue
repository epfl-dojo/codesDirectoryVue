<template>
  <div id="app">
    <img src="./assets/logo.png">
    <directory :codes="codes"></directory>
  </div>
</template>

<script>
import Directory from './components/Directory'
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {codes: []}
  },
  mounted () {
    let that = this
    axios.get('/api')
    .then(function (response) {
      console.log(response)
      that.codes = response.data.codes
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  components: {
    Directory
  }
}
</script>

<style>
</style>
