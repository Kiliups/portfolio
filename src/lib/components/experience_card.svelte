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
	class={`group grid grid-cols-3 ${link && 'cursor-pointer'} items-baseline gap-4 border-none bg-transparent shadow-none lg:gap-8 lg:p-4 lg:hover:bg-slate-300/75 lg:hover:shadow-md lg:hover:dark:bg-slate-800/75 ${className}`}
	onclick={() => (link ? window.open(link, '_blank') : null)}
>
	<header>
		<p class="text-sm opacity-50">{date}</p>
	</header>
	<div class="col-span-2 flex flex-col gap-1">
		<div class="flex flex-row items-center gap-2 font-bold">
			<h3>{title}</h3>
			{#if link}
				<ChevronsUp
					class="rotate-45 text-indigo-400 opacity-0 transition-opacity group-hover:opacity-100 dark:text-indigo-300"
				/>
			{/if}
		</div>
		<p class="opacity-75">{company}</p>
		<p class="text-sm opacity-75">{description}</p>
		{#if badges.length > 0}
			<div class="flex flex-row flex-wrap gap-2">
				{#each badges as badge}
					<Badge
						class="border-transparent bg-indigo-300/75 font-semibold text-indigo-950 hover:bg-indigo-300/75"
					>
						<p>{badge}</p>
					</Badge>
				{/each}
			</div>
		{/if}
	</div>
</Card>
