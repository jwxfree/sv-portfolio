<script>
  import Projects from "./Projects.svelte";
  let y;

  let proj = [
    { name: "Cafe Shop Landing Page", icon: "fa-solid fa-mug-saucer" },
    { name: "VioDev Landing Page", icon: "fa-solid fa-diagram-project" },
    { name: "Cafe PoSS", icon: "fa-solid fa-laptop" },
  ];

  let stack = [
    {
      name: "HTML",
      link: "https://www.w3schools.com/html/",
      img: "./html.png",
    },
    { name: "CSS", link: "https://www.w3schools.com/css/", img: "./css.png" },
    {
      name: "JS",
      link: "https://www.w3schools.com/js/",
      img: "./javascript.png",
    },
    {
      name: "TAILWIND",
      link: "https://tailwindcss.com/",
      img: "./tailwind2.png",
    },
    {
      name: "BOOTSTRAP",
      link: "https://getbootstrap.com/",
      img: "./bootstrap.png",
    },
    { name: "SVELTE", link: "https://svelte.dev/", img: "./svelte-logo.png" },
    {
      name: "JAVA",
      link: "https://www.w3schools.com/java//",
      img: "./java2.png",
    },
    { name: "REACT", link: "https://react.dev/", img: "./react.png" },
    { name: "FIGMA", link: "https://www.figma.com/", img: "./figma.png" },
  ];

    
    
</script>


<svelte:window bind:scrollY={y} />

