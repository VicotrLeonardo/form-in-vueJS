<template>
    <div>
      <form>
        <template v-for="field in fields">
          <label v-if="field.label">{{ field.label }}</label>
          <input v-if="field.type === 'text'" v-bind:type="field.type" v-bind:name="field.name" v-bind:required="field.required" />
          <input v-if="field.type === 'number'" v-bind:type="field.type" v-bind:name="field.name" v-bind:required="field.required" />
        </template>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import axios from 'axios';
  
  export default {
    data() {
      return {
        fields: []
      };
    },
    async created() {
      const config = await axios.get('/form-config.json');
      this.fields = config.data;
    }
  };
  </script>