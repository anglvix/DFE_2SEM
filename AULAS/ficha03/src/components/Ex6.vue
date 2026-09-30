<script>
    export default {
        data() {
            return {
                autenticado: false,
                admin: true
            }
        } 
    };
</script>

<template>
    <p v-if="autenticado">
        Bem-vindo à área reservada!
    </p>
    <p v-else="autenticado">
        Por favor, faça login.
    </p>

    <p v-if="admin">
        Utilizador administrador
    </p>
    <p v-else="autenticado">
        Utilizador normal
    </p>
</template>

<style scoped>
   
</style>