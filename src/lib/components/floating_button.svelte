<script>
	import { getLocale, setLocale } from '$lib/paraglide/runtime';
	import { Moon, Sun } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';
	import { Button } from './ui/button';
</script>

<ul class="fixed bottom-8 right-8 z-20 flex flex-row gap-2 lg:top-8">
	<li>
		<Button onclick={toggleMode} variant="outline" size="icon">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</li>
	<li>
		<Button
			variant="outline"
			size="icon"
			onclick={() => {
				if (getLocale() === 'en') {
					setLocale('de');
				} else if (getLocale() === 'de') {
					setLocale('en');
				}
			}}
			class="font-bold"
			>{#if getLocale() === 'en'}
				DE
			{:else if getLocale() === 'de'}
				EN
			{/if}
		</Button>
	</li>
</ul>
