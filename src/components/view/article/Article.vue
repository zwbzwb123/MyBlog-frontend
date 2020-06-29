<template>
    <div class="article-content">
        <div style="width: 100%" class="tags">
            <el-tag
                    size="small"
                    :type="labelType[0]"
                    effect="dark">
                {{ article.label }}
            </el-tag>
        </div>

        <div class="article-title">
            <h1>
                {{article.name}}
            </h1>
            <br>
        </div>

        <mavon-editor
                class="mavon"
                codeStyle="atom-one-dark"
                v-model="article.content"
                :ishljs="true"
                ref="md"
                :toolbarsFlag = "false"
                :defaultOpen = " 'preview' "
                :subfield = "false"
                :editable="false"
                :scrollStyle="false"
        />

        <TalkBar :nid="this.$route.params.articleId"></TalkBar>
    </div>
</template>

<script>
    import TalkBar from '../TalkBar'
    export default {
        name: "Article",
        created(){
            if (this.$route.params.articleId == 'top'){
                return
            }
            this.$http.get('/article/'+this.$route.params.articleId).then(res=>{
                this.article = res.data.article
            })
        },
        components:{
            TalkBar
        },
        methods:{

        },
        data(){
            return {
                labelType:['success','info','danger','warning'],
                article: {
                    name: '关于博客',
                    label:'置顶',
                    summary: '',
                    createTime: '2020-6-26',
                    count: 2,
                    content:'#### 关于博客\n' +
                        '\n' +
                        '此博客是一名菜鸟后端程序员的入门之作，同时用于记录学习到的新知识\n' +
                        '\n' +
                        '前端使用 Vue + Element + IView ，因个人审美、水平有限，前端页面只能将就着看啦~\n' +
                        '\n' +
                        '后端使用 Spring Boot\n' +
                        '\n' +
                        '如果发现BUG，请在评论区留言，感激不尽！\n' +
                        '\n' +
                        '#### 关于作者\n' +
                        '\n' +
                        '目标是成为一名优秀的 Java 后端程序员\n' +
                        '\n' +
                        '喜欢玩游戏，看电影，敲代码\n' +
                        '\n' +
                        '对技术富有一定的热情，擅于自学，对目前主流技术如：缓存、消息队列、RPC 等都有所涉猎\n' +
                        '\n' +
                        '欢迎留言，互相交流~'
                }
            }
        }
    }
</script>

<style scoped>

    .article-content{
        width: 85%;
        height: 100%;
        margin-left: 15%;
    }
    .el-tag{
        margin-top: 20px;
        margin-left: 10px;
    }
    .article-title{
        margin-top: 20px;
        margin-left:10px;
    }
    p{
        color: gray;
        padding:10px;
    }
    .summary-container{
        background: gainsboro;
    }
    .article{
        margin-left: 10px;
        margin-top: 20px;
    }
</style>
