<script module="context" lang="ts">
  import PrismicDom from 'prismic-dom'
  import { SerializedPrismicDOM } from '$lib/utils/helpers'
  export let skill
</script>

<div class="flex flex-col items-center">
  {#if skill}
    <div class="md:py-5">
      <img
        src={skill.icon.url}
        alt={skill.icon.alt}
        width={skill.icon.dimensions.width / 2}
        height={skill.icon.dimensions.height / 2}
        class=" object-contain"
      />
    </div>
    <div class=" md:w-52">
      <div
        class="font-mono text-center py-1 sm:py-2 text-lg sm:text-2xl tracking-wider"
      >
        {@html SerializedPrismicDOM(skill.heading)}
      </div>
      <div class="font-mono text-center sm:py-2  sm:text-xl tracking-wider">
        {@html PrismicDom.RichText.asHtml(skill.body)}
      </div>
    </div>
  {/if}
</div>
