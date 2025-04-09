<script lang="ts">
	import { ChevronsUp } from '@lucide/svelte';
	import { Card } from './ui/card';

	let { title, date, company, description = null, link = null } = $props();
</script>

<Card
	class="group flex cursor-pointer flex-row items-baseline gap-8 border-none bg-transparent shadow-none lg:p-4 lg:hover:bg-slate-300/75 lg:hover:shadow-md lg:hover:dark:bg-slate-800/75"
	onclick={() => (link ? window.open(link, '_blank') : null)}
>
	<header>
		<p class="whitespace-nowrap text-sm opacity-50">{date}</p>
	</header>
	<div class="text flex flex-col gap-1">
		<div class="flex flex-row items-center gap-2 font-bold">
			<h3>{title}</h3>
			{#if link}
				<ChevronsUp
					class="rotate-45 text-sky-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-sky-300"
				/>
			{/if}
		</div>

		<p class="opacity-75">{company}</p>
		<p class="text-sm opacity-75">{description}</p>
		<div class="flex flex-row gap-2"></div>
	</div>
</Card>
