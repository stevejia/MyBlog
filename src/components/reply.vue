<template>
  <div>
    <div v-for="(item, index) in list" :key="index" :class="!isReply ? 'root': 'child'" style>
      <div @mouseover="onMouseOver(item)" @mouseleave="onMouseLeave(item)">
        <router-link to="/">
          <Avatar class="avatar_small" icon="ios-person" size="small" />
          <span style="line-height: 24px;">{{item.userName}}</span>
        </router-link>
        <span v-if="!!item.replyUserId">
          <span>@</span>
          <span>{{item.replyUserName}}</span>
        </span>

        <span class="pull-right">
          <span v-show="item.show" class="margin-right_10">
            <a href="#" class="margin-right_10">举报</a>
            <a href="#" @click="onComment(item)">回复</a>
          </span>
          <a
            class="margin-right_10"
            href="#"
            v-show="!!((item.replies || []).length)"
            @click="onShowReplies(item)"
          >{{item.showReplies ? "收起" : "查看"}}回复({{(item.replies || []).length}})</a>
          <a href="#">
            <Icon type="ios-thumbs-up-outline" />
          </a>
        </span>
      </div>
      <span>{{item.content}}</span>
      <Reply v-if="item.showReplies" :list="item.replies" :isReply="true" @onComment="onComment"></Reply>
    </div>
  </div>
</template>
<script>
export default {
  name: "Reply",
  props: {
    list: {
      type: Array,
      default: []
    },
    isReply: {
      type: Boolean,
      default: false
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
      item.showReplies = !item.showReplies;
    },
    onComment(item) {
      this.$emit("onComment", item);
    }
  }
};
</script>
<style scoped>
.root {
  padding: 20px 20px 20px 42px;
  position: relative;
  border-bottom: 1px dashed;
}
.child {
  padding: 20px 0 20px 42px;
  position: relative;
  border-left: 4px solid #c5c5c5;
}
.avatar_small {
  position: absolute;
  left: 10px;
}
.margin-right_10 {
  margin-right: 10px;
}
</style>