<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script type="text/javascript">
  import insuranceform from './components/form.vue';
  import accept from './components/accept.vue';

  export default {
    name: 'App',
    props: {
      },
    data () {
      return {
      }
    },
    components: {
      accept,
      insuranceform,
    },
      mounted:function(){

      },
    }

</script>
<style scoped>
  /* Add scoped styles */

</style>
