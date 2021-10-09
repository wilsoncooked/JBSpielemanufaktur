<!-- <script context="module">
  import Client from '../utils/client'
  import PrismicDom from 'prismic-dom'
  export async function load({ page }) {
    const { uid } = page.params
    const document = await Client.getByUID('page', uid, {})
    return {
      props: {
        document,
        uid
      }
    }
  }
</script>

<script>
  export let document
</script>

<main>
  {#if document}
    <div
      class="header container"
      style="background-image: url('{document.data.image.url}')"
    >
      <h1>
        {document.data.title[0].text}
      </h1>
    </div>
    <div class="container">
      <div class="text">
        {@html PrismicDom.RichText.asHtml(document.data.content)}
      </div>
    </div>
  {/if}
</main> -->
