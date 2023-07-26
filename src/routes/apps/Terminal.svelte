<script>
    import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import TerminalInfo from '$lib/components/TerminalInfo.svelte';
    import Titlebar from "$lib/components/Titlebar.svelte";
    import App from "$lib/components/App.svelte";

    let title = "Terminal"

    const AppDetails = {
        height: "25rem",
        width: "40rem"
    }

	let outputContainer;
	onMount(() => outputContainer = document.querySelector('div.output'));
	
	let input;
	let outputs = [];
	let commands = ["cx", "pm", "ux", "clear", "neofetch"];
	let commandsFormatted = new Intl.ListFormat('en', {type: "conjunction"}).format(commands);

	function neofetch() {
		return `<br>
		<div class="neofetch flex flex-ac" style="gap: 1rem;">
			<img src="/src/icons/RaccaiLogo.svg" alt="logo" width="100rem" height="100rem"/>
			<div class="text">
				<b>Operating System: </b>EdventurousOS<br>
				<b>Created by:</b>
					<a style="color: #66BEB9;" href="https://github.com/Raccai" target="_blank">EJ (Raccai)</a><br>
				<b>Created with:</b>
					<a style="color: #66BEB9;" href="https://kit.svelte.dev" target="_blank">SvelteKit</a><br>
			</div>
		</div>
		`
	}

	function cx() {
		return `<br>
		<div class="neofetch flex flex-ac" style="gap: 1rem;">
			<img src="/src/icons/MainIcon.svg" alt="logo" width="100rem" height="100rem"/>
			<div class="text">
				<b>Customer Experience: </b>Customer experience (CX) refers to how a business engages with its customers at every
				point of their journey with the company—from marketing to sales to customer service and everywhere in between<br>
				<b>Customer Experience at Edventure: </b>Edventure, as I have come to understand it, puts great importance on
				customer experience, trying to the best of their capacity to learn from customers and their experience. To Edventure,
				the customer deserves the best experience when interacting with its brand, and while I was there, it showed.<br>
				<b>Internship Insight: </b>As interns, we were give the opportunity to learn from one of the veteran project managers at the
				company. We were taught the nitty-gritty details of customer experience along with certain methods to attain it.<br>
			</div>
		</div>
		`
	}

	function pm() {
		return `<br>
		<div class="neofetch flex flex-ac" style="gap: 1rem;">
			<img src="/src/icons/Folder.svg" alt="logo" width="100rem" height="100rem"/>
			<div class="text">
				<b>Project Management: </b>Project management is the application of processes, methods, skills, knowledge and experience
				to achieve specific project objectives according to the project acceptance criteria within agreed parameters.<br>
				<b>Project Management at Edventure: </b>From what I've seen, Edventure places a great deal of importance on the way
				they manage their projects. From the cadences and meetings to the way the teams communicate every minute detail of a project
				and tear down a project to find its pain points, people at Edventure always try their best to bring about a great product
				with consideration of resources and time.<br>
				<b>Internship Insight: </b>As interns, we were give the opportunity to learn from one of the veteran project managers at the
				company. We learned the importance of project management not only by theory but by application, too, though this ultimately
				depended on the role you play as an intern (i.e. UI/UX designer will have less on-hand project management work than 
				a project manager intern).<br>
			</div>
		</div>
		`
	}

	function ux() {
		return `<br>
		<div class="neofetch flex flex-ac" style="gap: 1rem;">
			<img src="/src/icons/Cards.svg" alt="logo" width="100rem" height="100rem"/>
			<div class="text">
				<b>User Experience: </b>User experience (UX) design is the process design teams use to create products that provide meaningful
				and relevant experiences to users. UX design involves the design of the entire process of acquiring and integrating the product,
				including aspects of branding, design, usability and function.<br>
				<b>User Experience at Edventure: </b>The Product team at Edventure is responsible for creating a smooth user experience, from
				initial landing to purchase. The lead UI/UX designer leads in this, and ensures that as soon as the user lands on the website
				they are guided accordingly, regardless of background (i.e. age). They go very far to ensure UX quality, having meetings
				breaking down the website design, even surveying parents and learners on their opinions on the website user experience.<br>
				<b>Internship Insight: </b>As a UI/UX intern, I was taught very well the importance of UX. I designed multiple versions of 
				the blogs page and the homepage of the website as studies, and was given ample feedback through
				one-on-one sessions to improve not only in keeping
				close to the brand image but also ensuring user experience is not sacrificed for visual stimulation.<br>
			</div>
		</div>
		`
	}
	
	function produceOutput(input) {
		if (input.startsWith("neofetch")) {
			outputs = [...outputs, neofetch()];
		} else if (input === "cx") {
			outputs = [...outputs, cx()];
		} else if (input === "pm") {
			outputs = [...outputs, pm()];
		} else if (input === "ux") {
			outputs = [...outputs, ux()];
		} else if (input === "clear") {
			outputs = [];
		} else {
			outputs = [...outputs, `${input}: <span style="color: red;">command not found</span>`];
		}
	}
	
	function handleInput(e) {
		if (e.key === "Enter") {
			input = this.value;
			produceOutput(input);
			outputContainer.scrollTop = outputContainer.scrollHeight;
			this.value = "";
		}
	}
</script>

<App {...AppDetails}>
    <Titlebar {title}/>
    <div class="content flex flex-ac flex-jc flex-dirc">
        <div class="output" bind:this={outputContainer}>
		{#if outputs.length === 0}
			<TerminalInfo {commandsFormatted}/>
		{/if}
		
		{#each outputs as output}
			<div transition:fade>
				<span style:color=#66BEB9>>>></span>
				{@html output}
			</div>
		{/each}
	</div>
	
	<div class="input flex flex-jc flex-ac">$
		<input type="text" on:keypress={handleInput}/>
    </div>
</App>

<style>
    div.content {
        gap: 0.5rem;
    }
    div.output {
		width: 100%;
        margin-top: 2rem;
        padding: 0 1rem;
		padding-bottom: 2rem;
		height: 90%;
		overflow: auto;
		position: relative;
		color: var(--color-text);
		line-height: 1.5;
	}
	div.input {
		background: var(--color-bg);
		border-top: 3px solid var(--color-primary2);
		color: var(--color-text);
		height: 10%;
		width: 100%;
		padding: 0 0.4rem;
		gap: 0.4rem;
	}
	div.input input {
		width: 100%;
		background: transparent;
		color: var(--color-text);
		margin: 0;
		outline: 0;
		padding: 0;
		border: 0;
	}
</style>