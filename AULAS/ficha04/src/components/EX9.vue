<script>
    export default {
        data() {
            return {
                alunos: [
                    { nome: "Ana", nota: 15 },
                    { nome: "João", nota: 9 },
                    { nome: "Maria", nota: 17 },
                    { nome: "Pedro", nota: 12 }
            ]
            }
        },
            methods: {
           
        } 
    };
</script>

<template>
    <table border="1">
        <tr>
            <th>Nome</th>
            <th>Nota</th>
        </tr>
        <tr v-for="aluno in alunos" :key="aluno.nome">
            <td>{{ aluno.nome }}</td>
            <td>{{ aluno.nota }}</td>
        </tr>
    </table>
</template>

<style scoped>
   
</style>