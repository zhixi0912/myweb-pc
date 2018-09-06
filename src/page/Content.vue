<template>
  <div>
    This is my Content
  </div>
</template>

<script>
    export default {
      created () {
        this.$api.get('topics', null, r => {
          console.log(r)
        })
      }
    }
</script>

<style scoped>

</style>
