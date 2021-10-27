<script lang="ts">
  import Section from '$lib/components/section.svelte'
  import { SerializedPrismicDOM } from '$lib/utils/helpers'
  import ArrowDown from './svg/arrowDown.svelte'
  import * as animateScroll from 'svelte-scrollto'

  export let contentHome
</script>

<Section id="" className="relative">
  {#if contentHome}
    <div class="h-screen md:h-full relative flex lg:h-screen items-center w-full">
      <span class="hidden">
        {@html SerializedPrismicDOM(contentHome.data.company_name)}
      </span>
      <div class="md:py-24 lg:p-0 max-w-screen-xl relative w-full mt-8 ">
        <img
          alt={contentHome.data.hero_image.alt}
          width={contentHome.data.hero_image.dimensions.width / 2}
          height={contentHome.data.hero_image.dimensions.height / 2}
          src={contentHome.data.hero_image.url}
        />
        <div class="md:absolute md:h-full md:flex items-center lg:w-1/2 right-0 top-0 bottom-0 p-2 ">
          <div class="mt-8  font-medium text-2xl md:text-4xl lg:text-5xl tracking-widest">
            {@html SerializedPrismicDOM(contentHome.data.heading)}
          </div>
        </div>
      </div>
      <div class="mt-28 absolute flex justify-center w-full bottom-20 xs:bottom-10">
        <a href="#about" on:click={() => animateScroll.scrollTo({ element: `#about` })} class={`hover:animate-bounce `}
          ><ArrowDown /></a
        >
      </div>
    </div>
  {/if}
</Section>
