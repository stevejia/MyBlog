<template>
    <div>
        <Card v-for="(item, index) in articles" :key="'article'+index">
            <p slot="title">
                <router-link class="logo inline" :to="{name: 'details', params: {id: item.articleId}}">
                    {{item.title}}
                </router-link>
            </p>
            <p>{{item.content}}</p>
        </Card>
    </div>
    
</template>
<script>
import { http } from "@/libs/http";
export default {
  name: "Article",
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
    http.get("/api/articles/list", { query: query }, false, true).then(res => {
      this.articles = res;
    });
  },
  methods: {},
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
