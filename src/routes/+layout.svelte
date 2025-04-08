<script lang="ts">
	import FloatingButton from '$lib/components/floating_button.svelte';
	import '../app.css';
	let { children } = $props();
	import { ModeWatcher } from "mode-watcher";
</script>
<head>
	<link
	  rel="stylesheet"
	  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/>
  </head>
  
<main class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
<ModeWatcher />
{@render children?.()}
<FloatingButton/>
</main>
