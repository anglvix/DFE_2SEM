<script>
    export default {
        data() {
            return {
                ativo: true,
                tamanho: '200px',
                titulo: 'Imagem do Vue.js'
            }
        }
    };
</script>

<template>
    <img
        v-bind:width="tamanho"
        v-bind:title="titulo"
        v-bind:class="{ ativo: ativo }"
    >
</template>

<style scoped>
    .ativo {
        border: 2px solid #007bff;
    }
</style>