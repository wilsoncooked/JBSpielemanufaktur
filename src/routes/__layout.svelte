<script context="module" lang="ts">
  import Nav from '$lib/components/navigation.svelte'
  import MobileNav from '$lib/components/mobileNavigation.svelte'
  import '../app.css'
  import Client from '$lib/utils/client'

  export async function load() {
    const navigationLinks = await Client.getByUID(
      'navigation_links',
      'navigation',
      {}
    )
    return {
      props: {
        navigationLinks
      }
    }
  }
</script>

<script>
  export let navigationLinks
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Nav {navigationLinks} />
<MobileNav {navigationLinks} />

<main class="bg-light-greyish-green font-mono tracking-wide">
  <!-- like React.Children -->
  <slot />
</main>

<footer />

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
