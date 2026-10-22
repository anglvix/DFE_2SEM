<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Inicio</RouterLink><br><br>
        <RouterLink to="/contatos">Contatos</RouterLink><br><br>
        <RouterLink to="/workshops">Workshops</RouterLink><br><br>
      </nav>
    </div>
  </header>

  <RouterView />
</template>