import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../components/index/Index'
import Header from '../components/header/Header'
import ArticlesListContent from '../components/content/ArticlesListContent'
import Article from '../components/view/article/Article'
import TimeLineContent from '../components/content/TimeLineContent'
import EssayContent from '../components/content/EssayContent'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children:[
      {
        path: '/',
        name:'main',
        components: {
          header:Header,
          content:ArticlesListContent
        }
      },
      {
        path:'articles',
        name:'articles',
        components:{
          header:Header,
          content:ArticlesListContent
        }
      },
      {
        path:'article/:articleId',
        name:'article',
        components:{
          header:Header,
          content:Article
        }
      },
      {
        path:'/timeline',
        name:'timeline',
        components:{
          header:Header,
          content:TimeLineContent
        }
      },
      {
        path:'/essay',
        name:'essay',
        components:{
          header:Header,
          content:EssayContent
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


//配置进度条
import ViewUI from "view-design";

router.beforeEach((to, from, next) => {
  window.scrollTo(0,0);
  ViewUI.LoadingBar.start();
  next();
});

router.afterEach(route => {
  ViewUI.LoadingBar.finish();
});



export default router
