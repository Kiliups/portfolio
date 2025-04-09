<script>
	import { getLocale } from '$lib/paraglide/runtime';
	import { onMount } from 'svelte';

	let arr =
		getLocale() === 'en'
			? ['computer science student', 'fullstack developer', 'software developer!']
			: ['Informatikstudent', 'Fullstackentwickler', 'Softwareentwickler!'];
	let displayText = $state('');

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

	onMount(() => {
		typeWriter();
	});
</script>

<span>{displayText}</span>
