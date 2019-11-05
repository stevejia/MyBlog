<template>
  <div>
    <Layout>
      <Affix :offset-top="0" class="custom-affix">
        <Header class="header-wrapper">
          <router-link class="logo inline" :to="{name: 'recommend'}">
            <!-- <img class="logo-img" src="../content/images/logo.png" /> -->
          </router-link>
          <Menu
            theme="primary"
            class="inline pull-right custom-menu"
            mode="horizontal"
            active-name="1"
          >
            <MenuItem class="custom-menu-item" name="1">
              <router-link :to="{name: 'writeblog'}">
                <Icon type="md-create" />写博客
              </router-link>
            </MenuItem>
            <MenuItem class="custom-menu-item" v-if="!isLogin" name="2">
              <router-link :to="{name: 'login'}">
                <Icon type="person"></Icon>登录
              </router-link>
            </MenuItem>
            <MenuItem v-if="!isLogin" class="custom-menu-item" name="4">
              <router-link :to="{name: 'signup'}">
                <Icon type="md-person-add" />注册
              </router-link>
            </MenuItem>
            <MenuItem v-if="isLogin" class="custom-menu-item" name="4">
              <Avatar icon="md-person" />
              {{userName}}
              <router-link :to="{name: 'login'}">
                <Icon type="md-log-out" />退出
              </router-link>
            </MenuItem>
            <MenuItem class="custom-menu-item" name="4">
              <router-link :to="{name: 'managebackend'}">
                <Icon type="md-add" />基础数据
              </router-link>
            </MenuItem>
          </Menu>
        </Header>
      </Affix>
      <Content class="content-wrapper">
        <div class="content">
          <router-view></router-view>
        </div>
      </Content>
      <!-- <Footer class="footer-wrapper">Footer</Footer> -->
    </Layout>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isLogin: false
    };
  },
  mounted() {
    let token = localStorage.getItem("token");
    this.isLogin = !!token;
  },
  computed: {
    userName() {
      return localStorage.getItem("userName");
    }
  }
};
</script>


<style lang="less" scoped>
.ivu-layout-header {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
}
.ivu-layout-content {
  height: 100%;
  padding-top: 72px;
  overflow: hidden;
  //   padding-bottom: 69px;
  //   background-color: #f5f6f7;
  //   box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  width: 80vw;
  margin: auto;
}
.content {
  width: 100%;
  background-color: #ffffff;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  //   margin-top: 8px;
}
.ivu-layout-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.08);
}
.logo-img {
  height: 64px;
  padding: 2px;
}
.inline {
  display: inline !important;
}

.custom-menu {
  background: #ffffff;
}
.custom-menu-item.ivu-menu-item-active {
  background: #ffffff !important;
}
.custom-menu-item,
.custom-menu-item a {
  color: #666666 !important;
}
</style>