<template>
  <Layout>
    <Layout>
      <!-- <Affix :offset-top="50">
        <span class="demo-affix">Fixed at the top 50px from the top</span>
      -->
      <Sider hide-trigger>
        <Affix :offset-top="64">
          <Menu theme="dark" active-name="1">
            <MenuItem name="1" :to="{name: 'recommend'}">推荐</MenuItem>
            <MenuItem name="2">最新文章</MenuItem>
            <MenuItem name="3">关注</MenuItem>
            <MenuItem
              v-for="(item, index) in commonData.blogTypes"
              :name="index + 4"
              :key="'blogtype' + index"
              @click.native="routeTo(item.router, item.value)"
            >{{item.text}}</MenuItem>
          </Menu>
        </Affix>
      </Sider>
      <Content>
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import { store } from "@/store";
export default {
  data() {
    return {
      commonData: store.state.commonData
    };
  },
  methods: {
    routeTo(router, type) {
      this.$router.push({
        name: router,
        query: { type: type }
      });
    }
  },
  mounted() {
    console.log(this.commonData);
  }
};
</script>

<style lang="less" scoped>
.ivu-layout-sider {
  width: auto !important;
  min-width: unset !important;
  max-width: unset !important;
  flex: unset !important;
  background-color: #f5f7f9 !important;
}
.ivu-menu {
  width: auto !important;
}
.ivu-layout {
  height: 100%;
}
.ivu-layout-content {
  padding: 0 10px !important;
}
.content-wrapper {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
</style>
