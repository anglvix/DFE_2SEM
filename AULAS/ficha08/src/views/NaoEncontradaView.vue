<template>
    <div>
        <h1>Página não encontrada</h1>
        <RouterLink :to="{ name: 'inicio' }">
            Voltar ao inicio
        </RouterLink>
    </div>

</template>

<script>
    import { RouterLink } from 'vue-router';
    export default {
        methods: {
            voltar() {
            this.$router.go(-1)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>