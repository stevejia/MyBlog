<template>
  <Layout style="height: 100%">
    <Sider hide-trigger class="custom-sider">
      <Card>
        <div slot="title">
          <Avatar icon="ios-person" size="large" />
          <span style="margin-left: 10px;">{{ vm.user.name }}</span>
          <Button class="pull-right" type="dashed" @click="sendPrivateLetter"
            >私信</Button
          >
          <Button
            class="pull-right"
            type="dashed"
            @click="follow"
            v-show="notFollow"
            >关注</Button
          >
          <Button
            class="pull-right"
            type="dashed"
            style="border-color: #ca0c16"
            @click="unFollow"
            v-show="!notFollow"
            >取消关注</Button
          >
        </div>
        <div style="margin: 0 -16px; padding: 5px 16px;">
          <Row>
            <Col span="4" style="width: 20%; text-align: center;">
              <router-link
                :to="{
                  path: `/blog/article/list/${vm.user.id}`,
                  query: { articleType: 1 }
                }"
              >
                <div>原创</div>
                <b>{{ vm.originalCount }}</b>
              </router-link>
            </Col>
            <Col span="4" style="width: 20%; text-align: center;">
              <div>粉丝</div>
              <b>{{ vm.userSubList.length }}</b>
            </Col>
            <Col span="4" style="width: 20%; text-align: center;">
              <div>获赞</div>
              <b>3</b>
            </Col>
            <Col span="4" style="width: 20%; text-align: center;">
              <div>评论</div>
              <b>4</b>
            </Col>
            <Col span="4" style="width: 20%; text-align: center;">
              <div>访问</div>
              <b>5</b>
            </Col>
          </Row>
        </div>
        <!-- <div style="margin: 0 -16px; padding: 5px 16px;">
          <Row>
            <Col span="12">
              <span>等级</span>
              <b>1</b>
            </Col>
            <Col span="12" style="float: right;">
              <span>周排名</span>
              <b>2</b>
            </Col>
            <Col span="12">
              <span>积分</span>
              <b>3</b>
            </Col>
            <Col span="12" style="float: right;">
              <span>总排名</span>
              <b>4</b>
            </Col>
            <Col span="24">
              <span>勋章</span>
              <b>5</b>
            </Col>
          </Row>
        </div> -->
      </Card>
      <Card>
        <div slot="title">
          <span>最新文章</span>
        </div>
        <div>
          <List v-for="(item, index) in vm.newestArticles" :key="index">
            <ListItem>
              <router-link
                :to="{ path: `/blog/article/detail/${item.id}` }"
                style="text-overflow: ellipsis;white-space: nowrap;overflow: hidden;"
                :title="item.title"
                >{{ item.title }}</router-link
              >
            </ListItem>
          </List>
        </div>
      </Card>
      <Card>
        <div slot="title">
          <span>分类专栏</span>
        </div>
        <div>
          <List v-for="(item, index) in vm.userClassifies" :key="index">
            <ListItem>
              <router-link
                :to="{
                  path: `/blog/article/list/${vm.user.id}`,
                  query: { classify: item.id }
                }"
                style="width: 100%;"
                :title="item.value"
              >
                <Avatar shape="square" icon="ios-person" />
                <span style="line-height: 32px;">{{ item.value }}</span>
                <span
                  class="pull-right"
                  style="line-height: 32px; font-size: 12px;"
                  >{{ item.articleCount }}篇</span
                >
              </router-link>
            </ListItem>
          </List>
          <div style="text-align: center;">
            <expand @onExpand="onExpandClasify" />
          </div>
        </div>
      </Card>
      <Card>
        <div slot="title">
          <span>最新评论</span>
        </div>
        <div>
          <List v-for="(item, index) in vm.newestComments" :key="index">
            <ListItem style="padding-bottom: 0!important;">
              <div style="width: 100%;">
                <router-link
                  :to="{ path: `/blog/article/detail/${item.articleId}` }"
                  :title="item.title"
                  >{{ item.title }}</router-link
                >
              </div>
            </ListItem>
            <ListItem>
              <span
                style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;width: 100%;"
              >
                <span>{{ item.userName }}</span
                >:
                <span>{{ item.content }}</span>
              </span>
            </ListItem>
          </List>
        </div>
      </Card>
      <Card>
        <div slot="title">
          <span>归档</span>
        </div>
        <div>
          <List>
            <ListItem>
              <router-link
                to="/"
                style="width: 100%;"
                :title="
                  'This is a piece of text.gggggggggggggggggggggggggggggggggggggggggggggggggggggggg'
                "
              >
                <span style="line-height: 32px;">2019年11月</span>
                <span
                  class="pull-right"
                  style="line-height: 32px; font-size: 12px;"
                  >1篇</span
                >
              </router-link>
            </ListItem>
            <ListItem>
              <router-link
                to="/"
                style="width: 100%;"
                :title="
                  'This is a piece of text.gggggggggggggggggggggggggggggggggggggggggggggggggggggggg'
                "
              >
                <div>
                  <span style="line-height: 32px;">2019年11月</span>
                  <span
                    class="pull-right"
                    style="line-height: 32px; font-size: 12px;"
                    >1篇</span
                  >
                </div>
              </router-link>
            </ListItem>
            <ListItem>
              <router-link
                to="/"
                style="width: 100%;"
                :title="
                  'This is a piece of text.gggggggggggggggggggggggggggggggggggggggggggggggggggggggg'
                "
              >
                <span style="line-height: 32px;">2019年11月</span>
                <span
                  class="pull-right"
                  style="line-height: 32px; font-size: 12px;"
                  >1篇</span
                >
              </router-link>
            </ListItem>
            <ListItem>
              <router-link
                to="/"
                style="width: 100%;"
                :title="
                  'This is a piece of text.gggggggggggggggggggggggggggggggggggggggggggggggggggggggg'
                "
              >
                <span style="line-height: 32px;">2019年11月</span>
                <span
                  class="pull-right"
                  style="line-height: 32px; font-size: 12px;"
                  >1篇</span
                >
              </router-link>
            </ListItem>
            <ListItem>
              <router-link
                to="/"
                style="width: 100%;"
                :title="
                  'This is a piece of text.gggggggggggggggggggggggggggggggggggggggggggggggggggggggg'
                "
              >
                <span style="line-height: 32px;">2019年11月</span>
                <span
                  class="pull-right"
                  style="line-height: 32px; font-size: 12px;"
                  >1篇</span
                >
              </router-link>
            </ListItem>
          </List>
          <div style="text-align: center;">
            <expand @onExpand="onExpandClasify" />
          </div>
        </div>
      </Card>
      <Card>
        <div slot="title">
          <span>热门文章</span>
        </div>
        <div>
          <List>
            <ListItem style="padding-bottom: 0!important;">
              <div style="width: 100%;">
                <router-link
                  to="/"
                  :title="
                    'This is a piece of text.gggggggggggggggggggggggggggggggggggggggggggggggggggggggg'
                  "
                  >This is a piece of text</router-link
                >
              </div>
            </ListItem>
            <ListItem>
              <span style="font-size: 12px;">
                <span>阅读数&nbsp;</span>
                <span>99999</span>
              </span>
            </ListItem>
            <ListItem style="padding-bottom: 0!important;">
              <div style="width: 100%;">
                <router-link
                  to="/"
                  :title="
                    'This is a piece of text.gggggggggggggggggggggggggggggggggggggggggggggggggggggggg'
                  "
                  >This is a piece of text</router-link
                >
              </div>
            </ListItem>
            <ListItem>
              <span style="font-size: 12px;">
                <span>阅读数&nbsp;</span>
                <span>99999</span>
              </span>
            </ListItem>
            <ListItem style="padding-bottom: 0!important;">
              <div style="width: 100%;">
                <router-link
                  to="/"
                  :title="
                    'This is a piece of text.gggggggggggggggggggggggggggggggggggggggggggggggggggggggg'
                  "
                  >This is a piece of text</router-link
                >
              </div>
            </ListItem>
            <ListItem>
              <span style="font-size: 12px;">
                <span>阅读数&nbsp;</span>
                <span>99999</span>
              </span>
            </ListItem>
            <ListItem style="padding-bottom: 0!important;">
              <div style="width: 100%;">
                <router-link
                  to="/"
                  :title="
                    'This is a piece of text.gggggggggggggggggggggggggggggggggggggggggggggggggggggggg'
                  "
                  >This is a piece of text</router-link
                >
              </div>
            </ListItem>
            <ListItem>
              <span style="font-size: 12px;">
                <span>阅读数&nbsp;</span>
                <span>99999</span>
              </span>
            </ListItem>
            <ListItem style="padding-bottom: 0!important;">
              <div style="width: 100%;">
                <router-link
                  to="/"
                  :title="
                    'This is a piece of text.gggggggggggggggggggggggggggggggggggggggggggggggggggggggg'
                  "
                  >This is a piece of text</router-link
                >
              </div>
            </ListItem>
            <ListItem>
              <span style="font-size: 12px;">
                <span>阅读数&nbsp;</span>
                <span>99999</span>
              </span>
            </ListItem>
          </List>
        </div>
      </Card>
    </Sider>
    <Content>
      <router-view></router-view>
    </Content>
  </Layout>
