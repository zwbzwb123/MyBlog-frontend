<template>
    <div class="articles-container">
        <section-title :title=" '文章 | Articles' ">
            <div slot="other"></div>
        </section-title>

        <article-top
                     :title=" '关于博客' "
                     :label="topLabel"
                     :summary=" '关于博客' "
                     :create-time=" '2020/6/26' "
                     :count="3">
        </article-top>
        <div class="infinite-list-wrapper" style="overflow:auto">
            <article-cell   :key="index"
                            v-for="(article,index) in articles"
                            :title="article.name"
                            :id="article.id"
                            :label="article.label"
                            :summary="article.summary"
                            :create-time="article.createTime"
                            :count="article.count"
                            v-infinite-scroll="load"
                            infinite-scroll-disabled="disabled"
            >

            </article-cell>
            <el-button style="margin-top: 20px;margin-left: 50%;transform: translate(-50%)" v-if="loading" @click="loadData">浏览更多</el-button>
            <el-button style="margin-top: 20px;margin-left: 50%;transform: translate(-50%)" v-if="noMoreData" disabled>已经到最底部了</el-button>
        </div>
    </div>
</template>

<script>
    import sectionTitle from '../view/SectionTitle'
    import articleCell from '../view/article/ArticleCell'
    import articleTop from '../view/article/ArticleTop'
    export default {
        name: "ArticlesList",
        components:{
            sectionTitle,
            articleCell,
            articleTop
        },
        data(){
            return {
                topLabel:'置顶',
                page: 1,
                loading: false,
                articles:[],
                noMoreData:false
            }
        },
        computed: {
            disabled () {
                return this.loading
            }
        },
        methods: {
            getArticleCells(){
                this.$http.get('/article/cells/'+this.page).then(res =>{
                    this.loading = false
                    if (res.data.articles == null){
                        this.noMoreData = true
                        return;
                    }
                    res.data.articles.forEach(article =>{
                        article.createTime = article.createTime.substring(0,10)
                        this.articles.push(article)
                    })
                    this.page += 1
                })
            },
            load () {
                if (this.noMoreData){
                    return;
                }
                this.loading = true;
            },
            loadData(){
                this.getArticleCells()
            }
        },
        created() {
            // this.$http.get('/article/cells/'+this.page).then(res =>{
            //     if (res.data.articles == null{
            //         this.noMoreData = true
            //         return;
            //     }
            //     this.articles = res.data.articles
            //     this.articles.forEach(article =>{
            //         article.createTime = article.createTime.substring(0,10)
            //     })
            //     this.page += 1
            // })
            this.getArticleCells()
        }
    }
</script>

<style scoped>

    .articles-container{
        width: 80%;
        height: 100%;
        margin-left: 20%;
    }
</style>
