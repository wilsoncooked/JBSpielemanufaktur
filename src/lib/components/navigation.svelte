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

<div class="fixed left-0 right-0 top-0 flex justify-center px-8 z-50">
  <nav
    class={` grid grid-cols-3 max-w-screen-xl w-full ${
      smallerNav ? 'duration-200	py-2' : 'duration-200	py-8'
    } z-10 bg-light-greyish-green font-mono font-medium text-dark-desaturated-blue text-2xl uppercase tracking-wider`}
    id="navbar"
  >
    {#if navigationLinks}
      <div class=" flex justify-between w-full mt-4 pr-8">
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
        <a
          class={`${
            smallerNav ? 'duration-200	w-12 h-12' : 'duration-200	w-20 h-20'
          } `}
          href=""
        >
          <JBLogo />
        </a>
      </div>
      <div class=" flex justify-between w-full mt-4 pl-8">
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
</div>
