<script>
  import Section from '$lib/components/section.svelte'
  import { SerializedPrismicDOM } from '$lib/utils/helpers'
  import Skill from '$lib/components/skill.svelte'

  export let contentAbout
</script>

<Section id="about">
  {#if contentAbout}
    <div class="pt-28 flex flex-col items-center">
      <div
        class="text-center font-mono text-2xl pt-2 uppercase tracking-widest"
      >
        {@html SerializedPrismicDOM(contentAbout.data.heading)}
      </div>
      <div class="text-center font-mono text-2xl pb-2">
        {@html SerializedPrismicDOM(contentAbout.data.about)}
      </div>
      <div class="flex justify-evenly py-8 w-full ">
        {#each contentAbout.data.skills_icons as skill}
          <Skill {skill} />
        {/each}
      </div>
      <div class="text-center font-mono  text-2xl py-10 max-w-screen-lg">
        {@html SerializedPrismicDOM(contentAbout.data.about_content)}
      </div>
      <div class="flex justify-center flex-wrap	pt-8">
        {#each contentAbout.data.images as image}
          <img
            src={image.image.url}
            alt={image.image.alt}
            width={image.image.dimensions.width / 2}
            height={image.image.dimensions.height / 2}
            class="object-contain p-1 h-96 w-min"
          />
        {/each}
      </div>
    </div>
  {/if}
</Section>
