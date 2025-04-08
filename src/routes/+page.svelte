<script>
	import { m } from '$lib/paraglide/messages.js';
    import { setLocale } from '$lib/paraglide/runtime';
    import { Button } from "$lib/components/ui/button/index.js";
	import { Mail, ScrollText } from "@lucide/svelte";

</script>

<div class="lg:flex lg:justify-between lg:gap-4">
    <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24 ">
      <div class="flex flex-col gap-4">
        <div class="relative inline-block w-44 mb-6">
          <div class="absolute inset-0 bg-primary/20 backdrop-blur-md transform translate-x-4 translate-y-4"></div>
          <div class="relative z-10 shadow-xl">
            
          </div>
        </div>
        <h1 class="text-5xl font-bold">Kilian Mayer</h1>
        <p class="text-xl">
          I'm a 
        </p>
        <p class="opacity-75">{m.hello_world({ name: 'SvelteKit User' })}</p>
        <nav>
          <ul class="flex flex-col gap-4 mt-8 not-lg:hidden">
            <li>
              <a href="#about" class="opacity-50">
                About
              </a>
            </li>
            <li>
              <a href="#experiecne" class="opacity-50">
                Expericene
              </a>
            </li>
            <li>
              <a href="#skills" class="opacity-50">
                Skills
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex flex-row gap-4 text-foreground/80 mt-4 lg:mt-0">
        <Button
          variant="outline"
          size="icon"
          class="text-2xl"
          title="github"
        >
          <i class="fa fa-github" ></i>
        </Button>
        <Button
          variant="outline"
          size="icon"
          class="text-xl"
          title="linkedin"
        >
          <i class="fa fa-linkedin" ></i>
        </Button>
        <Button variant="outline" size="icon" title="email">
          <Mail class="size-5" />
        </Button>
        <Button variant="outline" size="icon" title="curriculum vitae">
          <ScrollText class="size-5" />
        </Button>
      </div>
    </header>
    <main class="pt-24 lg:w-[55%] lg:py-24">
      <section id="about">about</section>
    </main>
  </div>

    