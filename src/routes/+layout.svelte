<script lang="ts">
	import FloatingButton from '$lib/components/floating_button.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Kilian Mayer - Fullstack Developer & Computer Science Student</title>
	<meta
		name="description"
		content="Kilian Mayer – Computer science student at OTH Regensburg with hands-on experience in software development, fullstack developer and passionate about innovative tech solutions."
	/>
	<meta name="author" content="Kilian Mayer" />
	<meta name="robots" content="index, follow" />
	<link rel="icon" href="/favicon.ico" />

	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/>
</svelte:head>

<main
	class="text-foreground mx-auto min-h-screen max-w-screen-xl scroll-smooth px-6 py-12 font-sans antialiased md:px-12 md:py-16 lg:py-0"
>
	<ModeWatcher />
	{@render children?.()}
	<FloatingButton />
</main>
