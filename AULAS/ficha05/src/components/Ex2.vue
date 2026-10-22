<script>
    export default {
        data() {
            return {
                tecnologia: '',
                tipoEvento: '',
                textoBotao: '',
                totalCliques: 0
            }
        },
        methods: {
            apresentarTecnologia(tecnologia, event) {
                this.tecnologia = tecnologia
                this.tipoEvento = event.type
                this.textoBotao = event.currentTarget.textContent
                this.totalCliques++
            }
        }
    };
</script>

<template>
    <button @click="apresentarTecnologia('Vue', $event)">Vue</button>
    <button @click="apresentarTecnologia('JavaScript', $event)">JavaScript</button>
    <button @click="apresentarTecnologia('CSS', $event)">CSS</button>

    <p v-if="tecnologia">Tecnologia: {{ tecnologia }}</p>
    <p v-if="tipoEvento">Tipo de evento: {{ tipoEvento }}</p>
    <p v-if="textoBotao">Texto do botão: {{ textoBotao }}</p>
    <p>Total de cliques: {{ totalCliques }}</p>
</template>

<style scoped>
   
</style>