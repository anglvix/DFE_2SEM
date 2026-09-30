<script>
    export default {
        data() {
                return {
                contador: 0
            }
        },
            methods: {
                incrementar() {
                this.contador++
            },
                decrementar() {
                this.contador--
            },
                reset() {
                this.contador = 0
            },
        } 
    };
</script>

<template>
    <p>Contador: {{ contador }}</p> 
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
    <button @click="reset">Reset</button>
</template>

<style scoped>
   
</style>