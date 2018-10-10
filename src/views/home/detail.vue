<template>
    <div>Detail{{id}}</div>
</template>

<script>
import {http} from '@/libs/http';
export default {
    name: 'ArticleDetail',
    props: {
        id: Number|String
    },
    data(){
        return {
            article: null
        }
    },
    created(){
        http.get('api/articles/get', {id: this.id}, false, true).then(res=>{
            console.log(res);
        });
    }
}
</script>

<style lang="less" scoped>

</style>


