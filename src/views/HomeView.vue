<template>
  <div class="home">
    <HomeComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/HomeComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HomeComponent
  }
}

</script>

<style>
/* Reset CSS */

/* Reset de margem e padding */
* {
  margin: 0;
  padding: 0;
}

/* Reset de fontes */
body, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
  font-size: 100%;
  font-weight: normal;
  font-style: normal;
}

/* Reset de listas */
ol, ul {
  list-style: none;
}

/* Reset de tabelas */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* Reset de cabeçalhos */
h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
}

/* Reset de links */
a {
  text-decoration: none;
  color: inherit;
}

/* Reset de botões */
button {
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
