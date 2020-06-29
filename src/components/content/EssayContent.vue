<template>
    <div class="essay-container">
        <section-title :title=" '随笔 | Essay' "></section-title>
        <talk-bar :nid="-1"></talk-bar>
    </div>
</template>

<script>
    import SectionTitle from '../view/SectionTitle'
    import TalkBar from '../view/TalkBar'


    export default {
        name: "EssayContent",
        components:{
            SectionTitle,
            TalkBar
        }
    }
</script>

<style scoped>

    .essay-container{
        width: 80%;
        height: 100%;
        margin-left: 20%;
    }

</style>
