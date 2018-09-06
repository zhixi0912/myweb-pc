<template>
  <div>
    <full-page ref="fullpage" :options="options">
      <div class="section">
        <router-view/>
        First section ...
      </div>
      <div class="section">
        <div class="song">
          <p id="f" @click='fade'>hello<i class="fa fa-bath" aria-hidden="true"></i></p>
        </div>
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
      },
      fade:function(){
        //$('#f').addClass('animated bounceOutLeft')
        document.getElementById('f').setAttribute('class','animated')
        document.getElementById('f').setAttribute('class','bounceOutLeft')
      }
    }
  }
</script>
