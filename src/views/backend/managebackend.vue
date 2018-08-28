<template>
    <Button type="primary" @click="addSystemConfig">Primary</Button>
</template>

<script>
import {http} from '@/libs/http'
export default {
    data(){
        return {
            viewModel: {
                articleTypes: [],
                blogTypes:[],
            }
        }
    },
    mounted(){
        this.viewModel.articleTypes = [{
            text: '原创',
            value: 1,
        },{
            text: '转载',
            value: 2,
        },{
            text: '翻译',
            value: 1,
        }];
        this.viewModel.blogTypes = [{
            text: '资讯',
            value: 1,
            router: 'news'
        },{
            text: '人工智能',
            value: 2,
            router: 'ai'
        },{
            text: '云计算/大数据',
            value: 3,
            router: 'cloud'
        },{
            text: '区块链',
            value: 4,
            router: 'blockchain'
        },{
            text: '数据库',
            value: 5,
            router: 'db'
        },{
            text: '程序人生',
            value: 6,
            router: 'career'
        }]
        // ,{
        //     text: '游戏开发',
        //     value: 7,
        // },{
        //     text: '研发管理',
        //     value: 8,
        // },{
        //     text: '前端',
        //     value: 9,
        // },{
        //     text: '后端',
        //     value: 10,
        // },{
        //     text: '移动开发',
        //     value: 11,
        // },{
        //     text: '物联网',
        //     value: 12,
        // },{
        //     text: '运维',
        //     value: 13,
        // },{
        //     text: '计算机基础',
        //     value: 14,
        // },{
        //     text: '编程语言',
        //     value: 15,
        // },{
        //     text: '架构',
        //     value: 16,
        // },{
        //     text: '音视频开发',
        //     value: 17,
        // },{
        //     text: '安全',
        //     value: 18,
        // },{
        //     text: '其他',
        //     value: 19,
        // },{
        //     text: '运维',
        //     value: 12,
        // },{
        //     text: '运维',
        //     value: 12,
        // }
    },
    methods: {
        addSystemConfig(){
            http.post('/api/basicdata/save', this.viewModel).then(res=>{
                console.log('Successful!');
            });

        },

    }
}
</script>

<style>

</style>


