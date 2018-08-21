<template>
    <Layout>
        <Layout>
            <!-- <Affix :offset-top="50">
        <span class="demo-affix">Fixed at the top 50px from the top</span>
     -->
            <Sider hide-trigger>
                <Affix :offset-top="64">
                <Menu theme="dark" active-name="1">
                    <MenuItem name="1">
                        推荐
                    </MenuItem>
                    <MenuItem name="2">
                        最新文章
                    </MenuItem>
                    <MenuItem name="3">
                        关注
                    </MenuItem>
                    <MenuItem name="4">
                        资讯
                    </MenuItem>
                    <MenuItem name="5">
                        人工智能
                    </MenuItem>
                    <MenuItem name="6">
                        云计算/大数据
                    </MenuItem>
                    <MenuItem name="7">
                        计算机基础
                    </MenuItem>
                    <MenuItem name="8">
                        编程语言
                    </MenuItem>
                    <MenuItem name="9">
                        架构
                    </MenuItem>
                    <MenuItem name="10">
                        安全
                    </MenuItem>
                    <MenuItem name="11">
                        其他
                    </MenuItem>
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
<style lang="less" scoped>
.ivu-layout-sider {
  width: auto!important;
  min-width: unset!important;
  max-width: unset!important;
  flex: unset!important;
  background-color: #f5f7f9!important;
}
.ivu-menu{
    width: auto!important;
}
.ivu-layout{
    height: 100%;
}
.ivu-layout-content{
    padding: 0 10px!important;
}
.content-wrapper{
    width: 100%;
    height: 100%;
    background-color: #ffffff;
}
</style>
