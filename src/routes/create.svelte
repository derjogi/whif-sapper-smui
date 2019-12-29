<svelte:head>
	<title>Create</title>
</svelte:head>

<script>
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';

	let title = '';
	let text = '';
</script>

<h1>What happens if ...</h1>

<!--<Textfield bind:value={name} label="Name" />-->
<!--<br />-->
<Textfield
		   label="... ?"
		   bind:value={title}
		   input$autocomplete="title"
		   input$aria-controls="titleHelper"
		   input$aria-describedby="titleHelper"
/>
<HelperText id="titleHelper">Enter your question that you'd like to figure out</HelperText>
<br />

<Textfield textarea
		   label="And a bit more context"
		   bind:value={text}
/>