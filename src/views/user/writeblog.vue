
<template>
  <div class="write-container">
    <Form :model="viewModel" label-position="left">
      <FormItem>
        <Input v-model="viewModel.title" placeholder="文章标题"></Input>
      </FormItem>
      <FormItem>
        <mavon-editor v-model="viewModel.content" placeholder="文章内容" :ishljs="true" />
      </FormItem>
      <FormItem label="文章标签" :label-width="80">
        <span v-for="(item, index) in tags" :key="'tag'+index">
          <Input class="small-input" v-model="item.value"></Input>
          <Button icon="md-close" @click="removeTag(index)"></Button>
        </span>
        <Button @click="addTag()" v-if="tags.length < 5">
          <Icon type="md-add"></Icon>添加标签
        </Button>
      </FormItem>
      <FormItem label="个人分类" :label-width="80">
        <span v-for="(item, index) in classifies" :key="'classify'+index">
          <Input class="small-input" v-model="item.value"></Input>
          <Button icon="md-close" @click="removeClassify(index)"></Button>
        </span>
        <Button @click="addClassify()" v-if="classifies.length < 3">
          <Icon type="md-add"></Icon>添加新分类
        </Button>
      </FormItem>
      <Row>
        <Col span="11">
          <FormItem label="文章类型" :label-width="80">
            <Select v-model="viewModel.articleType">
              <Option
                v-for="item in commonData.articleTypes"
                :value="item.value"
                :key="item.value"
              >{{ item.text }}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col span="2">&nbsp;</Col>
        <Col span="11">
          <FormItem label="博客分类" :label-width="80">
            <Select v-model="viewModel.blogType">
              <Option
                v-for="item in commonData.blogTypes"
                :value="item.value"
                :key="item.value"
              >{{ item.text }}</Option>
            </Select>
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
import { http } from "@/libs/http";
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
        creator: localStorage.getItem("userName"),
        creatorId: localStorage.getItem("userId"),
        viewCount: 0, //阅读量
        createTime: null, //创建时间
        isTop: Boolean, //是否置顶,
        commentsCount: 0, //评论数
        thumbCount: 0
      },
      tags: [],
      classifies: [],
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
      if (this.tags.length === 5) {
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
    saveArticle(isDraft) {
      this.viewModel.isDraft = isDraft;
      var tags = [];
      _.forEach(this.tags, d => {
        if (d.value) {
          tags.push(d.value);
        }
      });
      this.viewModel.tag = tags.join(",");
      http.post("articles/save", this.viewModel).then(res => {
        if (!res.message) {
          console.log("successfully!");
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.write-container {
  padding: 15px !important;
}
.small-input {
  width: 60px !important;
}
</style>


