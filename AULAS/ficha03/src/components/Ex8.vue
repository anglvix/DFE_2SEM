<script>
    export default {
        data() {
                return {
                }
        },
            methods: {
                enviar() {
                console.log('Formulário enviado!')
            }
        } 

    };
</script>

<template>
    <form v-on:submit.prevent="enviar">
        <input type="text">
        <button type="submit">Enviar</button>
    </form>
</template>

<style scoped>
   
</style>