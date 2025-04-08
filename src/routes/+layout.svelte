<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { ModeWatcher } from "mode-watcher";
</script>

<main class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">

<ModeWatcher />
{@render children?.()}
</main>
