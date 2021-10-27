<script lang="ts">
  import { onMount } from 'svelte'
  import * as animateScroll from 'svelte-scrollto'
  export let navigationLinks
  import JBLogo from '$lib/svg/logo.svelte'
  const links = navigationLinks?.data.links.map(link => link.link[0].text.toLowerCase())
  

  let smallerNav = false
  let pageLoaded = false

  onMount(() => {
    (smallerNav = document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ? true : false)
    pageLoaded = true
  })

  const handleScroll = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      smallerNav = true
    } else {
      smallerNav = false
    }
  }
</script>

<svelte:window on:scroll={handleScroll} />

<div class={`hidden md:block fixed left-0 right-0 top-0 lg:flex justify-center px-8 z-40`}>
  <nav
    class={` grid grid-cols-5 lg:grid-cols-3 max-w-screen-xl w-full ${
      smallerNav ? 'duration-100 py-4 ' : 'duration-100 py-4'
    } z-20 text-2xl bg-gradient-to-b font-mono  text-dark-desaturated-blue  uppercase tracking-wider relative`}
    id="navbar"
  >
    <div class={`absolute left-0 right-0 top-0 ${smallerNav ? 'h-20' : 'h-32'}   w-full bg-light-greyish-green `} />
    {#if navigationLinks}
      <div class={`mx-auto absolute inset-x-auto ${smallerNav ? '-top-4' : '-top-4'} `} />

      <ul class={`flex justify-between items-center w-full col-span-2 lg:col-span-1 pr-6 lg:p-0 z-30`}>
        {#each links as link, index}
          {#if index < 2}
            <li>
              <a
                href={index > 0 ? `#${link}` : ''}
                on:click={() => animateScroll.scrollTo({ element: `#${link}` })}
                class=" border-transparent border-b-2 hover:border-dark-desaturated-blue pb-0.5 duration-100 hover:font-bold"
                >{link}</a
              >
            </li>
          {/if}
        {/each}
      </ul>

      <div class="flex justify-center relative">
        <div
            class={`absolute  bg-light-greyish-green -top-6  ${
              smallerNav ? 'duration-100 w-24 h-24' : 'duration-100 w-28 h-28 lg:w-40 lg:h-40'
            } rounded-full`}
          />

          <a href=" "  class={`z-40 ${pageLoaded ? 'scale-100 opacity-100 duration-100': 'scale-0 opacity-0 duration-100'} ${smallerNav ? 'top-2' : 'top-2'} ${
            smallerNav ? 'duration-100	w-12 h-12' : 'duration-100 h-16 w-16	lg:w-24 lg:h-24'
          } `}  on:click={() => animateScroll.scrollTo({ element: `#home` })}>
            <JBLogo />
          </a>
      </div>
      <ul class={`flex justify-between items-center w-full col-span-2 lg:col-span-1 pl-6 lg:p-0 z-30`}>
        {#each links as link, index}
          {#if index >= 2}
            <li>
              <a
                href={index > 0 ? `#${link}` : ''}
                on:click={() => animateScroll.scrollTo({ element: `#${link}` })}
                class="border-transparent border-b-2 hover:border-dark-desaturated-blue pb-0.5 duration-100 hover:font-bold"
                >{link}</a
              >
            </li>
          {/if}
        {/each}
      </ul>
    {/if}
  </nav>
</div>
