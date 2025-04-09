<script lang="ts">
	import { ChevronsUp } from '@lucide/svelte';
	import { Badge } from './ui/badge';
	import { Card } from './ui/card';

	let {
		title,
		date,
		company,
		description = null,
		link = null,
		badges = [],
		className = null
	} = $props();
</script>

<Card
	class={`group flex ${link && 'cursor-pointer'} flex-row items-baseline gap-8 border-none bg-transparent shadow-none lg:p-4 lg:hover:bg-slate-300/75 lg:hover:shadow-md lg:hover:dark:bg-slate-800/75 ${className}`}
	onclick={() => (link ? window.open(link, '_blank') : null)}
>
	<header>
		<p class="whitespace-nowrap text-sm opacity-50">{date}</p>
	</header>
	<div class="flex flex-col gap-1">
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
		{#if badges.length > 0}
			<div class="flex flex-row flex-wrap gap-2">
				{#each badges as badge}
					<Badge
						class="border-transparent bg-indigo-300/75 text-indigo-900/80 hover:bg-indigo-300/75"
					>
						<p>{badge}</p>
					</Badge>
				{/each}
			</div>
		{/if}
	</div>
</Card>
