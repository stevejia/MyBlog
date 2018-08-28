<template>
<div>
    <Layout>
        <Affix :offset-top="0">
        <Header class="header-wrapper">
                <router-link class="logo inline" to="/">
                <img class="logo-img" src="../content/images/logo1.png" />      
            </router-link>
            <Menu theme="primary" class="inline pull-right custom-menu" mode="horizontal" active-name="1">
                <MenuItem class="custom-menu-item" name="1">
                    <router-link :to="{name: 'writeblog'}">
                        <Icon type="paintbrush"></Icon>
                        写博客
                    </router-link>
                </MenuItem>
                <MenuItem class="custom-menu-item" name="2">
                    <router-link :to="{name: 'login'}">
                        <Icon type="person"></Icon>
                        登录
                    </router-link>
                </MenuItem>
                <!-- <Submenu name="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu> -->
                <MenuItem v-if="isLogin" class="custom-menu-item" name="4">
                    <router-link :to="{name: 'signup'}">
                        <Icon type="person-add"></Icon>
                        注册
                    </router-link>
                </MenuItem>
                <MenuItem v-if="isLogin" class="custom-menu-item" name="4">
                    <router-link :to="{name: 'managebackend'}">
                        <Icon type="plus"></Icon>
                        基础数据
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
    data(){
        return{ 
            isLogin: false,
        }
        
    },
    mounted(){
        debugger;
        let token = localStorage.getItem("token");
        this.isLogin = !!token;
    },
}
</script>


<style lang="less" scoped>
.ivu-layout-header {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 1px 1px rgba(0,0,0,.08);
}
.ivu-layout-content {
  height: 100vh;
  padding-top: 64px;
//   padding-bottom: 69px;
  background-color: #f5f6f7;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
  width: 80vw;
  margin: auto;
}
.content{
    width: 100%;
    background-color: #ffffff;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}
.ivu-layout-footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    box-shadow: 1px 1px 1px rgba(0,0,0,.08);
}
.logo-img{
    height: 64px;
    padding: 2px;
}
.inline{
    display: inline!important;
}

.custom-menu{
    background: #ffffff;
}
.custom-menu-item.ivu-menu-item-active{
    background: #ffffff!important;
}
.custom-menu-item, .custom-menu-item a{
    color: #666666!important;
}
</style>