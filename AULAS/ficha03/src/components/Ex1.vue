<script>
    export default {
        data() {
            return {
                nome: 'Ana',
                curso: 'Tecnologias e Desenvolvimento Web',
                ano: 1
            }
        } 
    };
</script>

<template>
  <p>Nome: {{ nome }} <br> Curso: {{ curso }} <br> Ano: {{ ano }}</p>
</template>

<style scoped></style>