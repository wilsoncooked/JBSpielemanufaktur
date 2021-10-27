<script lang="ts">
  import Section from '$lib/components/section.svelte'
  import { SerializedPrismicDOM } from '$lib/utils/helpers'
  import PrismicDom from 'prismic-dom'
  import axios from 'axios'

  export let contentKontakt
  let formSubmittedSuccess = false
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    const data = {}
    for (let field of formData) {
      const [key, value] = field
      data[key] = value
    }

    // formSubmittedSuccess = true

    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios
      .post('https://formsubmit.co/ajax/info@JBSpielemanufaktur.de', data)
      .then((response) => {
        formSubmittedSuccess = true
        setTimeout(() => {
          formSubmittedSuccess = false
        }, 5000)
      })
      .catch((error) => console.log(error))
  }
</script>

<Section id="kontakt">
  <div class="pt-20 lg:pt-28  flex flex-col items-center lg:-mb-12">
    <span class="text-center text-2xl tracking-widest">
      {@html SerializedPrismicDOM(contentKontakt.data.heading)}
    </span>
    <span class="text-center font-mono text-xl sm:text-2xl py-2">
      {@html PrismicDom.RichText.asHtml(contentKontakt.data.kontakt_content)}
    </span>
    <div
      class="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center py-8 lg:py-16 max-w-screen-lg w-full flex-shrink-0"
    >
      <div class="mb-8 lg:mr-20  mt-2 w-40 lg:mt-3 lg:w-64 flex-shrink-0">
        <img
          src={contentKontakt.data.image.url}
          alt={contentKontakt.data.image.alt}
          width={350}
          height={350}
          class="rounded-full"
        />
      </div>
      <div class="w-full max-w-screen-sm">
        {#if formSubmittedSuccess}
          <div class="duration-100 mt-8 object-contain">
            <iframe
              title="Cat gif"
              src="https://giphy.com/embed/aNqEFrYVnsS52"
              width="380"
              height="230"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            />
            <h3 class="font-mono  text-2xl my-2">
              {contentKontakt.data.success[0].text}
            </h3>
          </div>
        {:else}
          <form on:submit={handleSubmit} method="POST">
            <input type="hidden" name="_subject" value="New submission!" />
            <input type="hidden" name="_captcha" value="false" />
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
                  class="w-full bg-transparent px-4 pt-2 pb-1.5 placeholder-dark-desaturated-blue font-mono font-bold text-xl lg:text-2xl tracking-wider border-dark-desaturated-blue border rounded-xl hover:bg-white hover:bg-opacity-40 duration-100  focus:outline-none"
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
                  required
                  placeholder={contentKontakt.data.nachname[0].text}
                  class="w-full bg-transparent px-4 pt-2 pb-1.5 placeholder-dark-desaturated-blue font-mono  font-bold text-xl lg:text-2xl tracking-wider border-dark-desaturated-blue border rounded-xl hover:bg-white hover:bg-opacity-40 duration-100  focus:outline-none"
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
                required
                placeholder={contentKontakt.data.email[0].text}
                class="bg-transparent px-4 pt-2 pb-1.5 placeholder-dark-desaturated-blue font-mono font-bold text-xl lg:text-2xl tracking-wider border-dark-desaturated-blue border rounded-xl w-full hover:bg-white hover:bg-opacity-40 duration-100  focus:outline-none"
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
                class="bg-transparent px-4 pt-2 pb-1.5 placeholder-dark-desaturated-blue font-mono font-bold text-xl lg:text-2xl tracking-wider border-dark-desaturated-blue border rounded-xl w-full hover:bg-white  hover:bg-opacity-40 duration-100  focus:outline-none"
              />
            </div>
            <div class="p-1.5 flex justify-end">
              <button
                type="submit"
                class="uppercase px-8 py-2 text-dark-desaturated-blue font-mono border-dark-desaturated-blue font-bold text-xl lg:text-2xlß tracking-wider hover:bg-opacity-40 border rounded-xl hover:bg-white duration-100  focus:outline-none"
              >
                {contentKontakt.data.button_label[0].text}
              </button>
            </div>
          </form>
        {/if}
      </div>
    </div>
  </div>
</Section>
