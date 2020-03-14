<script>
	export let segment;
	let pages = ["about", "create", "topics", "sense"];
	let prefetch = ["topics"];
	// adding pages to prefetch makes Sapper prefetch the page data
	// when we hover over the link or tap it on a touchscreen
	let isPrefetched = function(page) {
		return prefetch.includes(page) ? ' rel=prefetch':'';
	}
</script>

<nav>
	<ul>
		<li><a class:selected='{segment === undefined}' href='.'>home</a></li>
		{#each pages as page}
			<li><a {isPrefetched} class:selected='{segment === page}' href='{page}'>{page}</a></li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>