<script>
    export let topic;
    import Button from '@smui/button';
    import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card'
</script>

<style lang="scss">
    .topicClass {
        margin: 20px;
        @include mdc-card-outline(blue, 20px);  /* does not work */
    }
</style>

<div class="topicClass">
<Card>
    <Content>
        <h1>{topic.title}</h1>
        {topic.content}
    </Content>
    <Actions fullBleed>
        <Button rel='prefetch' href='topics/{topic.id}'> {topic.title} </Button>
    </Actions>
</Card>
</div>