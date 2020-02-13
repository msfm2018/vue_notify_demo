<template>
  <div>
    <ui3_a
            :name="name"
            :age="age"
            :gender="gender"
            :height="height"
            title="程序员成长指_&&___北"
    ></ui3_a>
  </div>
</template>
<script>
  import ui3_a from "@/components/ui3_a.vue"; // 导入A组件
  export default {
    components: { ui3_a },
    data() {
      return {
        name: "zhang",
        age: "18",
        gender: "女",
        height: "158"

      };
    }
  };
</script>
