<script context="module" lang="ts">
  export const prerender = true
</script>

<script lang="ts">
  import Home from '$lib/home.svelte'
  import Impressum from '$lib/impressum.svelte'
  import Kontakt from '$lib/kontakt.svelte'
  import About from '$lib/about.svelte'
</script>

<svelte:head>
  <title>JB Spielemanufaktur</title>
</svelte:head>

<Home />
<About />
<Kontakt />
<Impressum />
