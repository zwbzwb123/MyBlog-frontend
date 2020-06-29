<template>
    <div class="article-cell-container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <a  @click="toArticlePage">{{title}}</a>
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
                <i class="el-icon-view">
                    {{count}}
                </i>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "ArticleCell",
        props:{
            title:String,
            label:String,
            summary:String,
            createTime:String,
            count:Number,
            id:Number
        },
        methods:{
            toArticlePage(){
                this.$router.push('/article/'+this.id)
            }
        }
    }
</script>

<style scoped>

    .article-cell-container{
        width: 100%;
        margin-top: 20px;
        height: 100%;
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
