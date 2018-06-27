<template>
<div>
    <router-view></router-view>
</div>
    
</template>

<script>
import Util from "./libs/util";
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
    this.getList(len);
  },
  beforeDestroy() {},
  methods: {
    getList(len) {
      let array = [
        { title: "2018年5月", count: 15 },
        { title: "2018年4月", count: 13 },
        { title: "2018年3月", count: 12 },
        { title: "2018年2月", count: 15 },
        { title: "2018年1月", count: 13 },
        { title: "2017年12月", count: 12 },
        { title: "2017年11月", count: 12 }
      ];
      let filteredArr = [];
      if (len) {
        for (let i = 0; i < array.length; i++) {
          if (i < len) {
            filteredArr.push(array[i]);
          }
        }
      } else {
        filteredArr = array;
      }
      this.allList = array;
      this.showList = filteredArr;
    },
    expandDoc() {
      this.isExpanded = !this.isExpanded;
      let length;
      if (!this.isExpanded) {
        length = len;
      }
      this.getList(length);
    },
    testSaveData() {
      var token = sessionStorage.getItem("token");
      Util.post("/api/login/createAccount", { token: token }, function(result) {
        console.log(result);
      });
    }
  }
};
</script>


