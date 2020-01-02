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
	<title>Sapper SMUI project template</title>
</svelte:head>

<h1>Great success!</h1>
Topics from *katching*:
{#each topics as topic}
	{topic.title}<br>
	{:else}Such empty :-( Why don't you go and <a href="create">create</a> a new topic?
{/each}
<figure>
	<img alt='Borat' src='great-success.png'>
	<figcaption>HIGH FIVE!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>


<Button>Your first SMUI Button</Button>

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