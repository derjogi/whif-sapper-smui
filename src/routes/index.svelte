<script context="module">
	import {firestore} from './../firebase';
	let topics = [];
	export async function preload(page, session) {
		console.log('Waiting for firestore connection in index.svelte...');
		let db = await firestore();
		let promisedTopics = await db.collection("topics").get();
		// console.log("Topics: ", promisedTopics);
		// console.log("Topics: ", promisedTopics.docs);
		return { topics: promisedTopics.docs }
	}
</script>

<script>
	import Button, {Label, Icon} from '@smui/button';
</script>

<svelte:head>
	<title>Sapper SMUI project template</title>
</svelte:head>

<h1>Great success!</h1>
{#each topics as topic}
	Topics from *katching*:
	{topic.data().title}
	{:else}No Topics fetched!
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