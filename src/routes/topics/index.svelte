<svelte:head>
	<title>Topics</title>
</svelte:head>

<script context="module">
	import {fetch} from '../../firebase';
	export let topics;

	export async function preload(page, session) {
		return await fetch("topics");
	}
</script>

<script>
	import TopicCard from "../../components/TopicCard.svelte";

	let title = '';
	let text = '';
</script>

<h1>What happens if ...</h1>

{#each topics as topic}
	<TopicCard topic={topic}/>
{/each}