<script context="module" lang="ts">
  export const prerender = true
  export const ssr = true
  import Client from '$lib/utils/client'

  export async function load() {
    const contentHome = await Client.getByUID('home', 'home', {})
    const contentAbout = await Client.getByUID('about', 'about', {})
    const contentKontakt = await Client.getByUID('kontakt', 'kontakt', {})
    const contentImpressum = await Client.getByUID('impressum', 'impressum', {})

    return {
      props: { contentHome, contentAbout, contentKontakt, contentImpressum },
      status: 302,
      redirect: '/coming-soon'
    }
  }
</script>

<script>
  import Home from '$lib/home.svelte'
  import Impressum from '$lib/impressum.svelte'
  import Kontakt from '$lib/kontakt.svelte'
  import About from '$lib/about.svelte'
  export let contentHome
  export let contentAbout
  export let contentKontakt
  export let contentImpressum
</script>

<svelte:head>
  <title>JB Spielemanufaktur</title>
</svelte:head>

<main>
  <Home {contentHome} />
  <About {contentAbout} />
  <Kontakt {contentKontakt} />
  <Impressum {contentImpressum} />
</main>
