<script lang="ts">
  import Section from '$lib/components/section.svelte'
  import { SerializedPrismicDOM } from '$lib/utils/helpers'
  import PrismicDom from 'prismic-dom'

  export let contentKontakt

  const onSubmit = (event) => {
    const formData = new FormData(event.target)

    const data = {}
    for (let field of formData) {
      const [key, value] = field
      data[key] = value
    }
    console.log(data)
  }
</script>

<Section id="kontakt">
  <div class="pt-28  flex flex-col items-center -mb-12">
    <span class="text-center uppercase text-2xl tracking-widest">
      {@html SerializedPrismicDOM(contentKontakt.data.heading)}
    </span>
    <span class="text-center font-mono text-2xl py-4">
      {@html PrismicDom.RichText.asHtml(contentKontakt.data.kontakt_content)}
    </span>
    <div class="flex justify-center py-16 max-w-screen-lg w-full flex-shrink-0">
      <div class="mr-16 mb-12 mt-2">
        <img
          src={contentKontakt.data.image.url}
          alt={contentKontakt.data.image.alt}
          width={350}
          height={350}
          class="rounded-full"
        />
      </div>
      <div class="w-full max-w-screen-md">
        <form on:submit|preventDefault={onSubmit}>
          <div class="flex w-full">
            <div class="p-1.5 w-full">
              <label for="vorname" class="hidden"
                >{contentKontakt.data.vorname[0].text}</label
              >
              <input
                type="text"
                id="vorname"
                name="vorname"
                value=""
                placeholder={contentKontakt.data.vorname[0].text}
                required
                class="w-full bg-transparent px-4 pt-2 pb-1.5 placeholder-dark-desaturated-blue font-mono font-bold text-2xl tracking-wider border-dark-desaturated-blue border rounded-xl hover:bg-white hover:bg-opacity-40 duration-100  focus:outline-none"
              />
            </div>
            <div class="p-1.5 w-full">
              <label for="nachname" class="hidden"
                >{contentKontakt.data.nachname[0].text}</label
              >
              <input
                type="text"
                id="nachname"
                name="nachname"
                value=""
                placeholder={contentKontakt.data.nachname[0].text}
                class="w-full bg-transparent px-4 pt-2 pb-1.5 placeholder-dark-desaturated-blue font-mono  font-bold text-2xl tracking-wider border-dark-desaturated-blue border rounded-xl hover:bg-white hover:bg-opacity-40 duration-100  focus:outline-none"
              />
            </div>
          </div>
          <div class="p-1.5">
            <label for="email" class="hidden"
              >{contentKontakt.data.email[0].text}</label
            >
            <input
              type="email"
              id="email"
              name="email"
              value=""
              placeholder={contentKontakt.data.email[0].text}
              required
              class="bg-transparent px-4 pt-2 pb-1.5 placeholder-dark-desaturated-blue font-mono font-bold text-2xl tracking-wider border-dark-desaturated-blue border rounded-xl w-full hover:bg-white hover:bg-opacity-40 duration-100  focus:outline-none"
            />
          </div>
          <div class="p-1.5">
            <label for="comment" class="hidden"
              >{contentKontakt.data.comment[0].text}</label
            >
            <textarea
              type="text"
              id="comment"
              name="comment"
              rows="4"
              value=""
              placeholder={contentKontakt.data.comment[0].text}
              class="bg-transparent px-4 pt-2 pb-1.5 placeholder-dark-desaturated-blue font-mono font-bold text-2xl tracking-wider border-dark-desaturated-blue border rounded-xl w-full hover:bg-white  hover:bg-opacity-40 duration-100  focus:outline-none"
            />
          </div>
          <div class="p-1.5 flex justify-end">
            <button
              type="submit"
              class="uppercase px-8 py-2 text-dark-desaturated-blue font-mono border-dark-desaturated-blue font-bold text-2xl tracking-wider hover:bg-opacity-40 border rounded-xl hover:bg-white duration-100  focus:outline-none"
            >
              {contentKontakt.data.button_label[0].text}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</Section>
