<script>
    export default {
        data() {
            return {
                message: 'Olá, Vue!',
            }
        },
        beforeCreate() {
            console.log('beforeCreate:', this.message)
        },
        created() {
            console.log('created:', this.message)
            const elemento = document.querySelector('#mensagem')
            console.log('elemento:', elemento)
        },
        beforeMount() {
            console.log('beforeMount:', this.message)
        },
        mounted() {
            console.log('mounted:', this.message)
            const elemento = document.querySelector('#mensagem')
            console.log('elemento:', elemento)
        },
        beforeUpdate() {
            console.log('beforeUpdate:')
        },
        updated() {
            console.log('updated:', this.message)

        },
    };
</script>

<template>
  <p id="mensagem">{{ message }}</p> 
</template>

<style scoped></style>