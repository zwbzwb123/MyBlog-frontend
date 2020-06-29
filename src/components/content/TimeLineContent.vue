<template>
    <div class="time-line-container">
        <section-title :title=" '归档 | Archives' "></section-title>
        <div class="block">
            <el-timeline>
                <el-timeline-item
                        v-for="(article,index) in articles"
                        :key="article.id"
                        :timestamp="article.createTime"
                        :color="colors[index % colors.length]"
                        placement="top">
                    <el-card>
                        <h4>
                            <a @click="toArticlePage(article.id)">{{article.name}}</a>
                        </h4>
                        <p>{{article.summary}}</p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>

<script>
    import sectionTitle from '../view/SectionTitle'
    export default {
        name: "TimeLineContent",
        components:{
            sectionTitle
        },
        data(){
            return {
                articles:[],
                colors:["red","blue","green","orange","gray"]
            }
        },
        created() {
            this.$http.get('/article/timeline').then(res =>{
                console.log(res)
                this.articles = res.data.articles
                this.articles.forEach(article => {
                    article.createTime = article.createTime.substring(0,10)
                })
            })
        },
        methods:{
            toArticlePage(id){
                this.$router.push('/article/'+id)
            }
        }
    }
</script>

<style scoped>

    .time-line-container{
        width: 80%;
        height: 100%;
        margin-left:20%;
    }

    .block{
        margin-top: 20px;
    }
</style>
