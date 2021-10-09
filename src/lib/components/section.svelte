<script lang="ts">
  export let id: string
  export let className: string = ''
</script>

<section {id}>
  <div class="flex justify-center">
    <div
      class={`${className} text-dark-desaturated-blue max-w-screen-xl w-full`}
    >
      <slot />
    </div>
  </div>
</section>
