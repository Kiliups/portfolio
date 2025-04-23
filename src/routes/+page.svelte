<script lang="ts">
	import ExperienceCard from '$lib/components/experience_card.svelte';
	import Typewriter from '$lib/components/typewriter.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/paraglide/runtime';
	import { Mail, ScrollText } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let activeSection = $state('');

	let sections: Array<keyof typeof m> = ['about', 'experience'];

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
						console.log('Active section:', activeSection);
					}
				});
			},
			{ threshold: 0.75 }
		);

		sections.forEach((id) => {
			const section = document.getElementById(id);
			if (section) observer.observe(section);
		});
	});

	let footnoteLinkStyle = 'font-semibold text-foreground/75 hover:text-foreground/100';
</script>

<div class="lg:flex lg:justify-between lg:gap-4">
	<header
		class="flex flex-col gap-4 lg:sticky lg:top-0 lg:h-screen lg:w-[45%] lg:justify-between lg:py-24"
	>
		<div class="flex flex-col gap-4">
			<div class="relative mb-6 inline-block w-44">
				<div
					class="absolute inset-0 translate-x-4 translate-y-4 transform bg-primary/20 backdrop-blur-md"
				></div>
				<div class="relative z-10 shadow-xl">
					<img src="/me-wide.png" alt="Kilian Mayer" />
				</div>
			</div>
			<h1 class="text-5xl font-bold">Kilian Mayer</h1>
			<p class="text-xl">{m.i_am()} <Typewriter /></p>
			<p class="w-[75%] opacity-75">{m.short_discription()}</p>
			<nav class="hidden lg:block">
				<ul class="mt-8 flex flex-col gap-4">
					{#each sections as section}
						{#if section in m}
							<li>
								<a
									href={'#' + section}
									onclick={(e) => {
										e.preventDefault();
										document.getElementById(section)?.scrollIntoView({
											behavior: 'smooth'
										});
									}}
									class={`inline-block origin-left transform transition-transform hover:scale-125 hover:opacity-100 ${
										activeSection === section ? 'scale-125 opacity-100' : 'opacity-50'
									}`}
								>
									— {m[section]()}
								</a>
							</li>
						{/if}
					{/each}
				</ul>
			</nav>
		</div>
		<ul class="flex flex-row gap-4 opacity-75">
			<li>
				<a href="https://github.com/Kiliups" target="_blank" rel="noreferrer noopener">
					<Button variant="outline" size="icon" class="text-2xl" title="github">
						<i class="fa fa-github"></i>
					</Button>
				</a>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/kilian-johannes-mayer"
					target="_blank"
					rel="noreferrer noopener"
				>
					<Button variant="outline" size="icon" class="text-xl" title="linkedin">
						<i class="fa fa-linkedin"></i>
					</Button>
				</a>
			</li>
			<li>
				<a href="mailto:mayer-kilian@gmx.de" target="_blank" rel="noreferrer noopener">
					<Button variant="outline" size="icon" title="email">
						<Mail class="size-5" />
					</Button>
				</a>
			</li>
			<li>
				<a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
					<Button variant="outline" size="icon" title="curriculum vitae">
						<ScrollText class="size-5" />
					</Button>
				</a>
			</li>
		</ul>
	</header>
	<main class="flex flex-col gap-8 lg:mb-24 lg:w-[55%] lg:gap-24">
		<h2 class="pt-16 text-xl font-bold lg:hidden">{m.about()}</h2>
		<section id="about" class="flex flex-col gap-4 lg:px-4 lg:pt-24">
			<p>{m.about_section_1()}</p>
			<p>{m.about_section_2()}</p>
			<p>{m.about_section_3()}</p>
			<p>{m.about_section_4()}</p>
		</section>
		<h2 class="text-xl font-bold lg:hidden">{m.experience()}</h2>
		<section id="experience" class="flex flex-col gap-4">
			<ExperienceCard
				title={m.bachelor_thesis()}
				date="NOV 2024 — FEB 2025"
				company="OTH Regensburg/itestra GmbH"
				description={m.bachelor_thesis_despriction()}
				badges={['Python', 'LangChain', 'Pandas', 'LaTex']}
			/>
			<ExperienceCard
				title={m.student_software_developer()}
				date="SEPT 2023 — JAN 2025"
				company="itestra GmbH"
				description={m.student_software_developer_description()}
				link="https://www.itestra.de/"
				badges={[
					'C',
					'Java',
					'Spring Boot',
					'TypeScript',
					'Next.js',
					'React',
					'Tailwind CSS',
					'PostgreSQL',
					'Oracle'
				]}
			/>
			<ExperienceCard
				title={m.bachelor_degree()}
				date="OCT 2021 — JUL 2025"
				company="OTH Regensburg"
				link="https://www.oth-regensburg.de/studiengang/informatik-studieren-bachelor"
				badges={[
					'C',
					'Java',
					'Kotlin',
					'Dart',
					'Python',
					'JavaScript',
					'Flutter',
					'HTML/CSS',
					'PostgreSQL',
					'Exasol',
					getLocale() === 'en'
						? 'Algorithms and Data Structures'
						: 'Algorithmen und Datenstrukturen'
				]}
			/>
		</section>
		<!--<h2 class="text-xl font-bold lg:hidden">{m.projects()}</h2>-->
		<p class="text-sm text-foreground/50">
			Built with
			<a href="https://svelte.dev" class={footnoteLinkStyle}>Svelte</a>,
			<a href="https://tailwindcss.com" class={footnoteLinkStyle}>Tailwind CSS</a>
			and
			<a href="https://ui.shadcn.com/" class={footnoteLinkStyle}>Shadcn</a>.
		</p>
	</main>
</div>
