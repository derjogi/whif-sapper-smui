<script context="module">
	import {fetch} from "../firebase";
	export async function preload(page, session) {
		let docs = await fetch("topics");
		return { topics : docs };
		// the name needs to be the same as the variable specified in the other script section.
		// Note that variables from the module context don't (live) update!
	}
</script>

<script>
	import Button, {Label, Icon} from '@smui/button';
	export let topics = [];
</script>

<svelte:head>
	<title>WHIF Prototype</title>
</svelte:head>

<h1>You're wondering WHIF or not?</h1>
Just some of our topics...<br>
{#each topics as topic}
	{topic.title}<br>
	{:else}Such empty :-( Why don't you go and <a href="create">create</a> a new topic?
{/each}

<!-- svelte-ignore a11y-unused-css-selector -->
<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>