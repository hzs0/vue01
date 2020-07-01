import VueRouter from 'vue-router'

import bottombar from './components/bottombar.vue'
import bottominput from './components/bottominput.vue'
import recomd from './components/recomd.vue'
import recommend from './components/recommend.vue'
import special from './components/special.vue'
import playervideo from './components/playervideo.vue'
import hero from './components/hero.vue'
import official from './components/official.vue'
import newsdetail from './components/newsdetail.vue'
import herodetail from './components/herodetail.vue'
import livevideo from './components/livevideo.vue'
import newskin from './components/newskin.vue'

import user from './components/user.vue'
import login from './components/login.vue'
import zhuce from './components/zhuce.vue'

import competion from './components/Competition.vue'

import social from './components/tabbars/CommunityCon.vue'
import Attention from './components/nav/AttentionCon.vue'
import Hotspot from './components/nav/HotspotCon.vue'
import Discover from './components/nav/DiscoverCon.vue'
import Remark from './components/nav/Remark.vue'
import WriteCon from './components/nav/WriteCon.vue'

import military from './components/military.vue'
import combat from './components/combat.vue'
import expression from './components/expression.vue'
import goods from './components/goods.vue'







let router = new VueRouter({
    routes:[
        {path:'/',redirect:'/login'},
        {
            path:'/recomd',
            components:{content:recomd,footer:bottombar},
            children:[
                {path:'/',redirect:'recommend'},
                {path:'recommend',component:recommend},
                {path:'special',component:special},
                {path:'playervideo',component:playervideo},
                {path:'hero',component:hero},
                {path:'official',component:official},
            ]
        },
        {path:'/newsdetail',component:newsdetail},
        {path:'/herodetail',component:herodetail},
        {path:'/livevideo',component:livevideo},
        {path:'/newskin',component:newskin},

        {path:'/competion',components:{content:competion,footer:bottombar}},

        {path:'/social',components:{content:social,footer:bottombar},children:[
            {path:'/',redirect:'Attention'},
            {path:'Attention',component:Attention},
            {path:'Hotspot',component:Hotspot},
            {path:'Discover',component:Discover},
        ]},
        {path:'/Remark',component:Remark},
        {path:'/Write',component:WriteCon},

        {path:'/military',components:{content:military,footer:bottombar},children:[
            {path:'/',redirect:'combat'},
            {path:'combat',component:combat},
            {path:'expression',component:expression},
            {path:'goods',component:goods},
        ]},

        {path:'/my',components:{content:user,footer:bottombar}},
        {path:'/login',component:login},
        {path:'/zhuce',component:zhuce},
    ],
    linkActiveClass:'mui-active'
})

export default router