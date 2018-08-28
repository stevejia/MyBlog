<template>
    <div class="write-container">
        <Input v-model="viewModel.title" placeholder="文章标题"></Input>
        <mavon-editor v-model="viewModel.content" placeholder="文章内容" :ishljs = "true"/>
    </div>
</template>

<script>
export default {
    data(){
        return {
            viewModel: {
                title: '',
                content: '',
            },

        }

    },
}
</script>

<style lang="less" scoped>
    .write-container{
        padding: 15px;
    }
</style>


