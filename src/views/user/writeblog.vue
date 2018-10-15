
<template>
    <div class="write-container">
        <Form :model="viewModel" label-position="left">
            <FormItem>
                <Input v-model="viewModel.title" placeholder="文章标题"></Input>
            </FormItem>
            <FormItem>
                <mavon-editor v-model="viewModel.content" placeholder="文章内容" :ishljs = "true"/>
            </FormItem>
            <FormItem label="文章标签" :label-width="80">
                <span v-for="(item, index) in tags" :key="'tag'+index">
                    <Input class="small-input" v-model="item.value"></Input>
                    <Button icon="close" @click="removeTag(index)"></Button>
                </span>
                <Button @click="addTag()">
                    <Icon type="plus"></Icon>
                    添加标签
                </Button>
            </FormItem>
            <FormItem label="个人分类" :label-width="80">
                <span v-for="(item, index) in classifies" :key="'classify'+index">
                    <Input class="small-input" v-model="item.value"></Input>
                    <Button icon="close" @click="removeClassify(index)"></Button>
                </span>
                <Button @click="addClassify()">
                    <Icon type="plus"></Icon>
                    添加新分类
                </Button>
                <Row>
                    <Col span="6">
                        <v-select style="margin-top: 10px;"></v-select>
                    </Col>
                </Row>
            </FormItem>
            <Row>
                <Col span="11">
                    <FormItem label="文章类型" :label-width="80">
                        <v-select :options="commonData.articleTypes" label="text"
                                v-model="viewModel.articleType">
                        </v-select>
                    </FormItem>
                </Col>
                <Col span="2">&nbsp;</Col>
                <Col span="11">
                    <FormItem label="博客分类" :label-width="80">
                        <v-select :options="commonData.blogTypes" label="text" 
                                v-model="viewModel.blogType">
                        </v-select>
                    </FormItem>
                </Col>
            </Row>
            <FormItem label="私密文章" :label-width="80">
                <Switch v-model="viewModel.isPrivate"></Switch>
            </FormItem>
        </Form>
        <div>
            <Button type="primary" @click="saveArticle(false)">发布博客</Button>
            <Button type="primary" @click="saveArticle(true)">保存为草稿</Button>
            <Button>返回</Button>
        </div>
    </div>
</template>
<script>
import {http} from '@/libs/http';
export default {
  data() {
    return {
      viewModel: {
        title: "",
        content: "",
        articleType: null,
        blogType: null,
        isPrivate: false,
        tag: "",
        classify: null,
        isDraft: false,
        
        readCount: Number,//阅读量
        createTime: Date,//创建时间
        isTop: Boolean,//是否置顶,
        commentCount: Number,//评论数
      },
      tags: [],
      classifies:[],
      commonData: this.$store.getters.getCommonData
    };
  },
  mounted() {
    let articleTypes = this.commonData.articleTypes;
    _.forEach(articleTypes, d => {
      d.label = d.text;
    });

    let blogTypes = this.commonData.blogTypes;
    _.forEach(blogTypes, d => {
      d.label = d.text;
    });
  },
  methods: {
    removeTag(index) {
      var tags = _.filter(this.tags, (d, idx) => {
        return index !== idx;
      });
      this.tags = tags;
    },
    addTag() {
      if(this.tags.length === 5){
          alert("最多添加5个标签");
          return;
      }
      let newItem = {
        value: null
      };
      this.tags.push(newItem);
    },
    removeClassify(index) {
      var classifies = _.filter(this.classifies, (d, idx) => {
        return index !== idx;
      });
      this.classifies = classifies;
    },
    addClassify() {
      let newItem = {
        value: null
      };
      this.classifies.push(newItem);
    },
    saveArticle(isDraft){
        this.viewModel.isDraft = isDraft;
        this.viewModel.articleType = this.viewModel.articleType.value;
        this.viewModel.blogType = this.viewModel.blogType.value;
        var tags = [];
        _.forEach(this.tags, (d)=>{
            if(d.value){
                tags.push(d.value);
            }
        });
        this.viewModel.tag = tags.join(",");
        http.post('/api/articles/save', {article: this.viewModel, newClassifies: []}).then((res)=>{
            if(!res.message){
                console.log("successfully!");
            }
        });
    }
  }
};
</script>
<style lang="less" scoped>
.write-container {
  padding: 15px!important;
}
.small-input {
  width: 60px !important;
}
</style>


