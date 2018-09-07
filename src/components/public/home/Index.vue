<template>
  <div>
    <full-page ref="fullpage" :options="options">
      <div class="section">
        First section ...
      </div>
      <div class="section">
        Second section ...
      </div>
    </full-page>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          afterLoad: this.afterLoad,
        }
      }
    },

    methods: {
      afterLoad() {
        console.log("Emitted 'after load' event.");
      }
    }
  }
</script>
