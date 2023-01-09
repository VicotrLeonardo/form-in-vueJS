<template>
  <div class="d-flex align-itens-center justify-content-center">
    <form @submit.prevent="onSubmit" class="form">
      <template v-for="field in fields" v-bind:key="field.id" >
       <div class="row mb-2">
        <div class="col-sm-12" style="text-align:left">
          <label v-if="field.label">{{ field.label }}:</label>
          <input
            v-bind:type="field.type"
            v-bind:name="field.name"
            v-bind:required="field.required"
            class="form-control"
            v-model="field.value"
          />
        </div>
       </div>
      </template>
      <button id="btn-salvar" type="submit" class="btn btn-primary">Salvar</button>
    </form>
  </div>
</template>

<script>

import axios from "axios"

export default {
  name: 'FormComponent',
  data() {
    return {
      fields: [],
    };
  },
  methods: {
  async onSubmit() {
    const data = this.fields.reduce((data, fields) => {
        data[fields.name] = fields.value;
        return data;
      }, {});

      try {
        // const response = await axios.post('http://localhost:3000/form-config', data);
      } catch (error) {
        console.error(error);
      }
    }
  },
  async created() {
    const campos = await axios.get("http://localhost:3000/form-config");
    const dados = {data: [], campos: campos.data}
    await axios.put("http://localhost:3000/data-formulario", dados);
    this.fields = campos.data;
  },
};
</script>

<style scoped>
#btn-salvar{
  margin-top:20px;
}
</style>