<main class="flex flex-col flex-1 p-32 dark:bg-black dark:text-white">
  <!-- INTRO PAGE -->

  <section
    id="introPage"
    class="grid grid-cols-1 lg:cols-2 gap-10 py-8 sm:py-14 slide-right"
  >
    <div
      class="flex flex-col justify-center items-center text-center"
    >
      <h3 class="lg:text-5xl sm:text-3xl">
        Hi, I'm <strong>Eilron Escalante!</strong>
        <br />
        <span class="thin-font">Aspiring</span>
        <br />
        <a href="@" class="group transition-all duration-300 ease-in-out"
          ><span
            class="lg:text-6xl sm:text-6xl text-sky-500 font-bold bg-left-bottom bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_1px] rounded bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-700 ease-in"
          >
            Full-stack Web Developer
          </span></a
        >
        <br />
        <span class="lg:text-6xl sm:text-6xl font-bold">
          & Software Engineer</span
        >
        <br />
      </h3>

      <a
        href="./EscalanteCV.pdf"
        download
        class="poppins rounded border border-solid border-sky-500 bg-sky-500 text-white p-2 max-w-sm mt-4 hover:bg-sky-600 hover:-translate-y-1 transition ease-out duration-500"
      >
        <i class="fa-solid fa-file-arrow-down px-1" style="color: #ffffff;"></i>
        Download CV
      </a>
    </div>
  </section>

  <!-- ABOUT ME SECTION -->
  {#if y >= 80}
  <section id="about" class="flex flex-col gap-2 pt-48 pb-44 slide-right">
    <div class="flex flex-row gap-4">
      <div class="flex flex-col text-left gap-2 flex-1">
        <h3 class="text-2xl font-bold poppins text-sky-500">
          <div
            class="border border-black relative w-0 h-10 -left-2 top-[35px] dark:border-white"
          ></div>
          ABOUT
        </h3>
        <p class="max-w-2xl relative mt-2">
          Hello! I am a college student in <span class="text-red-500 font-bold"
            >Emilio Aguinaldo College Cavite</span
          >
          pursuing Bachelor of Science in Computer Science and currently focusing
          in
          <span class="text-sky-500 font-bold">Web Development</span>. Currently
          studying
          <span class="text-svelte font-bold">
            <img
              src="./svelte.png"
              alt="svelte_logo"
              class="w-auto h-4 inline-block align-middle"
            /> Svelte</span
          >
          along with
          <img
            src="./tailwind.png"
            alt="tailwind_logo"
            class="w-auto h-3 inline-block align-middle"
          /> <span class="text-sky-500 font-bold">Tailwind CSS</span>.
        </p>
        <p class="max-w-2xl relative mt-2">
          I work on projects such as building websites, full-stack software
          developement, video production, graphic designing, and tech solutions.
        </p>
        <p class="max-w-2xl relative mt-2">
          I enjoy writing codes and creating web pages and computer
          applications. My hobbies are playing guitar, online games such as <span
            class="text-red-500 font-bold">Valorant</span
          >, <span class="text-red-500 font-bold"> DotA2</span>,
          <span class="text-yellow-500 font-bold">League of Legends</span>
          and etc.
          <br />
          <br />
          My best go to drink is
          <span class="text-green-500 font-semibold"
            >Iced vanilla breve latte! <i
              class="fas fa-coffee"
              style="color:rgb(34 197 94 / var(--tw-text-opacity));"
            ></i></span
            >
        </p>
      </div>
      <div class="slide-left">
        <img src="./profile-pic.png" alt="pfp" class="w-96 h-auto">
      </div>
    </div>
  </section>
  
  {/if}

  {#if y >= 450}
    <section id="techstack" class="flex flex-col gap-24 py-20">
      <h3 class="text-2xl font-bold poppins text-sky-500 slide-right">
        <div
          class="border border-black relative w-0 h-10 -left-2 top-[35px] dark:border-white"
        ></div>
        Tech Stack
      </h3>

      <div class="flex flex-wrap  scale-down-center">
        {#each stack as stacks, index}
          <a
            href={stacks.link}
            class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-none cursor-pointer hover:border-sky-400 hover:bg-sky-300 hover:scale-110 duration-300"
            target="_blank"
          >
            <img src={stacks.img} alt="techlogo" class="w-16 h-auto" />
          </a>
        {/each}
      </div>
    </section>
  {/if}

  {#if y >= 1050}
    <section
      id="education"
      class="flex flex-col gap-24 pb-40 sm:hidden md:block lg:block slide-right"
    >
      <h3 class="text-2xl font-bold poppins text-sky-500">
        <div
          class="border border-black relative w-0 h-10 -left-2 top-[35px] dark:border-white"
        ></div>
        Education
      </h3>
      <!-- TIMELINE -->
      <div class="container mx-auto w-full h-full slide-tl">
        <div class="relative wrap overflow-hidden p-10 h-full">
          <div
            class="border-2-2 absolute border-opacity-20 border-sky-700 dark:border-sky-200 h-full border"
            style="left: 50%"
          ></div>

          <!-- LEFT TIMELINE -->
          <div
            class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
          >
            <div class="order-1 w-full sm:w-5/12"></div>
            <div
              class="z-20 flex items-center order-1 bg-sky-200 shadow-xl w-8 h-8 rounded-full dark:bg-sky-500"
            
            >
              <h1 class="mx-auto text-white font-semibold text-lg">1</h1>
            </div>
            <div
              class="order-1 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4"
            >
              <h3 class="mb-3 font-bold text-sky-500 text-xl">2019-2021</h3>
              <h5
                class="text-medium font-semibold leading-snug tracking-wide text-slate-900 text-opacity-100 dark:text-white "
              >
                St. Jude Parish School
              </h5>
              <p>STEM Graduate</p>
            </div>
          </div>

          <!-- RIGHT TIMELINE -->
          <div
            class="mb-8 flex justify-between items-center w-full right-timeline"
          >
            <div class="order-1 w-full sm:w-5/12"></div>
            <div
              class="z-20 flex items-center order-1 bg-sky-200 shadow-xl w-8 h-8 rounded-full dark:bg-sky-500"
            >
              <h1 class="mx-auto font-semibold text-lg text-white">2</h1>
            </div>
            <div
              class="order-1 bg-white-400 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4"
            >
              <h3 class="mb-3 font-bold text-sky-500 text-xl">2021-Present</h3>
              <h5
                class="text-medium font-semibold leading-snug tracking-wide text-slate-900 text-opacity-100 dark:text-white "
              >
                Emilio Aguinaldo College Cavite
              </h5>
              <p>Bachelor of Science in Computer Science</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  {/if}

  <!-- WORK EXPERIENCE SECTION LG -->
  {#if y >= 1400}
    <section
      id="workexp"
      class="flex flex-col gap-24 pb-40 sm:hidden md:block lg:block"
    >
      <h3 class="text-2xl font-bold poppins text-sky-500 slide-right">
        <div
          class="border border-black relative w-0 h-10 -left-2 top-[35px] dark:border-white"
        ></div>
        Work Experience
      </h3>
      <!-- TIMELINE -->
      <div class="container mx-auto w-full h-full slide-tl">
        <div class="relative wrap overflow-hidden p-10 h-full">
          <div
            class="border-2-2 absolute border-opacity-20 border-sky-700 dark:border-sky-200 h-full border"
            style="left: 50%"
          ></div>

          <!-- LEFT TIMELINE -->
          <div
            class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
          >
            <div class="order-1 w-full sm:w-5/12"></div>
            <div
              class="z-20 flex items-center order-1 bg-sky-200 dark:bg-sky-500 shadow-xl w-8 h-8 rounded-full"
            >
              <h1 class="mx-auto text-white font-semibold text-lg">1</h1>
            </div>
            <div
              class="order-1 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4"
            >
              <h3 class="mb-3 font-bold text-sky-500 text-xl">
                Sept 2021 - Jan 2022
              </h3>
              <h5
                class="text-medium font-semibold leading-snug tracking-wide text-slate-900 text-opacity-100 dark:text-white"
              >
                Senior Video Editor
              </h5>
              <p>Kapital DAO</p>
            </div>
          </div>

          <!-- RIGHT TIMELINE -->
          <div
            class="mb-8 flex justify-between items-center w-full right-timeline"
          >
            <div class="order-1 w-full sm:w-5/12"></div>
            <div
              class="z-20 flex items-center order-1 bg-sky-200 dark:bg-sky-500 shadow-xl w-8 h-8 rounded-full"
            >
              <h1 class="mx-auto font-semibold text-lg text-white">2</h1>
            </div>
            <div
              class="order-1 bg-white-400 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4"
            >
              <h3 class="mb-3 font-bold text-sky-500 text-xl">
                May 2022 - Aug 2022
              </h3>
              <h5
                class="text-medium font-semibold leading-snug tracking-wide text-slate-900 text-opacity-100 dark:text-white"
              >
                Graphic Editor
              </h5>
              <p>Kapital DAO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  {/if}

  <!-- EDUCATION SECTION SM -->
  {#if y >= 2650}
    <section
      id="education"
      class="flex flex-col gap-24 pb-40 sm:block md:hidden lg:hidden"
    >
      <h3 class="text-2xl font-bold poppins text-sky-500 slide-right pb-10">
        <div
          class="border border-black relative w-0 h-10 -left-2 top-[35px] dark:border-white"
        ></div>
        Education
      </h3>
      <!-- TIMELINE -->
      <ol
        class="relative border-s border-sky-200 dark:border-sky-700 slide-tl"
      >
        <li class="mb-10 ms-4">
          <div
            class="absolute w-3 h-3 bg-sky-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-sky-700"
          ></div>
          <time
            class="mb-1 text-sm font-normal leading-none text-sky-400 dark:text-sky-500"
            >2021-Present</time
          >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Emilio Aguinaldo College Cavite
          </h3>
          <p
            class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
          >
            Bachelor of Science in Computer Science
          </p>
        </li>
        <li class="mb-10 ms-4">
          <div
            class="absolute w-3 h-3 bg-sky-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-sky-700"
          ></div>
          <time
            class="mb-1 text-sm font-normal leading-none text-sky-400 dark:text-sky-500"
            >2019-2021</time
          >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            St.Jude Parish School
          </h3>
          <p
            class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
          >
            STEM Graduate
          </p>
        </li>
      </ol>
    </section>
  {/if}

  <!-- WORK EXPERIENCE SM -->
  {#if y >= 3150}
    <section
      id="education"
      class="flex flex-col gap-24 sm:block md:hidden lg:hidden"
    >
      <h3 class="text-2xl font-bold poppins text-sky-500 slide-right pb-10">
        <div
          class="border border-black relative w-0 h-10 -left-2 top-[35px] dark:border-white"
        ></div>
        Work Experience
      </h3>
      <!-- TIMELINE -->
      <ol
        class="relative border-s border-sky-200 dark:border-sky-700 slide-tl"
      >
        <li class="mb-10 ms-4">
          <div
            class="absolute w-3 h-3 bg-sky-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-sky-700"
          ></div>
          <time
            class="mb-1 text-sm font-normal leading-none text-sky-400 dark:text-sky-500"
            >Sept 2021 - Jan 2022</time
          >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Senior Video Editor
          </h3>
          <p
            class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
          >
            Kapital DAO
          </p>
        </li>
        <li class="mb-10 ms-4">
          <div
            class="absolute w-3 h-3 bg-sky-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-sky-700"
          ></div>
          <time
            class="mb-1 text-sm font-normal leading-none text-sky-400 dark:text-sky-500"
            >May 2022 - Aug 2022</time
          >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Graphic Editor
          </h3>
          <p
            class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
          >
            Kapital DAO
          </p>
        </li>
      </ol>
    </section>{/if}

  <!-- PROJECTS SECTION LG -->
  {#if y >= 2350}
    <section id="projects" class="flex flex-col gap-24 py-20 sm:hidden md:block lg:block slide-right">
      <div class="flex flex-col text-left gap-5">
        <h3 class="text-2xl font-bold poppins text-sky-500 pb-20">
          <div
            class="border border-black relative w-0 h-10 -left-2 top-[35px] dark:border-white"
          ></div>
          PROJECTS
        </h3>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
        <a
          href="https://jwxfree.github.io/PalpitateCafe/landingPage/"
          target="_blank"
          class="font-medium"
          ><Projects proj={proj[0]}>
            <p>
              a simple landing page for a local cafe shop near me, minimalist
              and modern design. very calming vibe of website and has the menu
              of the local cafe shop.
            </p>
          </Projects></a
        >
        <a
          href="https://jwxfree.github.io/VioDev/index.html"
          target="_blank"
          class="font-medium"
        >
          <Projects proj={proj[1]}>
            <p>
              a landing page for a tech company the offers software solutions
              and other tech related services.
              <br>
              <br>
              
            </p>
          </Projects>
        </a>
        <a
          href="https://jwxfree.github.io/PalpitateCafe/PoSS"
          target="_blank"
          class="font-medium"
        >
          <Projects proj={proj[2]}>
            <p>
              small and compact but very modern and has great ui point of sale
              system that covers all the latest features of a modern Point of
              sale system in the market.
            </p>
          </Projects>
        </a>
      </div>
    </section>
  {/if}
  <!-- PROJECTS SECTION SM-->
  {#if y >= 3750}
    <section id="projects" class="flex flex-col gap-24 py-20 sm:block md:hidden lg:hidden slide-right">
      <div class="flex flex-col text-left gap-2 pb-20">
        <h3 class="text-2xl font-bold poppins text-sky-500">
          <div
            class="border border-black relative w-0 h-10 -left-2 top-[35px]"
          ></div>
          PROJECTS
        </h3>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
        <a
          href="https://jwxfree.github.io/PalpitateCafe/landingPage/"
          target="_blank"
          class="font-medium"
          ><Projects proj={proj[0]}>
            <p>
              a simple landing page for a local cafe shop near me, minimalist
              and modern design. very calming vibe of website and has the menu
              of the local cafe shop.
            </p>
          </Projects></a
        >
        <a
          href="https://jwxfree.github.io/VioDev/index.html"
          target="_blank"
          class="font-medium"
        >
          <Projects proj={proj[1]}>
            <p>
              a landing page for a tech company the offers software solutions
              and other tech related services.
              <br />
              <br />
              <br />
            </p>
          </Projects>
        </a>
        <a
          href="https://jwxfree.github.io/PalpitateCafe/PoSS"
          target="_blank"
          class="font-medium"
        >
          <Projects proj={proj[2]}>
            <p>
              small and compact but very modern and has great ui point of sale
              system that covers all the latest features of a modern Point of
              sale system in the market.
            </p>
          </Projects>
        </a>
      </div>
    </section>
  {/if}
</main>
