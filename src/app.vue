<template>
<div>
    <Row style="max-height: 150px; min-height: 150px;"></Row>
    <div class="container">
        <Row>
            <Col span="8" style="min-width: 350px;">
                <Card style="width:350px">
                    <p slot="title">
                        个人资料
                    </p>
                    <p>
                        <Row>
                            <Col span="6">
                                <Img src="src/content/images/touxiang.png"/>
                            </Col>
                            <Col span="12" style="line-height: 48px;">
                                <p>Steve Jia</p>
                            </Col>
                            <Col span="6" style="line-height: 48px;">
                                <Button type="ghost" v-on:click="testSaveData">关注</Button>
                            </Col>
                        </Row>
                    </p>
                </Card>
                <Card style="width:350px; margin-top: 15px;">
                    <p slot="title">
                        关于我
                    </p>
                    <p>
                        邮箱：1102263474@qq.com
                    </p>
                </Card>
                <Card style="width:350px; margin-top: 15px;">
                    <p slot="title">
                        归档
                    </p>
                    <ul>
                        <li v-for="item in showList">
                            <a :href="item.url" target="_blank">{{ item.title }}</a>
                            <span style="float: right;" >
                                {{item.count}}篇
                            </span>
                        </li>
                        <div class="text-center">
                            <a v-on:click="expandDoc" v-if="allList.length > 5 && !isExpanded ">展开<Icon type="chevron-down"></Icon></a>
                            <a v-on:click="expandDoc" v-if="isExpanded ">收起<Icon type="chevron-up"></Icon></a>
                        </div>
                    </ul>
                </Card>
                <Card style="width:350px; margin-top: 15px;">
                    <p slot="title">
                        最新评论
                    </p>
                    <ul>
                        <li v-for="item in showList">
                            <a :href="item.url" target="_blank">{{ item.title }}</a>
                            <span style="float: right;" >
                                {{item.count}}篇
                            </span>
                        </li>
                        <div class="text-center">
                            <a v-on:click="expandDoc" v-if="allList.length > 5 && !isExpanded ">展开<Icon type="chevron-down"></Icon></a>
                            <a v-on:click="expandDoc" v-if="isExpanded ">收起<Icon type="chevron-up"></Icon></a>
                        </div>
                    </ul>
                </Card>
                <Card style="width:350px; margin-top: 15px;">
                    <p slot="title">
                        个人分类
                    </p>
                    <ul>
                        <li v-for="item in showList">
                            <a :href="item.url" target="_blank">{{ item.title }}</a>
                            <span style="float: right;" >
                                {{item.count}}篇
                            </span>
                        </li>
                        <div class="text-center">
                            <a v-on:click="expandDoc" v-if="allList.length > 5 && !isExpanded ">展开<Icon type="chevron-down"></Icon></a>
                            <a v-on:click="expandDoc" v-if="isExpanded ">收起<Icon type="chevron-up"></Icon></a>
                        </div>
                    </ul>
                </Card>
                <Card style="width:350px; margin-top: 15px;">
                    <p slot="title">
                        热门文章
                    </p>
                    <ul>
                        <li v-for="item in showList">
                            <a :href="item.url" target="_blank">{{ item.title }}</a>
                            <span style="float: right;" >
                                {{item.count}}篇
                            </span>
                        </li>
                        <div class="text-center">
                            <a v-on:click="expandDoc" v-if="allList.length > 5 && !isExpanded ">展开<Icon type="chevron-down"></Icon></a>
                            <a v-on:click="expandDoc" v-if="isExpanded ">收起<Icon type="chevron-up"></Icon></a>
                        </div>
                    </ul>
                </Card>
            </Col>
            <Col span="16">
                <router-view style="background: #fff; margin: 0 15px;"></router-view>
            </Col>
        </Row>
    </div> 
</div>
    
</template>

<script>
    import Util from './libs/util';
    const len = 5;
    export default {
        data() {
            return {
                allList: [],
                showList:[],
                isExpanded: false,
            };
        },
        mounted() {
            this.getList(len);
        },
        beforeDestroy() {

        },
        methods: {
            getList(len){
                let array = [{title: "2018年5月", count: 15 },{title: "2018年4月", count: 13 },{title: "2018年3月", count: 12 },{title: "2018年2月", count: 15 },{title: "2018年1月", count: 13 },{title: "2017年12月", count: 12 },{title: "2017年11月", count: 12 }]
                let filteredArr = [];
                if(len){
                    for(let i = 0; i< array.length; i++){
                        if(i<len){
                            filteredArr.push(array[i]);
                        }
                    }
                }else{
                    filteredArr = array;
                }
                this.allList = array;
                this.showList = filteredArr;
            },
            expandDoc(){
                this.isExpanded = !this.isExpanded;
                let length;
                if(!this.isExpanded){
                    length = len;
                }
                this.getList(length);
            },
            testSaveData(){
                var token = sessionStorage.getItem("token");
                Util.post("/api/login/createAccount",{token: token }, function(result){
                    console.log(result);
                });
                    
            }
        }
    };
</script>