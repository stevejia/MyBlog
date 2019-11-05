import moment from "moment";
const utilMethod = {
  setTitle(title) {
    title = title ? title : "小迷妹的博客";
    window.document.title = title;
  },
  formatDate(date, format = "YYYY-MM-DD") {
    return moment(date).format(format);
  }
};

export let util = { ...utilMethod };
