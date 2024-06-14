<script>
  import "../app.css";
  import Nav from "../compnents/Nav.svelte";
  import Footer from "../compnents/Footer.svelte";


  let y;
  let innerHeight = 0;
  let innerWidth = 0;

  function goTop() {
    document.body.scrollIntoView({behavior:'smooth',});
    
  }
</script>

<div
  class="relative flex flex-col mx-auto w-full text-sm sm:text-base min-h-screen dark:bg-black ">
  <div
    class={"fixed bottom-0 w-full duration-200 flex py-10 px-20 z-[10]" +
      (y > 0
        ? "opacity-full pointer-events-auto"
        : " pointer-events-none opacity-0")}
  >
    <button
      on:click={goTop}
      class=" ml-auto rounded-full px-3 py-2.5 bg-white-500 text-black-400 sm:px-4 hover:bg-sky-500 hover:text-white cursor-pointer dark:bg-sky-500 dark:hover:bg-white dark:hover:text-sky-500"
    >
      <i class="fa-solid fa-arrow-up grid place-teims-center aspect-square"></i>
    </button>
  </div>

  <Nav />
  <slot />
  <Footer />
  
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
