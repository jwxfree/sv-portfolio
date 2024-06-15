import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col flex-1 text-center px-20 py-40" data-svelte-h="svelte-hes8q2"><h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-sky-500 sm:text-2xl md:text-4xl lg:text-6xl dark:text-sky-500w">Have an Idea?</h1> <p class="mb-6 text-lg font-normal text-gray-500 sm:text-xl md:text-2xl lg:text-4xl dark:text-gray-400">Let&#39;s collaborate! feel free slide me a DM or send me an email.</p> <form class="max-w-sm mx-auto" id="disabled-input"><div class="relative"><div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"><svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16"><path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path><path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path></svg></div> <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="aeronescalante@gmail.com" readonly disabled></div></form></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
