<script>
	import { onMount } from 'svelte';

	let arr = [
		'Computer Science Student',
		'Backend Engineer',
		'Frontend Engineer',
		'Fullstack Developer',
		'Software Developer!'
	];
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

	// Starte den Effekt, sobald die Komponente geladen wird
	onMount(() => {
		typeWriter();
	});
</script>

<span>{displayText}</span>
