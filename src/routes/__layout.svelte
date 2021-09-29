<script lang="ts">
  import Nav from '$lib/nav.svelte'
  import '../app.css'
</script>

<Nav />

<main class="bg-blue-100">
  <!-- like React.Children -->
  <slot />
</main>

<footer />

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
