<script>
    export default {
        data() {
            return {
                nome: 'Ricardo',
                idade: 20,
                preco: 25,
                quantidade: 3
            }
        }
    };
</script>

<template>
  <p>Nome: {{ nome }}</p>
  <p>Idade: {{ idade }}</p>
  <p>Idade daqui a 5 anos: {{ idade + 5}}</p>
  <p>Preço * Quantidade: {{ preco }} x {{ quantidade }} = {{ preco * quantidade }}</p>
    <p>Preço * Quantidade (2 Casas Decimais): {{ preco }} x {{ quantidade }} = {{ (preco * quantidade).toFixed(2) }}</p>
  <p>Nome: {{ nome.toUpperCase() }}</p>
  <br>
  <p>{{ nome + ' tem ' + idade + ' anos e daqui a 5 anos terá ' + (idade + 5) + ' anos.' }}</p>
</template>

<style scoped></style>