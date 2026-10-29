<template>
    <div>
        <div v-if="workshop">
            <h2>{{ workshop.titulo }}</h2>
            <p>Vagas: {{ workshop.vagas }}</p>
        </div>

        <div v-else>
            <p>Workshop não encontrado</p>
        </div>

        <p>
            <button @click=voltar>
                Voltar
            </button>
        </p>

        <hr/>

        <RouterLink to="/workshops/1">
        Introdução ao Vue
        </RouterLink>

        <br/>

        <RouterLink to="/workshops/2">
        Vue Router
        </RouterLink>
    </div>
</template>

<script>
    import workshops from '../data/workshops'

    export default {
        computed: {
            workshop() {
            const id = Number(this.$route.params.id)

            return workshops.find((workshop) => workshop.id === id)
            }
        },

        watch: {
            '$route.params.id'(newId) {
            console.log('Novo ID:', newId)
            }
        },
        methods: {
            voltar() {
            this.$router.go(-1)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>