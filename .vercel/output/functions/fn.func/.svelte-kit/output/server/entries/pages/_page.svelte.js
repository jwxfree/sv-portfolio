import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <main class="flex flex-col flex-1 p-32 dark:bg-black dark:text-white px-60"> <section id="introPage" class="grid grid-cols-1 lg:cols-2 gap-10 py-8 sm:py-14 xlg:py-12 slide-right" data-svelte-h="svelte-1a7h1j"><div class="flex flex-col justify-center items-center text-center"><h3 class="lg:text-5xl sm:text-3xl xlg:text-6xl">Hi, I&#39;m <strong>Eilron Escalante!</strong> <br> <span class="thin-font">Aspiring</span> <br> <a href="/" class="group transition-all duration-300 ease-in-out"><span class="lg:text-6xl sm:text-6xl xlg:text-6xl text-sky-500 font-bold bg-left-bottom bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_1px] rounded bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-700 ease-in">Full-stack Web Developer</span></a> <br> <span class="lg:text-6xl sm:text-6xl font-bold">&amp; Software Engineer</span> <br></h3> <a href="./EscalanteCV.pdf" download class="poppins rounded border border-solid border-sky-500 bg-sky-500 text-white p-2 max-w-sm mt-4 hover:bg-sky-600 hover:-translate-y-1 transition ease-out duration-500"><i class="fa-solid fa-file-arrow-down px-1" style="color: #ffffff;"></i>
        Download CV</a> <br> <br> <br> <i class="fa-solid fa-arrow-down text-2xl" style="color: #74C0FC;"></i> <br> <br> <br> <br></div></section>  ${``} ${``} ${``}  ${``}  ${``}  ${``}  ${``}  ${``}</main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Index, "Index").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
