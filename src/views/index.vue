<style scoped>
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    .index h1 {
        height: 150px;
    }

    .index h1 img {
        height: 100%;
    }

    .index h2 {
        color: #666;
        margin-bottom: 200px;
    }

    .index h2 p {
        margin: 0 0 50px;
    }

    .index .ivu-row-flex {
        height: 100%;
    }
</style>
<template>
    <div>
        <Card :bordered="false"  v-for="item in articleList">
            <h3 slot="title">
                {{item.title}}
            </h3>
            <p style="color: #999999">
                Android/iOS及设计中ARGB颜色值百分比透明度换算设计上经常要求对一个颜色值进行一定百分比的透明度，比如给定一个颜色0xFF0000FF（蓝色）要求80%透明，该如何处理呢？80%透明的蓝色值是多少呢？常见的颜色是RGB表示的，就比如上面的蓝色0xFF0000FF，这个颜色值是16进制表...
            </p>
            <p style="margin-top: 10px;">
                "2018-05-12 20:00:32"&nbsp;&nbsp;&nbsp;&nbsp; 阅读数：1917&nbsp;&nbsp;&nbsp;&nbsp;评论数：1
            </p>
        </Card>
    </div>
    
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light',
                articleList: [],
            }
        },
        methods: {
            listArticle(){
                let array=[
                    {title: "Android方法数methods超过1", content: "Android/iOS及设计中ARGB颜色值百分比透明度换算设计上经常要求对一个颜色值进行一定百分比的透明度，比如给定一个颜色0xFF0000FF（蓝色）要求80%透明，该如何处理呢？80%透明的蓝色值是多少呢？常见的颜色是RGB表示的，就比如上面的蓝色0xFF0000FF，这个颜色值是16进制表", releaseDate: "2018-05-12 20:00:32", readingTimes: 1973, commentTimes: 3 },
                    {title: "Android方法数methods超过2", content: "Android/iOS及设计中ARGB颜色值百分比透明度换算设计上经常要求对一个颜色值进行一定百分比的透明度，比如给定一个颜色0xFF0000FF（蓝色）要求80%透明，该如何处理呢？80%透明的蓝色值是多少呢？常见的颜色是RGB表示的，就比如上面的蓝色0xFF0000FF，这个颜色值是16进制表", releaseDate: "2018-05-12 20:00:32", readingTimes: 1973, commentTimes: 3 },
                    {title: "Android方法数methods超过3", content: "Android/iOS及设计中ARGB颜色值百分比透明度换算设计上经常要求对一个颜色值进行一定百分比的透明度，比如给定一个颜色0xFF0000FF（蓝色）要求80%透明，该如何处理呢？80%透明的蓝色值是多少呢？常见的颜色是RGB表示的，就比如上面的蓝色0xFF0000FF，这个颜色值是16进制表", releaseDate: "2018-05-12 20:00:32", readingTimes: 1973, commentTimes: 3 },
                    {title: "Android方法数methods超过4", content: "Android/iOS及设计中ARGB颜色值百分比透明度换算设计上经常要求对一个颜色值进行一定百分比的透明度，比如给定一个颜色0xFF0000FF（蓝色）要求80%透明，该如何处理呢？80%透明的蓝色值是多少呢？常见的颜色是RGB表示的，就比如上面的蓝色0xFF0000FF，这个颜色值是16进制表", releaseDate: "2018-05-12 20:00:32", readingTimes: 1973, commentTimes: 3 },
                    {title: "Android方法数methods超过5", content: "Android/iOS及设计中ARGB颜色值百分比透明度换算设计上经常要求对一个颜色值进行一定百分比的透明度，比如给定一个颜色0xFF0000FF（蓝色）要求80%透明，该如何处理呢？80%透明的蓝色值是多少呢？常见的颜色是RGB表示的，就比如上面的蓝色0xFF0000FF，这个颜色值是16进制表", releaseDate: "2018-05-12 20:00:32", readingTimes: 1973, commentTimes: 3 },
                    {title: "Android方法数methods超过6", content: "Android/iOS及设计中ARGB颜色值百分比透明度换算设计上经常要求对一个颜色值进行一定百分比的透明度，比如给定一个颜色0xFF0000FF（蓝色）要求80%透明，该如何处理呢？80%透明的蓝色值是多少呢？常见的颜色是RGB表示的，就比如上面的蓝色0xFF0000FF，这个颜色值是16进制表", releaseDate: "2018-05-12 20:00:32", readingTimes: 1973, commentTimes: 3 },
                    {title: "Android方法数methods超过7", content: "Android/iOS及设计中ARGB颜色值百分比透明度换算设计上经常要求对一个颜色值进行一定百分比的透明度，比如给定一个颜色0xFF0000FF（蓝色）要求80%透明，该如何处理呢？80%透明的蓝色值是多少呢？常见的颜色是RGB表示的，就比如上面的蓝色0xFF0000FF，这个颜色值是16进制表", releaseDate: "2018-05-12 20:00:32", readingTimes: 1973, commentTimes: 3 },
                    {title: "Android方法数methods超过8", content: "Android/iOS及设计中ARGB颜色值百分比透明度换算设计上经常要求对一个颜色值进行一定百分比的透明度，比如给定一个颜色0xFF0000FF（蓝色）要求80%透明，该如何处理呢？80%透明的蓝色值是多少呢？常见的颜色是RGB表示的，就比如上面的蓝色0xFF0000FF，这个颜色值是16进制表", releaseDate: "2018-05-12 20:00:32", readingTimes: 1973, commentTimes: 3 },
                    {title: "Android方法数methods超过9", content: "Android/iOS及设计中ARGB颜色值百分比透明度换算设计上经常要求对一个颜色值进行一定百分比的透明度，比如给定一个颜色0xFF0000FF（蓝色）要求80%透明，该如何处理呢？80%透明的蓝色值是多少呢？常见的颜色是RGB表示的，就比如上面的蓝色0xFF0000FF，这个颜色值是16进制表", releaseDate: "2018-05-12 20:00:32", readingTimes: 1973, commentTimes: 3 },
                    {title: "Android方法数methods超过10", content: "Android/iOS及设计中ARGB颜色值百分比透明度换算设计上经常要求对一个颜色值进行一定百分比的透明度，比如给定一个颜色0xFF0000FF（蓝色）要求80%透明，该如何处理呢？80%透明的蓝色值是多少呢？常见的颜色是RGB表示的，就比如上面的蓝色0xFF0000FF，这个颜色值是16进制表", releaseDate: "2018-05-12 20:00:32", readingTimes: 1973, commentTimes: 3 }];
                this.articleList = array;
            },

        },
        mounted() {
            this.listArticle();
        }
    }
</script>