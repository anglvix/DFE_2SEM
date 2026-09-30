<script>
    export default {
        data() {
            return {
                imagem: 'https://picsum.photos/300/200',
                textoAlternativo: 'Uma imagem aleatória',
                url: 'https://vuejs.org'
            }
        } 
    };
</script>

<template>
    <img v-bind:src="imagem" v-bind:alt="textoAlternativo">
    <br>
    <a v-bind:href="url">Vue.js</a> 
</template>

<style scoped></style>