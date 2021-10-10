<script lang="ts">
  import Section from '$lib/components/section.svelte'
  import { SerializedPrismicDOM } from '$lib/utils/helpers'
  import ArrowDown from './svg/arrowDown.svelte'
  import * as animateScroll from 'svelte-scrollto'
  import JBLogo from '$lib/svg/logo.svelte'

  export let contentHome

  let animateArrow = false
  const animationTiming = () => {
    setTimeout(() => {
      animateArrow = true
    }, 5000)
  }
</script>

<Section id="">
  {#if contentHome}
    <div class="w-12 h-12 mt-4 lg:hidden"><JBLogo /></div>
    <div class="md:h-screen pt-24 lg:pt-40 relative">
      <span class="hidden">
        {@html SerializedPrismicDOM(contentHome.data.company_name)}
      </span>
      <div class="max-w-screen-xl relative ">
        <img
          alt={contentHome.data.hero_image.alt}
          width={contentHome.data.hero_image.dimensions.width / 2}
          height={contentHome.data.hero_image.dimensions.height / 2}
          src={contentHome.data.hero_image.url}
        />
        <div
          class=" lg:absolute lg:h-full lg:flex items-center lg:w-1/2  right-0 top-0 bottom-0 p-2 "
        >
          <div
            class="mt-8 lg:mt-0 font-medium text-4xl lg:text-5xl tracking-widest"
          >
            {@html SerializedPrismicDOM(contentHome.data.heading)}
          </div>
        </div>
      </div>
      <div class="mt-28 lg:absolute flex justify-center w-full bottom-20">
        <a
          href="#about"
          on:click={() => animateScroll.scrollTo({ element: `#about` })}
          class={`${animateArrow ? 'animate-bouncing' : ''}`}><ArrowDown /></a
        >
      </div>
    </div>
  {/if}
</Section>
