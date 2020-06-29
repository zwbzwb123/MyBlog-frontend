<template>
    <div class="talk-bar-container">
        <login-from @loginSuccess="loginSuccess" @cancle="cancle" :is-show="LoginFromShow" class="login"></login-from>
        <el-divider></el-divider>
        <a @click="LoginFromShow = true" v-if="!isLogin">还没登陆？点击这里！</a>
        <a v-if="isLogin">欢迎留言，{{user.username}}！</a>
        <comment-editor class="editor" :buttonText=" '发表' " @submit="publish"></comment-editor>
        <comment-box :comment="comment" v-for="comment in comments" :key="comment.id"></comment-box>
        <h4 style="text-align: center;color: gray" v-if="comments.length == 0">本文暂时无人评论...</h4>
    </div>
</template>

<script>
    import LoginFrom from '../view/LoginForm'
    import CommentEditor from 'comment-message-editor'
    import CommentBox from '../view/CommentBox'

    export default {
        name: "TalkBar",
        data(){
            return {
                data:'123',
                LoginFromShow:false,
                user:{},
                isLogin:false,
                comments:[]
            }
        },
        props:{
            nid:Number
        },
        components:{
            LoginFrom,
            CommentEditor,
            CommentBox
        },
        methods:{
            publish(content){
                let userInfo = sessionStorage.getItem("user")
                if (userInfo == null){
                    this.$message.error("请先登陆！")
                    return;
                }
                this.$http.put('/comment',{
                    'articleId':this.nid,
                    'username':this.user.username,
                    'content':content
                }).then(res => {
                    if (res.data.code == 'SUCCESS'){
                        this.comments.push(res.data.comment)
                    }
                    this.$message.info(res.data.msg)
                }).catch(res =>{
                    this.$message.error("评论失败，请退出重试")
                })
            },
            cancle(){
                this.LoginFromShow = false
            },
            loginSuccess(){
                this.user = JSON.parse(sessionStorage.getItem('user'))
                console.log(this.user.username)
                this.LoginFromShow = false
                this.isLogin = true
            }
        },
        created() {
            this.$http.get('/comment/'+this.nid).then(res =>{
                this.comments = res.data.comments
                this.comments.forEach( comment => {
                    comment.createTime = comment.createTime.substring(0,10)
                })
            })

            this.user = JSON.parse(sessionStorage.getItem('user'))
            if(this.user == null){
                return;
            }
            this.LoginFromShow = false
            this.isLogin = true
        }
    }
</script>

<style scoped>
    .talk-bar-container{
        width: 100%;
        height: 200px;
    }
    .login{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 10;
    }
    .editor{
        z-index: 1;
    }

</style>
