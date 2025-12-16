<script lang="ts">
  import FloatingButton from "$lib/components/floating_button.svelte";
  import { ModeWatcher } from "mode-watcher";
  import "../app.css";
  let { children } = $props();
</script>

<svelte:head>
  <title>Kilian Mayer</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link rel="icon" href="/favicon.ico" />
  <meta
    name="description"
    content="Kilian Mayer – Computer science student at OTH Regensburg with hands-on experience in software development, fullstack developer and passionate about innovative tech solutions."
  />
</svelte:head>

<main
  class="mx-auto min-h-screen max-w-screen-xl scroll-smooth px-6 py-12 font-sans antialiased md:px-12 md:py-16 lg:py-0 text-foreground"
>
  <ModeWatcher />
  {@render children?.()}
  <FloatingButton />
</main>
