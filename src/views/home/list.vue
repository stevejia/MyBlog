<template>
  <div>
    <Card v-for="(item, index) in list" :key="'article'+index">
      <p slot="title">
        <router-link
          class="logo inline"
          :to="{path: `/blog/article/detail/${item.id}`}"
        >{{item.title}}</router-link>
      </p>
      <p style="padding: 20px;" v-html="item.htmlContent"></p>
      <div style="line-height: 32px;height: 32px;">
        <span class="pull-right">
          <span>{{formatDate(item.createTime, "YYYY-MM-DD HH:mm:ss")}}</span>&nbsp;|&nbsp;
          <a @click="onThumb(item)">
            <Icon style="font-size: 16px" type="ios-eye-outline" />
            {{item.viewCount || 0}}
          </a>&nbsp;|&nbsp;
          <a @click="onThumb(item)">
            <Icon style="font-size: 16px" type="ios-text-outline" />
            {{item.commentsCount || 0}}
          </a>
        </span>
      </div>
    </Card>
  </div>
</template>
<script>
import { http } from "@/libs/http";
import { util } from "@/libs/util";
import marked from "marked";
import _ from "lodash";
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.listArticle();
  },
  methods: {
    async listArticle(userId) {
      userId = userId || this.$route.params.userId;
      let result = await http.get("articles/list", {
        creatorId: userId,
        articleType: this.$route.query.articleType
      });
      _.forEach(result.list, d => {
        d.htmlContent = marked(d.content);
      });
      this.list = result.list;
      console.log(result);
    },
    formatDate(date, format = "YYYY-MM-DD HH:mm:ss") {
      return util.formatDate(date, format);
    },
    onThumb(item) {
      // if(item.hasThumb){
      //   item.thumbCount--;
      //   item.hasThumb = false;
      // }
      alert("我点赞了！");
    }
  }
};
</script>