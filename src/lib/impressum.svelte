<script lang="ts">
  import Section from '$lib/components/section.svelte'
  import { SerializedPrismicDOM } from '$lib/utils/helpers'
  import PrismicDOM from 'prismic-dom'
  import JBLogo from '$lib/svg/logo.svelte'

  export let contentImpressum
</script>

<Section id="impressum">
  <div class="pt-20 lg:pt-28 pb-8 lg:pb-20">
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
  class="w-full bg-dark-desaturated-blue text-light-greyish-green flex justify-center px-4 sm:px-8 pt-2"
>
  <div class="max-w-screen-xl w-full my-4 lg:my-8">
    <div class="lg:flex justify-between w-full lg:my-8">
      <div class="ml-2 flex mt-2 ">
        <div class="w-24 h-24 flex-shrink-0">
          <JBLogo invert={true} />
        </div>
        <div
          class="text-xl text-right sm:text-left sm:text-2xl lg:text-3xl  sm:ml-8 lg:ml-12 sm:mt-5 tracking-widest font-bold sm:max-w-lg lg:max-w-xl"
        >
          {@html SerializedPrismicDOM(contentImpressum.data.footer_main_text)}
        </div>
      </div>
      <div class="mt-12 sm:mt-20 lg:mt-0">
        <div class="text-right uppercase text-lg sm:text-xl  tracking-widest">
          {@html SerializedPrismicDOM(contentImpressum.data.company_name)}
        </div>
        <div class="text-right sm:text-xl mt-2 sm:mt-6 tracking-widest">
          {@html PrismicDOM.RichText.asHtml(
            contentImpressum.data.footer_contact_address_1
          )}
        </div>
        <div class="text-right sm:text-xl -mt-1 mb-2 sm:mb-5 tracking-widest">
          {@html PrismicDOM.RichText.asHtml(
            contentImpressum.data.footer_contact_address_2
          )}
        </div>
        <div class="text-right sm:text-xl -mb-2 tracking-widest">
          {@html PrismicDOM.RichText.asHtml(contentImpressum.data.footer_phone)}
        </div>
        <div class="text-right sm:text-xl tracking-widest mb-2">
          {@html SerializedPrismicDOM(contentImpressum.data.footer_email)}
        </div>
      </div>
    </div>
    <div class="bg-light-greyish-green h-0.25 w-full" />
    <div class="text-right my-2 sm:text-xl">
      {@html SerializedPrismicDOM(contentImpressum.data.copywrite)}
    </div>
  </div>
</div>
