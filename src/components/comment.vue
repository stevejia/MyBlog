<template>
  <div>
    <span>{{id}}</span>
    <div style="padding-left: 42px; position: relative; margin-bottom: 10px;">
      <Avatar class="avatar_small" icon="ios-person" size="small" />
      <Input
        ref="commentInput"
        v-model="comment.content"
        type="textarea"
        maxlength="100"
        show-word-limit
        :rows="3"
        :placeholder="placeholder"
      />
    </div>
    <div style="position: relative; min-height: 32px;">
      <span style="position: absolute; right: 0;">
        <Button v-show="!!comment.content" @click.prevent.stop="onCancelComment">取消回复</Button>
        <Button v-show="!!comment.content" type="primary" @click="onSubmitComment">发表评论</Button>
      </span>
    </div>
    <Reply :list="commentList" @onComment="onBeforeComment"></Reply>
    <!-- <div
      v-for="(item, index) in commentList"
      :key="index"
      style="padding: 20px 20px 20px 42px; position: relative; border-bottom: 1px dashed;"
    >
      <div @mouseover="onMouseOver(item)" @mouseleave="onMouseLeave(item)">
        <Avatar class="avatar_small" icon="ios-person" size="small" />
        <span style="line-height: 24px;">{{item.userName}}</span>
        <span class="pull-right">
          <span v-show="item.show" class="margin-right_10">
            <a href="#" class="margin-right_10">举报</a>
            <a href="#">回复</a>
          </span>
          <a
            class="margin-right_10"
            href="#"
            v-show="!!item.replies.length"
            @click="onShowReplies(item)"
          >查看回复({{item.replies.length}})</a>
          <a href="#">
            <Icon type="ios-thumbs-up-outline" />
          </a>
        </span>
      </div>
      <span>{{item.comment}}</span>
    </div>-->
  </div>
</template>
<script>
import { http } from "@/libs/http";
import Reply from "@/components/reply";
export default {
  name: "comment",
  components: { Reply },
  props: {
    id: {
      type: String | Number,
      default: null
    }
  },
  data() {
    return {
      comment: {
        articleId: this.id,
        content: null,
        userId: localStorage.getItem("userId"),
        userName: localStorage.getItem("userName"),
        replyUserId: null,
        replyUserName: null,
        parentId: null
      },
      commentList: []
    };
  },
  mounted() {
    http.get("articles/listcomments", { id: this.id }).then(res => {
      this.commentList = res.list;
    });
  },
  computed: {
    placeholder() {
      if (!this.comment.replyUserId) {
        return "想对作者说些什么";
      }
      return `回复：${this.comment.replyUserName}`;
    }
  },
  methods: {
    onMouseOver(item) {
      item.show = true;
    },
    onMouseLeave(item) {
      item.show = false;
    },
    onShowReplies(item) {
      item.onShowReplies = true;
    },
    onCancelComment() {
      this.comment.content = null;
      this.comment.replyUserId = null;
      this.comment.replyUserName = null;
      this.comment.parentId = null;
    },
    onBeforeComment(item) {
      console.log(item);
      this.$nextTick(() => {
        this.$refs["commentInput"].focus();
      });
      this.comment.replyUserId = item.userId;
      this.comment.replyUserName = item.userName;
      this.comment.parentId = item.parentId || item.userId;
    },
    async onSubmitComment() {
      let result = await http.post("articles/savecomment", { ...this.comment });
      console.log(result);
    }
  }
};
</script>

<style scoped>
.avatar_small {
  position: absolute;
  left: 10px;
}
</style>