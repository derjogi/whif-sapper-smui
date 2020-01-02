<svelte:head>
	<title>Create</title>
</svelte:head>

<script>
	import Button from '@smui/button';
	import Card from '@smui/card'
	export let topic;
</script>

<h1>What happens if ...</h1>

{topic.title}
{topic.content}