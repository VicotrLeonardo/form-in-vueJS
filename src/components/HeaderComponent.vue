<template>
    <div id="header" class="bg-primary text-white text-center py-2">
      <h1 class="display-6">{{ titulo }}</h1>
    </div>
  </template>
  
  <script>
    export default {
      name: "HeaderComponent",
      props: {
        title: {
          type: String,
          required: false
        }
      },
      data() {
        return {
          titulo: this.title
        };
      }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>