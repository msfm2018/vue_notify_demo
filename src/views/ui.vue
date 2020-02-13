// section父组件
<template>
  <div class="section">
    <ui_child :articles="articleList"></ui_child>
    <ui_child :msg="title"></ui_child>
  </div>
</template>

<script>
import ui_child from "@/components/ui_child.vue";
export default {
  components: { ui_child },
  data() {
    return {
      articleList: ["红楼梦111", "水浒", "西游记", "三国演义"],
      title: ["书名这里"],
    };
  }
};
</script>
