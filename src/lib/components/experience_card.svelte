<script lang="ts">
	import { ChevronsUp } from '@lucide/svelte';

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

<a
	class={`group grid grid-cols-3 ${link && 'cursor-pointer'} lg:hover:bg-base02/50 items-baseline gap-4 rounded border-none bg-transparent shadow-none lg:gap-8 lg:p-4 lg:hover:shadow-sm  ${className}`}
	href={link}
	target="_blank"
	rel="noopener noreferrer"
>
	<header>
		<p class="text-sm opacity-50">{date}</p>
	</header>
	<div class="col-span-2 flex flex-col gap-1">
		<div class="flex flex-row items-center gap-2 font-bold">
			<h3>{title}</h3>
			{#if link}
				<ChevronsUp
					class="text-base07 rotate-45 opacity-0 transition-opacity group-hover:opacity-100"
				/>
			{/if}
		</div>
		<p class="opacity-75">{company}</p>
		<p class="text-sm opacity-75">{description}</p>
		{#if badges.length > 0}
			<div class="flex flex-row flex-wrap gap-2">
				{#each badges as badge}
					<div
						class="bg-base07/75 dark:bg-base07 text-base00 rounded-xs px-2 py-1 text-xs font-semibold"
					>
						<p>{badge}</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</a>
