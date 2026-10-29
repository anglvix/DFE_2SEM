<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Inicio</RouterLink> /
        <RouterLink to="/registo">Registo</RouterLink> /
        <RouterLink to="/login">Login</RouterLink> /
        <RouterLink to="/catalogo">Catalogo</RouterLink> /
        <RouterLink to="/detalhe">Detalhe</RouterLink> /
        <RouterLink to="/admin">Admin</RouterLink> /
      </nav>
    </div>
  </header>

  <RouterView />
</template>