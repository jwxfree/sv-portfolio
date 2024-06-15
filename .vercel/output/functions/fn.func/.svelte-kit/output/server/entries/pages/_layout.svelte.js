import { c as create_ssr_component, e as escape, b as null_to_empty, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const css = {
  code: "button.svelte-xx474h.svelte-xx474h{background:none;border:none;cursor:pointer;padding:0;outline:0}.spin-left.svelte-xx474h.svelte-xx474h,.spin-right.svelte-xx474h.svelte-xx474h{animation:svelte-xx474h-spin 575ms cubic-bezier(0.075, 0.82, 0.17, 1.135)}@keyframes svelte-xx474h-spin{0%{transform:scale(0) rotate(0deg)}100%{transform:scale(1) rotate(720deg)}0%{transform:scale(0) rotate(0deg)}100%{transform:scale(1) rotate(-720deg)}}.icon-moon.svelte-xx474h .icon-sun.svelte-xx474h{display:none}.dark .icon-moon.svelte-xx474h.svelte-xx474h{display:block}.light .icon-sun.svelte-xx474h.svelte-xx474h{display:block}",
  map: '{"version":3,"file":"Nav.svelte","sources":["Nav.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nfunction isDarkMode() {\\n  if (import.meta.env.SSR) {\\n    return false;\\n  }\\n  const sessionData = window.sessionStorage.getItem(\\"darkMode\\");\\n  if (sessionData) {\\n    return \\"true\\" === sessionData;\\n  }\\n  return window.matchMedia(\\"(prefers-color-scheme: dark)\\").matches;\\n}\\nfunction toggleWithKeyboard(e) {\\n  if (e.key !== \\"Escape\\") {\\n    return;\\n  }\\n  darkMode = !darkMode;\\n}\\nfunction triggerSpin(duration) {\\n  spin = true;\\n  setTimeout(() => spin = false, duration);\\n}\\nfunction toggleColorScheme(enableDarkMode = false) {\\n  if (import.meta.env.SSR) {\\n    return false;\\n  }\\n  const sessionData = window.sessionStorage.getItem(\\"darkMode\\");\\n  if (sessionData && enableDarkMode === (\\"true\\" === sessionData)) {\\n    return;\\n  }\\n  if (enableDarkMode) {\\n    spinDirection = \\"left\\";\\n    document.body.classList.remove(\\"light\\");\\n    document.body.classList.add(\\"dark\\");\\n  } else {\\n    spinDirection = \\"right\\";\\n    document.body.classList.remove(\\"dark\\");\\n    document.body.classList.add(\\"light\\");\\n  }\\n  triggerSpin(650);\\n  sessionStorage.setItem(\\"darkMode\\", darkMode.toString());\\n}\\nonMount(() => {\\n  window.matchMedia(\\"(prefers-color-scheme: dark)\\").addEventListener(\\"change\\", (e) => {\\n    darkMode = e.matches;\\n  });\\n});\\nlet spinDirection = \\"right\\";\\nlet darkMode = isDarkMode();\\nlet spin = false;\\n$: toggleColorScheme(darkMode);\\nexport let y = 0;\\nlet tabs = [\\n  { name: \\"About \\", link: \\"/#about\\" },\\n  { name: \\"Projects\\", link: \\"/#projects\\" }\\n];\\n<\/script>\\r\\n<svelte:window on:keydown={toggleWithKeyboard} />\\r\\n\\r\\n<header\\r\\n  class={\\"sticky z-[10] top-0 ease-in duration-200 px-6 flex items-center justify-between backdrop-brightness-0 backdrop-invert dark:bg-black \\" +\\r\\n    (y > 0\\r\\n      ? \\"py-4 bg-slate-950 border-black-950\\"\\r\\n      : \\"py-6 bg-transparent border-transparent\\")}\\r\\n>\\r\\n  <h1 class=\\"font-medium text-3xl dark:text-white\\">\\r\\n    <a href=\\"/\\" class=\\"font-bold\\">E<span class=\\"text-sky-500\\">E</span></a\\r\\n    >&lt;Dev &frasl;&gt;\\r\\n  </h1>\\r\\n  <div class=\\"flex items-center space-x-4\\">\\r\\n    <a\\r\\n      href=\\"/contact\\"\\r\\n      class=\\"relative overflow-hidden px-5 py-2 group rounded-full border border-sky-500 text-sky-500 hover:text-white hover:bg-sky-500 hover:border-sky-500\\"\\r\\n    >\\r\\n      <h4 class=\\"relative z-9\\">\\r\\n        Connect <i class=\\"fa-solid fa-arrow-right\\"></i>\\r\\n      </h4>\\r\\n    </a>\\r\\n\\r\\n\\r\\n    <button on:click={() => (darkMode = !darkMode)}>\\r\\n      <div\\r\\n        class=\\"icon\\"\\r\\n        class:spin-left={spin && spinDirection === \\"left\\"}\\r\\n        class:spin-right={spin && spinDirection === \\"right\\"}\\r\\n      >\\r\\n        {#if darkMode}\\r\\n        <img loading=\\"lazy\\" width=\\"18\\" height=\\"18\\" src=\\"./moon-solid.svg\\" alt=\\"Enable Light Mode\\" class=\\"icon-moon\\" />\\r\\n        {/if}\\r\\n        {#if !darkMode}\\r\\n        <img loading=\\"lazy\\" width=\\"20\\" height=\\"20\\" src=\\"./sun-solid.svg\\" alt=\\"Enable Dark Mode\\" class=\\"icon-sun\\" />\\r\\n        {/if}\\r\\n        \\r\\n      </div>\\r\\n    </button>\\r\\n  </div>\\r\\n</header>\\r\\n\\r\\n\\r\\n<style lang=\\"scss\\">button {\\n  background: none;\\n  border: none;\\n  cursor: pointer;\\n  padding: 0;\\n  outline: 0;\\n}\\n\\n.spin-left, .spin-right {\\n  animation: spin 575ms cubic-bezier(0.075, 0.82, 0.17, 1.135);\\n}\\n\\n@keyframes spin {\\n  0% {\\n    transform: scale(0) rotate(0deg);\\n  }\\n  100% {\\n    transform: scale(1) rotate(720deg);\\n  }\\n  0% {\\n    transform: scale(0) rotate(0deg);\\n  }\\n  100% {\\n    transform: scale(1) rotate(-720deg);\\n  }\\n}\\n\\n.icon-moon .icon-sun {\\n  display: none;\\n}\\n\\n:global(.dark) .icon-moon {\\n  display: block;\\n}\\n\\n:global(.light) .icon-sun {\\n  display: block;\\n}</style>\\r\\n"],"names":[],"mappings":"AAkGmB,kCAAO,CACxB,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,CACX,CAEA,sCAAU,CAAE,uCAAY,CACtB,SAAS,CAAE,kBAAI,CAAC,KAAK,CAAC,aAAa,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,KAAK,CAC7D,CAEA,WAAW,kBAAK,CACd,EAAG,CACD,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,IAAI,CACjC,CACA,IAAK,CACH,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,MAAM,CACnC,CACA,EAAG,CACD,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,IAAI,CACjC,CACA,IAAK,CACH,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,OAAO,CACpC,CACF,CAEA,wBAAU,CAAC,uBAAU,CACnB,OAAO,CAAE,IACX,CAEQ,KAAM,CAAC,sCAAW,CACxB,OAAO,CAAE,KACX,CAEQ,MAAO,CAAC,qCAAU,CACxB,OAAO,CAAE,KACX"}'
};
function isDarkMode() {
  {
    return false;
  }
}
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let darkMode = isDarkMode();
  let { y = 0 } = $$props;
  if ($$props.y === void 0 && $$bindings.y && y !== void 0) $$bindings.y(y);
  $$result.css.add(css);
  return ` <header class="${escape(
    null_to_empty("sticky z-[10] top-0 ease-in duration-200 px-6 flex items-center justify-between backdrop-brightness-0 backdrop-invert dark:bg-black " + (y > 0 ? "py-4 bg-slate-950 border-black-950" : "py-6 bg-transparent border-transparent")),
    true
  ) + " svelte-xx474h"}"><h1 class="font-medium text-3xl dark:text-white" data-svelte-h="svelte-1mfu89k"><a href="/" class="font-bold">E<span class="text-sky-500">E</span></a>&lt;Dev ⁄&gt;</h1> <div class="flex items-center space-x-4"><a href="/contact" class="relative overflow-hidden px-5 py-2 group rounded-full border border-sky-500 text-sky-500 hover:text-white hover:bg-sky-500 hover:border-sky-500" data-svelte-h="svelte-zfgylv"><h4 class="relative z-9">Connect <i class="fa-solid fa-arrow-right"></i></h4></a> <button class="svelte-xx474h"><div class="${[
    "icon svelte-xx474h",
    " "
  ].join(" ").trim()}">${darkMode ? `<img loading="lazy" width="18" height="18" src="./moon-solid.svg" alt="Enable Light Mode" class="icon-moon svelte-xx474h">` : ``} ${!darkMode ? `<img loading="lazy" width="20" height="20" src="./sun-solid.svg" alt="Enable Dark Mode" class="icon-sun svelte-xx474h">` : ``}</div></button></div> </header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="dark:bg-black dark:text-white m-4" data-svelte-h="svelte-k38yo1"><div class="w-full max-w-screen-xl mx-auto p-4 md:py-8"><div class="sm:flex sm:items-center sm:justify-between"><h1 class="font-medium text-3xl"><b class="font-bold">E<span class="text-sky-500">E</span></b>&lt;Dev ⁄&gt;</h1> <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"><li><a href="https://www.linkedin.com/in/jwxfree/" class="me-4 md:me-6" target="_blank">LinkedIn
                        <i class="fa-brands fa-linkedin"></i></a></li> <li><a href="https://github.com/jwxfree" class="me-4 md:me-6" target="_blank">Github
                        <i class="fa-brands fa-github"></i></a></li> <li><a href="https://www.instagram.com/hi_jeilron/" class="me-4 md:me-6" target="_blank">Instagram
                        <i class="fa-brands fa-instagram"></i></a></li></ul></div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">2024 <a href="https://flowbite.com/" class="hover:underline">EEDev</a>. Made with Svelte+TailwindCSS.</span></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative flex flex-col mx-auto w-full text-sm sm:text-base min-h-screen dark:bg-black "><div${add_attribute(
    "class",
    "fixed bottom-0 w-full duration-200 flex py-10 px-20 z-[10] pointer-events-none opacity-0"
  )}><button class="ml-auto rounded-full px-3 py-2.5 bg-white-500 text-black-400 sm:px-4 hover:bg-sky-500 hover:text-white cursor-pointer dark:bg-sky-500 dark:hover:bg-white dark:hover:text-sky-500" data-svelte-h="svelte-1kagvyg"><i class="fa-solid fa-arrow-up grid place-teims-center aspect-square"></i></button></div> ${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> `;
});
export {
  Layout as default
};
