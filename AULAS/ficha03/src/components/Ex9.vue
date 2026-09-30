<script>
export default {
    data() {
        return {
    
        }
    },
    methods: {
        enviar(texto = this.mensagem) {
            console.log(texto)
        }
    }
}
</script>

<template>
    <main>
        <h1>Modificadores de eventos</h1>

        <section>
            <h2>.once</h2>
            <button v-on:click.once="enviar('O botão .once foi clicado')">
                Clicar uma vez
            </button>
        </section>

        <section>
            <h2>.stop</h2>
            <div class="area" v-on:click="enviar('O elemento exterior foi clicado')">
                <button v-on:click.stop="enviar('O botão interior foi clicado')">
                    Clicar com stop
                </button>
            </div>
        </section>

        <section>
            <h2>.self</h2>
            <div class="area" v-on:click.self="enviar('O elemento .self foi clicado')">
                <button v-on:click="enviar('O botão dentro de .self foi clicado')">
                    Clicar no elemento ou no botão
                </button>
            </div>
        </section>

        <section>
            <h2>.capture</h2>
            <div class="area" v-on:click.capture="enviar('O elemento .capture foi executado primeiro')">
                <button v-on:click="enviar('O botão dentro de .capture foi executado depois')">
                    Clicar para observar a ordem
                </button>
            </div>
        </section>
    </main>
</template>

<style scoped>

</style>