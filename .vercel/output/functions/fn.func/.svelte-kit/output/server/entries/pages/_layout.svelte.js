import { d as attr, e as store_get, u as unsubscribe_stores, f as bind_props, g as slot } from "../../chunks/index.js";
import { isDarkMode } from "@friendofsvelte/toggle";
function default_slot($$props) {
  var children = $$props.$$slots?.default;
  if (children === true) {
    return $$props.children;
  } else {
    return children;
  }
}
function Nav($$payload, $$props) {
  var $$store_subs;
  let y = $$props["y"];
  $$payload.out += `<header${attr("class", "sticky z-[10] top-0 ease-in duration-200 px-6 flex items-center justify-between backdrop-brightness-0 backdrop-invert dark:bg-black " + (y > 0 ? "py-4 bg-slate-950 border-black-950" : "py-6 bg-transparent border-transparent"))}><h1 class="font-medium text-3xl dark:text-white"><a href="/" class="font-bold">E<span class="text-sky-500">E</span></a>&lt;Dev ⁄></h1> <div class="flex items-center space-x-4"><a href="/contact" class="relative overflow-hidden px-5 py-2 group rounded-full border border-sky-500 text-sky-500 hover:text-white hover:bg-sky-500 hover:border-sky-500"><h4 class="relative z-9">Connect <i class="fa-solid fa-arrow-right"></i></h4></a> <button><!--[-->`;
  if (store_get($$store_subs ??= {}, "$isDarkMode", isDarkMode)) {
    $$payload.out += `<i class="fa-regular fa-sun" style="color: #ffffff;"></i>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += `<i class="fa-solid fa-moon"></i>`;
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += `</button></div></header>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { y });
}
function Footer($$payload) {
  $$payload.out += `<footer class="dark:bg-black dark:text-white m-4"><div class="w-full max-w-screen-xl mx-auto p-4 md:py-8"><div class="sm:flex sm:items-center sm:justify-between"><h1 class="font-medium text-3xl"><b class="font-bold">E<span class="text-sky-500">E</span></b>&lt;Dev ⁄></h1> <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"><li><a href="https://www.linkedin.com/in/jwxfree/" class="me-4 md:me-6" target="_blank">LinkedIn <i class="fa-brands fa-linkedin"></i></a></li> <li><a href="https://github.com/jwxfree" class="me-4 md:me-6" target="_blank">Github <i class="fa-brands fa-github"></i></a></li> <li><a href="https://www.instagram.com/hi_jeilron/" class="me-4 md:me-6" target="_blank">Instagram <i class="fa-brands fa-instagram"></i></a></li></ul></div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">2024 <a href="https://flowbite.com/" class="hover:underline">EEDev</a>. Made with Svelte+TailwindCSS.</span></div></footer>`;
}
function _layout($$payload, $$props) {
  $$payload.out += `<div class="relative flex flex-col mx-auto w-full text-sm sm:text-base min-h-screen dark:bg-black"><div${attr("class", "fixed bottom-0 w-full duration-200 flex py-10 px-20 z-[10] pointer-events-none opacity-0")}><button class="ml-auto rounded-full px-3 py-2.5 bg-white-500 text-black-400 sm:px-4 hover:bg-sky-500 hover:text-white cursor-pointer dark:bg-sky-500 dark:hover:bg-white dark:hover:text-sky-500"><i class="fa-solid fa-arrow-up grid place-teims-center aspect-square"></i></button></div> <!--[-->`;
  Nav($$payload, {});
  $$payload.out += `<!--]--> <!--[-->`;
  slot($$payload, default_slot($$props), {});
  $$payload.out += `<!--]--> <!--[-->`;
  Footer($$payload);
  $$payload.out += `<!--]--></div>`;
}
export {
  _layout as default
};
