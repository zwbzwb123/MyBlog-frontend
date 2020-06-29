<template>
    <div class="label-view">
        <panel :title=" '标签墙' " class="panel">
            <div slot="content">
                <!--<el-tag-->
                        <!--v-for="(label,index) in labels"-->
                        <!--:key="label.id"-->
                        <!--:type="tagTypes[index % labels.length]"-->
                        <!--effect="dark"-->
                        <!--class="tag"-->
                        <!--@click="clickTag"-->
                <!--&gt;-->
                    <!--<a href=""> {{ label.name }} [{{label.count}}] </a>-->
                <!--</el-tag>-->
                <Tag type="dot" :color="tagTypes[label.id % tagTypes.length]" v-for="(label,index) in labels" :key="label.id" >
                    <a href="">
                        {{label.name}} [{{label.count}}]
                    </a>
                </Tag>
            </div>
        </panel>
    </div>
</template>

<script>
    import panel from  '../utils/Panel'
    export default {
        name: "LabelView",
        components:{
            'panel':panel
        },
        data(){
            return {
                labels:[
                ],
                tagTypes:['dodgerblue','gray','skyblue','chocolate']
            }
        },
        methods:{
            clickTag(){

            }
        },
        created() {
            this.$http.get('/label').then(res => {
                this.labels = res.data.labels
            })
        }
    }
</script>

<style scoped>

    .panel{
        color: chocolate;
        width: 300px;
    }
</style>
