<template>
    <div>
        <button @click="login">Entrar</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                autenticado: false
            }
        },
        methods: {
            login() {
                sessionStorage.setItem('autenticado', true);
                this.$router.push({ name: 'inscricao' });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>