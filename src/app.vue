<template>
<div>
    <Spin fix v-show="loading">
        <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
        <div>Loading</div>
    </Spin>
    <router-view></router-view>
</div>
    
</template>

<script>
import {util} from "./libs/util";
import {mapState} from 'vuex'
const len = 5;
export default {
  data() {
    return {
      allList: [],
      showList: [],
      isExpanded: false
    };
  },
  mounted() {
    // this.getList(len);
  },
  beforeDestroy() {},
  methods: {
    
  },
  computed:{
      ...mapState([
          'loading'
      ])
  },
};
</script>

<style lang="less" scoped>
.demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}
.demo-spin-col{
    height: 100px;
    position: relative;
    border: 1px solid #eee;
}
</style>



