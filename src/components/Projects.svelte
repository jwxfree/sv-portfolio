<script>
  export let proj;
</script>

<a
  href={proj.href}
  target="_blank"
  class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-sky-500 text-center cursor-pointer hover:border-sky-400 duration-200 hover:bg-sky-400"
>
  <div
    class="bg-white text-sky-500 grid place-items-center p-5 rounded-3xl text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
  >
    <i class={proj.icon} ></i>
  </div>
  <h3 class="font-bold text-xl uppercase text-sky-500">
    {proj.name}
  </h3>
  <slot />
</a>
