<svelte:head>
	<title>Topics</title>
</svelte:head>

<script context="module">
	import {fetch} from '../../firebase';

	export async function preload(page, session) {
		let topics = await fetch("topics");
		return { topics };
	}
</script>

<script>
	import TopicCard from "../../components/TopicCard.svelte";
	export let topics;
</script>

<h1>What happens if ...</h1>

{#each topics as topic}
	<TopicCard topic={topic}/>
{/each}