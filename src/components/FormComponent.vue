<template>
  <form @submit.prevent="onSubmit" class="form" v-if="fields.length">
    <template v-for="field in fields" :key="field.name" >
      <div class="row mb-2">
        <div class="col-sm-12" style="text-align:left">
          <label v-if="field.field">{{ field.field }}:</label>
          <label v-else>{{ field.name }}:</label>
          <input
            :type="field.type"
            :name="field.fieldName"
            :required="field.required"
            class="form-control"
            v-model="field.value"
          />
        </div>
      </div>
    </template>
    <button id="btn-salvar" type="submit" class="btn btn-primary" :disabled="isLoading">
      Salvar
    </button>
    <div>
      <template v-if="isLoading">
        <div class="spinner-border text-primary" role="status"></div>
      </template>
    </div>
  </form>
  <h3 v-else>
    Arquivo de configuração Vázio
  </h3>
</template>

<script>
import {axiosInstance} from '../main.js'

export default {
  name: 'FormComponent',
  data() {
    return {
      isLoading: false,
    }
  },
  props: { 
    fields: {
      type: Array,
      required: true
    }
  },
  methods: {
    async onSubmit() {
      this.isLoading = true;
      try {
        const data = this.fields.reduce((data, fields) => {
          data[fields.name] = fields.value;
          return data;
        }, {});
        await axiosInstance.post(`/formConfig`, data);
        alert('Dados salvos com sucesso!');
      } catch (error) {
        alert('Não foi possível salvar os dados, ERRO: ', error)
      } finally {
        this.isLoading = false;
      }
    },
  }
}
</script>

<style scoped>
#btn-salvar{
  margin-top:20px;
}
</style>
