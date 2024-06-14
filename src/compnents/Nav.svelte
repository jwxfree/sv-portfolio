<script>
  export let y;
  let tabs = [
    { name: "About ", link: "/#about" },
    { name: "Projects", link: "/#projects" },
  ];

  import {
    ThemeToggle,
    isDarkMode,
    toggleDarkMode,
  } from "@friendofsvelte/toggle";
  import "@friendofsvelte/toggle/styles/Toggle.css";
</script>

<header
  class={"sticky z-[10] top-0 ease-in duration-200 px-6 flex items-center justify-between backdrop-brightness-0 backdrop-invert dark:bg-black " +
    (y > 0
      ? "py-4 bg-slate-950 border-black-950"
      : "py-6 bg-transparent border-transparent")}
>
  <h1 class="font-medium text-3xl dark:text-white">
    <a href="/" class="font-bold">E<span class="text-sky-500">E</span></a
    >&lt;Dev &frasl;&gt;
  </h1>
  <div class="flex items-center space-x-4">
    <a
      href="/contact"
      class=" relative overflow-hidden px-5 py-2 group rounded-full border border-sky-500 text-sky-500 hover:text-white hover:bg-sky-500 hover:border-sky-500"
    >
      <h4 class="relative z-9">
        Connect <i class="fa-solid fa-arrow-right"></i>
      </h4>
    </a>

    <button on:click={toggleDarkMode}>
      {#if $isDarkMode}
        <i class="fa-regular fa-sun" style="color: #ffffff;"></i>
      {:else}
        <i class="fa-solid fa-moon"></i>
      {/if}
    </button>
  </div>
</header>
