<script>
    export let topic;
    import Button from '@smui/button';
    import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card'
</script>

<style>
    .topicClass {
        margin: 20px;
    }
</style>

<Card class="topicClass">
    <Content>
        <h1>{topic.title}</h1>
        {topic.content}
    </Content>
    <Actions fullBleed>
        <Button rel='prefetch' href='topics/{topic.id}'> {topic.title} </Button>
    </Actions>
</Card>