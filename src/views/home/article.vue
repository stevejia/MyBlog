<template>
    <div>Articles</div>
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

        };
    },
    mounted(){
        http.get('/api/article/getCommends',{}).then((res)=>{

            console.log("ddd");
        });
    },
    methods: {
        
    },
}
</script>
