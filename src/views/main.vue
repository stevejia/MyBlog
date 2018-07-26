<template>
<div>
    <Layout>
        <Affix :offset-top="0">
        <Header class="header-wrapper">
            
                <router-link class="logo inline" to="sjblog">
                <img class="logo-img" src="../content/images/logo1.png" />      
            </router-link>
            <Menu class="inline pull-right" mode="horizontal" active-name="1">
                <MenuItem name="1">
                    <Icon type="paintbrush"></Icon>
                    写博客
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="person"></Icon>
                    登录
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
                <MenuItem name="4">
                    <Icon type="person-add"></Icon>
                    注册
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
</style>