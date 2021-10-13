<script>
  let launched = false
  const handleLaunch = () => {
    launched = true
  }
</script>

<div
  class="absolute top-0 bottom-0 left-0 right-0 bg-dark-desaturated-blue w-screen h-screen flex flex-col justify-center items-center z-50"
>
  <h1 class="text-white font-bold text-5xl">COMING SOON...</h1>
  {#if !launched}
    <button
      on:click={handleLaunch}
      class={`bg-red-500 rounded-full w-40 h-40 my-12  text-white text-4xl font-bold border-8 border-red-600 animate-pulse `}
      >LAUNCH</button
    >
  {:else}
    <a
      href="/launching"
      class={`bg-red-500 rounded-full w-40 h-40 my-12 flex justify-center items-center text-white text-4xl font-bold border-8 border-red-600 border-solid  animate-spin animate-pulse `}
      >LAUNCH</a
    >
  {/if}
</div>
