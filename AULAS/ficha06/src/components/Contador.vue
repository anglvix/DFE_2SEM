<template>
  <div class="contador-box">
    <h3>Valor: {{ valor }}</h3>
    <button @click="aumentar">Aumentar</button>
    <button @click="repor">Repor</button>
  </div>
</template>

<script>
export default {
  name: 'Contador',
  data() {
    return {
      valor: 0
    };
  },
  methods: {
    aumentar() {
      this.valor++;
    },
    repor() {
      this.valor = 0;
    }
  }
}
</script>

<style scoped>
.contador-box {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  width: 200px;
}
button {
  margin-right: 5px;
}
</style>