<template>
  <div>
    <h2>Workshops</h2>
    <ul>
      <li v-for="workshop in workshops" :key="workshop.id">
        <RouterLink :to="`/workshops/${workshop.id}`">
          {{ workshop.titulo }} - {{ workshop.vagas }} vagas
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import workshops from '../data/workshops'

export default {
  data() {
    return {
      workshops
    }
  }
}
</script>