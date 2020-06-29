<template>
    <div class="top-article">
        <div class="bg-img">
            <img src="../../../assets/article-bg.jpg" width="100%" height="200px" alt="">
        </div>
        <div class="article-cell-container">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <a href="/article/0">{{title}}</a>
                    <el-tag  style="margin-left: 10px" size="mini" >
                        {{label}}
                    </el-tag>
                    <el-button style="float: right; padding: 3px 0" type="text" @click="toArticlePage">查看更多</el-button>
                </div>
                <div class="summary">
                    {{summary}}
                </div>
                <div class="info">
                    创建于:{{createTime}}
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>

    export default {
        name: "ArticleTop",
        props:{
            title:String,
            label:String,
            summary:String,
            createTime:String,
            count:Number
        },
        methods:{
            toArticlePage(){
                this.$router.push('/article/0')
            }
        }
    }
</script>

<style scoped>
    .top-article{
        margin-top: 20px;
    }
    .article-cell-container{
        width: 100%;
        height: 100%;
        margin-top: -5px;
        background: pink;
    }
    a{
        color:black;
        font-size: 20px;
    }
    a:hover{
        color: blue;
        text-decoration: underline;
    }

    .summary{
        color:gray;
    }

    .info{
        margin-top: 10px;
        color: gray;
    }
</style>
