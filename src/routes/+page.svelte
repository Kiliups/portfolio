<script>
	import { onMount } from 'svelte';
	import me from '$lib/images/me.jpg';

	const github = 'https://github.com/kiliups';
	const linkedin = 'https://www.linkedin.com/in/kilian-mayer-713021211/';

	let arr = [
		'Computer Science Student',
		'Backend Engineer',
		'Frontend Engineer',
		'Fullstack Developer',
		'Software Developer!'
	];
	let displayText = '';
	let index = 0;
	let arrIndex = 0;
	let isDeleting = false;
	let typeingTimeout = 100;
	let switchingTimeout = 500;


	function typeWriter() {
		let text = arr[arrIndex];
		if (!isDeleting) {
			if (index < text.length) {
				displayText += text.charAt(index);
				index++;
				setTimeout(typeWriter, typeingTimeout);
			} else {
				if (arrIndex !== arr.length - 1) {
					setTimeout(() => {
						isDeleting = true;
						typeWriter();
					}, switchingTimeout);
				}
			}
		} else {
			if (index > 0) {
				displayText = displayText.slice(0, -1);
				index--;
				setTimeout(typeWriter, 75);
			} else {
				isDeleting = false;
				if (arrIndex < arr.length - 1) {
					arrIndex++;
				} else {
					arrIndex = 0;
				}
				setTimeout(typeWriter, switchingTimeout);
			}
		}
	}

	// Starte den Effekt, sobald die Komponente geladen wird
	onMount(() => {
		typeWriter();
	});
</script>

<svelte:head>
	<title>Kilian Mayer</title>
	<meta name="description" content="Kilian Mayer" />
</svelte:head>

<section>
	<div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-8">
		<div class="flex flex-col gap-4 lg:justify-between lg:h-full">
			<div class="flex flex-col gap-4">
				<h1 class="font-bold text-5xl text-white">Kilian Mayer</h1>
				<p class="text-xl text-white">I'm a <span
					class="underline text-monochrome_accent">{displayText}</span>
				</p>
				<p class="text-l text-white text-opacity-75 w-4/5">
					Computer science student at OTH Regensburg with hands-on experience in software development
					and a passion for technology.
				</p>
			</div>
			<div class="flex flex-row gap-4 items-center">
				<button class="text-gray-400" on:click={() =>window.open(github)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-github"
							 viewBox="0 0 16 16">
						<path
							d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
					</svg>
				</button>
				<button class="text-gray-400" on:click={() => window.open(linkedin)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-linkedin"
							 viewBox="0 0 16 16">
						<path
							d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
					</svg>
				</button>
			</div>
		</div>
		<div class="flex flex-col">
			<div class="relative inline-block md:w-1/3 lg:w-1/2 w-1/2">
				<div
					class="absolute inset-0 border-2 border-monochrome_accent transform translate-x-5 translate-y-5 pointer-events-none"></div>
				<div class="relative z-10 shadow-xl">
					<picture>
						<img src={me} alt="Kilian Mayer" />
					</picture>
				</div>
			</div>
			<h2 class="text-xl text-white mt-12 mb-8">About</h2>
			<div class="flex flex-col gap-2 text-l text-white text-opacity-75">
				<p>
					Hello! I’m Kilian, a computer science student at OTH Regensburg. With a solid foundation
					in programming languages such as C, Java, Kotlin, Python, JavaScript, HTML, and CSS, I am constantly
					expanding my technical skill set. I have experience with a variety of frameworks and
					technologies, including Exasol, PostgreSQL, Spring, Flutter, Next.js and React.
				</p>
				<p>
					My passion for technology drives me to take on personal projects that challenge my skills
					and creativity. A favourite project of mine is the maintaining and set up of home server
					using Docker, where I delve into system configuration and containerization to enhance my
					understanding of software deployment.
				</p>
				<p>
					When I’m not coding, you can usually find me listening to music or at concerts — those
					moments really spark my creativity! I’m also a football fan and love playing it aswell.
					In addition, I’m passionate about winter sports such as ice hockey and also serve as a
					voluntary firefighter, which has taught me the importance of teamwork and quick
					decision-making. I believe that having a mix of interests like these helps me think
					outside the box and work better with others.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
</style>
