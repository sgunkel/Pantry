<script setup>

</script>

<template>
  <h3>Pantry application :: individual components and views</h3>
  <nav>
    <RouterLink to="/addEditItem">Component that adds or edits an item</RouterLink>
    <RouterLink to="/inventory">Component that shows all inventory and history</RouterLink>
  </nav>
</template>

<style>
h3 {
  color: var(--color-white-mute);
}

nav {
  display: flex;
  flex-direction: column;
}
</style>
