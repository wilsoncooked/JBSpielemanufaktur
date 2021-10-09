<script lang="ts">
  import Section from '$lib/components/section.svelte'
  import { SerializedPrismicDOM } from '$lib/utils/helpers'
  import PrismicDOM from 'prismic-dom'
  import JBLogo from '$lib/svg/logo.svelte'

  export let contentImpressum
</script>

<Section id="impressum">
  <div class="pt-28 pb-20">
    <div class="text-center mb-7 text-2xl uppercase tracking-widest">
      {@html SerializedPrismicDOM(contentImpressum.data.heading)}
    </div>
    <div class="text-center my-3 tracking-wider text-lg">
      {@html PrismicDOM.RichText.asHtml(contentImpressum.data.legal)}
    </div>
    <div class="text-center my-2 tracking-wider text-lg">
      {@html PrismicDOM.RichText.asHtml(contentImpressum.data.company_address)}
    </div>
    <div
      class="text-center my-7 max-w-screen-md mx-auto tracking-wider text-lg"
    >
      {@html SerializedPrismicDOM(contentImpressum.data.tax_address)}
    </div>
  </div>
</Section>

<div
  class="w-full bg-dark-desaturated-blue text-light-greyish-green flex justify-center px-8"
>
  <div class="max-w-screen-xl w-full my-8">
    <div class="flex justify-between w-full my-8">
      <div class="flex mt-2">
        <div class="w-24 h-24 ">
          <JBLogo invert={true} />
        </div>
        <div class="text-4xl ml-14 mt-5 tracking-widest font-medium">
          {@html SerializedPrismicDOM(contentImpressum.data.footer_main_text)}
        </div>
      </div>
      <div>
        <div class="text-right uppercase text-xl  tracking-widest">
          {@html SerializedPrismicDOM(contentImpressum.data.company_name)}
        </div>
        <div class="text-right text-xl mt-6 tracking-widest">
          {@html PrismicDOM.RichText.asHtml(
            contentImpressum.data.footer_contact_address_1
          )}
        </div>
        <div class="text-right text-xl -mt-1 mb-5 tracking-widest">
          {@html PrismicDOM.RichText.asHtml(
            contentImpressum.data.footer_contact_address_2
          )}
        </div>
        <div class="text-right text-xl -mb-2 tracking-widest">
          {@html PrismicDOM.RichText.asHtml(contentImpressum.data.footer_phone)}
        </div>
        <div class="text-right text-xl tracking-widest mb-2">
          {@html SerializedPrismicDOM(contentImpressum.data.footer_email)}
        </div>
      </div>
    </div>
    <div class="bg-light-greyish-green h-0.25 w-full" />
    <div class="text-right my-2 text-xl">
      {@html SerializedPrismicDOM(contentImpressum.data.copywrite)}
    </div>
  </div>
</div>
