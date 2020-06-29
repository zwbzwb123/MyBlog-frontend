<template>
    <div class="header-container">
        <router-link to="/" class="logo-container">
            <el-image class="logo" :src="src"></el-image>
            <span class="title">ZWB's Blog</span>
        </router-link>
        <i-input icon="ios-search" placeholder="搜索功能暂无实现，正在努力学习中..."  style="width: 300px"></i-input>
        <ul class="header-ul">
            <li><a href="/articles"><el-link :underline="false">文章</el-link></a></li>
            <li><a href="/essay"><el-link :underline="false">随笔</el-link></a></li>
            <li><a href="/timeline"><el-link :underline="false">归档</el-link></a></li>
            <li><a href="/article/0"><el-link :underline="false">关于</el-link></a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
                // src:"https://zwbblog.oss-cn-hangzhou.aliyuncs.com/a/favicon.jpg"
                src: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E6%9C%80%E5%90%8E%E4%B8%8D%E7%9F%A5%E9%81%93%E5%A4%A9%E5%9C%A8%E6%B0%B4&step_word=&hs=0&pn=14&spn=0&di=119020&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=2398164929%2C784740852&os=4054126902%2C1747296985&simid=4184373748%2C551550268&adpicid=0&lpn=0&ln=1809&fr=&fmq=1593069133077_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F438f71cab3b0baf45fe30a4d7a6fee4f84f0f0bf.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fpf2_z%26e3Bp7xt_z%26e3Bv54_z%26e3BvgAzdH3F880mb-880mbm8nb_z%26e3Bip4s&gsm=f&rpstart=0&rpnum=0&islist=&querylist=&force=undefined"
            }
        }
    }
</script>

<style scoped>
    .header-container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-top: 10px;
    }
    .title{
        margin-left: 20px;
        margin-top: 7px;
        font-size: 21px;
        color: black;
    }
    .logo-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .header-ul{
        list-style: none;
    }
    .header-ul > li {
        float: left;
        width: 80px;
    }
    a{
        font-size: 18px;
        font-family: Hiragino Sans GB;
    }
</style>
