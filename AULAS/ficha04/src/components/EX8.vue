<script>
    export default {
        data() {
            return {
                produtos: [
                    { nome: "Teclado", preco: 35 },
                    { nome: "Rato", preco: 20 },
                    { nome: "Monitor", preco: 180 },
                    { nome: "Webcam", preco: 55 }
                ] 
            }
        },
            methods: {
           
        } 
    };
</script>

<template>
    <p v-for="produto in produtos" :key="produto.nome">
        {{ produto.nome }} - {{ produto.preco }}€
    </p>
</template>

<style scoped>
   
</style>