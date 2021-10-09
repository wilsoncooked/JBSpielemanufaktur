<script lang="ts">
  import Section from '$lib/components/section.svelte'
  import { SerializedPrismicDOM } from '$lib/utils/helpers'
  export let contentHome
</script>

<Section id="">
  {#if contentHome}
    <div class="h-screen pt-48">
      <span class="hidden">
        {@html SerializedPrismicDOM(contentHome.data.company_name)}
      </span>
      <div class="max-w-screen-xl relative">
        <img
          alt={contentHome.data.hero_image.alt}
          width={contentHome.data.hero_image.dimensions.width / 2}
          height={contentHome.data.hero_image.dimensions.height / 2}
          src={contentHome.data.hero_image.url}
        />
        <div
          class="absolute h-full flex items-center w-1/2  right-0 top-0 bottom-0 p-2 "
        >
          <div class="font-medium text-5xl tracking-widest">
            {@html SerializedPrismicDOM(contentHome.data.heading)}
          </div>
        </div>
      </div>
    </div>
  {/if}
</Section>
