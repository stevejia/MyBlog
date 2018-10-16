<template>
<div>
    <Spin fix v-show="loading">
        <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
        <div>Loading</div>
    </Spin>
    <Modal v-model="isShowMessageModal"
            title="提示">
        <div>
            <p>{{message}}</p>
            
        </div>
        <div slot="footer">
            <Button type="primary" @click="close">确定</Button>
        </div>
    </Modal>
    <router-view></router-view>
</div>
    
</template>

<script>
import {util} from "./libs/util";
import {mapState} from 'vuex'
import {store} from '@/store'
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
    close(){
        store.commit('hideModal');
    }
  },
  computed:{
      ...mapState([
          'loading',
          'isShowMessageModal',
          'message'
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



