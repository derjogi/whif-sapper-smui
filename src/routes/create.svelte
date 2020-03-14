<svelte:head>
	<title>Create</title>
</svelte:head>

<script>
	import * as sapper from '@sapper/app';
	import {insert} from '../firebase'
	import Textfield from '@smui/textfield';
	import Button from '@smui/button';
	import HelperText from '@smui/textfield/helper-text';

	let title = '';
	let text = '';
	let submitted = false;

	function handleSubmit() {
		insert("topics", {'title': title, 'content': text});
		title = '';
		text = '';
		submitted = true;
		sapper.goto(`sense`);
	}

	function validate(event) {
		let textbox = event.target;
		if (textbox.value === '') {
			textbox.setCustomValidity('Required email address');
		} else if (textbox.validity.typeMismatch){
			textbox.setCustomValidity('please enter a valid email address');
		} else {
			textbox.setCustomValidity('');
		}
		return true;
	}
</script>

<h1>What happens if ...</h1>

<form on:submit|preventDefault={handleSubmit}
	  on:invalid={validate}
	  on:changed={validate}
	  on:input={validate}>
	<Textfield
			label="WHIF ... ?"
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
	<br>
	<Button disabled={!text||!title} type=submit>
		Submit
	</Button>
</form>

{#if submitted}
Thank you for your submission!
{/if}