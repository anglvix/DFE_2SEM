<script>
    export default {
        data() {
            return {
                nome: 'Ana',
                idade: 19,
                cidade: 'Porto',
                curso: 'Tecnologias e Desenvolvimento Web',
            }
        } 
    };
</script>

<template>
  <p>Olá sou a {{ nome }}, tenho {{ idade }} anos e moro na {{ cidade }} e frequento o curso {{ curso }} </p>
</template>

<style scoped></style>