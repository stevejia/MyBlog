<template>
  <div v-if="!!item" style="background: #ffffff;">
    <Card :bordered="false">
      <div slot="title">
        <div class="inline-block">
          <span class="article-type inline-block" v-if="articleType !== null">{{
            articleType
          }}</span>
          <h1 class="inline-block">{{ item.title }}</h1>
        </div>
        <div style="padding: 10px 0;">
          <span style="font-size: 16px; margin-right: 20px;">{{
            createTime
          }}</span>
          <router-link to="/">
            <span style="font-size: 16px;">{{ item.creator }}</span>
          </router-link>
          <span style="font-size: 16px; margin-right: 20px;"
            >阅读数{{ item.viewCount }}</span
          >
          <span>文章标签：</span>
          <Alert
            v-for="(tag, index) in item.tags"
            :key="index"
            type="success"
            style="display: inline; padding: 4px 8px; margin-right: 10px;"
            >{{ tag.value }}</Alert
          >
          <!-- <span v-if="!!item.updateTime">更新时间{{updateTime}}</span> -->
        </div>
      </div>
      <div style="min-height: 200px;" v-html="item.htmlContent"></div>
    </Card>
    <div class="divider"></div>
    <comment :id="$route.params.id" style="padding: 8px;" />
  </div>
</template>

<script>
import marked from "marked";
import { store } from "@/store";
import { http } from "@/libs/http";
import { find } from "lodash";
import { util } from "@/libs/util";
import comment from "@/components/comment";
export default {
  name: "ArticleDetail",
  components: { comment },
  props: {
    id: Number | String
  },
  data() {
    return {
      item: null,
      commonData: store.state.commonData
    };
  },
  mounted() {
    this.getArticle();
  },
  computed: {
    articleId() {
      return this.$route.params.id;
    },
    articleType() {
      let at =
        find(this.commonData.articleTypes, d => {
          return d.value === +this.item.articleType;
        }) || {};
      return at.text || null;
    },
    createTime() {
      return util.formatDate(this.item.createTime, "YYYY-MM-DD HH:mm:ss");
    },
    updateTime() {
      return util.formatDate(this.item.updateTime, "YYYY-MM-DD HH:mm:ss");
    }
  },
  watch: {
    articleId(newVal) {
      if (!!newVal) {
        this.getArticle(newVal);
      }
    }
  },
  methods: {
    getArticle(id) {
      id = id || this.$route.params.id;
      http.get("articles/get", { id }, false, true).then(res => {
        res.item.htmlContent = marked(res.item.content);
        this.item = res.item;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.article-type {
  color: #ca0c16;
  border: 1px solid #f4ced0;
  width: 36px;
  text-align: center;
  height: 24px;
  line-height: 24px;
}
.inline-block {
  display: inline-block;
}
</style>
