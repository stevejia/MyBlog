<template>
    <div>
        <Card v-for="(item, index) in articles">
            <p slot="title">{{item.title}}</p>
            <p>{{item.content}}</p>
        </Card>
    </div>
    
</template>
<script>
import {http} from '@/libs/http';
export default {
    name: 'Article',
    props: {
        type: Number|String
    },
    data(){
        return {
            articles: []
        };
    },
    mounted(){
        var query = {
            isPrivate: false,
            isDraft: false,
            blogType: this.type,
            isDeleted: false 
        }
        http.get('/api/articles/list',{query: query}, false).then((res)=>{
            this.articles = res;
        });
    },
    methods: {
        
    },
}
</script>
