<script>
  const links = ['home', 'about', 'kontakt', 'impressum']
  import * as animateScroll from 'svelte-scrollto'
</script>

<nav class="fixed left-0 right-0 top-0 flex justify-around py-8 px-4">
  {#each links as link, index}
    <a
      href={index > 0 ? `#${link}` : ''}
      on:click={() => animateScroll.scrollTo({ element: `#${link}` })}
      class="uppercase">{link}</a
    >
  {/each}
</nav>
