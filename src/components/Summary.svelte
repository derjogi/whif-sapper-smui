<script>
    import {insertOpinion} from '../firebase'
    import Textfield from '@smui/textfield';
    import Button from '@smui/Button';

    export let topic;
    export let id;
    let opinion = '';
    let submitted = false;

    function submitOpinion() {
        console.log("Submitting");
        insertOpinion(id, {'opinion': opinion});
        opinion = '';
        submitted = true;
    }
</script>
<br>
What do you think might happen?
<br>
<br>
<form on:submit|preventDefault={submitOpinion}>
    <Textfield textarea
            label="Enter text"
            bind:value={opinion}
    />
    <br>
    <br>
    <Button disabled={!opinion} type=submit>
        Submit
    </Button>
</form>

{#if submitted}
    We value your opinion!
{/if}
<style>

</style>