<script>
    export default {
        data() {
            return {
                mensagem: '<strong>Bem-vindo ao Vue.js!</strong>'
            }
        } 

    };
</script>

<template>
    <p>{{ mensagem }}</p>
    <p v-html="mensagem"></p>
</template>

<style scoped></style>