<script module="context" lang="ts">
  import PrismicDom from 'prismic-dom'
  import { SerializedPrismicDOM } from '$lib/utils/helpers'
  export let skill
</script>

<div class="flex flex-col items-center w-52">
  {#if skill}
    <div class="py-3">
      <img
        src={skill.icon.url}
        alt={skill.icon.alt}
        width={skill.icon.dimensions.width / 2}
        height={skill.icon.dimensions.height / 2}
        class="h-24 object-contain"
      />
    </div>
    <span
      class="font-mono text-center uppercase py-2 text-2xl leading-6 tracking-wider"
      >{@html SerializedPrismicDOM(skill.heading)}</span
    >
    <span class="font-mono text-center py-2 leading-5 text-xl tracking-wider"
      >{@html PrismicDom.RichText.asHtml(skill.body)}</span
    >
  {/if}
</div>
