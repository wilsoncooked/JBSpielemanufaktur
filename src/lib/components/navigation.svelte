<script module="context" lang="ts">
  import { onMount } from 'svelte'
  import * as animateScroll from 'svelte-scrollto'
  export let navigationLinks
  import JBLogo from '$lib/svg/logo.svelte'
  const links = navigationLinks?.data.links.map((link) =>
    link.link[0].text.toLowerCase()
  )

  let smallerNav = true

  onMount(
    () =>
      (smallerNav =
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
          ? true
          : false)
  )

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

<div
  class={`hidden md:block fixed left-0 right-0 top-0 lg:flex justify-center px-8 z-50`}
>
  <nav
    class={` grid grid-cols-5 lg:grid-cols-3 max-w-screen-xl w-full ${
      smallerNav ? 'duration-100 py-4 ' : 'duration-100 py-4	lg:py-8'
    } z-50 text-2xl bg-gradient-to-b bg-light-greyish-green font-mono  text-dark-desaturated-blue  uppercase tracking-wider relative`}
    id="navbar"
  >
    {#if navigationLinks}
      <div
        class={`mx-auto absolute inset-x-auto ${
          smallerNav ? '-top-4' : '-top-4'
        } `}
      >
        <div
          class={`   bg-light-greyish-green ${
            smallerNav
              ? 'duration-100 w-24 h-24'
              : 'duration-100 w-28 h-28 lg:w-40 lg:h-40'
          } rounded-full`}
        />
      </div>
      <div
        class={`mx-auto absolute inset-x-auto z-50 ${
          smallerNav ? 'top-2' : 'top-2'
        } ${
          smallerNav
            ? 'duration-100	w-12 h-12'
            : 'duration-100 h-16 w-16	lg:w-24 lg:h-24'
        } `}
      >
        <a href=" ">
          <JBLogo />
        </a>
      </div>
      <ul
        class={`flex justify-between items-center w-full col-span-2 lg:col-auto pr-6 lg:p-0`}
      >
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
      <div class="flex justify-center lg:mx-12 z-20" />
      <ul
        class={`flex justify-between items-center w-full col-span-2 lg:col-auto pl-6 lg:p-0`}
      >
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
