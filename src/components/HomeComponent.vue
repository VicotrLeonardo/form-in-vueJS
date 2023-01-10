<template>
      <HeaderComponent title="Formulário Dinâmico" />
    <div class="menu-home mt-2">
      <MenuComponent />
    </div>
</template>
  
  <script>
import MenuComponent from './MenuComponent.vue';
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
      MenuComponent }
}
  </script>
  

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

