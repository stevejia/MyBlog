<template>
<div>
    <Layout>
        <Header>Header</Header>
        <Content>
            <router-view></router-view>
        </Content>
        <Footer>Footer</Footer>
    </Layout>
</div>
    
</template>
<style lang="less" scoped>
.ivu-layout-header {
  position: absolute;
  top: 0;
  width: 100%;
}
.ivu-layout-content {
  height: 100vh;
  padding-top: 64px;
  padding-bottom: 69px;
}
.ivu-layout-footer{
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>