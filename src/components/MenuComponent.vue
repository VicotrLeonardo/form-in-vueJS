<template>
  <div class="d-flex align-itens-center justify-content-center">
    <FormComponent :fields="this.fields" />
  </div>
</template>

<script>

import FormComponent from "./FormComponent.vue";
import {axiosInstance} from '../main'

export default {
    name: "MenuComponent",
    components: {
      FormComponent
    },
    data() {
        return {  
            fields: [],
        };
    },
    async created() {
        let { data:arquivo_de_configuracao } = await                axiosInstance.get(`/formConfig`);

        this.fields = arquivo_de_configuracao;
    },
};
</script>