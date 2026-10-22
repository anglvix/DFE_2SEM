<template>
  <div>
    <h2>Exercício 1 - Contadores Independentes</h2>
    <Contador />
    <Contador />
    <Contador />
  </div>
</template>

<script>
// Importar o componente filho
import Contador from './Contador.vue';

export default {
  name: 'Ex1',
  components: {
    Contador
  }
}
</script>