</template>

<script>
import marked from "marked";
import { store } from "@/store";
import { http } from "@/libs/http";
import { find } from "lodash";
import { util } from "@/libs/util";
import expand from "@/components/expand";
export default {
  name: "Article",
  components: { expand },
  props: {
    type: Number | String
  },
  data() {
    return {
      vm: {
        newestArticles: [],
        originalCount: null,
        user: {},
        userSubList: [],
        userClassifies: [],
        newestComments: []
      },
      followerName: localStorage.getItem("userName"),
      followerId: localStorage.getItem("userId")
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    notFollow() {
      let userId = localStorage.getItem("userId");
      let subscribe = this.vm.userSubList.find(d => {
        return d.followerId == userId;
      });
      return !subscribe;
    }
  },
  methods: {
    async fetchData() {
      if (!!this.$route.params.id) {
        this.vm = await http.get("account/getByArticleId", {
          id: this.$route.params.id
        });
      }
      if (!!this.$route.params.userId) {
        this.vm = await http.get("account/getById", {
          id: this.$route.params.userId
        });
      }
    },
    onExpandClasify(isExpand) {
      console.log(isExpand);
    },
    async follow() {
      let subscribeDto = {
        userId: this.vm.user.id,
        followerName: this.followerName,
        followerId: this.followerId
      };
      await http.post("account/follow", subscribeDto);
      this.fetchData();
    },
    async unFollow() {
      let followerId = this.followerId;
      let id = (
        this.vm.userSubList.find(d => {
          return d.followerId == followerId;
        }) || {}
      ).id;
      await http.post("account/unfollow", { id });
      this.fetchData();
    },
    sendPrivateLetter() {
      alert("Not Implement Yet!!!!");
    }
  }
};
</script>

<style lang="less" scoped>
.custom-sider {
  width: 300px !important;
  min-width: 300px !important;
  max-width: 300px !important;
  flex: 0 0 300px !important;
  margin-right: 8px;
}
.custom-sider .ivu-card {
  margin-bottom: 5px;
}
.ivu-layout-sider {
  background: #f5f7f9 !important;
}
.ivu-card-body {
  padding: 0 !important;
}
.ivu-list-split .ivu-list-item {
  border-bottom: none;
}
.ivu-list-item {
  padding-top: 0 !important;
}
</style>
