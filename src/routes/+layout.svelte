<script lang="ts">
	import FloatingButton from '$lib/components/floating_button.svelte';
	import mk from '$lib/images/mk_logo.svg';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Kilian Mayer</title>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/>
	<link rel="icon" type="image/svg+xml" href={mk} />
</svelte:head>

<main class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
	<ModeWatcher />
	{@render children?.()}
	<FloatingButton />
</main>
