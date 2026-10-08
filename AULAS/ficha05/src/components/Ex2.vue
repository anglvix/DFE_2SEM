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
                incrementar5() {
                this.contador += 5 
            },
                decrementar5() {
                this.contador -= 5 
            },
                },
    };
</script>

<template>
    <p>Contador: {{ contador }}</p> 
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
    <button @click="reset">Reset</button>
    <button @click="incrementar5">Incrementar 5</button>
    <button @click="decrementar5">Decrementar 5</button>
</template>

<style scoped>
   
</style>