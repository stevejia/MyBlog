<template>
  <div>
    <Card v-for="(item, index) in articles" :key="'article'+index">
      <p slot="title">
        <router-link
          class="logo inline"
          :to="{path: `/blog/article/detail/${item.id}`}"
        >{{item.title}}</router-link>
      </p>
      <p style="padding: 20px;" v-html="item.content"></p>
      <div>
        <Avatar icon="ios-person" />
        {{item.creator}}
        <span class="pull-right">
          <a @click="onThumb(item)">
            <Icon style="font-size: 16px" type="ios-thumbs-up-outline" />
            {{item.thumbCount || 0}}
          </a>|
          <a @click="onThumb(item)">
            <Icon style="font-size: 16px" type="ios-eye-outline" />
            {{item.viewCount || 0}}
          </a>|
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
export default {
  name: "Articles",
  props: {
    type: Number | String
  },
  data() {
    return {
      articles: []
    };
  },
  mounted() {
    var query = {
      isPrivate: false,
      isDraft: false,
      blogType: this.type,
      isDeleted: false
    };
    http.get("articles/list", { query: query }, false, true).then(res => {
      this.articles = res.list;
    });
  },
  methods: {
    onThumb(item) {
      // if(item.hasThumb){
      //   item.thumbCount--;
      //   item.hasThumb = false;
      // }
      alert("我点赞了！");
    }
  },
  watch: {
    type: (newVal, oldVal) => {
      var query = {
        isPrivate: false,
        isDraft: false,
        blogType: newVal,
        isDeleted: false
      };
      http
        .get("/api/articles/list", { query: query }, false, true)
        .then(res => {
          this.articles = res;
        });
    }
  }
};
</script>
