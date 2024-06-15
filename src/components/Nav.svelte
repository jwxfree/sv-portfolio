<script lang="ts">
  // import {
  //   ThemeToggle,
  //   isDarkMode,
  //   toggleDarkMode,
  // } from "@friendofsvelte/toggle";
  // import "@friendofsvelte/toggle/styles/Toggle.css";
  import { onMount } from "svelte";

function isDarkMode() {
  // Allows this function to be run early without waiting for onMount
  if (import.meta.env.SSR) {
    return false;
  }

  const sessionData = window.sessionStorage.getItem("darkMode");
  if (sessionData) {
    return "true" === sessionData;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function toggleWithKeyboard(e: KeyboardEventInit) {
  if (e.key !== "Escape") {
    return;
  }
  darkMode = !darkMode;
}

function triggerSpin(duration: number) {
  spin = true;
  setTimeout(() => (spin = false), duration);
}

function toggleColorScheme(enableDarkMode = false) {
  // Allows this function to be run early without waiting for onMount
  if (import.meta.env.SSR) {
    return false;
  }

  const sessionData = window.sessionStorage.getItem("darkMode");
  if( sessionData && enableDarkMode === ("true" === sessionData) ) {
    return;
  }

  // Change the body class based on the current status.
  if (enableDarkMode) {
    spinDirection = "left";
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    spinDirection = "right";
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }

  // Trigger the animation
  triggerSpin(650);

  // Save the dark mode status in the session storage.
  sessionStorage.setItem("darkMode", darkMode.toString());
}

  onMount(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
       darkMode = e.matches;
     });
});

  let spinDirection: "left" | "right" = "right";
  let darkMode = isDarkMode();
  let spin = false;
  $: toggleColorScheme(darkMode);
  export let y = 0;

  let tabs = [
    { name: "About ", link: "/#about" },
    { name: "Projects", link: "/#projects" },
  ];
</script>
<svelte:window on:keydown={toggleWithKeyboard} />

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
      class="relative overflow-hidden px-5 py-2 group rounded-full border border-sky-500 text-sky-500 hover:text-white hover:bg-sky-500 hover:border-sky-500"
    >
      <h4 class="relative z-9">
        Connect <i class="fa-solid fa-arrow-right"></i>
      </h4>
    </a>


    <button on:click={() => (darkMode = !darkMode)}>
      <div
        class="icon"
        class:spin-left={spin && spinDirection === "left"}
        class:spin-right={spin && spinDirection === "right"}
      >
        {#if darkMode}
        <img loading="lazy" width="18" height="18" src="./moon-solid.svg" alt="Enable Light Mode" class="icon-moon" />
        {/if}
        {#if !darkMode}
        <img loading="lazy" width="20" height="20" src="./sun-solid.svg" alt="Enable Dark Mode" class="icon-sun" />
        {/if}
        
      </div>
    </button>
  </div>
</header>


<style lang="scss">
	button {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		outline: 0;
	}

	%spin {
		animation: spin 575ms cubic-bezier(0.075, 0.82, 0.17, 1.135);
	}

	.spin-right {
		@extend %spin;
		@keyframes spin {
			0% {
				transform: scale(0) rotate(0deg);
			}
			100% {
				transform: scale(1) rotate(720deg);
			}
		}
	}
	.spin-left {
		@extend %spin;
		@keyframes spin {
			0% {
				transform: scale(0) rotate(0deg);
			}
			100% {
				transform: scale(1) rotate(-720deg);
			}
		}
	}
	.icon-moon .icon-sun {
		display: none;
	}
	:global(.dark) .icon-moon {
		display: block;
	}

	:global(.light) .icon-sun {
		display: block;
	}
</style>
