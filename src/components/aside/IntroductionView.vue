<template>
    <div class="introduction-view">
        <div class="bg-img">
            <img src="../../assets/bg.jpg" width="100%" height="100%" alt="">
        </div>
        <div class="bg-person">
            <h2>ZWB</h2>
            <p>一个又菜又笨的 Java 初学者</p>
        </div>
    </div>
</template>

<script>
    import panel from '../utils/Panel'
    export default {
        name: "IntroductionView",
        components:{
            panel
        }
    }
</script>

<style scoped>

    .introduction-view{
        width: 100%;
        height: 350px;
    }
    .bg-img{
        width: 100%;
        height: 40%;
    }
    .bg-person{
        width: 100%;
        height: 60%;
        border: 1px solid #CCCCCC;
        border-top: none;

    }
    h2{
        line-height: 80px;
        text-align: center;
        font-family: Microsoft YaHei;
    }
    p{
        text-align: center;
        color: gray;
    }
</style>
