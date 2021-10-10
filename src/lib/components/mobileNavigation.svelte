<script lang="ts">
  import Close from '$lib/svg/close.svelte'
  import Hamburger from '$lib/svg/hamburger.svelte'
  import JBLogo from '$lib/svg/logo.svelte'
  import * as animateScroll from 'svelte-scrollto'
  export let navigationLinks
  const links = navigationLinks?.data.links.map((link) =>
    link.link[0].text.toLowerCase()
  )

  let menuOpen: boolean = false

  const handleMenu = (event) => {
    menuOpen = !menuOpen
  }
</script>

<div class="fixed top-4 right-4 z-10 lg:hidden">
  <button class="w-12 h-12 z-10 " on:click={handleMenu}>
    <Hamburger />
  </button>
</div>

<div
  class={`${
    menuOpen ? 'block' : 'hidden'
  } fixed inset-0 bg-light-greyish-green z-10 lg:hidden`}
  on:click={handleMenu}
>
  <div class="absolute top-4 right-4 z-20">
    <Close />
  </div>
  <!-- <div class="w-8 h-8 mx-auto mt-8">
    <JBLogo />
  </div> -->
  <nav class="h-full">
    <ul
      class="text-5xl text-dark-desaturated-blue flex flex-col items-center h-full justify-center uppercase font-mono font-bold tracking-widest"
    >
      {#each links as link, index}
        <a
          href={index > 0 ? `#${link}` : ' '}
          on:click={() => {
            animateScroll.scrollTo({ element: `#${link}` })
            handleMenu
          }}
          class=" border-transparent border-b-2 hover:border-dark-desaturated-blue pb-0.5 duration-200 hover:font-bold my-10"
          >{link}</a
        >
      {/each}
    </ul>
  </nav>
</div>
