<script module="context" lang="ts">
  import * as animateScroll from 'svelte-scrollto'
  export let navigationLinks
  import JBLogo from '$lib/svg/logo.svelte'
  const links = navigationLinks?.data.links.map((link) =>
    link.link[0].text.toLowerCase()
  )

  let smallerNav = false
  const handleScroll = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      smallerNav = true
    } else {
      smallerNav = false
    }
  }
</script>

<svelte:window on:scroll={handleScroll} />

<nav
  class={`fixed left-0 right-0 top-0 grid grid-cols-5 ${
    smallerNav ? 'duration-200	py-2' : 'duration-200	py-8'
  }  px-4 z-10 bg-light-greyish-green font-mono font-medium text-dark-desaturated-blue text-2xl uppercase tracking-wider`}
  id="navbar"
>
  {#if navigationLinks}
    <div class="col-span-2 flex justify-around w-full mt-4">
      {#each links as link, index}
        {#if index < 2}
          <div>
            <a
              href={index > 0 ? `#${link}` : ''}
              on:click={() => animateScroll.scrollTo({ element: `#${link}` })}
              class=" border-transparent border-b-2 hover:border-dark-desaturated-blue pb-0.5 duration-200 hover:font-bold"
              >{link}</a
            >
          </div>
        {/if}
      {/each}
    </div>
    <div class=" flex justify-center">
      <div
        class={`${
          smallerNav ? 'duration-200	w-12 h-12' : 'duration-200	w-20 h-20'
        } `}
      >
        <JBLogo />
      </div>
    </div>
    <div class="col-span-2 flex justify-around w-full mt-4 ">
      {#each links as link, index}
        {#if index >= 2}
          <div>
            <a
              href={index > 0 ? `#${link}` : ''}
              on:click={() => animateScroll.scrollTo({ element: `#${link}` })}
              class="border-transparent border-b-2 hover:border-dark-desaturated-blue pb-0.5 duration-200 hover:font-bold"
              >{link}</a
            >
          </div>
        {/if}
      {/each}
    </div>
  {/if}
</nav>
