<script>
  import Section from '$lib/components/section.svelte'
  import { SerializedPrismicDOM } from '$lib/utils/helpers'
  import Skill from '$lib/components/skill.svelte'
  import * as animateScroll from 'svelte-scrollto'
  import ArrowDown from './svg/arrowDown.svelte'

  export let contentAbout
</script>

<Section id="about">
  {#if contentAbout}
    <div class="pt-20 lg:pt-28 flex flex-col items-center">
      <div
        class="text-center font-mono text-2xl  py-2 uppercase tracking-widest"
      >
        {@html SerializedPrismicDOM(contentAbout.data.heading)}
      </div>
      <div class="text-center font-mono text-xl sm:text-2xl  pb-6 lg:pb-8">
        {@html SerializedPrismicDOM(contentAbout.data.about)}
      </div>
      <div
        class="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 w-full max-w-2xl lg:max-w-full"
      >
        {#each contentAbout.data.skills_icons as skill}
          <Skill {skill} />
        {/each}
      </div>
      <div
        class="text-center font-mono text-lg sm:text-xl lg:text-2xl py-10 max-w-screen-lg"
      >
        {@html SerializedPrismicDOM(contentAbout.data.about_content)}
      </div>
      {#if contentAbout.data.images}
        <div class="flex justify-center flex-wrap	pt-8">
          {#each contentAbout.data.images as image}
            <img
              src={image.image.url}
              alt={image.image.alt}
              width={image.image.dimensions.width / 2}
              height={image.image.dimensions.height / 2}
              class="object-contain p-1 sm:h-64 lg:h-96 w-min"
            />
          {/each}
        </div>
      {/if}
      <div class="flex justify-center w-full">
        <a
          href="#about"
          class="hover:animate-bounce"
          on:click={() => animateScroll.scrollTo({ element: `#kontakt` })}
          ><ArrowDown /></a
        >
      </div>
    </div>
  {/if}
</Section>
