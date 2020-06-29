<template>
    <div class="section">
        <div class="section-title">
            {{title}}
        </div>
        <div class="slot-other">
            <slot name="other"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SectionTitle",
        props:{
            title:''
        }
    }
</script>

<style scoped>

    .section{
        width: 100%;
        height: 100px;
        background-image: url("../../assets/title-bg.jpg");
    }

    .section-title{
        float: left;
        width: 20%;
        height: 100%;
        font-size: 20px;
        line-height: 90px;
        text-align: center;
    }

    .slot-other{
        float: left;
        width: 80%;
        height: 100%;
    }
</style>
