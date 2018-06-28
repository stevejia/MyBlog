<template>
<div>
    <router-view></router-view>
</div>
    
</template>

<script>
import {util} from "./libs/util";
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
    
  }
};
</script>


