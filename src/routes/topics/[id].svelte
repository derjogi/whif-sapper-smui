<script context="module">
	import {fetchDoc} from "../../firebase";

	export async function preload({ params, query }) {
		// the `id` parameter is available because this file is called [id].svelte
		let doc = await fetchDoc("topics", params.id);
		// We expect only one document to be returned from fetchDoc!
		return { topic : doc[0], id : params.id}
	}
</script>

<script>
	import Summary from "../../components/Summary.svelte";
	export let topic;
	export let id;
</script>


<svelte:head>
	<title>{topic.title}</title>
</svelte:head>

<h1>{topic.title}</h1>

<div class='content'>
	{topic.content}
</div>

<Summary topic={topic} id={id}/>


<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
</style>