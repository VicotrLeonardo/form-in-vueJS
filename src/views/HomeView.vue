<template>
  <div class="home">
    <HelloWorld msg="Primeiro Form com Vue.js App"/>
    <FormComponent />
  </div>
</template>

<script>

  import FormComponent from '@/components/FormComponent.vue';
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'HomeView',
    components: {
      HelloWorld,
      FormComponent
  }
  }
</script>
