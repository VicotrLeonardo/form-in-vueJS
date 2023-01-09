<template>
      <HeaderComponent title="Formulário Dinâmico" />
    <div class="menu-home mt-2">
      <FormComponent />
    </div>
</template>
  
  <script>
import FormComponent from './FormComponent.vue';
import HeaderComponent from './HeaderComponent.vue';

  export default {
    name: "HomeComponent",
    props: {
      //Propriedades do componente
    },
    data() {
        return {
          //
        };
    },
    components: { 
      HeaderComponent,
      FormComponent }
}
  </script>
  

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

