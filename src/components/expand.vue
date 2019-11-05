<template>
  <div style="text-center" @click="onExpand">
    <Icon :type="icon" style="font-size: 24px;" />
  </div>
</template>
<script>
export default {
  name: "Expand",
  data() {
    return {
      isExpand: false
    };
  },
  computed: {
    icon() {
      return this.isExpand ? "ios-arrow-up" : "ios-arrow-down";
    }
  },
  methods: {
    onExpand() {
      this.isExpand = !this.isExpand;
      this.$emit("onExpand", this.isExpand);
    }
  }
};
</script>