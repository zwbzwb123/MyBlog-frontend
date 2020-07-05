<template>
    <div class="comment-container">
        <div class="avator">
            <img src="../../assets/ava.jpeg" height="80px">
        </div>
        <div class="content-container">
            <el-card class="">
                <div style="color: gray;" slot="header" class="clearfix">
                    <a >{{comment.username}}</a> 发表于 {{comment.createTime}}
                </div>
                <div  class="text item">
                    <p v-html="comment.content"></p>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommentBox",
        props:{
            comment:{}
        },
        mounted() {
            this.comment.createTime = this.comment.createTime.substring(0,10)
        }
    }
</script>

<style scoped>
    .comment-container{
        width: 100%;
        height: 120px;
        margin-top: 40px;
    }
    .avator{
        width: 10%;
        margin-top: 10px;
        float: left;
    }
    .content-container{
        float: left;
        width: 90%;
        margin-top: 10px;
    }
</style>
