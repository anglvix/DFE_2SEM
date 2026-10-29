<template>
    <div>
        <h1>Página não encontrada</h1>
    </div>

    <p>
        <button @click=voltar>
            Voltar
        </button>
    </p>

</template>

<script>
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