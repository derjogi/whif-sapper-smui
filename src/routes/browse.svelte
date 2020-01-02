<svelte:head>
	<title>Create</title>
</svelte:head>

<script context="module">
	import {firestore} from '../firebase';

	export async function preload(page, session) {
		let db = await firestore();
		let promisedTopics = db.collection("topics").get();
		console.log("Topics: ", promisedTopics.docs);
		return { topics: promisedTopics.docs }
	}
</script>

<script>
	import Button from '@smui/button';
	import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons}  from '@smui/card'

	let title = '';
	let text = '';
	let topics = [];	// This will be populated by the 'preload' function defined above
</script>

<h1>What happens if ...</h1>

{#each topics as topic}
	{topic.title}
	{topic.content}
	<Card>
		<Content>
			{topic.title}
			{topic.content}
		</Content>
		<Actions fullBleed>
			<Button href="_topic"/>
		</Actions>
	</Card>
{/each}