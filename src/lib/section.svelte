<script lang="ts">
  export let id: string
</script>

<section {id}>
  <div class="h-screen flex justify-center items-center">
    <slot />
  </div>
</section>
