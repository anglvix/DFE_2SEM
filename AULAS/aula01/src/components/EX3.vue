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
  <p><b>Nome:</b> {{ nome }}</p>
  <p><b>Curso:</b> {{ curso }}</p>
  <p><b>Ano:</b> {{ ano }}</p>
</template>

<style scoped></style>